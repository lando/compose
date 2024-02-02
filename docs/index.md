---
title: Compose Lando Plugin
description: If there isn't a service Lando provides out of the box use this to add any other Docker image using Docker Compose syntax.
next: ./config.html
---

::: danger DEPRECATED
This Lando Plugin is now **DEPRECATED** and is no longer getting updates.

We recommend you check out the [Lando Service](https://docs.lando.dev/core/v3/lando-service.html).
:::

# Compose

This service is a "catch all" that allows power users to specify custom services that are not currently one of Lando's [supported services](https://docs.lando.dev/core/v3/lando-service.html). You can easily add it to your Lando app by adding an entry to the [services](https://docs.lando.dev/core/v3/lando-service.html) top-level config in your [Landofile](https://docs.lando.dev/core/v3).

Technically speaking, this service is just a way for a user to define a service directly using the [Docker Compose V3](https://docs.docker.com/compose/compose-file/) file format.

**THIS MEANS THAT IT IS UP TO THE USER TO DEFINE A SERVICE CORRECTLY**.

This service is useful if you are:

1. Thinking about contributing your own custom Lando service and just want to prototype something
2. Using Docker Compose config from other projects
3. Need a service not currently provided by Lando itself

