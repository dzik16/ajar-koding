/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { usePagination } from '../context/materiProvider'
import { DataMateri, DetailMateriTypeResponse, HasilSoalType, materiCase, materiIfElse, materiIfThen, materiNestedIf, materiOperator } from '../../../interface/materi/materi.interface'
import { useTitleModul } from '../context/titleModulProvider'
import { toAbsoluteUrl } from '../../../../_molekul/helpers'
import Lottie from 'lottie-react'
import animLoading from '../../../../_molekul/assets/loading/animLoading.json'
import { useLocation } from 'react-router-dom'

type Props = {
  className: string,
  setRangkuman: (rangkuman: string) => void,
  rangkuman: string,
  resRangkuman: string,
  hasilSoal: HasilSoalType[]
  setHasilSoal: (hasilSoal: HasilSoalType[]) => void,
  finalHasilSoal: HasilSoalType[]
  detailMateri?: DetailMateriTypeResponse
  isLoading?: boolean
}

const IsiMateri: React.FC<Props> = ({ className, isLoading, setRangkuman, rangkuman, resRangkuman, hasilSoal, setHasilSoal, finalHasilSoal, detailMateri }) => {
  const page = usePagination()
  const currentPageTitleModul = useTitleModul()
  const [materi, setMateri] = useState<DataMateri[]>(materiOperator)
  const [materiParent, setMateriParent] = useState<string>("")
  // @ts-ignore
  const location = useLocation<data>()
  const [selectedOptions, setSelectedOptions] = useState<string>("");

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
              </div>

              {/* <PrettyPrintWrapper code={codeExample} language="javascript" /> */}
            </>
            :
            materi[currentPageTitleModul.currentPageTitleModul - 1].materi.isiMateri[page.currentPage - 1].type === "rangkuman" ?
              <div className='d-flex row' style={{ justifyContent: 'center' }}>
                <span style={{ fontSize: '20px', textAlign: 'justify', marginBottom: "20px" }}>
                  Silahkan Mengajukan pertanyaan kepada anggota kelompok untuk memperdalam pemahamanmu
                  {/* <a href='/group' target="_blank">disini</a> ya. */}
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
