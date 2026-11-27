# React Feature Boilerplate

Starter project React + JavaScript dengan Tailwind CSS v4, React Router, Redux Toolkit, dan GSAP.

## Menjalankan project

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
npm run preview
```

## Teknologi

- React + Vite
- JavaScript (tanpa TypeScript)
- Tailwind CSS v4
- React Router DOM
- Redux Toolkit + React Redux
- GSAP (sudah ter-install, belum dipakai pada UI)

## Struktur folder

```text
src/
├── api/                 # HTTP client dan API per domain
├── assets/              # Gambar, icon, font
├── components/          # Komponen UI reusable
├── constants/           # Konstanta global
├── features/            # Modul berdasarkan fitur/domain
│   ├── home/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   └── index.js
│   └── counter/
│       ├── components/
│       ├── hooks/
│       ├── pages/
│       └── counterSlice.js
├── helpers/             # Utility/helper functions
├── hooks/               # Custom hooks global
├── layouts/             # Layout halaman
├── routes/              # Definisi routing
├── stores/              # Konfigurasi Redux store
├── styles/              # Global style (jika kelak dibutuhkan)
├── App.jsx
├── index.css
└── main.jsx
```

## Aturan penempatan file

- Komponen yang hanya dipakai satu fitur: simpan di `features/nama-fitur/components`.
- Komponen yang dipakai lintas fitur: simpan di `components`.
- State yang hanya relevan untuk satu fitur: simpan sebagai slice di folder fitur tersebut.
- State lintas fitur/aplikasi: simpan di `stores/slices`.
- Pemanggilan endpoint: simpan di `api` atau `features/nama-fitur/api` jika spesifik fitur.
- Halaman: simpan di `features/nama-fitur/pages`.
- Layout seperti dashboard/auth: simpan di `layouts`.

## Redux

Contoh Redux Toolkit tersedia pada fitur `counter`. Gunakan:

```jsx
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './counterSlice'
```

Tambahkan slice baru ke `src/stores/store.js` jika state tersebut perlu tersedia secara global.

## Routing

Daftar route berada di `src/routes/AppRoutes.jsx`. Tambahkan route baru di sana dan letakkan halaman di folder fitur terkait.

## GSAP

GSAP sudah menjadi dependency. Belum ada animasi yang diterapkan. Saat mulai belajar, import GSAP dari:

```js
import { gsap } from 'gsap'
```

Untuk React, pelajari `useEffect`/`useLayoutEffect` dan cleanup animasi. Setelah nyaman, pertimbangkan `@gsap/react` dan `useGSAP`.

## Custom colors

Palet tersedia sebagai utility Tailwind, misalnya:

```jsx
<div className="bg-forest-700 text-forest-50" />
<div className="bg-periwinkle-700" />
<div className="bg-berry-700" />
<div className="bg-coral-700" />
```

Nama palet:
- `forest`: `#2d7864`
- `periwinkle`: `#82a0ff`
- `berry`: `#a0325a`
- `coral`: `#f5693c`

Warna `700` dipertahankan persis sesuai hex sumber. Shade lain adalah hasil tint/shade dari warna tersebut.

## Catatan

Boilerplate ini sengaja dibuat sebagai fondasi, bukan framework internal yang kompleks. Hindari memindahkan semua state ke Redux; gunakan state lokal React untuk state UI sederhana seperti modal, tab, dan input form.
