module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            mulish: ['Mulish', 'sans-serif']
        },
        colors: {
            gray: {
                light: '#FBFDFF',
                dark: '#6E6E6E'
            },
            rederror: '#F56565',
            lutheran: '#414042',
            white: '#FFFFFF',
            babyblue: {
                light: '#4299E1'
            }
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            'primary': '#EDF2F7',
            'secondary': '#FFFFFF',
            'danger': '#FFFFFF',
        }),
        extend: {
            spacing: {
                '68': '17rem',
                '72': '18rem',
                '76': '19rem',
                '80': '20rem',
                '84': '21rem',
                '88': '22rem',
                '92': '23rem',
                '96': '24rem',
                '100': '25rem',
            },
            width: {
                'login': '24rem',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}