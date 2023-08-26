import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateProfileSiswaType } from '../../../interface/profile.siswa.interface'
import { getAllSiswa, getProfileSiswa } from '../../../api/Request/profile.siswa.api'
import { toAbsoluteUrl } from '../../../../_molekul/helpers'

const HasilSiswa = () => {
  const navigate = useNavigate()
  const auth = getAuth()
  const [uuid, setUuid] = useState<string>()
  const [profileSiswa, setProfileSiswa] = useState<CreateProfileSiswaType>()
  const [loading, setLoading] = useState<boolean>(false)
  const [listPeringkat, setListPeringkat] = useState<CreateProfileSiswaType[]>([])

  useEffect(() => {
    onAuthStateChanged(auth, e => {
      setUuid(e?.uid)
      handleGetProfile(e?.uid)
    })
  }, [uuid])

  const handleGetProfile = async (uid: string | undefined) => {
    setLoading(true)
    try {
      if (uid) {
        const resGetPertanyaan = await getProfileSiswa(uid)
        const output = Object.entries(resGetPertanyaan)
        if (output[0][1].type.toLowerCase() === "siswa") {
          output.map(e => {
            // @ts-ignore
            setProfileSiswa(e[1])
          });
          setLoading(false)
        } else {
          handleGetAllProfile()
        }
      }

    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }


  const handleGetAllProfile = async () => {
    setLoading(true)
    try {
      const res = await getAllSiswa()
      if (res) {
        const la = Object.entries(res)
        la.map((e, i) => {
          const ha = Object.entries(e[1])
          const body: CreateProfileSiswaType = {
            name: ha[0][1].name,
            nomor_absen: ha[0][1].nomor_absen,
            type: ha[0][1].type,
            kelompok: ha[0][1].kelompok,
            email: ha[0][1].email,
            imageProfile: ha[0][1].imageProfile
          }
          setListMateri(body)
        })
        setLoading(false)
      }

    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }

  const setListMateri = (list: CreateProfileSiswaType) => {
    const found = listPeringkat.find((obj) => {
      return obj.name === list.name
    })
    if (!found) {
      listPeringkat.push(list)
    }
  }

  return (
    <>
      <div className='hover-overlay mb-10 mt-5' style={{ cursor: 'pointer' }} onClick={() => navigate(-1)}>
        <img
          alt='Logo'
          src={toAbsoluteUrl('/media/icons/duotune/general/ic_prev_black.svg')}
          className='logo-default h-25px mb-2'
        />
        <span className='text-gray-900 text-hover-primary' style={{ fontSize: '16px', fontWeight: 'bold' }}>Kembali</span>
      </div>
      <div className='card-body'>
        <div className={`card card-xxl-stretch mb-5 mb-xl-8 shadow-sm p-8`}>
          <div className='table-responsive'>
            <table className='table table-row-dashed table-row-gray-300 align-middle gs-0'>

              <thead>
                <tr className='fw-bold text-muted'>
                  <th className='min-w-100px'>Nama</th>
                  <th className='min-w-100px'>Nomor Absen</th>
                  <th className='p-0 min-w-50px'>Status</th>
                </tr>
              </thead>

              <tbody>
                {
                  listPeringkat && listPeringkat.map((e, i) => {
                    return (
                      <tr>
                        <td key={i}>
                          <div className='d-flex align-items-center'
                            // onClick={() => navigate('/evaluasi/file', { state: { noAbsen: e.nomor_absen.toString() } })}
                            style={{ cursor: 'pointer' }}
                          >
                            <div className='symbol symbol-45px me-5'>
                              <img src={e.imageProfile} alt='profile' />
                            </div>
                            <div className='d-flex justify-content-start flex-column'>
                              <span className='text-dark fw-bold fs-4 text-hover-primary'>
                                {e.name}
                              </span>
                              <span className='text-muted fw-semibold text-muted d-block fs-5'>
                                {e.email}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className='text-dark fw-bold d-block fs-4'>
                            {e.nomor_absen}
                          </span>
                        </td>
                        <td>
                          <span className='text-dark fw-bold d-block fs-4'>
                            <span className='badge badge-light-success'>Selesai</span>
                          </span>
                        </td>
                      </tr>
                    )
                  })
                }

              </tbody>

            </table>

          </div>
        </div>
      </div>
    </>

  )
}

export default HasilSiswa