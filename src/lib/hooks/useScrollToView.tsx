import { useCallback } from 'react';

export const useScrollToView = () => {
    return useCallback((targetId: string) => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, []);
};