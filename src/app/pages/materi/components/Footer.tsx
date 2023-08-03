/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useState } from 'react';
import { toAbsoluteUrl } from '../../../../_molekul/helpers';
import { useLayout } from '../../../../_molekul/layout/core';
import { usePagination } from '../context/materiProvider';
import { DataMateri, materiCase, materiIfElse, materiIfThen, materiNestedIf, materiOperator } from '../../../interface/materi/materi.interface';
import { useLocation, useNavigate } from 'react-router-dom';
import { getDetailMateriSiswaByID, updateFinishModul, updateStep } from '../../../api/Request/materi.siswa.api';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useIsMateri } from '../context/isMateriProvider';
import Swal from 'sweetalert2';

type Props = {
  setIsLoading: (isLoading: boolean) => void
  rangkuman: string
}

const Footer: FC<Props> = ({ setIsLoading, rangkuman }) => {
  const { classes } = useLayout();
  const [materi, setMateri] = useState<DataMateri[]>(materiOperator)
  const page = usePagination()
  const navigate = useNavigate()
  const [materiParent, setMateriParent] = useState<string>("")
  const [idMateri, setIdMateri] = useState<string>("")
  // @ts-ignore
  const location = useLocation<data>()
  const auth = getAuth()
  const [uuid, setUuid] = useState<string | undefined>("")
  const { setIsMateri } = useIsMateri()

  useEffect(() => {
    //@ts-ignore
    setIdMateri(location.state.idMateri)
    if (idMateri) {
      onAuthStateChanged(auth, e => {
        handleGetDetailMateri(e?.uid, idMateri)
        setUuid(e?.uid)
        setIsMateri(true)
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

  const handleGetDetailMateri = async (uid: string | undefined, id: string | undefined) => {
    setIsLoading(true)
    try {
      if (uid && id) {
        const res = await getDetailMateriSiswaByID(uid, id)
        page.setPage(res.step)
        setIsLoading(false)
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false)
    }
  }

  const updatePage = async (pages: number) => {
    if (uuid && idMateri) {
      if (page.currentPage === materi[0].materi.isiMateri.length) {
        setIsLoading(true)
        try {
          const res = await updateFinishModul(uuid, idMateri, "Selesai")
          if (res) {
            navigate('/materi')
          }
          setIsLoading(false)
        } catch (error) {
          console.error(error);
          setIsLoading(false)
        }
      } else {
        setIsLoading(true)
        try {
          const res = await getDetailMateriSiswaByID(uuid, idMateri)
          if (res) {
            if (materi[0].materi.isiMateri[page.currentPage - 1].type !== "rangkuman") {
              if (pages - res.step === 1) {
                const resUpdateStep = await updateStep(uuid, idMateri, pages)
                if (resUpdateStep) {
                  page.setPage(pages)
                }
              } else {
                page.setPage(pages)
              }
            } else if (materi[0].materi.isiMateri[page.currentPage - 1].type === "rangkuman" && pages - res.step < 1) {
              page.setPage(pages)
            } else if (materi[0].materi.isiMateri[page.currentPage - 1].type === "rangkuman" && pages - res.step === 1 && rangkuman !== "") {
              console.log("masuk");
            } else {
              const swalSuccess = Swal.mixin({
                customClass: {
                  confirmButton: 'btn btn-danger',
                },
                buttonsStyling: false,
              })
              swalSuccess
                .fire({
                  icon: 'warning',
                  confirmButtonText: 'Dismiss',
                  html: `<h3 style="text-align:center; font-weight:bold; color:gray;'">Silahkan masukan rangkumannya dulu yaa!🫣</h3>`,
                  reverseButtons: true,
                })
            }
          }
          setIsLoading(false)
        } catch (error) {
          console.error(error);
          setIsLoading(false)
        }
      }
    }
  }

  return (
    <div className='footer py-4 d-flex shadow-sm pt-7 pb-7 position-fixed rounded'
      style={{ position: 'sticky', bottom: 0, backgroundColor: 'white', right: '0', left: '0' }}
    >
      {/* begin::Container */}
      <div className={`${classes.footerContainer} d-flex flex-column flex-md-row align-items-center justify-content-between`}>
        {
          page.currentPage !== 1 ?

            <div className='hover-overlay' style={{ cursor: 'pointer' }} onClick={() => updatePage(page.currentPage - 1)}>
              <img
                alt='Logo'
                src={toAbsoluteUrl('/media/icons/duotune/general/ic_prev.svg')}
                className='logo-default h-25px mb-2'
              />
              <span className='text-gray-500' style={{ fontSize: '16px', fontWeight: 'bold' }}>{materi[0].materi.isiMateri[page.currentPage - 2].judulMateri}</span>
            </div> : <div className='hover-overlay' style={{ cursor: 'pointer' }}>
            </div>
        }

        {/* <div>
          <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{materi[0].materi.titleModul}</span>
        </div> */}

        {
          page.currentPage !== materi[0].materi.isiMateri.length ?
            <div className='hover-overlay' style={{ cursor: 'pointer' }} onClick={() => updatePage(page.currentPage + 1)}>
              <span className='text-primary' style={{ fontSize: '16px', fontWeight: 'bold' }}>{materi[0].materi.isiMateri[page.currentPage].judulMateri}</span>
              <img
                alt='Logo'
                src={toAbsoluteUrl('/media/icons/duotune/general/ic_next.svg')}
                className='logo-default h-25px mb-2'
              />
            </div> :
            <div className='hover-overlay' style={{ cursor: 'pointer' }} onClick={() => updatePage(page.currentPage + 1)}>
              <span className='text-primary' style={{ fontSize: '16px', fontWeight: 'bold' }}>Selesai</span>
              <img
                alt='Logo'
                src={toAbsoluteUrl('/media/icons/duotune/general/ic_next.svg')}
                className='logo-default h-25px mb-2'
              />
            </div>
        }
      </div>
      {/* end::Container */}
    </div>
  );
};

export { Footer };
