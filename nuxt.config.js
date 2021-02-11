export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'lutheran-artwork-tracker',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/firebase.js'
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: "AIzaSyDGRucnGvAHk6cEKygBtzJj3dGyQd-ae10",
                    authDomain: "airtable-testing-e0b8c.firebaseapp.com",
                    databaseURL: "", // throws error without
                    projectId: "airtable-testing-e0b8c",
                    storageBucket: "airtable-testing-e0b8c.appspot.com",
                    messagingSenderId: "804306223232",
                    appId: "1:804306223232:web:0e87e604659a304967e665"
                },
                services: {
                    storage: true,
                    auth: true
                }
            }
        ]
    ],

    auth: {
        persistence: 'local', // default
        initialize: {
            onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
            onAuthStateChangedAction: 'onAuthStateChangedAction',
            subscribeManually: false
        },
        ssr: false, // default
        emulatorPort: 9099,
        emulatorHost: 'http://localhost',
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}