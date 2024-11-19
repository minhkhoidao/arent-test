import { lazyLoadComponent } from '@/lib/utils/lazy'

const CommingSoonPage = lazyLoadComponent(() => import('./CommingSoonPage'))

export default CommingSoonPage