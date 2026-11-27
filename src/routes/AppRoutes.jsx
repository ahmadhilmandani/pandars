import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../features/home/pages/HomePage'
import CounterPage from '../features/counter/pages/CounterPage'
import NotFoundPage from '../features/home/pages/NotFoundPage'
import LevelPage from '../features/home/pages/Level/LevelPage'
import PemasanganPage from '../features/pemasangan/PemasanganPage'
import PelepasanPage from '../features/pelepasan/PelepasanPage'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="level-penggunaan" element={<Navigate to="/level-penggunaan/1" replace />} />
        <Route path="level-penggunaan/:levelId" element={<LevelPage />} />
        <Route path="/pemasangan-apd" element={<PemasanganPage />} />
        <Route path="/pelepasan-apd" element={<PelepasanPage />} />
      </Route>
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  )
}

export default AppRoutes
