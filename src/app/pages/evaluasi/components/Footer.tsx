/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { toAbsoluteUrl } from '../../../../_molekul/helpers';
import { useLayout } from '../../../../_molekul/layout/core';


const Footer: FC = () => {
  const { classes } = useLayout();

  return (
    <div className='footer py-4 d-flex shadow-sm pt-7 pb-7 position-fixed rounded'
      style={{ position: 'sticky', bottom: 0, backgroundColor: 'white', right: '0', left: '0' }}
    >
      {/* begin::Container */}
      <div className={`${classes.footerContainer} d-flex flex-column flex-md-row align-items-center justify-content-between`}>
        <div className='hover-overlay' style={{ cursor: 'pointer' }}>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/icons/duotune/general/ic_prev.svg')}
            className='logo-default h-25px mb-2'
          />
          <span className='text-gray-500' style={{ fontSize: '16px', fontWeight: 'bold' }}>Sebelumnya</span>
        </div>
        <div>
          <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Konsep Algoritma & Pemrograman Dasar</span>
        </div>
        <div className='hover-overlay' style={{ cursor: 'pointer' }}>
          <span className='text-primary' style={{ fontSize: '16px', fontWeight: 'bold' }}>Selanjutnya</span>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/icons/duotune/general/ic_next.svg')}
            className='logo-default h-25px mb-2'
          />
        </div>
      </div>
      {/* end::Container */}
    </div>
  );
};

export { Footer };
