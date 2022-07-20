import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const blizzardTheme = createTheme({
    palette: {
        primary: { 
            main: '#17191E'
        },
        secondary: {
            main: '#009AE4'
        },
        error: {
            main: red.A400
        }
    },
    spacing: 8
})

