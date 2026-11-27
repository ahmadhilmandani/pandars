import ApdUrgencyCard from './ApdUrgencyCard'

import heroSectionApd from "../../../../../assets/hero-section-apd.png"

const ApdItems = [
  {
    title: 'Melindungi Petugas',
    paragraph: 'Mengurangi risiko paparan terhadap bahaya selama bekerja.'
  },
  {
    title: 'Melindungi Pasien',
    paragraph: 'Membantu mencegah penularan infeksi selama pelayanan.'
  },
  {
    title: 'Mendukung Keselamatan',
    paragraph: 'Lingkungan lebih aman karena ada upaya pencegahan dan pengendalian infeksi.'
  }
]

function ApdUrgency() {
  return (

    <section class="relative pt-12 bg-blueGray-50">
      <div class="items-center flex flex-wrap">
        <div className="w-full md:w-4/12 mx-auto px-4">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg ">
            <img
              src={heroSectionApd}
              alt="Ilustrasi APD di rumah sakit"
              className=""
            />
          </div>
        </div>
        <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div class="md:pr-12">
            <h3 class="text-3xl text-left">Tujuan Utama APD</h3>
            <p class="mt-4 text-left">
              Penggunaan APD di RS memiliki tujuan utama yakni :
            </p>
            <ul class="list-none mt-6">
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-forest-700 bg-forest-200 mr-3">
                      1. </span>
                  </div>
                  <div>
                    <h4 class="text-forest-700">
                      Melindungi Petugas
                    </h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-berry-600 bg-berry-200 mr-3">
                      2. </span>
                  </div>
                  <div>
                    <h4 class="text-berry-600">
                      Melindungi Pasien
                    </h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-coral-700 bg-coral-200 mr-3">
                      3. </span>
                  </div>
                  <div>
                    <h4 class="text-coral-700">
                      Mendukung Keselamatan
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApdUrgency