import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// 路径别名模块
import {
    resolve
} from 'path'

import Components from 'unplugin-vue-components/vite'
import {AntDesignVueResolver, ElementPlusResolver} from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
    // 基础路径配置
    base: './',
    // 插件
    plugins: [
        vue(),
        Components({
            resolvers: [AntDesignVueResolver(), ElementPlusResolver()]
        })
    ],
    // 路径别名
    alias: {
        "@": resolve(__dirname, 'src'),
        "styles": resolve(__dirname, 'src/styles'),
        "comps": resolve(__dirname, 'src/components'),
        "apis": resolve(__dirname, 'src/apis'),
        "views": resolve(__dirname, 'src/views'),
        "utils": resolve(__dirname, 'src/utils'),
        "routes": resolve(__dirname, 'src/routes'),
        "plugins": resolve(__dirname, 'src/plugins'),
    }
})
