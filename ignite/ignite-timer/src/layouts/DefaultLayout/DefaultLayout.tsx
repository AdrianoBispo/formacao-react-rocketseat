import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Home.tsx'

import { LayoutContainer } from './DefaultLayoutStyles.ts'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}