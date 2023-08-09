/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect, useState } from 'react'
import { useLayout } from '../core'
import { useLocation } from 'react-router-dom'

const Footer: FC = () => {
  const { classes } = useLayout()
  const location = useLocation()
  const [isLocation, setIsLocation] = useState<boolean>(false)

  useEffect(() => {
    if ((location.pathname === '/materi/details' && 'active') || (location.pathname === '/evaluasi/soal' && 'active')) {
      setIsLocation(true)
    } else {
      setIsLocation(false)
    }
  }, [])

  return (
    <>
      {
        isLocation ?
          <div style={{ marginTop: '100px' }}>

          </div>
          :
          <div className='footer py-4 d-flex flex-lg-column shadow-sm' id='kt_footer'
          // style={{ position: 'sticky', bottom: 0, backgroundColor: 'white', }}
          >
            {/* begin::Container */}
            <div
              className={`${classes.footerContainer} d-flex flex-column flex-md-row align-items-center justify-content-between`}
            >
              {/* begin::Copyright */}
              <div className='text-dark order-2 order-md-1'>
                <span className='text-muted fw-bold me-2'>{new Date().getFullYear()} &copy;</span>
                <a href='#' className='text-gray-800 text-hover-primary'>
                  ajarkoding by dzikri
                </a>
              </div>
              {/* end::Copyright */}

              {/* begin::Nav */}
              <ul className='menu menu-gray-600 menu-hover-primary fw-bold order-1'>
                <li className='menu-item'>
                  <a href='#' className='menu-link ps-0 pe-2'>
                    About
                  </a>
                </li>
                <li className='menu-item'>
                  <a href='#' className='menu-link pe-0 pe-2'>
                    Contact
                  </a>
                </li>
                <li className='menu-item'>
                  <a href='#' className='menu-link pe-0'>
                    Report
                  </a>
                </li>
              </ul>
              {/* end::Nav */}
            </div>
            {/* end::Container */}
          </div>
      }
    </>

  )
}

export { Footer }
