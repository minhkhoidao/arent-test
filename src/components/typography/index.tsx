import { ReactNode } from 'react'
import { typography, TypographyType } from '@/lib/theme/typography'
import { cn } from '@/lib/utils/cn'

interface TypographyProps {
    variant?: TypographyType
    children: ReactNode
    className?: string
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

}

const Typography = ({ variant = 'body1', children, className = '', as = 'p', }: TypographyProps) => {
    const styles = typography[variant]
    const combinedClasses = cn(
        styles.desktop,
        styles.tablet,
        styles.mobile,
        className
    )
    const Component = as
    return <Component className={combinedClasses}>{children}</Component>
}
export default Typography