/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useState } from 'react';
import { toAbsoluteUrl } from '../../../../_molekul/helpers';
import { useLayout } from '../../../../_molekul/layout/core';
import { usePagination } from '../../materi/context/materiProvider';
import { DataMateri, soalPretest } from '../../../interface/evaluasi/pretest.interface';
import { soalPosttest } from '../../../interface/evaluasi/posttest.interface';
import { soalLogic } from '../../../interface/evaluasi/logical.interface';
import { penilaianMedia } from '../../../interface/evaluasi/media.interface';
import { useLocation } from 'react-router-dom';


const Footer: FC = () => {
  const { classes } = useLayout();
  const page = usePagination()
  const [materi, setMateri] = useState<DataMateri[]>(soalPretest)
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

  const updatePage = (pages: number) => {
    page.setPage(pages)
  }

  return (
    <div className='footer py-4 d-flex shadow-sm pt-7 pb-7 position-fixed rounded'
      style={{ position: 'sticky', bottom: 0, backgroundColor: 'white', right: '0', left: '0' }}
    >
      {/* begin::Container */}
      <div className={`${classes.footerContainer} d-flex flex-column flex-md-row align-items-center ${page.currentPage === 1 ? "justify-content-end" : "justify-content-between"}`}>

        {
          page.currentPage !== 1 ?
            <div className='hover-overlay' style={{ cursor: 'pointer' }} onClick={() => updatePage(page.currentPage - 1)}>
              <img
                alt='Logo'
                src={toAbsoluteUrl('/media/icons/duotune/general/ic_prev.svg')}
                className='logo-default h-25px mb-2'
              />
              <span className='text-gray-500' style={{ fontSize: '16px', fontWeight: 'bold' }}>Sebelumnya</span>
            </div>
            :
            <></>
        }
        {/* <div>
          <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Konsep Algoritma & Pemrograman Dasar</span>
        </div> */}
        {
          page.currentPage !== materi[0].materi.isiMateri.length ?
            <div className='hover-overlay' style={{ cursor: 'pointer' }} onClick={() => updatePage(page.currentPage + 1)}>
              <span className='text-primary' style={{ fontSize: '16px', fontWeight: 'bold' }}>Selanjutnya</span>
              <img
                alt='Logo'
                src={toAbsoluteUrl('/media/icons/duotune/general/ic_next.svg')}
                className='logo-default h-25px mb-2'
              />
            </div> :
            <div className='hover-overlay' style={{ cursor: 'pointer' }} onClick={() => updatePage(page.currentPage + 1)}>
              <span className='text-primary' style={{ fontSize: '16px', fontWeight: 'bold' }}>Kirim Jawaban</span>
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
