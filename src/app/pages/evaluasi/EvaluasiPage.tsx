import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toAbsoluteUrl } from '../../../_molekul/helpers'

const Evaluasi = () => {
  const navigate = useNavigate()
  return (
    <div className="d-flex row">
      <h1 className='mb-10 ms-20' style={{ fontSize: '30px' }}>Evaluasi</h1>
      <div className="d-flex row" style={{ justifyContent: 'center' }}>
        <div className="card col-sm-4 p-0 rounded shadow-sm"
          onClick={() => navigate('/evaluasi/lkpd', { state: { page: "r.59bd020134faab4ae5fac989f158c6af?showControls", ke: "1" } })}
          style={{ width: '30%', height: '200px', cursor: 'pointer' }}>
          <div className="card-body p-0">
            <div className='d-flex rounded-top ' style={{ backgroundColor: '#E108B1', height: '60%', justifyContent: 'center' }}>
              <div className='me-5'>
                <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__Annual Report.svg')} alt='' />
              </div>
            </div>
            <div className='p-5'>
              <h3>Evaluasi Pertemuan 1</h3>
              {/* <span className='badge badge-light-success'>Selesai</span> */}
            </div>
          </div>
        </div>
        <div className="card col-sm-4 p-0 rounded shadow-sm ms-10 me-10"
          onClick={() => navigate('/evaluasi/lkpd', { state: { page: "r.0e7760b9b82d6338a9bf3c774f56384f", ke: "2" } })}
          style={{ width: '30%', height: '200px', cursor: 'pointer' }}>
          <div className="card-body p-0">
            <div className='d-flex rounded-top ' style={{ backgroundColor: '#08E138', height: '60%', justifyContent: 'center' }}>
              <div className='me-5'>
                <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__goods.svg')} alt='' />
              </div>
            </div>
            <div className='p-5'>
              <h3>Evaluasi Pertemuan 2</h3>
              {/* <span className='badge badge-light-success'>Selesai</span> */}
            </div>
          </div>
        </div>
        {/* <div className="card col-sm-4 p-0 border rounded shadow-sm" style={{ width: '25%', height: '200px', cursor: 'pointer' }}>
          <div className="card-body p-0">
            <div className='d-flex rounded-top ' style={{ backgroundColor: '#0893E1', height: '60%', justifyContent: 'center' }}>
              <div className='me-5'>
                <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__moneybox.svg')} alt='' />
              </div>
            </div>
            <div className='p-5'>
              <h3>Posttest</h3>
              <span className='badge badge-light-danger'>Belum Mulai</span>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="d-flex row mt-10" style={{ justifyContent: 'center' }}>
        <div className="card col-sm-4 p-0 rounded shadow-sm me-5" style={{ width: '25%', height: '200px', cursor: 'pointer' }}>
          <div className="card-body p-0">
            <div className='d-flex rounded-top ' style={{ backgroundColor: '#E1D808', height: '60%', justifyContent: 'center' }}>
              <div className='me-5'>
                <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__telescope.svg')} alt='' />
              </div>
            </div>
            <div className='p-5'>
              <h3>Post Logic</h3>
              <span className='badge badge-light-danger'>Belum Mulai</span>
            </div>
          </div>
        </div>
        <div className="card col-sm-4 p-0 rounded shadow-sm ms-5" style={{ width: '25%', height: '200px', cursor: 'pointer' }}>
          <div className="card-body p-0">
            <div className='d-flex rounded-top ' style={{ backgroundColor: '#E10856', height: '60%', justifyContent: 'center' }}>
              <div className='me-5'>
                <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__to add.svg')} alt='' />
              </div>
            </div>
            <div className='p-5'>
              <h3>Penilaian Media</h3>
              <span className='badge badge-light-danger'>Belum Mulai</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Evaluasi