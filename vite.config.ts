import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({ 
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        "id" : "id",
        "name": 'Morpion',
        "short_name": 'Morpion',
        "start_url" : "/",
        "description": 'My Awesome TicTac game',
        "theme_color": '#ffffff',
        "icons": [
          {
            "src": 'pwa-192x192.png',
            "sizes": '192x192',
            "type": 'image/png'
          },
          {
            "src": 'pwa-512x512.png',
            "sizes": '512x512',
            "type": 'image/png'
          }
        ],
        "background_color" : "#ffffff",
        "scope" : "/",
        "lang": "fr",
        "orientation" : "portrait",
        "screenshots" : [],
        "categories" : ["entertainement", "games", "kids"],
      }
    })
  ],
})
