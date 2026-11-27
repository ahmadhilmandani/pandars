
import { Link } from 'react-router-dom'
import ApdCard from '../components/ApdCard'
import ApdUrgency from './Home/components/ApdUrgency'


import level1 from '../../../assets/level-1.png'
import level2 from '../../../assets/level-2.png'
import level3 from '../../../assets/level-3.png'

import { apdItems as ApdItems } from '../../../data/apdData'

export const ApdLevelItems = [
  {
    title: 'Level 1',
    bgColor: 'bg-primary-700',
    img: level1,
  },
  {
    title: 'Level 2',
    bgColor: 'bg-secondary-700',
    img: level2,
  },
  {
    title: 'Level 3',
    bgColor: 'bg-tertiary-700',
    img: level3,
  },
]

function HomePage() {
  return (
    <main className="space-y-20 sm:space-y-24">

      {/* Hero Section */}
      <section className="mx-auto max-w-5xl space-y-5 text-center">
        <span className="inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-800">
          PANDA RS
        </span>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
          Panduan APD Rumah Sakit
        </h1>

        <p className="mx-auto max-w-4xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          Alat Pelindung Diri (APD) adalah perlengkapan khusus yang digunakan
          tenaga kesehatan untuk melindungi diri dari paparan infeksi, bahan
          kimia, maupun risiko bahaya di lingkungan rumah sakit.
        </p>

        <ApdUrgency />
      </section>

      <section className="space-y-8">
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-900">
            Mengenal Perlengkapan
          </span>

          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl mt-6">
            Apa Saja Item APD?
          </h2>

          <p className="text-sm leading-7 text-slate-600 sm:text-base mt-3">
            APD terdiri dari berbagai perlengkapan pelindung yang memiliki
            fungsi masing-masing untuk membantu menjaga keselamatan tenaga
            kesehatan selama memberikan pelayanan.
          </p>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16">
          {ApdItems.map((item) => (
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


      <section className="relative overflow-hidden rounded-3xl bg-taupe-300 px-5 py-12  sm:px-10 sm:py-16">
        <div className="relative z-10 mx-auto max-w-3xl space-y-5 text-center">
          <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-taupe-800">
            PENTING UNTUK DIKETAHUI
          </span>

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-taupe-800 mt-3 mb-8">
            Tidak Semua APD Digunakan Bersamaan
          </h2>

          <p className="text-sm leading-7 text-taupe-800 sm:text-base sm:leading-8">
            Setiap item APD memiliki fungsi dan tingkat perlindungan yang
            berbeda. Penggunaannya tidak selalu harus bersamaan atau digunakan
            setiap saat. Jenis dan kelengkapan APD perlu disesuaikan dengan
            tingkat risiko paparan serta jenis tindakan atau pelayanan yang
            dilakukan.
          </p>

          <p className="text-sm leading-7 text-taupe-800 sm:text-base">
            Untuk mengetahui perlengkapan yang digunakan pada masing-masing
            tingkat perlindungan, pelajari pembagian APD berdasarkan level
            berikut.
          </p>

          <div className="pt-3">
            <Link
              to="/level-penggunaan"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-primary-50 sm:w-auto"
            >
              Pelajari Level Penggunaan APD
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-800/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-periwinkle-800/20 blur-3xl" />
      </section>

    </main>
  )
}

export default HomePage
