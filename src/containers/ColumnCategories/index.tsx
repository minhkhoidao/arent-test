import { FC } from 'react';
import { ColumnCategoryCard } from '../ColumnCategoryCard';
import { useColumnCategories } from './useColumnCategories';

const ColumnCategories: FC = () => {
    const { categories } = useColumnCategories();
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {categories.map((category) => (
                <ColumnCategoryCard key={category.id} {...category} />
            ))}
        </div>
    )
}

export default ColumnCategories