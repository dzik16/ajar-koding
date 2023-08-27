/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { DataMateri, soalPretest } from '../../../interface/evaluasi/pretest.interface'
import { usePagination } from '../../materi/context/materiProvider'
import { soalPosttest } from '../../../interface/evaluasi/posttest.interface'
import { soalLogic } from '../../../interface/evaluasi/logical.interface'
import { penilaianMedia } from '../../../interface/evaluasi/media.interface'
import { useLocation } from 'react-router-dom'

type Props = {
  className: string
}

const Soal: React.FC<Props> = ({ className }) => {
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
    <div className={`pe-10 ${className}`}>
      {
        materiParent === "preLogic" || materiParent === "postLogic" || materiParent === "penilaianMedia" ?
          <>
            {
              materi[0].materi.isiMateri.map((e, i) => {
                return (
                  <div className='card shadow-sm p-7 mb-5'>
                    <div className='d-flex mb-10'>
                      <span className='me-5 fs-2'>{i + 1}.</span>
                      <div dangerouslySetInnerHTML={{ __html: e.soal ? e.soal! : "" }} />
                    </div>

                    <div className='d-flex'>
                      {
                        e.pilihanSoal?.map((_soal, i) => {
                          return (
                            <>
                              <div key={i} className={`form-check mb-5 ms-12 ${materiParent === "preLogic" || materiParent === "postLogic" || materiParent === "penilaianMedia" ? "me-20" : ""}`}>
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
                                <div className='mb-10'>
                                  <div dangerouslySetInnerHTML={{ __html: _soal }} />
                                </div>
                              </div>
                            </>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
          </>
          :
          <>
            <div className='mb-10'>
              <div dangerouslySetInnerHTML={{ __html: materi[0].materi.isiMateri[page.currentPage - 1].soal ? materi[0].materi.isiMateri[page.currentPage - 1].soal! : "" }} />
            </div>
            {
              <div>
                {
                  materi[0].materi.isiMateri[page.currentPage - 1].pilihanSoal?.map((_soal, i) => {
                    return (
                      <>
                        <div key={i} className={`form-check mb-5 ${materiParent === "preLogic" || materiParent === "postLogic" || materiParent === "penilaianMedia" ? "me-20" : ""}`}>
                          <input
                            className="form-check-input border border-3 border border-secondary"
                            type="radio"
                            name="flexRadioDefault"
                            id={`flexRadioDefault${i}`}
                            value={_soal}
                          // checked={cekStatus(_soal)}
                          // disabled={finalHasilSoal && finalHasilSoal.length !== null ? true : false}
                          // onChange={(e) => handleRadioChange(i, e.target.value)}
                          />
                          <div className='mb-10'>
                            <div dangerouslySetInnerHTML={{ __html: _soal }} />
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </div>
            }
          </>
      }
    </div>
  )
}

export { Soal }
