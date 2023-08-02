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

const DashboardPage = () => {
  const navigate = useNavigate()
  const [profileSiswa, setProfileSiswa] = useState<ProfileSiswaTypeResponse>()
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, e => {
      handleGetProfile(e?.uid)
    })
  }, [])

  const handleGetProfile = async (uid: string | undefined) => {
    try {
      if (uid) {
        const ress = await getProfileSiswa(uid)
        const output = Object.entries(ress)
        output.map(e => {
          //@ts-ignore
          setProfileSiswa(e[1])
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {/* begin::Row */}
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
            title='Absensi'
            description='Hadir : 9, Alfa : 1, Izin : 2'
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
            title='Peringkat'
            description='Kamu Peringkat ke 10 dari 100 orang'
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
      <div className='row g-5 g-xl-8'>
        {/* begin::Col */}
        <div className='col-xl-7'>
          <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8 shadow-sm' />
        </div>
        {/* end::Col */}
        {/* begin::Col */}
        <div className='col-xl-5'>
          <ListsWidget1 className='card-xl-stretch mb-xl-8 shadow-sm' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}
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
