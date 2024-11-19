export const colors = {
    primary: {
        light: '#FCD34D',
        main: '#FB923C',
        dark: '#F97316',
    },
    secondary: {
        light: '#A5F3FC',
        main: '#86EFAC',
        dark: '#4ADE80',
    },
    neutral: {
        white: '#FFFFFF',
        light: '#F3F4F6',
        main: '#9CA3AF',
        dark: '#404040',
        darker: '#1F2937',
        menu: '#777777',
        menuHover: '#666666',
    },
    background: {
        default: '#FFFFFF',
        paper: '#F9FAFB',
        dark: '#2E2E2E',
    },
} as const

export type ColorType = keyof typeof colors
