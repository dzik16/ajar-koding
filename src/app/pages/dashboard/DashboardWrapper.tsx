import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_molekul/layout/core'
import { StatisticsWidget5 } from './components/StatisticsWidget5'
import { Aktivitas } from './components/Aktivitas'
import { TablesWidget10 } from './components/TablesWidget10'
import { ListsWidget1 } from './components/ListsWidget1'
import { useNavigate } from 'react-router-dom'
import { getProfileSiswa } from '../../api/Request/profile.siswa.api'
import { useEffect, useState } from 'react'
import { ProfileSiswaTypeResponse } from '../../interface/profile.siswa.interface'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import Lottie from 'lottie-react'
import animLoading from '../../../_molekul/assets/loading/animLoading.json'
import { isEvaluasi } from '../../api/Request/materi.siswa.api'
import { getDetailPeringkatSiswaByUID } from '../../api/Request/peringkat.siswa.api'

const DashboardPage = () => {
  const navigate = useNavigate()
  const [profileSiswa, setProfileSiswa] = useState<ProfileSiswaTypeResponse>()
  const auth = getAuth()
  const [loading, setLoading] = useState<boolean>(false)
  const [poin, setPoin] = useState<number>(0)

  useEffect(() => {
    // Cek apakah halaman sudah pernah di-reload sebelumnya dari local storage
    const hasReloaded = localStorage.getItem('hasReloaded');

    // Jika belum di-reload sebelumnya, maka lakukan reload halaman
    if (hasReloaded === "true") {
      window.location.reload();
      localStorage.setItem('hasReloaded', 'false'); // Simpan status reload ke local storage agar tidak me-reload lagi
    }
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, e => {
      handleGetProfile(e?.uid)
      handleGetPoin(e?.uid)
    })
  }, [])

  const handleGetProfile = async (uid: string | undefined) => {
    setLoading(true)
    try {
      if (uid) {
        const ress = await getProfileSiswa(uid)
        const output = Object.entries(ress)
        output.map(e => {
          //@ts-ignore
          setProfileSiswa(e[1])
        });
      }
      setLoading(false)
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }


  const handleGetPoin = async (uid: string | undefined) => {
    if (uid) {
      const getIdPoin = await getDetailPeringkatSiswaByUID(uid)
      const la = Object.entries(getIdPoin)
      setPoin(la[0][1].poin)
    }
  }


  return (
    <>
      {/* begin::Row */}

      {
        loading ? (
          <div className='d-flex'
            style={{ width: '100%', height: '100%', justifyContent: 'center', justifyItems: 'center' }}
          >
            <Lottie style={{ width: '55%', height: '55%' }} animationData={animLoading} />
          </div>
        ) : (
          <>
            {
              profileSiswa?.type.toLowerCase() === "siswa" ?
                <>
                  <div className='d-flex row mb-10'>
                    <span className='text-dark fw-bold mb-1 fs-1'>Hallo, {profileSiswa?.name}!</span>
                    <span className='text-gray-700 fs-4 fw-semibold d-block'>Selamat datang di Ajar Koding<br /> Tempat di Mana Bug Jadi Peliharaan dan Koding Jadi Komedi!</span>
                  </div>
                  <div className='row g-5 g-xl-8'>
                    <div className='col-xl-3'>
                      <StatisticsWidget5
                        className='card-xl-stretch mb-xl-8 shadow-sm'
                        svgIcon='call'
                        color='body-white'
                        iconColor='primary'
                        title={`${profileSiswa?.type.toLowerCase() === "siswa" ? 'Absensi' : 'Absensi Siswa'}`}
                        description={`${profileSiswa?.type.toLowerCase() === "siswa" ? 'Hadir : 1, Alfa : 0, Izin : 0' : ""}`}
                        titleColor='gray-900'
                        descriptionColor='gray-400'
                      />
                    </div>
                    <div className='col-xl-3'>
                      <StatisticsWidget5
                        className='card-xl-stretch mb-xl-8 shadow-sm'
                        svgIcon='award'
                        color='body-white'
                        iconColor='primary'
                        title='Poin kamu'
                        description={(poin / 10).toString()}
                        titleColor='gray-900'
                        descriptionColor='gray-400'
                      />
                    </div>
                    <div className='col-xl-3'
                      onClick={() => navigate('/materi')}
                    >
                      <StatisticsWidget5
                        className='card-xl-stretch mb-xl-8 shadow-sm'
                        svgIcon='book-open'
                        color='body-white'
                        iconColor='primary'
                        title='Materi'
                        description='Lihat Selengkapnya ->'
                        titleColor='gray-900'
                        descriptionColor='gray-400 text-hover-primary'
                      />
                    </div>
                    <div className='col-xl-3'
                      onClick={() => navigate('/evaluasi')}
                    >
                      <StatisticsWidget5
                        className='card-xl-stretch mb-xl-8 shadow-sm'
                        svgIcon='question'
                        color='body-white'
                        iconColor='primary'
                        title='Evaluasi'
                        description='Lihat Selengkapnya ->'
                        titleColor='gray-900'
                        descriptionColor='gray-400 text-hover-primary'
                      />
                    </div>
                  </div>
                  {/* end::Row */}

                  <div className='col-xl-12'>
                    <Aktivitas className='card-xl-stretch mb-5 mb-xl-8 shadow-sm' />
                  </div>


                  {/* begin::Row */}
                  {/* <div className='row g-5 g-xl-8'>
                    <div className='col-xl-7'>
                      <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8 shadow-sm' title={'Papan Peringkat 5 Teratas'} />
                    </div>
                    <div className='col-xl-5'>
                      <ListsWidget1 className='card-xl-stretch mb-xl-8 shadow-sm' />
                    </div>
                  </div> */}
                  {/* end::Row */}
                </>
                :
                <>
                  <div className='d-flex row mb-10'>
                    <span className='text-dark fw-bold mb-1 fs-1'>Hallo, {profileSiswa?.type.toLowerCase() === "siswa" ? `${profileSiswa?.name}` : `Pak ${profileSiswa?.name}`}!</span>
                    <span className='text-gray-700 fs-4 fw-semibold d-block'>Selamat datang di Ajar Koding<br /> Tempat di Mana Bug Jadi Peliharaan dan Koding Jadi Komedi!</span>
                  </div>
                  <div className='row g-5 g-xl-8'>
                    <div className='col-xl-4'
                      onClick={() => navigate('/absensi/siswa')}
                    >
                      <StatisticsWidget5
                        className='card-xl-stretch mb-xl-8 shadow-sm'
                        svgIcon='call'
                        color='body-white'
                        iconColor='primary'
                        title={`${profileSiswa?.type.toLowerCase() === "siswa" ? 'Absensi' : 'Absensi Siswa'}`}
                        description={`${profileSiswa?.type.toLowerCase() === "siswa" ? 'Hadir : 1, Alfa : 0, Izin : 0' : ""}`}
                        titleColor='gray-900'
                        descriptionColor='gray-400'
                      />
                    </div>
                    <div className='col-xl-4'
                      onClick={() => navigate('/materi')}
                    >
                      <StatisticsWidget5
                        className='card-xl-stretch mb-xl-8 shadow-sm'
                        svgIcon='book-open'
                        color='body-white'
                        iconColor='primary'
                        title='Materi'
                        description='Lihat Selengkapnya ->'
                        titleColor='gray-900'
                        descriptionColor='gray-400 text-hover-primary'
                      />
                    </div>
                    <div className='col-xl-4'
                      onClick={() => navigate('/evaluasi')}
                    >
                      <StatisticsWidget5
                        className='card-xl-stretch mb-xl-8 shadow-sm'
                        svgIcon='question'
                        color='body-white'
                        iconColor='primary'
                        title='Evaluasi'
                        description='Lihat Selengkapnya ->'
                        titleColor='gray-900'
                        descriptionColor='gray-400 text-hover-primary'
                      />
                    </div>
                  </div>
                  {/* end::Row */}

                  <div className='col-xl-12'>
                    <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8 shadow-sm' title={'Papan Peringkat Siswa'} />
                  </div>
                </>
            }
          </>
        )
      }

    </>
  )
}

const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
      <DashboardPage />
    </>
  )
}

export { DashboardWrapper }
