import { lazyLoadComponent } from '../utils/lazy';

export const LogoArent = lazyLoadComponent(() => import('../../assets/icons/logo.svg?react'))
export const NoteIcon = lazyLoadComponent(() => import('../../assets/icons/note-icon.svg?react'))
export const PriceIcon = lazyLoadComponent(() => import('../../assets/icons/price-icon.svg?react'))
export const NoticeIcon = lazyLoadComponent(() => import('../../assets/icons/noti-icon.svg?react'))
export const HamburgerMenuIcon = lazyLoadComponent(() => import('../../assets/icons/hamburger-icon.svg?react'))
export const CloseIcon = lazyLoadComponent(() => import('../../assets/icons/close-icon.svg?react'))
export const CupIcon = lazyLoadComponent(() => import('../../assets/icons/cup-icon.svg?react'))
export const KnifeIcon = lazyLoadComponent(() => import('../../assets/icons/knife-icon.svg?react'))
export const ScrollToTopIcon = lazyLoadComponent(() => import('../../assets/icons/component-scroll.svg?react'))