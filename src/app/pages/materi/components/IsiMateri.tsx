/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { usePagination } from '../context/materiProvider'
import { DataMateri, materiCase, materiIfElse, materiIfThen, materiNestedIf, materiOperator } from '../../../interface/materi/materi.interface'
import { useTitleModul } from '../context/titleModulProvider'
import PrettyPrintWrapper from '../../dashboard/components/PrettyPrintWrapper'
import { useExample } from '../context/exampleProvider'
import { toAbsoluteUrl } from '../../../../_molekul/helpers'
import Lottie from 'lottie-react'
import animLoading from '../../../../_molekul/assets/loading/animLoading.json'
import { useLocation } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDetailMateriSiswaByID } from '../../../api/Request/materi.siswa.api'

type Props = {
  className: string,
  setRangkuman: (rangkuman: string) => void,
  rangkuman: string,
  isLoading?: boolean
}

const IsiMateri: React.FC<Props> = ({ className, isLoading, setRangkuman, rangkuman }) => {
  const page = usePagination()
  // const [isLoading, setIsLoading] = useState(false);
  const currentPageTitleModul = useTitleModul()
  const [materi, setMateri] = useState<DataMateri[]>(materiOperator)
  const currentPageExample = useExample()
  const [materiParent, setMateriParent] = useState<string>("")
  const [idMateri, setIdMateri] = useState<string>("")
  // @ts-ignore
  const location = useLocation<data>()

  // useEffect(() => {
  //   window.location.reload()
  // }, [])

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
          // currentPageExample.currentPageExample === "cek" ?
          //   <>
          //     <div>
          //       <h1 className='mb-5' style={{ fontSize: '30px' }}>{materi[0].materi.isiMateri[page.currentPage - 1].judulMateri}</h1>
          //       <div className='d-flex row' style={{ justifyContent: 'center' }}>
          //         <span style={{ fontSize: '20px', textAlign: 'justify', marginBottom: "20px" }}>
          //           Silahkan Mengajukan pertanyaan kepada anggota kelompok untuk memperdalam pemahamanmu <a href='/group' target="_blank">disini</a> ya.
          //         </span>
          //         <img
          //           alt='Logo'
          //           src={toAbsoluteUrl('/media/assetIsiMater/materi1/discus.jpg')}
          //           className='logo-default mb-5'
          //           style={{ height: "100%", width: '100%' }}
          //         />
          //         <span style={{ fontSize: '20px', textAlign: 'justify', marginBottom: "20px" }}>
          //           Setelah diskusi dalam kelompok selesai silahkan masukan rangkuman terkait materi yang telah dipelajari pada form di bawah ini!
          //         </span>
          //         <div className="">
          //           <textarea
          //             style={{ fontSize: '20px' }}
          //             className='form-control'
          //             id='exampleFormControlTextarea1'
          //             rows={5}
          //             placeholder='Masukan rangkuman hasil diskusi'
          //           // value={description}
          //           // onChange={(e) => {
          //           //   updateFields({ description: e.target.value })
          //           // }}
          //           />
          //         </div>
          //         <button
          //           className={`btn mt-10 ${rangkuman !== "" ? "btn-primary" : "btn-secondary"} w-200px`}
          //           disabled={true}
          //         >
          //           Submit
          //         </button>
          //       </div>
          //       {/* <div dangerouslySetInnerHTML={{ __html: materi[0].materi.isiMateri[2].htmlMateri ? materi[0].materi.isiMateri[2].htmlMateri : "" }} /> */}
          //     </div>
          //   </>
          //   :
          materi[currentPageTitleModul.currentPageTitleModul - 1].materi.isiMateri[page.currentPage - 1].type === "materi" ?
            <>
              <div>
                <h1 className='mb-5' style={{ fontSize: '30px' }}>{materi[0].materi.isiMateri[page.currentPage - 1].judulMateri}</h1>
                {/* <span style={{ fontSize: '18px', textAlign: 'justify' }}>
                  {materi[currentPageTitleModul.currentPageTitleModul - 1].materi.isiMateri[page.currentPage - 1].isiMateri}
                </span> */}
                <div dangerouslySetInnerHTML={{ __html: materi[currentPageTitleModul.currentPageTitleModul - 1].materi.isiMateri[page.currentPage - 1].htmlMateri ? materi[currentPageTitleModul.currentPageTitleModul - 1].materi.isiMateri[page.currentPage - 1].htmlMateri! : "" }} />
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
                </div>
                {/* <button
                  className={`btn mt-10 ${rangkuman !== "" ? "btn-primary" : "btn-secondary"} w-200px`}
                  disabled={rangkuman !== "" ? false : true}
                >
                  Submit
                </button> */}
              </div>
              :
              <div className={`pe-10 ${className}`}>
                <div className='mb-10'>
                  <div dangerouslySetInnerHTML={{ __html: materi[0].materi.isiMateri[page.currentPage - 1].soal ? materi[0].materi.isiMateri[page.currentPage - 1].soal! : "" }} />
                </div>
                {
                  materi[0].materi.isiMateri[page.currentPage - 1].pilihanSoal?.map((_soal, i) => {
                    return (
                      <>
                        <div key={i} className="form-check mb-5">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <span style={{ fontSize: '20px', textAlign: 'end' }}>
                            {_soal}
                          </span>
                        </div>
                      </>
                    )
                  })
                }
              </div>
      }
    </div>
  )
}

export { IsiMateri }
