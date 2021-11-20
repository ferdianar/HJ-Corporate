// Import Custom Theme Chakra UI
import customTheme from "./custom-theme.js"

export default {
    target: 'static',
    // Extends Custom Theme to Chakra UI
    chakra: {
        extendTheme: customTheme
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'HJ-Corporate',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/chakra
        '@chakra-ui/nuxt',
        // https://go.nuxtjs.dev/emotion
        '@nuxtjs/emotion',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        vendor: ["aos"]
    },
    plugins: [{
        src: "~plugins/aos",
        ssr: false
    }],
    css: ["aos/dist/aos.css"],
    buildDir: 'nuxt-dist'
}