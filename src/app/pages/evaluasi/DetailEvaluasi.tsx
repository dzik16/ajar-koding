import React from 'react'
import { Soal } from './components/Soal'
import { Footer } from './components/Footer'

const DetailEvaluasi = () => {
  return (
    <div className='row p-0'>
      <div id="materi" className='col-xl-10 card-header'>
        {/* <h1>Tujuan Pembelajaran</h1> */}
        <Soal className='card-xxl-stretch mb-xl-3' />
      </div>
      <div id="progress" className='col-xxl-2 position-fixed mb-xl-3 border border-secondary border-2 rounded'
        style={{ right: '30px', maxHeight: '20%', height: '15%' }}>
        {/* begin::Header */}
        <div className='d-flex border-0 mb-5 mt-5' style={{ justifyContent: 'center', alignItems: 'center' }}>
          <span className='fw-bolder text-dark' style={{ fontSize: '4rem', textAlign: 'center' }}>9/10</span>
        </div>
        {/* end::Header */}
      </div>
      <Footer />
    </div>
  )
}

export default DetailEvaluasi