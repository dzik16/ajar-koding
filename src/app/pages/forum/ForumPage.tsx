import React from 'react'
import { useNavigate } from 'react-router-dom'

const Forum = () => {
  const navigate = useNavigate()

  return (
    <div className="d-flex row">
      <h1 className='mb-10 ms-20' style={{ fontSize: '30px' }}>Kelompok</h1>
      <div className="d-flex row" style={{ justifyContent: 'center' }}>
        <div className="card col-sm-4 p-0 rounded shadow-sm"
          onClick={() => {
            navigate('/group')
            window.location.reload();
          }}
          style={{ width: '25%', height: '236px', cursor: 'pointer' }}>
          <div className="card-body p-0">
            <div className='rounded-top ' style={{ backgroundColor: '#E108B1', height: '50%' }}>

            </div>
            <div className='p-5'>
              <h3>Kelompok 1</h3>
            </div>
          </div>
        </div>
        <div className="card col-sm-4 p-0 rounded shadow-sm ms-10 me-10"
          onClick={() => {
            navigate('/group')
            window.location.reload();
          }}
          style={{ width: '25%', height: '236px', cursor: 'pointer' }}>
          <div className="card-body p-0">
            <div className='rounded-top ' style={{ backgroundColor: '#08E138', height: '50%' }}>

            </div>
            <div className='p-5'>
              <h3>Kelompok 2</h3>
            </div>
          </div>
        </div>
        <div className="card col-sm-4 p-0 border rounded shadow-sm"
          onClick={() => {
            navigate('/group')
            window.location.reload();
          }}
          style={{ width: '25%', height: '236px', cursor: 'pointer' }}>
          <div className="card-body p-0">
            <div className='rounded-top ' style={{ backgroundColor: '#0893E1', height: '50%' }}>

            </div>
            <div className='p-5'>
              <h3>Kelompok 3</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex row mt-10" style={{ justifyContent: 'center' }}>
        <div className="card col-sm-4 p-0 rounded shadow-sm me-5"
          onClick={() => {
            navigate('/group')
            window.location.reload();
          }}
          style={{ width: '25%', height: '236px', cursor: 'pointer' }}>
          <div className="card-body p-0">
            <div className='rounded-top ' style={{ backgroundColor: '#E1D808', height: '50%' }}>

            </div>
            <div className='p-5'>
              <h3>Kelompok 4</h3>
            </div>
          </div>
        </div>
        <div className="card col-sm-4 p-0 rounded shadow-sm ms-5"
          onClick={() => {
            navigate('/group')
            window.location.reload();
          }}
          style={{ width: '25%', height: '236px', cursor: 'pointer' }}>
          <div className="card-body p-0">
            <div className='rounded-top ' style={{ backgroundColor: '#E10856', height: '50%' }}>

            </div>
            <div className='p-5'>
              <h3>Kelompok 5</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forum