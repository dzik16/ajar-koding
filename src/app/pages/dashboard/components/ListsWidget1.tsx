/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ProgressBar from './ProgressBar';

type Props = {
  className: string;
};

const ListsWidget1: React.FC<Props> = ({ className }) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold text-dark'>Poin Kamu</span>
        </h3>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body d-flex' style={{ justifyContent: 'center' }}>
        <ProgressBar percentage={80} title={'80'} size={250} strokeWidth={25} />
      </div>
      {/* end::Body */}
    </div>
  );
};

export { ListsWidget1 };
