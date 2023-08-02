/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { KTIcon, toAbsoluteUrl } from '../../../helpers'
import { useLayout } from '../../core'
import { HeaderToolbar } from './HeaderToolbar'
import { Topbar } from './Topbar'

export function HeaderWrapper() {
  const { config, classes, attributes } = useLayout()
  const { aside } = config
  const location = useLocation()
  const navigation = useNavigate()


  return (
    <div
      id='kt_header'
      className='d-flex header align-items-stretch shadow-sm ps-20 pe-20'
      style={{ justifyContent: 'space-between' }}
    >
      <div className='d-flex header-logo me-5 me-md-10 flex-grow-1 flex-lg-grow-0' style={{ alignItems: 'center' }}>
        <Link to='/'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/logos/ic_logo.png')}
            className='logo-default h-25px'
          />
        </Link>
      </div>


      <div className=''>
        <div className={clsx(`d-flex`)} style={{ justifyItems: 'center', alignItems: 'center' }}>
          <div className='d-flex me-10' style={{ height: '73px' }}>
            <ul className={`${location.pathname === '/dashboard' ? "border-bottom border-primary border-3" : ""} nav nav-stretch fs-5 fw-bolder w-110px`} style={{ bottom: '0' }}>
              <li className='d-flex nav-item ms-5'>
                <span
                  className={`d-flex me-6`}
                  style={{ alignItems: 'center', cursor: 'pointer' }}
                  onClick={() => { navigation('/dashboard') }}
                >
                  <img
                    alt='Logo'
                    src={`${location.pathname === '/dashboard' ? toAbsoluteUrl("/media/icons/duotune/general/ic_beranda_active.svg") : toAbsoluteUrl("/media/icons/duotune/general/ic_beranda.svg")}`}
                    className='logo-default h-25px mb-2 me-2'
                  />
                  <span
                    className={`${location.pathname === '/dashboard' ? "text-primary" : ""}`}
                    style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bold' }}>Beranda</span>
                </span>
              </li>
            </ul>
          </div>

          <div className='d-flex' style={{ height: '73px' }}>
            <ul className={`${location.pathname === '/forum' ? "border-bottom border-primary border-3" : ""} nav nav-stretch fs-5 fw-bolder w-110px`} style={{ bottom: '0' }}>
              <li className='nav-item ps-5'>
                <span
                  className={`d-flex me-6`}
                  style={{ alignItems: 'center', cursor: 'pointer' }}
                  onClick={() => {
                    navigation('/forum')
                  }}
                >
                  <img
                    alt='Logo'
                    src={`${location.pathname === '/forum' ? toAbsoluteUrl("/media/icons/duotune/general/ic_forum_active.svg") : toAbsoluteUrl("/media/icons/duotune/general/ic_forum.svg")}`}
                    className='logo-default h-25px mb-2 me-2'
                  />
                  <span
                    className={`${location.pathname === '/forum' ? "text-primary" : ""}`}
                    style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bold' }}>Forum</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={clsx(`d-flex`)} style={{ justifyItems: 'center', alignItems: 'center' }}>
        <Topbar />
      </div>
      {/* end::Brand */}
      {/* <HeaderToolbar /> */}
    </div>
  )
}
