import { FC, lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MasterLayout } from '../../_molekul/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import { MenuTestPage } from '../pages/MenuTestPage'
import { getCSSVariableValue } from '../../_molekul/assets/ts/_utils'
import { WithChildren } from '../../_molekul/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import Evaluasi from '../pages/evaluasi/EvaluasiPage'
import ForumPage from '../pages/forum/ForumPage'
import ChatGroup from '../pages/forum/ChatGroup'
import MateriPage from '../pages/materi/MateriPage'
import DetailMateri from '../pages/materi/DetailMateri'
import DetailEvaluasi from '../pages/evaluasi/DetailEvaluasi'
import { PaginationProvider } from '../pages/materi/context/materiProvider'

const PrivateRoutes = () => {
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='/evaluasi' element={<Evaluasi />} />
        <Route path='/evaluasi/soal' element={<DetailEvaluasi />} />
        <Route path='/forum' element={<ForumPage />} />
        <Route path='/group' element={<ChatGroup />} />
        <Route path='/materi' element={<MateriPage />} />
        <Route path='/materi/details' element={
          <PaginationProvider>
            <DetailMateri />
          </PaginationProvider>
        } />

        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export { PrivateRoutes }
