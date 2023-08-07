/* eslint-disable jsx-a11y/anchor-is-valid */
import { getAuth, onAuthStateChanged, reload } from 'firebase/auth'
import React, { FC, useEffect, useState } from 'react'
import { deletePertanyaan, getPertanyaan, sendPertanyaanToRoom } from '../../api/Request/materi.siswa.api'
import { PertanyaanResponse, PertanyaanType, PertanyaanTypeResponse } from '../../interface/materi/materi.interface'
import { useLocation } from 'react-router-dom'
import Lottie from 'lottie-react'
import animLoading from '../../../_molekul/assets/loading/animLoading.json'
import { toAbsoluteUrl } from '../../../_molekul/helpers'
import Swal from 'sweetalert2'

const ChatGroup: FC = () => {
  const auth = getAuth()
  const [uuid, setUuid] = useState<string>()
  const [pertanyaan, setPertanyaan] = useState<PertanyaanResponse[]>([])
  // @ts-ignore
  const location = useLocation<data>()
  const [page, setPage] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    console.log(page);

    // @ts-ignore
    setPage(location.state.page)
    handleGetPertanyaan(page)
    onAuthStateChanged(auth, e => {
      setUuid(e?.uid)
    })
  }, [pertanyaan, page])


  const handleGetPertanyaan = async (pages: string, reload?: boolean) => {
    setLoading(true)
    try {
      if (pages) {
        const resGetPertanyaan = await getPertanyaan(page)
        const output = Object.entries(resGetPertanyaan)
        output.map((e, i) => {
          const body: PertanyaanResponse = {
            id: e[0],
            pertanyaan: e[1].pertanyaan
          }
          handleAddPertanyaan(body)
          if (i + 1 === output.length) {
            setLoading(false)
          } else if (i + 1 === output.length && reload) {
            setLoading(false)
            window.location.reload();
            return true
          }
        });
      }
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }

  const handleAddPertanyaan = (key: PertanyaanResponse) => {
    if (key) {
      const found = pertanyaan.find((obj) => {
        return obj.pertanyaan.pertanyaan === key.pertanyaan.pertanyaan
      })
      if (!found) {
        pertanyaan.push(key)
      }
    }
  }

  const handleDeletePertanyaan = (id: string) => {
    if (id) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-white'
        },
        buttonsStyling: false
      })
      const swalSuccess = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: `Yakin pertanyaan sudah terjawab?`,
        icon: 'info',
        showCancelButton: true,
        cancelButtonText: 'Belum deh',
        confirmButtonText: 'Yakin dong!',
        reverseButtons: true,
      }).then(async (result) => {
        if (result.isConfirmed && page) {
          const resDelete = await deletePertanyaan(page, id)
          const resGetPertanyaan = await getPertanyaan(page)
          if (resGetPertanyaan !== null) {
            const output = Object.entries(resGetPertanyaan)
            output.map((e, i) => {
              const body: PertanyaanResponse = {
                id: e[0],
                pertanyaan: e[1].pertanyaan
              }
              handleAddPertanyaan(body)
              if (i + 1 === output.length && resDelete === null) {
                swalSuccess.fire({
                  title: `Pertanyaan Berhasil Terjawab, Kalian Keren 🏆`,
                  icon: 'success',
                  confirmButtonText: 'Dismiss',
                }).then(async (result) => {
                  if (result.dismiss || result.isConfirmed) {
                    window.location.reload()
                  }
                })
              }
            });
          } else {
            swalSuccess.fire({
              title: `Pertanyaan Berhasil Terjawab, Kalian Keren 🏆`,
              icon: 'success',
              confirmButtonText: 'Dismiss',
            }).then(async (result) => {
              if (result.dismiss || result.isConfirmed) {
                window.location.reload()
              }
            })
          }
        }
      })
    }
  }


  const handleSendToRoomPertanyaan = async (pertanyaan: PertanyaanType, id: string) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-white'
      },
      buttonsStyling: false
    })
    const swalSuccess = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: `Kirimkan Pertanyaan Ke Room Utama?`,
      icon: 'info',
      showCancelButton: true,
      cancelButtonText: 'Batalkan',
      confirmButtonText: 'Kirim!',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          if (pertanyaan) {
            const resSendPertanyaan = await sendPertanyaanToRoom("ajarkoding", pertanyaan)
            if (resSendPertanyaan) {
              const resDelete = await deletePertanyaan(page, id)
              const resGetPertanyaan = await getPertanyaan(page)
              if (resGetPertanyaan !== null) {
                const output = Object.entries(resGetPertanyaan)
                output.map((e, i) => {
                  const body: PertanyaanResponse = {
                    id: e[0],
                    pertanyaan: e[1].pertanyaan
                  }
                  handleAddPertanyaan(body)
                  if (i + 1 === output.length && resDelete === null) {
                    swalSuccess.fire({
                      title: `Pertanyaan Berhasil Dikirim`,
                      icon: 'success',
                      confirmButtonText: 'Dismiss',
                    }).then(async (result) => {
                      if (result.dismiss || result.isConfirmed) {
                        window.location.reload()
                      }
                    })
                  }
                });
              } else {
                swalSuccess.fire({
                  title: `Pertanyaan Berhasil Dikirim`,
                  icon: 'success',
                  confirmButtonText: 'Dismiss',
                }).then(async (result) => {
                  if (result.dismiss || result.isConfirmed) {
                    window.location.reload()
                  }
                })
              }
            }
          }
        } catch (error) {
          console.error(error);
        }
      }
    })
  }


  return (
    <>
      {
        loading ? (
          <div className='d-flex'
            style={{ width: '100%', height: '100%', justifyContent: 'center', justifyItems: 'center' }}
          >
            <Lottie style={{ width: '55%', height: '55%' }} animationData={animLoading} />
          </div>
        ) : (
          <div className='d-flex flex-column flex-lg-row rounded pt-2' style={{ justifyContent: 'center', alignContent: 'center' }}>
            <div className="card col-xl-4 rounded shadow-sm mb-1 me-5"
            // style={{ width: '25%', height: '100%', cursor: 'pointer' }}
            >
              <span className='fw-bold p-3 ms-7 mt-2' style={{ fontSize: '20px' }}> List Pertanyaan {page === "ajarkoding" ? "Kelompok" : "Anggota Kelompok"} :</span>
              <div className="card-body ms-1 mt-1 overflow-auto" style={{ maxHeight: '580px', maxWidth: '100%' }}>
                {
                  pertanyaan.length !== 0 ? pertanyaan.map((e, i) => {
                    return (
                      <div className='border border-secondary border-1 rounded p-2 mb-3' key={i}>
                        <div className='d-flex flex-lg-row' style={{ justifyContent: 'space-between', marginBottom: '-20px' }}>
                          <div>
                            <span className='text-gray-500' style={{ fontSize: '15px' }}>Dari {page === "ajarkoding" ? `Kelompok ${e.pertanyaan.fullname}` : e.pertanyaan.fullname}</span>
                          </div>
                          {
                            page !== "ajarkoding" ?
                              <div>
                                <img
                                  alt='Logo'
                                  src={toAbsoluteUrl('/media/icons/duotune/general/ic_checklist.svg')}
                                  className='logo-default h-15px mb-2 me-3 cursor-pointer'
                                  onClick={() => handleDeletePertanyaan(e.id)}
                                />
                                <img
                                  alt='Logo'
                                  src={toAbsoluteUrl('/media/icons/duotune/general/icon_x.svg')}
                                  className='logo-default h-15px mb-2 cursor-pointer'
                                  onClick={() => {
                                    const body: PertanyaanType = {
                                      fullname: page,
                                      pertanyaan: e.pertanyaan.pertanyaan
                                    }
                                    handleSendToRoomPertanyaan(body, e.id)
                                  }}
                                />
                              </div>
                              :
                              <></>
                          }

                        </div>
                        <br />
                        <span style={{ fontSize: '20px' }} className='text-dark'>{e.pertanyaan.pertanyaan}</span>
                      </div>
                    )
                  }) :
                    <div className='border border-secondary border-1 rounded p-5 mb-3'>
                      <span style={{ fontSize: '20px' }} className='text-dark'>Tidak ada pertanyaan!</span>
                    </div>
                }
              </div>
            </div>
            <div className="card col-xl-8 rounded shadow-sm p-2"
            // style={{ width: '25%', height: '180px', cursor: 'pointer' }}
            >
              <iframe width="100%" height="620" src={`https://villageharmony.fun:9001/p/${page === "ajarkoding" ? `${page}` : `kel${page}`}`} title="Forum Diskusi" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; camera https://villageharmony.fun:9001; microphone https://villageharmony.fun:9001" allowFullScreen></iframe>
            </div>
          </div >

        )
      }
    </>

  )
}

export default ChatGroup
