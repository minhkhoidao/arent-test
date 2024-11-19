import { cn } from '@/lib/utils/cn'
import { FC, ReactNode } from 'react'

type HexagonButtonButtonProps = {
    icon: ReactNode
    label: string
    className?: string
    onClick?: () => void
}

const HexagonButton: FC<HexagonButtonButtonProps> = ({ icon, label, className, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                'group relative flex flex-col items-center justify-center',
                'w-32 h-32',
                'text-white',
                'transition-transform duration-200',
                'hover:scale-105 active:scale-95',
                className
            )}
        >
            {/* Hexagon background with gradient */}
            <div className="absolute inset-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                        <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#FFCC21' }} />
                            <stop offset="100%" style={{ stopColor: '#FF963C' }} />
                        </linearGradient>
                        <linearGradient id="hexGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#FF963C' }} />
                            <stop offset="100%" style={{ stopColor: '#FFCC21' }} />
                        </linearGradient>
                    </defs>
                    <polygon
                        points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25"
                        fill="url(#hexGradient)"
                        style={{
                            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                        }}
                        className="transition-all duration-200 group-hover:fill-[url(#hexGradientHover)] group-active:filter-none"
                    />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
                <div className="w-fit h-fit transition-transform duration-200 group-hover:-translate-y-1 group-active:translate-y-0">
                    {icon}
                </div>
                <span className="text-lg font-medium transition-all duration-200 group-hover:font-bold group-active:font-medium">
                    {label}
                </span>
            </div>
        </button>
    )
}

export default HexagonButton