export const typography = {
    h1: {
        desktop: 'font-bold text-4xl leading-tight',
        tablet: 'lg:text-3xl',
        mobile: 'text-2xl',
    },
    h2: {
        desktop: 'text-3xl',
        tablet: 'lg:text-2xl',
        mobile: 'text-xl',
    },
    h3: {
        desktop: 'text-2xl',
        tablet: 'lg:text-xl',
        mobile: 'text-lg',
    },
    h4: {
        desktop: 'text-xl',
        tablet: 'lg:text-lg',
        mobile: 'text-base',
    },
    body1: {
        desktop: 'text-lg',
        tablet: 'lg:text-base',
        mobile: 'text-base',
    },
    body2: {
        desktop: 'text-base font-light',
        tablet: 'lg:text-base font-light',
        mobile: 'text-sm font-light',
    },
    caption: {
        desktop: 'text-sm',
        tablet: 'lg:text-sm',
        mobile: 'text-xs',
    },
    small: {
        desktop: 'text-[10px]',
        tablet: 'lg:text-[10px]',
        mobile: 'text-[10px]',
    },
    title: {
        desktop: 'text-[25px]',
        tablet: 'lg:text-[25px]',
        mobile: 'text-[25px]',
    },
} as const

export type TypographyType = keyof typeof typography
