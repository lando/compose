---
title: Compose Lando Plugin
description: If there isn't a service Lando provides out of the box use this to add any other Docker image using Docker Compose syntax.
next: ./config.html
---

# Compose

This service is a "catch all" that allows power users to specify custom services that are not currently one of Lando's [supported services](https://docs.lando.dev/config/services.html). You can easily add it to your Lando app by adding an entry to the [services](https://docs.lando.dev/config/services.html) top-level config in your [Landofile](https://docs.lando.dev/config).

Technically speaking, this service is just a way for a user to define a service directly using the [Docker Compose V3](https://docs.docker.com/compose/compose-file/) file format.

**THIS MEANS THAT IT IS UP TO THE USER TO DEFINE A SERVICE CORRECTLY**.

This service is useful if you are:

1. Thinking about contributing your own custom Lando service and just want to prototype something
2. Using Docker Compose config from other projects
3. Need a service not currently provided by Lando itself

## Custom Installation

This plugin is included with Lando by default. That means if you have Lando version `3.0.8` or higher then this plugin is already installed!

However if you would like to manually install the plugin, update it to the bleeding edge or install a particular version then use the below. Note that this installation method requires Lando `3.5.0+`.

:::: code-group
::: code-group-item DOCKER
```bash:no-line-numbers
# Ensure you have a global plugins directory
mkdir -p ~/.lando/plugins

# Install plugin
# NOTE: Modify the "yarn add @lando/compose" line to install a particular version eg
# yarn add @lando/compose@0.5.2
docker run --rm -it -v ${HOME}/.lando/plugins:/plugins -w /tmp node:14-alpine sh -c \
  "yarn init -y \
  && yarn add @lando/compose --production --flat --no-default-rc --no-lockfile --link-duplicates \
  && yarn install --production --cwd /tmp/node_modules/@lando/compose \
  && mkdir -p /plugins/@lando \
  && mv --force /tmp/node_modules/@lando/compose /plugins/@lando/compose"

# Rebuild the plugin cache
lando --clear
```
:::
::: code-group-item HYPERDRIVE
```bash:no-line-numbers
# @TODO
# @NOTE: This doesn't actaully work yet
hyperdrive install @lando/compose
```
::::

You should be able to verify the plugin is installed by running `lando config --path plugins` and checking for `@lando/compose`. This command will also show you _where_ the plugin is being loaded from.
