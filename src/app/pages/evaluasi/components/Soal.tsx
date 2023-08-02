/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  className: string
}

const Soal: React.FC<Props> = ({ className }) => {
  return (
    <div className={`pe-10 ${className}`}>
      <div className='mb-10'>
        <span style={{ fontSize: '18px', textAlign: 'justify' }}>
          Halo Harry Maguire, Selamat datang di ajarlogika! Disini kamu akan belajar tentang konsep algoritma dan pemrograman dengan pembelajaran berbasis Reciprocal Teaching.
        </span>
      </div>
      <div className="form-check mb-5">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <span style={{ fontSize: '15px', textAlign: 'justify' }}>
          Halo Harry Maguire, Selamat datang di ajarlogika! Disini kamu akan belajar tentang konsep algoritma dan pemrograman dengan pembelajaran berbasis Reciprocal Teaching. Lorem ipsum dolor sit amet consectetur.
        </span>
      </div>
      <div className="form-check mb-5">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <span style={{ fontSize: '15px', textAlign: 'justify' }}>
          Halo Harry Maguire, Selamat datang di ajarlogika! Disini kamu akan belajar tentang konsep algoritma dan pemrograman dengan pembelajaran berbasis Reciprocal Teaching. Lorem ipsum dolor sit amet consectetur.
        </span>
      </div>
      <div className="form-check mb-5">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <span style={{ fontSize: '15px', textAlign: 'justify' }}>
          Halo Harry Maguire, Selamat datang di ajarlogika! Disini kamu akan belajar tentang konsep algoritma dan pemrograman dengan pembelajaran berbasis Reciprocal Teaching. Lorem ipsum dolor sit amet consectetur.
        </span>
      </div>
      <div className="form-check mb-5">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <span style={{ fontSize: '15px', textAlign: 'justify' }}>
          Halo Harry Maguire, Selamat datang di ajarlogika! Disini kamu akan belajar tentang konsep algoritma dan pemrograman dengan pembelajaran berbasis Reciprocal Teaching. Lorem ipsum dolor sit amet consectetur.
        </span>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
        <span style={{ fontSize: '15px', textAlign: 'justify' }}>
          Halo Harry Maguire, Selamat datang di ajarlogika! Disini kamu akan belajar tentang konsep algoritma dan pemrograman dengan pembelajaran berbasis Reciprocal Teaching.
        </span>
      </div>
    </div>
  )
}

export { Soal }
