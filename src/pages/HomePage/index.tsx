import { lazyLoadComponent } from '@/lib/utils/lazy'

const HomePage = lazyLoadComponent(() => import('./HomePage'))

export default HomePage