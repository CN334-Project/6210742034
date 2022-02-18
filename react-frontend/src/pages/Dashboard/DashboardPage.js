import React from "react";
import SideBar from "../../components/SideBar";
import { Container, Grid } from "../../styles/Homepage.style";


export default function DashboardPage() {
  return (
    <div>
      <Grid>
        <SideBar />
        <Container>
          <div>Welcome TO Dashboard</div>
        </Container>
      </Grid>
    </div>
  );
}
