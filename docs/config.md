---
title: Configuration
description: Learn how to configure the Lando Compose service.
---

# Configuration

Unlike other services, `compose` does not require a `version`, instead it allows you to directly configure Docker Compose's top-level `volumes`, `networks`, and `services` config directly.

::: tip We highly recommend you check the Docker Compose docs!
`services`, `volumes` and `networks` below come directly from Docker Compose so we *highly recommend* you check out their [docs](https://docs.docker.com/compose/compose-file/).
:::

```yaml
services:
  custom-service:
    type: compose
    app_mount: delegated
    services:
      image: drupal:8
      # Required. See Below
      command: docker-php-entrypoint apache2-foreground
      ports:
        - '80'
    volumes:
      my-volume:
    networks:
      my-network:
```

## Setting the app mount

Many Docker images will put code in `/app`. This directly conflicts with Lando's default codebase mount point. If you are running into a problem because of this collision, we recommend you [disable](https://docs.lando.dev/core/v3/services/lando.html#app-mount) the `app_mount` by setting it to `false` or `disabled`.

This will prevent Lando from mounting your codebase to `/app` so the Docker image can use its own code at `/app`.

```yaml
services:
  pghero:
    type: compose
    app_mount: false
    services:
      image: ankane/pghero
      command: puma -C config/puma.rb
```


## Setting the command

Note that while `compose` services also get the same Lando *secret sauce*, there is a notable difference. By default, Lando will hijack the Docker containers `entrypoint`. This means if your custom container sets its own entrypoint, you will need to remove that entrypoint and set it as the first argument in the `command`.

```yaml
services:
  custom-service:
    type: compose
    app_mount: delegated
    services:
      image: drupal:8
      # Required. See Below
      command: docker-php-entrypoint apache2-foreground
      ports:
        - '80'
    volumes:
      my-volume:
    networks:
      my-network:
```

In the example above, `docker-php-entrypoint` is the default `entrypoint` for the `drupal:8` image but we have moved it so that it is the first argument of `command`. This both allows the container to run as expected and allows Lando to do its thing.

## Choosing the user

Many non-Lando containers do not run as the `root` user by default. This is OK but comes with a few caveats. The most relevant are that Lando will not be able to execute its normal boot up steps which:

* Map `host:container` user permissions
* Generate a certificate for the service
* Load user and lando managed SSH keys

Also note that containers that do not have `bash` installed, like some `alpine` ones, will similarly not be able to load up SSH keys.

These factors _may_ or _may not_ be relevant depending on what you are doing so they are here just as a FYI.

If you are using a container that **cannot** run as `root` but still want that Lando magic you can try something like below.

```yaml
services:
  custom-service:
    type: compose
    services:
      user: root
      image: drupal:8
      # Required. See Below
      command: docker-php-entrypoint apache2-foreground
      ports:
        - '80'
      environment:
        LANDO_DROP_USER: otheruser
    volumes:
      my-volume:
    networks:
      my-network:
```

The relevant pieces here are setting `user: root` and then the environment variable `LANDO_DROP_USER` to whatever user the container is suppose to run as.

In this example the container will boot as `root` do the Lando things it needs to do and then run `docker-php-entrypoint apache2-foreground` as `otheruser`.
