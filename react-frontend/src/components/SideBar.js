import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Container } from "../styles/Homepage.style";

export default function SideBar() {
  return (
    <Container>
      <ProSidebar>
        <Menu iconShape="round">
          <MenuItem>Dashboard</MenuItem>
          <SubMenu title="Home">
            <MenuItem>Header</MenuItem>
            <MenuItem>Education</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </Container>
  );
}
