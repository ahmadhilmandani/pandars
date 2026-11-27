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

    <section className="relative pt-12 bg-blueGray-50">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-4/12 mx-auto px-4">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg ">
            <img
              src={heroSectionApd}
              alt="Ilustrasi APD di rumah sakit"
              className=""
            />
          </div>
        </div>
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-12">
            <h3 className="text-3xl text-left">Tujuan Utama APD</h3>
            <p className="mt-4 text-left">
              Penggunaan APD di RS memiliki tujuan utama yakni :
            </p>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-forest-700 bg-forest-200 mr-3">
                      1. </span>
                  </div>
                  <div>
                    <h4 className="text-forest-700">
                      Melindungi Petugas
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-berry-600 bg-berry-200 mr-3">
                      2. </span>
                  </div>
                  <div>
                    <h4 className="text-berry-600">
                      Melindungi Pasien
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-coral-700 bg-coral-200 mr-3">
                      3. </span>
                  </div>
                  <div>
                    <h4 className="text-coral-700">
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