export default {

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'REWMI',
        titleTemplate: '%s',
        htmlAttrs: {
            lang: 'zxx'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { 
                rel: 'icon', 
                type: 'image/x-icon', 
                href: '/favicon.png' 
            }
        ],
        script: [
            { 
                src: '/js/pace.min.js' 
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'assets/scss/app.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/vue-awesome-swiper.js',
        '~/plugins/vue-cool-lightbox.js',
        '~/plugins/vue2-google-maps.js',
        '~/plugins/vue-pagination.js',
        '~/plugins/vue-inline-svg.js',
        '~/plugins/observe-visibility.js',
        '~/plugins/vue-masonry-css.js',
        '~/plugins/goToTab.js',
        '~/plugins/api.js',
        { 
            src: '~/plugins/bootstrap.bundle.min.js', 
            mode: 'client'
        },
        { 
            src: "~/plugins/aos", 
            ssr: false 
        },
        { src: '@/plugins/vue-html2pdf', mode: 'client' }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/color-mode'
    ],

    styleResources: {
        scss: [
            '~/assets/scss/default/_variable.scss'
        ]
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/toast',
        '@nuxtjs/axios',
    ],
    axios: {
        baseURL: 'https://api-gec-citoyen.fly.dev/api/v1',
    },
    toast: {
        position: 'top-center',
        register: [ // Register custom toasts
          {
            name: 'my-error',
            message: 'Oops...Something went wrong',
            options: {
              type: 'error'
            }
          }
        ]
      },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extend (config, ctx) {},
        transpile: [/^vue2-google-maps($|\/)/]
    }
}
