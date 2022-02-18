import React from 'react'
import SideBar from '../../components/SideBar'
import { Grid } from '../../styles/Homepage.style'
import DashboardPage from './DashboardPage'
import HeaderEdit from './HeaderEdit'

export default function Layout() {
  return (
    <Grid>
        <SideBar/>
        <div>
            <DashboardPage/>
            <HeaderEdit/>
        </div>
    </Grid>
  )
}
