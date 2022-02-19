import React, {useEffect} from "react";
import SideBar from "../../components/SideBar";
import { DashboardContainer } from "../../styles/Dashboard.style";
import { Container, Grid } from "../../styles/Homepage.style";

import { useDispatch } from "react-redux";
import { fetchAsyncEducations } from "../../redux/educations/educationSlice";
export default function DashboardPage() {
  return (
    <DashboardContainer>
      <Container>
        <div>Welcome TO Dashboard</div>
      </Container>
    </DashboardContainer>
  );
}
