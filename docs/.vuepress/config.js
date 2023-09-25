import {defineUserConfig} from '@vuepress/cli';
import {defaultThemePlus} from '@lando/vuepress-theme-default-plus';

export default defineUserConfig({
  lang: 'en-US',
  title: 'Lando',
  description: 'Lando Compose Plugin Documentation',
  base: '/compose/',
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
    ['link', {rel: 'icon', href: '/compose/favicon.ico', size: 'any'}],
    ['link', {rel: 'icon', href: '/compose/favicon.svg', type: 'image/svg+xml'}],
    ['link', {rel: 'preconnect', href: '//fonts.googleapis.com'}],
    ['link', {rel: 'preconnect', href: '//fonts.gstatic.com', crossorigin: true}],
    ['link', {rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Lexend:wght@500&display=swap'}],
  ],
  theme: defaultThemePlus({
    alert: {
      content: 'DEPRECATED in favor of <a href="https://docs.lando.dev/core/v3/lando-service.html">this</a>.',
      scheme: 'danger',
      closeable: true,
    },
    landoDocs: true,
    logo: '/images/icon.svg',
    docsDir: 'docs',
    docsBranch: 'main',
    repo: 'lando/compose',
    sidebarHeader: {
      enabled: true,
      title: 'Compose Plugin',
      icon: '/images/composeicon.png',
    },
    sidebar: [
      {
        text: 'Getting Started',
        link: '/index.html',
      },
      '/config.html',
      '/support.html',
      {text: 'Examples', link: 'https://github.com/lando/compose/tree/main/examples'},
      {text: 'Release Notes', link: 'https://github.com/lando/compose/releases'},
      '/development.html',
    ],
  }),
});
