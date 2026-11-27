import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="mx-auto max-w-lg py-20 text-center">
      <p className="text-sm font-semibold text-forest-700">404</p>
      <h1 className="mt-3 text-3xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-3 text-slate-600">Halaman yang kamu cari tidak ditemukan.</p>
      <Link to="/" className="mt-6 inline-flex rounded-lg bg-forest-700 px-4 py-2 text-sm font-semibold text-white hover:bg-forest-800">
        Kembali ke Home
      </Link>
    </div>
  )
}

export default NotFoundPage
