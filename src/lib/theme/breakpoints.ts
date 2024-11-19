export const breakpoints = {
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
    '2xl': '1920px',
} as const

export type BreakpointType = keyof typeof breakpoints

