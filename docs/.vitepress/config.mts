import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  cleanUrls: true,
  metaChunk: true,
  lastUpdated: true,
  rewrites: {
    'en/:rest*': ':rest*'
  },
  sitemap: {
    hostname: 'https://token.fog.moe'
  },
  head: [['link', { rel: 'icon', href: '/icon.jpg' }]],
  title: "FOGMOE Token",
  description: "\$FOGMOE is a Solana blockchain token.",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/docs/', activeMatch: '/docs/'},
    ],
    sidebar: [
      {
        text: 'Documentation',
        items: [
          {text: 'Get Started', link: '/docs/' },
          {text: 'How can I get FOGMOE Token?', link: '/docs/get-fogmoe-token' },
        ]
      }
    ],
    footer: {
      copyright: 'Copyright © 2025 FOGMOE'
    }
  }
})
