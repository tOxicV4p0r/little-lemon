const { extendTheme } = require("@chakra-ui/react");

const theme = extendTheme({
    components: {
        Heading: {
            variants: {
                'primary': {
                    fontFamily: 'Markazi Text',
                },
            }
        },
    },
    colors: {
        primary: {
            green: "#495E57",
            yellow: "#F4CE14",
        },
        secondary: {
            red: "#EE9972",
            orange: "#FBDABB",
        },
        highlight: {
            white: "#EDEFEE",
            black: "#333333",
        }
    },
    styles: {
        global: {
            // styles for the `body`
            h1: {
                fontFamily: 'Markazi Text',
                fontWeight: '700',
                fontSize: '64pt',
            },
            h2: {
                fontFamily: 'Markazi Text',
                fontWeight: '500',
                fontSize: '40pt',
            },
            h3: {
                fontFamily: 'Markazi Text',
                fontWeight: '500',
                fontSize: '32pt',
            },
            h4: {
                fontFamily: 'Markazi Text',
                fontWeight: '400',
                fontSize: '24pt',
            },
            p: {
                fontFamily: 'Karla',
                fontWeight: '300',
                fontSize: '16pt',
                lineHeight: '1.5',
                width: '65ch',
            },
        },
    },
})

export default theme;