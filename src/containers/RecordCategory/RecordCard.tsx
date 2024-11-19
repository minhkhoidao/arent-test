import Typography from '@/components/typography';
import { useScrollToView } from '@/lib/hooks/useScrollToView';
import { RecordCategory } from '@/lib/types/records';
import { FC } from 'react';

type RecordCategoryCardProps = RecordCategory;

export const RecordCard: FC<RecordCategoryCardProps> = ({
    title,
    subtitle,
    image,
    targetId
}) => {
    const scrollToSection = useScrollToView();

    return (
        <button
            onClick={() => scrollToSection(targetId)}
            className="group relative aspect-square w-full overflow-hidden bg-primary-300 transition-transform hover:scale-[1.02] p-5"
        >
            <img
                src={image}
                alt={title}
                className="inset-0 h-full w-full object-cover brightness-[0.3]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-[48px]">
                <Typography
                    as="h3"
                    variant="title"
                    className="font-normal text-primary-300"
                >
                    {title}
                </Typography>
                <Typography
                    as="span"
                    variant="caption"
                    className="mt-[11px] bg-primary-400 px-[22px] py-[3px] text-neutral-white"
                >
                    {subtitle}
                </Typography>
            </div>
        </button>
    );
}; 