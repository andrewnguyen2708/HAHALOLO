import { createTheme } from "@mui/material/styles";

const mainTheme = createTheme({
    palette: {
        primary: {
            main: '#FC5B62',
        },
        secondary: {
            main: '#0054A6',
        },
        // text: {
        //     primary: '#555'
        // },
        // error: '#FFC107',
    },
    typography: {
        fontFamily: "'Poppins', Helvetica, sans-serif"
    }
});

export default mainTheme;