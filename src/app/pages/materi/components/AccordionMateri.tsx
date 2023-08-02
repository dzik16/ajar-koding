/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { toAbsoluteUrl } from '../../../../_molekul/helpers'
import { DataMateri, materiCase, materiIfElse, materiIfThen, materiNestedIf, materiOperator } from '../../../interface/materi/materi.interface'
import { usePagination } from '../context/materiProvider'
import { useExample } from '../context/exampleProvider'
import { useLocation } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDetailMateriSiswaByID, updateStep } from '../../../api/Request/materi.siswa.api'

type Props = {
  className: string,
  setIsLoading: (isLoading: boolean) => void,
  isLoading: boolean
}

const AccordionMateri: React.FC<Props> = ({ className, setIsLoading, isLoading }) => {
  const [materi, setMateri] = useState<DataMateri[]>(materiOperator)
  const { currentPage, setPage } = usePagination()
  const [materiParent, setMateriParent] = useState<string>("")
  const [idMateri, setIdMateri] = useState<string>("")
  // @ts-ignore
  const location = useLocation<data>()
  const auth = getAuth()
  const [uuid, setUuid] = useState<string | undefined>("")
  const [steps, setSteps] = useState<number>(0)

  useEffect(() => {
    //@ts-ignore
    setIdMateri(location.state.idMateri)
    if (idMateri) {
      onAuthStateChanged(auth, e => {
        handleGetDetailMateri(e?.uid, idMateri)
        setUuid(e?.uid)
      })
    }
  }, [uuid, idMateri])

  useEffect(() => {
    // @ts-ignore
    setMateriParent(location.state.materiParent)
    if (materiParent) {
      if (materiParent === "m-k-a") {
        setMateri(materiOperator)
      } else if (materiParent === "m-k-b") {
        setMateri(materiIfThen)
      } else if (materiParent === "m-k-c") {
        setMateri(materiIfElse)
      } else if (materiParent === "m-k-d") {
        setMateri(materiCase)
      } else if (materiParent === "m-k-e") {
        setMateri(materiNestedIf)
      }
    }
  }, [materiParent, materi])

  const updatePage = async (page: number) => {
    if (!page || currentPage === page) {
      return
    }
    try {
      setIsLoading(true)
      if (uuid && idMateri) {
        const res = await getDetailMateriSiswaByID(uuid, idMateri)
        console.log(page, res.step);

        if (res) {
          if (page - res.step === 1) {
            const resUpdateStep = await updateStep(uuid, idMateri, page)
            if (resUpdateStep) {
              setPage(page)
            }
          } else if (page - res.step > 1) {
            console.log("kebanyakan");
          } else if (page - res.step < 1) {
            setPage(page)
            setSteps(res.step)
          }
        }
        setIsLoading(false)
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false)
    }

  }

  const handleGetDetailMateri = async (uid: string | undefined, id: string | undefined) => {
    setIsLoading(true)
    try {
      if (uid && id) {
        const res = await getDetailMateriSiswaByID(uid, id)
        if (res) {
          setSteps(res.step)
        }
        setIsLoading(false)
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false)
    }
  }

  return (
    <div className={clsx('', className)}>
      {/* begin::Body */}
      <div className='card-body'>
        <div className="accordion border-0" style={{ marginTop: '-50px' }} id="accordionPanelsStayOpenExample">
          {
            materi.map((e, i) => {
              return (
                <div className="accordion-item">
                  <h2 className="accordion-header" id={`panelsStayOpen-heading${i}`}>
                    <button className="accordion-button collapsed fw-bold fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse1" aria-expanded="true" aria-controls="panelsStayOpen-collapse1">
                      {e.materi.titleModul}
                    </button>
                  </h2>

                  {
                    e.materi.isiMateri.map((_listMareri, i) => {
                      return (
                        <>
                          {
                            < div id="panelsStayOpen-collapse1" className="accordion-collapse collapse ms-7 show" aria-labelledby="panelsStayOpen-heading1">
                              {
                                steps - 1 > i || currentPage - 1 > i ?
                                  <div className="ms-2 mb-3" style={{ cursor: 'pointer' }}
                                    onClick={() => updatePage(i + 1)}
                                  >
                                    <img
                                      alt='Logo'
                                      src={toAbsoluteUrl('/media/icons/duotune/general/ic_check_done.svg')}
                                      className='logo-default h-25px me-2 mb-1'
                                    />
                                    <span className={`text-hover-primary ${currentPage - 1 === i ? "text-primary" : "text-gray-900"} fw-bold`}>{_listMareri.judulMateri}</span>
                                  </div>
                                  :
                                  <div className="ms-2 mb-3" style={{ cursor: 'pointer' }}
                                    onClick={() => updatePage(i + 1)}
                                  >
                                    <img
                                      alt='Logo'
                                      src={toAbsoluteUrl('/media/icons/duotune/general/ic_check.svg')}
                                      className='logo-default h-25px me-2 mb-1'
                                    />
                                    <span className={`text-hover-primary ${currentPage - 1 === i ? "text-primary fw-bold" : ""}`}>{_listMareri.judulMateri}</span>
                                  </div>

                              }
                            </div >
                          }
                        </>
                      )
                    })
                  }

                  {/* <div id="panelsStayOpen-collapse1" className="accordion-collapse collapse ms-7 show" aria-labelledby="panelsStayOpen-heading1">
                    <div className="ms-2 mb-3" style={{ cursor: 'pointer' }}
                      onClick={() => updateExamplePage("cek")}
                    >
                      <img
                        alt='Logo'
                        src={toAbsoluteUrl('/media/icons/duotune/general/ic_check.svg')}
                        className='logo-default h-25px me-2 mb-1'
                      />
                      <span className={`text-hover-primary`}>haha</span>
                    </div>

                  </div> */}
                </div>
              )
            })
          }
        </div>
      </div>
      {/* end::Body */}
    </div >
  )
}

export { AccordionMateri }
