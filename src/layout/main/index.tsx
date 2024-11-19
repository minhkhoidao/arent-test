import { Outlet } from 'react-router-dom'
import Footer from '../footers'
import Header from '../headers'
import ScrollToTop from '@/containers/ScrollToTop'

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <ScrollToTop />
            <Header />
            <main className="flex-grow pt-[64px] md:pt-[84px]">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout