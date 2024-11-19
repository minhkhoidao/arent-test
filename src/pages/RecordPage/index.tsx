import { lazyLoadComponent } from '@/lib/utils/lazy'

const HomePage = lazyLoadComponent(() => import('./RecordPage'))

export default HomePage