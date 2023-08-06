/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { usePagination } from '../context/materiProvider'
import { DataMateri, DetailMateriTypeResponse, HasilSoalType, PertanyaanType, materiCase, materiIfElse, materiIfThen, materiNestedIf, materiOperator } from '../../../interface/materi/materi.interface'
import { useTitleModul } from '../context/titleModulProvider'
import { KTSVG, toAbsoluteUrl } from '../../../../_molekul/helpers'
import Lottie from 'lottie-react'
import animLoading from '../../../../_molekul/assets/loading/animLoading.json'
import { useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { getProfileSiswa } from '../../../api/Request/profile.siswa.api'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { CreateProfileSiswaType } from '../../../interface/profile.siswa.interface'
import { getPertanyaan, sendPertanyaan, updatePertanyaan } from '../../../api/Request/materi.siswa.api'
import Swal from 'sweetalert2'

type Props = {
  className: string,
  setRangkuman: (rangkuman: string) => void,
  rangkuman: string,
  resRangkuman: string,
  hasilSoal: HasilSoalType[]
  setHasilSoal: (hasilSoal: HasilSoalType[]) => void,
  finalHasilSoal: HasilSoalType[]
  detailMateri?: DetailMateriTypeResponse
  isLoading?: boolean,
  setPertanyaan: (pertanyaan: PertanyaanType[]) => void,
  pertanyaan: PertanyaanType[]
}

const IsiMateri: React.FC<Props> = ({
  className,
  isLoading,
  setRangkuman,
  rangkuman,
  resRangkuman,
  hasilSoal,
  setHasilSoal,
  finalHasilSoal,
  detailMateri,
  setPertanyaan,
  pertanyaan }) => {
  const page = usePagination()
  const currentPageTitleModul = useTitleModul()
  const [materi, setMateri] = useState<DataMateri[]>(materiOperator)
  const [materiParent, setMateriParent] = useState<string>("")
  // @ts-ignore
  const location = useLocation<data>()
  const [selectedOptions, setSelectedOptions] = useState<string>("");
  const [newPertanyaan, setNewPertanyaan] = useState<string>('')
  const [profileSiswa, setProfileSiswa] = useState<CreateProfileSiswaType>()
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, e => {
      handleGetProfile(e?.uid)
    })
  }, [])

  const handleGetProfile = async (uid: string | undefined) => {
    try {
      if (uid) {
        const ress = await getProfileSiswa(uid)
        const output = Object.entries(ress)
        output.map(e => {
          //@ts-ignore
          setProfileSiswa(e[1])
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

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

  useEffect(() => {
    if (materi[currentPageTitleModul.currentPageTitleModul - 1].materi.isiMateri[page.currentPage - 1].type !== "rangkuman") {
      window.scrollTo(0, 0);
    }
  }, [page]);

  const handleRadioChange = (index: number, value: HTMLInputElement["value"]) => {
    if (index >= 0 && value) {
      setSelectedOptions(value)

      const body: HasilSoalType = {
        name: materi[0].materi.isiMateri[page.currentPage - 1].judulMateri,
        jawaban: index,
        hasil: materi[0].materi.isiMateri[page.currentPage - 1].kunjawSoal === index,
        textJawaban: value
      }

      handlePushAndDeleteMood(body)
    }
  };

  const handlePushAndDeleteMood = (key: HasilSoalType) => {
    if (key) {
      const found = hasilSoal.find((obj) => {
        return obj.name === key.name
      })

      if (!found) {
        hasilSoal.push(key)
      } else {
        for (let i = 0; i < hasilSoal.length; i++) {
          if (hasilSoal[i].name === key.name) {
            hasilSoal.splice(i, 1, key)
          }
        }
      }
    }
  }

  const cekStatus = (nama: string) => {
    if (finalHasilSoal) {
      for (let i = 0; i < finalHasilSoal.length; i++) {
        if (finalHasilSoal[i].textJawaban === nama) {
          return true
          break
        }
      }
      return false
    } if (nama && hasilSoal) {
      for (let i = 0; i < hasilSoal.length; i++) {
        if (hasilSoal[i].textJawaban === nama) {
          return true
          break
        }
      }
      return false
    }
  }

  // const setLitsPertanyaan = (list: PertanyaanType) => {
  //   const found = pertanyaan.find((obj) => {
  //     return obj.pertanyaan.toLowerCase() === list.pertanyaan.toLowerCase()
  //   })
  //   if (!found) {
  //     pertanyaan.push(list)
  //   }
  //   setNewPertanyaan('')
  // }

  // const deleteListPertanyaan = (key: number) => {
  //   if (key > -1) {
  //     pertanyaan.splice(key, 1)
  //     setNewPertanyaan('a')
  //   }
  // }

  const handleSendPertanyaan = async (list: PertanyaanType) => {
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
      title: `Kirimkan Pertanyaan Untuk Kelompok kamu?`,
      icon: 'info',
      showCancelButton: true,
      cancelButtonText: 'Batalkan',
      confirmButtonText: 'Kirim!',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          if (list) {
            const resSendPertanyaan = await sendPertanyaan("kel1", list)
            if (resSendPertanyaan) {
              swalSuccess.fire({
                title: `Pertanyaan Berhasil Dikirim`,
                icon: 'success',
                confirmButtonText: 'Dismiss',
              })
            }
            setNewPertanyaan('')
          }
        } catch (error) {
          console.error(error);
        }
      }
    })
  }

  return (
    <div className={`pe-10 ${className}`} style={{ textAlign: 'justify' }}>
      {
        isLoading ? (
          <div className='d-flex'
            style={{ width: '100%', height: '100%', justifyContent: 'center', justifyItems: 'center' }}
          >
            <Lottie style={{ width: '55%', height: '55%' }} animationData={animLoading} />
          </div>
        ) :
          materi[currentPageTitleModul.currentPageTitleModul - 1].materi.isiMateri[page.currentPage - 1].type === "materi" ?
            <>
              <div>
                <h1 className='mb-5' style={{ fontSize: '30px' }}>{materi[0].materi.isiMateri[page.currentPage - 1].judulMateri}</h1>
                <div dangerouslySetInnerHTML={{ __html: materi[currentPageTitleModul.currentPageTitleModul - 1].materi.isiMateri[page.currentPage - 1].htmlMateri ? materi[currentPageTitleModul.currentPageTitleModul - 1].materi.isiMateri[page.currentPage - 1].htmlMateri! : "" }} />
                <div>
                  <h1 className='mb-5 mt-20' style={{ fontSize: '30px' }}>Form Pertanyaan</h1>
                  <span style={{ fontSize: '20px' }}>
                    Jika kalian merasa kesulitan dalam memahami materi yang kalian pelajari silahkan masukan pertanyaan di bawah ini yaa, terkait pertanyaan kalian nantinya akan di bahas di forum kelompok kalian
                  </span>
                  {/* {
                    pertanyaan.length !== 0 && pertanyaan.map((e, i) => {
                      return (
                        <div className='d-flex mb-1 mt-2 align-items-center' key={i}>
                          <div
                            onClick={() => {
                              deleteListPertanyaan(i)
                            }}
                            style={{ cursor: 'pointer' }}
                          >
                            <KTSVG
                              path='/media/icons/duotune/general/ic_close.svg'
                              className='svg-icon-1 me-4 mb-1'
                            />
                          </div>
                          <span className='form-control my-1'>{e.pertanyaan}</span>
                        </div>
                      )
                    })
                  } */}
                  {/* {
                    pertanyaan.length !== 0 ?
                      <div className='mb-4 pe-2 mt-4' style={{ justifySelf: 'center' }}>
                        <a
                          className='d-flex align-items-center text-gray-800 text-hover-danger'
                          onClick={() => setNewPertanyaan('')}
                          style={{ cursor: 'pointer' }}
                          data-bs-toggle='modal'
                          data-bs-target='#kt_modal_add_featuring'
                        >
                          <KTSVG
                            path='/media/icons/duotune/general/ic_add_musician.svg'
                            className='svg-icon-1 me-4 mb-1'
                          />
                          Tambahkan Pertanyaan
                        </a>
                      </div>
                      :
                      <></>
                  } */}

                  <div className='d-flex mt-10' style={{ justifyContent: 'center' }}>
                    {/* {
                      pertanyaan.length !== 0 ?
                        <button
                          className={clsx(
                            `btn btn-primary w-200px`
                          )}
                          type={`button`}
                          onClick={handleSendPertanyaan}
                        >
                          Kirim Pertanyaan
                        </button>
                        : */}
                    <button
                      className={clsx(
                        `btn btn-primary w-200px`
                      )}
                      onClick={() => setNewPertanyaan('')}
                      type={`button`}
                      data-bs-toggle='modal'
                      data-bs-target='#kt_modal_add_featuring'
                    >
                      Tambahkan Pertanyaan
                    </button>
                    {/* } */}

                    <div
                      className='modal fade modal-lg'
                      tabIndex={-1}
                      id='kt_modal_add_featuring'
                    >
                      <div className='modal-dialog modal-dialog-centered'>
                        <div className='modal-content'>
                          <div className='p-8'>
                            <span className='fs-2 fw-bold text-gray-700'>
                              Form Pertanyaan
                            </span>{' '}
                            <br />
                            <span className='text-gray-500'>
                              Masukkan pertanyaan kamu dibawah ini ya!
                            </span>
                          </div>
                          <div className='ps-8 pe-8'>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Apa itu algoritma dan pemrograman?'
                              onChange={(e) => setNewPertanyaan(e.target.value)}
                            />
                          </div>
                          <div
                            className='d-flex mt-10 modal-footer'
                            style={{ justifyContent: 'flex-end', width: '100%' }}
                          >
                            <div>
                              <button
                                type='button'
                                data-bs-dismiss='modal'
                                className='btn btn-outline btn-outline-danger btn-active-light-danger w-200px me-4'
                              >
                                Batalkan
                              </button>
                            </div>
                            <div>
                              <button
                                className='btn btn-danger w-200px'
                                data-bs-dismiss='modal'
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                  if (newPertanyaan !== '' && profileSiswa) {
                                    const listPertanyaan = {
                                      fullname: profileSiswa.name,
                                      pertanyaan: newPertanyaan
                                    }
                                    handleSendPertanyaan(listPertanyaan)
                                  }
                                }}
                                disabled={newPertanyaan ? false : true}
                              >
                                Kirim Pertanyaan
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <PrettyPrintWrapper code={codeExample} language="javascript" /> */}
            </>
            :
            materi[currentPageTitleModul.currentPageTitleModul - 1].materi.isiMateri[page.currentPage - 1].type === "rangkuman" ?
              <div className='d-flex row' style={{ justifyContent: 'center' }}>
                <span style={{ fontSize: '20px', textAlign: 'justify', marginBottom: "20px" }}>
                  Silahkan Mengajukan pertanyaan kepada anggota kelompok untuk memperdalam pemahamanmu <a href='/group' target="_blank">disini</a> ya.
                </span>
                <img
                  alt='Logo'
                  src={toAbsoluteUrl('/media/assetIsiMater/materi1/discus.jpg')}
                  className='logo-default mb-5'
                  style={{ height: "100%", width: '100%' }}
                />
                <span style={{ fontSize: '20px', textAlign: 'justify', marginBottom: "20px" }}>
                  Setelah diskusi dalam kelompok selesai silahkan masukan rangkuman terkait materi yang telah dipelajari pada form di bawah ini!
                </span>
                <div className="">
                  {
                    resRangkuman !== "" ?
                      <span className='form-control' style={{ fontSize: '20px' }}>
                        Rangkuman kamu :
                        <br />
                        <br />
                        <span className='text-dark'>{resRangkuman}</span>
                      </span>
                      :
                      <textarea
                        style={{ fontSize: '20px' }}
                        className='form-control'
                        id='exampleFormControlTextarea1'
                        rows={5}
                        placeholder='Masukan rangkuman hasil diskusi'
                        value={rangkuman}
                        onChange={(e) => {
                          setRangkuman(e.target.value)
                        }}
                      />
                  }
                </div>
              </div>
              :
              <div className={`pe-10 ${className}`}>
                <div className='mb-10'>
                  <div dangerouslySetInnerHTML={{ __html: materi[0].materi.isiMateri[page.currentPage - 1].soal ? materi[0].materi.isiMateri[page.currentPage - 1].soal! : "" }} />
                </div>
                {
                  detailMateri?.status.toLowerCase() === "selesai" ?
                    <>

                      {
                        detailMateri.latihan.map((e, i) => {
                          return (
                            e.name === materi[0].materi.isiMateri[page.currentPage - 1].judulMateri ?
                              <>
                                {
                                  materi[0].materi.isiMateri[page.currentPage - 1].pilihanSoal?.map((_soal, i) => {
                                    return (
                                      <>
                                        <div key={i} className="form-check mb-5">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id={`flexRadioDefault${i}`}
                                            value={_soal}
                                            checked={cekStatus(_soal)}
                                            disabled={finalHasilSoal.length !== null ? true : false}
                                            onChange={(e) => handleRadioChange(i, e.target.value)}
                                          />
                                          <span style={{ fontSize: '20px', textAlign: 'end' }}>
                                            {_soal}
                                          </span>
                                        </div>
                                      </>
                                    )
                                  })
                                }
                                {
                                  <div className='mt-20'>
                                    {
                                      e.hasil ?
                                        <span className='fs-1 fw-bold'>
                                          Keren! Jawaban Kamu Benar 😍
                                        </span>
                                        :
                                        <span className='fs-1 fw-bold'>
                                          Yah, Jawaban Kamu Salah Nih 😢
                                        </span>
                                    }

                                  </div>
                                }

                              </>
                              :
                              <></>
                          )
                        })
                      }
                    </>
                    :
                    <>
                      {
                        materi[0].materi.isiMateri[page.currentPage - 1].pilihanSoal?.map((_soal, i) => {
                          return (
                            <>
                              <div key={i} className="form-check mb-5">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id={`flexRadioDefault${i}`}
                                  value={_soal}
                                  checked={cekStatus(_soal)}
                                  disabled={finalHasilSoal && finalHasilSoal.length !== null ? true : false}
                                  onChange={(e) => handleRadioChange(i, e.target.value)}
                                />
                                <span style={{ fontSize: '20px', textAlign: 'end' }}>
                                  {_soal}
                                </span>
                              </div>
                            </>
                          )
                        })
                      }
                    </>
                }
              </div>
      }
    </div>
  )
}

export { IsiMateri }
