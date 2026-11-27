import VideoGuidePage from "../../components/VideoGuidePage";


export default function PelepasanPage() {
  return (
    <VideoGuidePage
      badge="PELEPASAN APD"
      title="Cara Melepas APD"
      description="Tonton video berikut untuk mengetahui urutan dan cara pelepasan APD yang benar agar terhindar dari kontaminasi."
      videoId="x64Yq3SdnCk"
      videoTitle="Video panduan pelepasan APD"
      prev={{ to: '/pemasangan-apd', label: 'Pemasangan APD' }}
    />
  )
}