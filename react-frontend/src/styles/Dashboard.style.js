import styled from "styled-components";

export const DashboardContainer = styled.div`
    margin-left: 270px;
    height: ${(props) => props.hg};
    padding: 3rem;
  
`;

export const HeaderDashboardContianer = styled.div`
  width: auto;
  height: ${(props) => props.hg};
  padding: 3rem;
`;

export const Body = styled.div`
  height: ${(props) => props.height};
  background-color: #14141f;
  font-family: "Prompt";
`;