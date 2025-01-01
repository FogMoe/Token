import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FOGMOE Token",
  description: "$FOGMOE is a Solana blockchain token.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    footer: {
      copyright: 'Copyright © 2025 FOGMOE'
    }
  }
})
