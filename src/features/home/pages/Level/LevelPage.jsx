import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { apdItems, apdLevels } from '../../../../data/apdData'
import ApdCard from '../../components/ApdCard'


function LevelPage() {
  const { levelId } = useParams()
  const index = apdLevels.findIndex((l) => String(l.id) === levelId)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [levelId])

  if (index === -1) return <Navigate to="/level-penggunaan/1" replace />

  const level = apdLevels[index]
  const prev = apdLevels[index - 1]
  const next = apdLevels[index + 1]

  const cards = level.items.map((item) => {
    const base = apdItems.find((a) => a.title === item.ref)
    return { ...base, title: item.label }
  })

  return (
    <div className="space-y-20 sm:space-y-24">
      {/* Hero */}
      <section className="mx-auto max-w-5xl space-y-5 text-center">
        <span className="uppercase tracking-wider inline-flex rounded-full bg-primary-100 px-4 py-1 text-xs font-semibold text-primary-900">
          LEVEL PENGGUNAAN APD
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
          {level.title}: {level.subtitle}
        </h1>
        <p className="mx-auto max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          {level.description}
        </p>
      </section>

      {/* Gambar + ringkasan item */}
      <section className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-2">
        <div className="mx-auto w-full max-w-xs">
          <div
            className={`flex aspect-[3/4] items-end justify-center overflow-hidden rounded-3xl border-4 border-white shadow-lg ${level.bgColor}`}
          >
            <img
              src={level.img}
              alt={`Petugas memakai APD ${level.title}`}
              className="h-full w-full object-contain p-4"
            />
          </div>
        </div>

        <div className="space-y-5 text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Perlengkapan {level.title}
          </h2>
          <ol className="space-y-3">
            {level.items.map((item, i) => (
              <li
                key={item.label}
                className="flex items-center gap-3 md:justify-start"
              >
                <span
                  className={`grid size-7 shrink-0 place-items-center rounded-full text-xs font-bold ${level.bgColor} ${level.textColor}`}
                >
                  {i + 1}
                </span>
                <span className="text-left font-semibold text-slate-800">
                  {item.label}
                </span>
              </li>
            ))}
          </ol>
          {level.note && (
            <p className="rounded-xl bg-white/70 px-4 py-3 text-sm text-slate-600">
              {level.note}
            </p>
          )}
        </div>
      </section>

      {/* Kartu item */}
      <section className="space-y-8">
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <span className="uppercase tracking-wider inline-flex rounded-full bg-primary-100 px-4 py-1 text-xs font-semibold text-primary-900">
            Item yang Digunakan
          </span>
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Item APD {level.title}
          </h2>
        </div>

        <div className="mt-16 flex gap-5 flex-wrap justify-center lg:justify-start ">
          {cards.map((item) => (
            <ApdCard
              key={item.title}
              title={item.title}
              bgColor={item.bgColor}
              paragraph={item.paragraph}
              img={item.img}
            />
          ))}
        </div>
      </section>

      {/* Prev / Next */}
      <nav
        aria-label="Navigasi level"
        className="mx-auto flex max-w-3xl flex-col gap-3 sm:flex-row sm:justify-between"
      >
        {prev ? (
          <Link
            to={`/level-penggunaan/${prev.id}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-primary-50 sm:w-auto"
          >
            <span aria-hidden="true">←</span>
            {prev.title}
          </Link>
        ) : (
          <span className="hidden sm:block" />
        )}

        {next ? (
          <Link
            to={`/level-penggunaan/${next.id}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-700 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-primary-600 sm:w-auto"
          >
            {next.title}
            <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <Link
            to="/pemasangan-apd"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-700 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-primary-600 sm:w-auto"
          >
            Lanjut ke Pemasangan
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </nav>
    </div>
  )
}

export default LevelPage