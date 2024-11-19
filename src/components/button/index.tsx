import { cn } from '@/lib/utils/cn'

const BUTTON_VARIANTS = {
    default: 'bg-gradient-primary text-white-light hover:opacity-90',
    primary: 'bg-primary-400 text-white-light hover:bg-primary-500',
    secondary: 'bg-primary-300 text-white-light hover:opacity-90',
    white: 'bg-white-light text-content-dark border border-gray-400 hover:bg-gray-400/10'
} as const

const BUTTON_SIZES = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
} as const

type ButtonVariant = keyof typeof BUTTON_VARIANTS
type ButtonSize = keyof typeof BUTTON_SIZES

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
    size?: ButtonSize
    className?: string
    children: React.ReactNode
}

const Button = ({
    variant = 'default',
    size = 'md',
    className,
    children,
    disabled,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(
                'rounded-full font-medium transition-all duration-200',
                BUTTON_VARIANTS[variant],
                BUTTON_SIZES[size],
                disabled && 'opacity-50 cursor-not-allowed',
                className
            )}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
