import React, { FC, useState, useCallback, useMemo } from "react";
import { NavLink } from "react-router-dom";
import Typography from "@/components/typography";
import { cn } from "@/lib/utils/cn";
import { CloseIcon, HamburgerMenuIcon, LogoArent, NoteIcon, NoticeIcon, PriceIcon } from "@/lib/icons/icon";
import MenuDropdown from "@/components/menu";

type NavigationItem = {
    icon: React.ReactNode;
    label: string;
    path: string;
    noticeCount?: number;
};

type MenuOption = {
    label: string;
    href: string;
};

const NAVIGATION_ITEMS: NavigationItem[] = [
    {
        icon: <NoteIcon fontSize={26} />,
        label: "自分の記録",
        path: "/my-record",
    },
    {
        icon: <PriceIcon fontSize={26} />,
        label: "チャレンジ",
        path: "/coming-soon",
    },
    {
        icon: <NoticeIcon fontSize={26} />,
        label: "お知らせ",
        path: "/coming-soon",
        noticeCount: 1,
    },
];

const MENU_OPTIONS: MenuOption[] = [
    { label: "自分の記録", href: "/my-record" },
    { label: "体重グラフ", href: "/coming-soon" },
    { label: "目標", href: "/coming-soon" },
    { label: "選択中のコース", href: "/coming-soon" },
    { label: "コラム一覧", href: "/columns" },
    { label: "設定", href: "/coming-soon" },
];

// Separated into a reusable component
const NotificationBadge: FC<{ count: number }> = ({ count }) => (
    <span className="absolute -top-1 -right-1 w-[16px] h-[16px] bg-primary-400 rounded-full flex items-center justify-center">
        <Typography as="span" variant="small">
            {count}
        </Typography>
    </span>
);

const NavigationLink: FC<NavigationItem> = ({ icon, label, path, noticeCount }) => (
    <NavLink
        to={path}
        className={({ isActive }) =>
            cn(
                "flex items-center gap-2",
                "text-white hover:text-primary-400 transition-colors duration-200",
                isActive && "text-primary-400"
            )
        }
    >
        <span className="flex items-center justify-center relative">
            {icon}
            {noticeCount && <NotificationBadge count={noticeCount} />}
        </span>
        <Typography
            as="span"
            variant="body2"
            className={cn("lg:block hidden text-neutral-white", "hover:text-primary-400")}
        >
            {label}
        </Typography>
    </NavLink>
);

const Header: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleClose = useCallback(() => setIsMenuOpen(false), []);
    const handleToggle = useCallback(() => setIsMenuOpen(prev => !prev), []);

    const mobileMenuOptions = useMemo(() => [
        ...NAVIGATION_ITEMS.map((item) => ({
            label: item.label,
            href: item.path,
            icon: item.icon,
            noticeCount: item.noticeCount,
        })),
        ...MENU_OPTIONS,
    ], []);

    const menuItems = useMemo(() =>
        window.innerWidth >= 1024 ? MENU_OPTIONS : mobileMenuOptions,
        [mobileMenuOptions]
    );

    return (
        <header className="h-[64px] md:h-[84px] w-full bg-background-dark fixed top-0 left-0 z-50">
            <div className="w-[95%] md:w-[90%] lg:w-3/4 h-full m-auto flex justify-between items-center">
                <NavLink to="/" className="flex items-center">
                    <LogoArent className="h-12 w-28 md:h-16 md:w-36" />
                </NavLink>

                <nav className="flex items-center">
                    <div className="hidden lg:flex items-center gap-8 lg:gap-12 mr-8 lg:mr-16">
                        {NAVIGATION_ITEMS.map((item, index) => (
                            <NavigationLink key={index} {...item} />
                        ))}
                    </div>
                    <MenuDropdown
                        open={isMenuOpen}
                        onClose={handleClose}
                        items={menuItems}
                        className="w-full lg:w-[320px]"
                    >
                        {isMenuOpen ? (
                            <CloseIcon
                                fontSize={24}
                                className="text-neutral-white hover:text-primary-main transition-colors duration-200"
                                onClick={handleClose}
                            />
                        ) : (
                            <HamburgerMenuIcon
                                fontSize={24}
                                className="text-neutral-white hover:text-primary-main transition-colors duration-200"
                                onClick={handleToggle}
                            />
                        )}
                    </MenuDropdown>
                </nav>
            </div>
        </header>
    );
};

export default Header;