const animate = require("tailwindcss-animate")
import defaultTheme from 'tailwindcss/defaultTheme';
const svgToDataUri = require('mini-svg-data-uri');
const colors = require('tailwindcss/colors');
const {
    default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');


/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    safelist: ["dark"],
    prefix: "",

    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.{ts,tsx,vue}",
    ],

    theme: {
        fontFamily: {
            sans: ['Inter', ...defaultTheme.fontFamily.sans],
            title: ['Poppins', ...defaultTheme.fontFamily.sans],
        },
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                xl: "calc(var(--radius) + 4px)",
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: {height: 0},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: 0},
                },
                "collapsible-down": {
                    from: {height: 0},
                    to: {height: 'var(--radix-collapsible-content-height)'},
                },
                "collapsible-up": {
                    from: {height: 'var(--radix-collapsible-content-height)'},
                    to: {height: 0},
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "collapsible-down": "collapsible-down 0.2s ease-in-out",
                "collapsible-up": "collapsible-up 0.2s ease-in-out",
            },
        },
    },
    plugins: [animate, addVariablesForColors,
        function ({matchUtilities, theme}) {
            matchUtilities(
                {
                    'bg-grid': (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`,
                    }),
                    'bg-grid-small': (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`,
                    }),
                    'bg-dot': (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
                        )}")`,
                    }),
                    'bg-dot-thick': (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
                        )}")`,
                    }),
                },
                {values: flattenColorPalette(theme('backgroundColor')), type: 'color'}
            );
        },],
}


function addVariablesForColors({addBase, theme}) {
    let allColors = flattenColorPalette(theme('colors'));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ':root': newVars,
    });
}
