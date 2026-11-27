import VideoGuidePage from './PemasanganPage'

export default function PemasanganPage() {
  return (
    <VideoGuidePage
      badge="PEMASANGAN APD"
      title="Cara Memasang APD"
      description="Tonton video berikut untuk mengetahui urutan dan cara pemasangan APD yang benar sebelum melakukan pelayanan."
      videoId="5d9Kq7SLI0Q"
      videoTitle="Video panduan pemasangan APD"
      prev={{ to: '/level-penggunaan/3', label: 'Level Penggunaan' }}
      next={{ to: '/counter-3', label: 'Pelepasan APD' }}
    />
  )
}