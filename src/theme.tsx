import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        brand: {
            50: "#e6f4ea",
            100: "#c0e9c3",
            200: "#98dd9b",
            300: "#6fd071",
            400: "#47c548",
            500: "#2fa133",
            600: "#1f7625",
            700: "#13581a",
            800: "#0a3a0e",
            900: "#011c03",
        },
        primary: {
            50: "#fffae6",
            100: "#fff2bf",
            200: "#ffe799",
            300: "#ffdd66",
            400: "#ffd33f",
            500: "#ffca19",
            600: "#e6b800",
            700: "#bf9500",
            800: "#997300",
            900: "#7d5c00",
        },
    },
});

export default theme;