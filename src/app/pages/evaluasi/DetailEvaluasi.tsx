import React, { useEffect, useState } from 'react'
import { Soal } from './components/Soal'
import { Footer } from './components/Footer'
import { usePagination } from '../materi/context/materiProvider'
import { DataMateri, soalPretest } from '../../interface/evaluasi/pretest.interface'
import { useLocation } from 'react-router-dom'
import { soalPosttest } from '../../interface/evaluasi/posttest.interface'
import { soalLogic } from '../../interface/evaluasi/logical.interface'
import { penilaianMedia } from '../../interface/evaluasi/media.interface'

const DetailEvaluasi = () => {
  const [materi, setMateri] = useState<DataMateri[]>(soalPretest)
  const page = usePagination()
  const [materiParent, setMateriParent] = useState<string>("")
  // @ts-ignore
  const location = useLocation<data>()

  useEffect(() => {
    // @ts-ignore
    setMateriParent(location.state.materiParent)
    if (materiParent) {
      if (materiParent === "pretest") {
        setMateri(soalPretest)
      } else if (materiParent === "posttest") {
        setMateri(soalPosttest)
      } else if (materiParent === "preLogic") {
        setMateri(soalLogic)
      } else if (materiParent === "postLogic") {
        setMateri(soalLogic)
      } else if (materiParent === "penilaianMedia") {
        setMateri(penilaianMedia)
      }
    }
  }, [materiParent, materi])

  return (
    <div className='row p-0'>
      <div id="materi" className={`${materiParent === "preLogic" || materiParent === "postLogic" || materiParent === "penilaianMedia" ? "col-xl-12 card-header" : "col-xl-10 card-header"}`}>
        {/* <h1>Tujuan Pembelajaran</h1> */}
        <Soal className='card-xxl-stretch mb-xl-3' />
      </div>
      {
        materiParent === "preLogic" || materiParent === "postLogic" || materiParent === "penilaianMedia" ?
          // <div id="progress" className='card shadow-sm col-xxl-2 position-fixed mb-xl-3 border border-secondary border-2 rounded'
          //   style={{ right: '30px', maxHeight: '25%', height: '15%' }}>
          //   {/* begin::Header */}
          //   <div className='d-flex border-0 mb-5 mt-5' style={{ justifyContent: 'center', alignItems: 'center' }}>
          //     <span className='fw-bolder text-dark'></span>
          //   </div>
          //   {/* end::Header */}
          // </div>
          <></>
          :
          <div id="progress" className='col-xxl-2 position-fixed mb-xl-3 border border-secondary border-2 rounded'
            style={{ right: '30px', maxHeight: '20%', height: '15%' }}>
            {/* begin::Header */}
            <div className='d-flex border-0 mb-5 mt-5' style={{ justifyContent: 'center', alignItems: 'center' }}>
              <span className='fw-bolder text-dark' style={{ fontSize: '4rem', textAlign: 'center' }}>{page.currentPage}/{materi[0].materi.isiMateri.length}</span>
            </div>
            {/* end::Header */}
          </div>
      }
      {
        materiParent === "preLogic" || materiParent === "postLogic" || materiParent === "penilaianMedia" ?
          <div className='d-flex pe-10 mt-10' style={{ justifyContent: 'end' }}>
            <div className='btn btn-primary w-25'>
              <span style={{ textAlign: 'center' }}>Kirim Jawaban</span>
            </div>
          </div>
          :
          <Footer />
      }
    </div>
  )
}

export default DetailEvaluasi