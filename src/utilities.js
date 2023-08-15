import {
    purple,
    cyan,
    grey,
    green,
    indigo,
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
                    default: '#f5f5f5',
                    paper: '#fff',
                },
                action: {
                    active: grey[600],
                },
            }
            : {
                primary: grey,
                secondary: deepOrange, // Dark mode accent color
                divider: red[700],
                background: {
                    default:grey[900],
                    paper:grey[900],
                },
                text: {
                    primary: '#fff',
                    secondary: grey[500],
                },
                action: {
                    active: '#fff',
                },
            }),
    },
});