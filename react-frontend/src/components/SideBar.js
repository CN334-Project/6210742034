import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "../styles/SideBar.css"
import { Container } from "../styles/Homepage.style";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="content">
      <ProSidebar>
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            Portfolio Dashbaord
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="round">
            <MenuItem><Link to={'/dashboard'}>Dashboard</Link></MenuItem>
            <SubMenu title="Education">
              <MenuItem><Link to={'/dashboard/addEducation'}>Add Education</Link></MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          
          <Link to={'/'}>Back To Portfolio</Link>
        </div>
      </SidebarFooter>
      </ProSidebar>
    </div>
      

  );
}
