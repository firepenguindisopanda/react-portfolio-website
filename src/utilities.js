import {
    cyan,
    grey,
    red,
    amber, // Added for light mode accent color
    deepOrange, // Added for dark mode accent color
} from '@mui/material/colors';

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: cyan,
                secondary: amber, // Light mode accent color
                divider: cyan[200],
                text: {
                    primary: grey[900],
                    secondary: grey[800],
                },
                background: {
                    default: '#f6f6f6', // Default light background color
                    paper: '#f0f0f0',   // Light paper background color
                },
                action: {
                    active: grey[600],
                },
                typography: {
                    // Typography styles for dark mode
                    h1: {
                        fontFamily: 'Fira Sans, sans-serif'
                    },
                },
            }
            : {
                primary: grey,
                secondary: deepOrange, // Dark mode accent color
                divider: red[700],
                background: {
                    default: grey[900],
                    paper: grey[900],
                },
                text: {
                    primary: '#fff',
                    secondary: grey[500],
                },
                action: {
                    active: '#fff',
                },
                typography: {
                    // Typography styles for dark mode
                    h1: {
                        fontFamily: 'Croissant One, cursive',
                    },
                },
            }),
    },
});