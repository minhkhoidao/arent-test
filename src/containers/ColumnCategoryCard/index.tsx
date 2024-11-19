import Typography from '@/components/typography';
import { ColumnCategory } from '@/lib/types/column';
import { FC } from 'react';

type ColumnCategoryCardProps = ColumnCategory;

export const ColumnCategoryCard: FC<ColumnCategoryCardProps> = ({
    title,
    subtitle,
    backgroundColor,
}) => {
    return (
        <a
            href="/coming-soon"
            className="block transition-opacity hover:opacity-80"
        >
            <div
                className="aspect-video w-full flex flex-col items-center justify-center p-2 sm:p-4 py-3 sm:py-5 text-center"
                style={{ backgroundColor }}
            >
                <Typography
                    as="h4"
                    className="font-normal text-primary-300 uppercase"
                >
                    {title.split(' ').map((word, index) => (
                        <Typography
                            as="span"
                            variant='h4'
                            key={index}
                            className="block"
                        >
                            {word}
                        </Typography>
                    ))}
                </Typography>
                <div className="w-10 sm:w-14 h-px bg-white my-1 sm:my-2" />
                <Typography
                    as="p"
                    variant="body2"
                    className="text-neutral-white"
                >
                    {subtitle}
                </Typography>
            </div>
        </a>
    );
}; 