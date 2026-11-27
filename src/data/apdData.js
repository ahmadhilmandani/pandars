import coverall from '../assets/coverall.png'
import faceShield from '../assets/face-shield.png'
import goggles from '../assets/goggles.png'
import grown from '../assets/grown.png'
import level1 from '../assets/level-1.png'
import level2 from '../assets/level-2.png'
import level3 from '../assets/level-3.png'
import n95Masker from '../assets/n95-masker.png'
import penutupKepala from '../assets/penutup-kepala.png'
import regulerMasker from '../assets/reguler-masker.png'
import sarungTangan from '../assets/sarung-tangan.png'
import sepatuBooth from '../assets/sepatu-booth.png'
// import bajuKerja from '../assets/baju-kerja.png' // kalau sudah punya stikernya

export const apdItems = [
  { title: 'Coverall', bgColor: 'bg-primary-700', paragraph: 'Pakaian pelindung yang menutupi sebagian besar tubuh untuk mengurangi risiko paparan kontaminan.', img: coverall },
  { title: 'Face Shield', bgColor: 'bg-periwinkle-700', paragraph: 'Pelindung wajah untuk mengurangi risiko percikan cairan mengenai wajah.', img: faceShield },
  { title: 'Goggles', bgColor: 'bg-starfruit-400', paragraph: 'Pelindung mata dari percikan cairan dan partikel yang berpotensi membahayakan.', img: goggles },
  { title: 'Gown', bgColor: 'bg-primary-600', paragraph: 'Baju pelindung untuk mengurangi risiko kontaminasi pada pakaian dan tubuh.', img: grown },
  { title: 'Masker N95', bgColor: 'bg-coral-600', paragraph: 'Masker respirator untuk menyaring partikel udara berukuran kecil.', img: n95Masker },
  { title: 'Penutup Kepala', bgColor: 'bg-primary-600', paragraph: 'Penutup kepala untuk melindungi rambut dari kontaminasi selama pelayanan.', img: penutupKepala },
  { title: 'Masker Reguler', bgColor: 'bg-starfruit-400', paragraph: 'Masker medis untuk membantu mengurangi penyebaran droplet.', img: regulerMasker },
  { title: 'Sarung Tangan', bgColor: 'bg-periwinkle-700', paragraph: 'Melindungi tangan dari kontak langsung dengan darah, cairan tubuh, dan kontaminan.', img: sarungTangan },
  { title: 'Sepatu Booth', bgColor: 'bg-starfruit-400', paragraph: 'Alas kaki pelindung untuk membantu melindungi kaki dari paparan kontaminan.', img: sepatuBooth },
  // Item baru (belum ada stiker -> img null, kartu tetap tampil tanpa gambar)
  { title: 'Baju Kerja', bgColor: 'bg-coral-600', paragraph: 'Pakaian kerja standar petugas sebagai lapisan dasar perlindungan.', img: null },
]

// `ref` = title di apdItems, `label` = nama yang tampil di kartu
export const apdLevels = [
  {
    id: 1,
    title: 'Level 1',
    subtitle: 'Perlindungan Dasar',
    description:
      'Digunakan untuk pelayanan dengan risiko paparan rendah, misalnya area administrasi atau kontak minimal dengan pasien.',
    bgColor: 'bg-primary-700',
    textColor: 'text-primary-950',
    img: level1,
    items: [
      { ref: 'Masker Reguler', label: 'Masker Bedah 3-Ply' },
      { ref: 'Sarung Tangan', label: 'Sarung Tangan Karet Sekali Pakai' },
      { ref: 'Baju Kerja', label: 'Baju Kerja' },
    ],
  },
  {
    id: 2,
    title: 'Level 2',
    subtitle: 'Perlindungan Menengah',
    description:
      'Digunakan saat kontak langsung dengan pasien atau ada risiko percikan cairan tubuh.',
    bgColor: 'bg-secondary-700',
    textColor: 'text-white',
    img: level2,
    note: 'Untuk pelindung mata, pilih salah satu: Goggles atau Face Shield.',
    items: [
      { ref: 'Masker Reguler', label: 'Masker Bedah' },
      { ref: 'Gown', label: 'Gown' },
      { ref: 'Sarung Tangan', label: 'Sarung Tangan Sekali Pakai' },
      { ref: 'Goggles', label: 'Goggles' },
      { ref: 'Face Shield', label: 'Face Shield' },
    ],
  },
  {
    id: 3,
    title: 'Level 3',
    subtitle: 'Perlindungan Maksimal',
    description:
      'Digunakan untuk tindakan berisiko tinggi, seperti prosedur yang menghasilkan aerosol atau penanganan kasus infeksius.',
    bgColor: 'bg-tertiary-700',
    textColor: 'text-white',
    img: level3,
    items: [
      { ref: 'Masker N95', label: 'Respirator N95' },
      { ref: 'Coverall', label: 'Coverall' },
      { ref: 'Goggles', label: 'Goggles' },
      { ref: 'Face Shield', label: 'Face Shield' },
      { ref: 'Sarung Tangan', label: 'Sarung Tangan' },
      { ref: 'Penutup Kepala', label: 'Penutup Kepala' },
      { ref: 'Sepatu Booth', label: 'Sepatu Boots' },
    ],
  },
]