import { Link } from 'react-router-dom'

export default function VideoGuidePage({
  badge,
  title,
  description,
  videoId,
  videoTitle,
  prev,
  next,
}) {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero */}
      <section className="mx-auto max-w-5xl space-y-5 text-center">
        <span className="inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-800">
          {badge}
        </span>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
          {title}
        </h1>

        <p className="mx-auto max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          {description}
        </p>
      </section>

      {/* Video */}
      <section className="mx-auto w-full max-w-4xl space-y-4">
        <div className="overflow-hidden rounded-3xl border-4 border-white bg-slate-900 shadow-lg">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
              title={videoTitle}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <p className="text-center text-sm text-slate-500">
          Video tidak muncul?{' '}
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary-900 underline underline-offset-2 hover:text-primary-950"
          >
            Tonton di YouTube
          </a>
        </p>
      </section>

      {/* Navigasi */}
      <nav
        aria-label="Navigasi panduan"
        className="mx-auto flex max-w-4xl flex-col gap-3 sm:flex-row sm:justify-between"
      >
        {prev ? (
          <Link
            to={prev.to}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-primary-50 sm:w-auto"
          >
            <span aria-hidden="true">←</span>
            {prev.label}
          </Link>
        ) : (
          <span className="hidden sm:block" />
        )}

        {next && (
          <Link
            to={next.to}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-700 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-primary-600 sm:w-auto"
          >
            {next.label}
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </nav>
    </div>
  )
}