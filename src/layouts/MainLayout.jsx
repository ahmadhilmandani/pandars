import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { apdLevels } from '../data/apdData'

const navLinkClass = ({ isActive }) =>
  `rounded-lg px-3 py-2 text-sm font-medium transition ${isActive
    ? 'bg-primary-50 text-primary-800'
    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
  }`

function LevelDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const { pathname } = useLocation()
  const isActive = pathname.startsWith('/level-penggunaan')

  // tutup saat pindah halaman
  useEffect(() => setOpen(false), [pathname])

  // tutup saat klik di luar
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${isActive
          ? 'bg-primary-50 text-primary-800'
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
      >
        Level Penggunaan
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`size-4 transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-60 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg sm:left-0 sm:right-auto"
        >
          {apdLevels.map((level) => (
            <NavLink
              key={level.id}
              to={`/level-penggunaan/${level.id}`}
              role="menuitem"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 transition ${isActive ? 'bg-primary-50' : 'hover:bg-slate-100'
                }`
              }
            >
              <span
                className={`size-3 shrink-0 rounded-full ${level.bgColor}`}
                aria-hidden="true"
              />
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-slate-900">
                  {level.title}
                </span>
                <span className="text-xs text-slate-500">{level.subtitle}</span>
              </span>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

function MainLayout() {
  return (
    <div className="relative min-h-screen">
      <div className="pattern-background" />

      <header className="relative z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-4">
          <NavLink to="/" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="grid size-8 place-items-center rounded-lg bg-primary-700 text-sm">
              {/* Logo SVG */}
            </span>
            PANDA RS
          </NavLink>

          <nav className="flex flex-wrap items-center gap-1">
            <NavLink to="/" end className={navLinkClass}>Home</NavLink>
            <LevelDropdown />
            <NavLink to="/counter-2" className={navLinkClass}>Pemasangan</NavLink>
            <NavLink to="/counter-3" className={navLinkClass}>Pelepasan</NavLink>
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-5 py-10">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout