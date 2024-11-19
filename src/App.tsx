import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layout/main'
import HomePage from './pages/HomePage'
import RecordPage from './pages/RecordPage'
import ColumnPage from './pages/ColumnPage'
import CommingSoonPage from './pages/CommingSoonPage'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-record" element={<RecordPage />} />
            <Route path="/columns" element={<ColumnPage />} />
            <Route path="/coming-soon" element={<CommingSoonPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
