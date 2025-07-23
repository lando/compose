# DEPRECATED!

This Lando Plugin is now **DEPRECATED** and is no longer getting updates.

We recommend you check out the [Lando Service](https://docs.lando.dev/core/v3/services/lando.html).

# Compose Lando Plugin

This is the _official_ [Lando](https://lando.dev) plugin for the Compose service.

This service is a "catch all" that allows power users to specify custom services that are not currently one of Lando's [supported services](https://docs.lando.dev/config/services.html). You can easily add it to your Lando app by adding an entry to the [services](https://docs.lando.dev/config/services.html) top-level config in your [Landofile](https://docs.lando.dev/config).

Of course, once a user is running their Compose project with Lando they can take advantage of [all the other awesome development features](https://docs.lando.dev) Lando provides.

## Basic Usage

Add a `compose` service to your Landofile

```yaml
services:
  custom-service:
    type: compose
    app_mount: delegated
    services:
      image: drupal:8
      command: docker-php-entrypoint apache2-foreground
      ports:
        - '80'
    volumes:
      my-volume:
    networks:
      my-network:
```

For more info you should check out the [docs](https://docs.lando.dev/compose):

* [Configuration](https://docs.lando.dev/compose/config.html)
* [Examples](https://github.com/lando/compose/tree/main/examples)
* [Development](https://docs.lando.dev/compose/development.html)

## Changelog

We try to log all changes big and small in both [THE CHANGELOG](https://github.com/lando/compose/blob/main/CHANGELOG.md) and the [release notes](https://github.com/lando/compose/releases).


## Maintainers

* [@pirog](https://github.com/pirog)
* [@reynoldsalec](https://github.com/reynoldsalec)

## Contributors

<a href="https://github.com/lando/compose/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=lando/compose" />
</a>

Made with [contributors-img](https://contrib.rocks).

## Other Selected Resources

* [LICENSE](/LICENSE)
* [TERMS OF USE](https://docs.lando.dev/terms)
* [PRIVACY POLICY](https://docs.lando.dev/privacy)
* [CODE OF CONDUCT](https://docs.lando.dev/coc)

