import Typography from '@/components/typography'
import { cn } from '@/lib/utils/cn'
import { FC } from 'react'

const FOOTER_LINKS = [
    { label: '会員登録', href: '#' },
    { label: '運営会社', href: '#' },
    { label: '利用規約', href: '#' },
    { label: '個人情報の取扱について', href: '#' },
    { label: '特定商取引法に基づく表記', href: '#' },
    { label: 'お問い合わせ', href: '#' }
]

type FooterLinkProps = {
    label: string
    href: string
}

const FooterLink: FC<FooterLinkProps> = ({ label, href }) => {
    return (
        <a
            href={href}
            className={cn(
                'mr-10 last:mr-0',
                'hover:text-primary-main transition-colors duration-200',
                'focus:outline-none focus:text-primary-main'
            )}
        >
            <Typography
                as="span"
                variant="body2"
                className='text-neutral-white'
            >
                {label}
            </Typography>
        </a>
    )
}

const Footer: FC = () => {
    return (
        <footer className="h-32 bg-background-dark mt-10">
            <div className={cn(
                'h-full m-auto',
                'w-3/4 md:w-5/6 lg:w-[960px]',
                'flex items-center flex-wrap'
            )}>
                {FOOTER_LINKS.map((link) => (
                    <FooterLink
                        key={link.label}
                        label={link.label}
                        href={link.href}
                    />
                ))}
            </div>
        </footer>
    )
}

export default Footer 