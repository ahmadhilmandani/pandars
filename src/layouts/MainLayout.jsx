import { useEffect, useRef, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { apdLevels } from '../data/apdData'

const navLinkClass = ({ isActive }) =>
  `rounded-lg px-3 py-2 text-sm font-medium transition ${isActive
    ? 'bg-primary-50 text-primary-800'
    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
  }`

function LevelDropdown({ mobile = false, onNavigate }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const { pathname } = useLocation()
  const isActive = pathname.startsWith('/level-penggunaan')

  useEffect(() => setOpen(false), [pathname])

  // Hanya diperlukan untuk dropdown desktop
  useEffect(() => {
    if (mobile) return

    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [mobile])

  return (
    <div ref={ref} className={mobile ? '' : 'relative'}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={`inline-flex w-full items-center justify-between gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${isActive
            ? 'bg-primary-50 text-primary-800'
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
      >
        <span>Level Penggunaan</span>

        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`size-4 transition-transform ${open ? 'rotate-180' : ''
            }`}
          aria-hidden="true"
        >
          <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className={
            mobile
              ? 'mt-1 space-y-1 pl-3'
              : 'absolute left-0 top-full z-50 mt-2 w-60 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg'
          }
        >
          {apdLevels.map((level) => (
            <NavLink
              key={level.id}
              to={`/level-penggunaan/${level.id}`}
              role="menuitem"
              onClick={onNavigate}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 transition ${isActive
                  ? 'bg-primary-50'
                  : 'hover:bg-slate-100'
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

                <span className="text-xs text-slate-500">
                  {level.subtitle}
                </span>
              </span>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

function MainLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { pathname } = useLocation()

  // Tutup menu ketika pindah halaman
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="relative min-h-screen">
      <div className="pattern-background" />

      <header className="relative z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex min-h-[72px] items-center justify-between">

            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center gap-2 font-bold tracking-tight"
            >
              <span className="grid size-8 place-items-center rounded-lg bg-primary-700 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="65%" fill="#000000" viewBox="0 0 256 256"><path d="M228,148.4V136a100.41,100.41,0,0,0-64-93.3V40a20,20,0,0,0-20-20H112A20,20,0,0,0,92,40v2.7A100.41,100.41,0,0,0,28,136v12.4A20,20,0,0,0,12,168v24a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V168A20,20,0,0,0,228,148.4ZM204,136v12H164V69.07A76.35,76.35,0,0,1,204,136ZM140,44V148H116V44ZM92,69.07V148H52V136A76.35,76.35,0,0,1,92,69.07ZM220,188H36V172H220Z"></path></svg>
              </span>

              PANDA RS
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 md:flex">
              <NavLink
                to="/"
                end
                className={navLinkClass}
              >
                Home
              </NavLink>

              <LevelDropdown />

              <NavLink
                to="/pemasangan-apd"
                className={navLinkClass}
              >
                Pemasangan
              </NavLink>

              <NavLink
                to="/pelepasan-apd"
                className={navLinkClass}
              >
                Pelepasan
              </NavLink>
            </nav>

            {/* Mobile Hamburger */}
            <button
              type="button"
              aria-label={
                mobileMenuOpen
                  ? 'Tutup menu navigasi'
                  : 'Buka menu navigasi'
              }
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex size-10 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 md:hidden"
            >
              {mobileMenuOpen ? (
                // X
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    d="M6 6l12 12M18 6L6 18"
                  />
                </svg>
              ) : (
                // Hamburger
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="border-t border-slate-200/70 py-3 md:hidden">
              <div className="flex flex-col gap-1">
                <NavLink
                  to="/"
                  end
                  onClick={closeMobileMenu}
                  className={navLinkClass}
                >
                  Home
                </NavLink>

                <LevelDropdown
                  mobile
                  onNavigate={closeMobileMenu}
                />

                <NavLink
                  to="/pemasangan-apd"
                  onClick={closeMobileMenu}
                  className={navLinkClass}
                >
                  Pemasangan
                </NavLink>

                <NavLink
                  to="/pelepasan-apd"
                  onClick={closeMobileMenu}
                  className={navLinkClass}
                >
                  Pelepasan
                </NavLink>
              </div>
            </nav>
          )}
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-5 py-10">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout