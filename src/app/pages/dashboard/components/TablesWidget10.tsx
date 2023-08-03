/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { KTIcon, toAbsoluteUrl } from '../../../../_molekul/helpers'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getAllPeringkatSiswa } from '../../../api/Request/peringkat.siswa.api'
import { CreatePeringkatType } from '../../../interface/peringkat.interface'
import { getProfileSiswa } from '../../../api/Request/profile.siswa.api'

type Props = {
  className: string
}

const TablesWidget10: React.FC<Props> = ({ className }) => {
  const [uuid, setUuid] = useState<string | undefined>("")
  const auth = getAuth()
  const [listPeringkat, setListPeringkat] = useState<CreatePeringkatType[]>([])
  const [imageProfile, setImageProfile] = useState<string>("")

  useEffect(() => {
    onAuthStateChanged(auth, e => {
      handleGetPeringkat()
      handleGetProfile(e?.uid)
      setUuid(e?.uid)
    })
  }, [uuid])

  const handleGetProfile = async (uid: string | undefined) => {
    if (uid) {
      const getIdPoin = await getProfileSiswa(uid)
      const la = Object.entries(getIdPoin)
      setImageProfile(la[0][1].imageProfile)
    }
  }


  const handleGetPeringkat = async () => {
    try {
      const res = await getAllPeringkatSiswa()
      const la = Object.entries(res)
      // console.log(la[0]);

      la.map((e, i) => {
        const ha = Object.entries(e[1])
        const body: CreatePeringkatType = {
          fullname: ha[0][1].fullname,
          email: ha[0][1].email,
          nomorAbsen: ha[0][1].nomorAbsen,
          poin: ha[0][1].poin
        }
        setListMateri(body)
      })
    } catch (error) {
      console.error(error);
    }
  }

  const setListMateri = (list: CreatePeringkatType) => {
    const found = listPeringkat.find((obj) => {
      return obj.fullname === list.fullname
    })
    if (!found) {
      listPeringkat.push(list)
    }
  }


  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Papan Peringkat 5 Teratas</span>
        </h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='min-w-150px'>Nama</th>
                <th className='min-w-140px'>Nomor Absen</th>
                <th className='min-w-120px'>Poin</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {
                listPeringkat && listPeringkat.map((e, i) => {
                  return (
                    <tr>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='symbol symbol-45px me-5'>
                            <img src={imageProfile} alt='' />
                          </div>
                          <div className='d-flex justify-content-start flex-column'>
                            <a href='#' className='text-dark fw-bold text-hover-primary fs-4'>
                              {e.fullname}
                            </a>
                            <span className='text-muted fw-semibold text-muted d-block fs-5'>
                              {e.email}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className='text-dark fw-bold text-hover-primary d-block fs-4'>
                          {e.nomorAbsen}
                        </span>
                      </td>
                      <td className='text-end'>
                        <div className='d-flex flex-column w-100 me-2'>
                          <div className='d-flex flex-stack mb-2'>
                            <span className='text-muted me-2 fs-4 fw-semibold'>{e.poin / 10}</span>
                          </div>
                          <div className='progress h-6px w-100'>
                            <div
                              className='progress-bar bg-danger'
                              role='progressbar'
                              style={{ width: '100%' }}
                            ></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )
                })
              }

            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export { TablesWidget10 }
