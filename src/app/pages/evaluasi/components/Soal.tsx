/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { DataMateri, materiNestedIf } from '../../../interface/materi/materi.interface'

type Props = {
  className: string
}

const Soal: React.FC<Props> = ({ className }) => {
  const [materi, setMateri] = useState<DataMateri[]>(materiNestedIf)

  return (
    <div className={`pe-10 ${className}`}>
      <div className='mb-10'>
        <div dangerouslySetInnerHTML={{ __html: materi[0].materi.isiMateri[5].soal ? materi[0].materi.isiMateri[5].soal! : "" }} />
      </div>
      {
        <>
          {
            materi[0].materi.isiMateri[5].pilihanSoal?.map((_soal, i) => {
              return (
                <>
                  <div key={i} className="form-check mb-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id={`flexRadioDefault${i}`}
                      value={_soal}
                    // checked={cekStatus(_soal)}
                    // disabled={finalHasilSoal && finalHasilSoal.length !== null ? true : false}
                    // onChange={(e) => handleRadioChange(i, e.target.value)}
                    />
                    <span style={{ fontSize: '20px', textAlign: 'end' }}>
                      {_soal}
                    </span>
                  </div>
                </>
              )
            })
          }
          <div className="form-check mb-5">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id={`flexRadioDefault5`}
            // value={Error}
            // checked={cekStatus(_soal)}
            // disabled={finalHasilSoal && finalHasilSoal.length !== null ? true : false}
            // onChange={(e) => handleRadioChange(i, e.target.value)}
            />
            <span style={{ fontSize: '20px', textAlign: 'end' }}>
              Error
            </span>
          </div>
        </>
      }
    </div>
  )
}

export { Soal }
