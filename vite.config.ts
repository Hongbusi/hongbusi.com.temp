import { resolve } from 'path'
import { defineConfig } from 'vite'
import fs from 'fs-extra'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import Pages from 'vite-plugin-pages'
import matter from 'gray-matter'
import Markdown from 'vite-plugin-vue-markdown'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  resolve: {
    alias: [
      { find: '~/', replacement: `${resolve(__dirname, 'src')}/` }
    ]
  },

  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true
    }),

    Unocss(),

    Pages({
      extensions: ['vue', 'md'],
      pagesDir: 'pages',
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1))
        const md = fs.readFileSync(path, 'utf-8')
        const { data } = matter(md)
        route.meta = Object.assign(route.meta || {}, { frontmatter: data })
      }
    }),

    Markdown({
      // wrapperComponent: 'post'
    }),

    AutoImport({
      imports: [
        'vue',
        'pinia',
        'vue-router',
        '@vueuse/core',
        '@vueuse/head'
      ]
    }),

    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    })
  ]
})
