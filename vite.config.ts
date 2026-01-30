import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
const reactRoutingNames: string[] = ['about', 'contact', 'projects'];

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    Sitemap({ hostname: 'https://stefanidis.dev', dynamicRoutes: reactRoutingNames, exclude: ['/404'] }),
  ],
  base: '/',
})
