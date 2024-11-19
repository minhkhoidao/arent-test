import { lazyLoadComponent } from '@/lib/utils/lazy'

const ColumnPage = lazyLoadComponent(() => import('./ColumnPage'))

export default ColumnPage