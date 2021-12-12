import React from 'react';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import {
  FaTachometerAlt,
  FaGem,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from 'react-icons/fa';

const Aside = ({
  image,
  collapsed,
  rtl,
  toggled,
  handleToggleSidebar,
  setSelected,
}) => {
  return (
    <ProSidebar
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          theAllSafe
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            onClick={() => setSelected('MyProject')}
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">new</span>}
          >
            My Project
          </MenuItem>
          <MenuItem onClick={() => setSelected('MyTasks')} icon={<FaGem />}>
            {' '}
            My Tasks
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={'Project Management'}
            icon={<FaRegLaughWink />}
          >
            <MenuItem onClick={() => setSelected('ProposeTaskTime')}>
              Propose Task Time
            </MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={'Active Projects'}
            icon={<FaHeart />}
          >
            <MenuItem onClick={() => setSelected('AddNewProject')}>
              Add New Project{' '}
            </MenuItem>
            <MenuItem onClick={() => setSelected('CPM')}>CPM </MenuItem>
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
          <a
            href="#"
            className="sidebar-btn"
            rel="noopener noreferrer"
            onClick={() => setSelected('Login')}
          >
            <FaGithub />
            <span
              style={{
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              }}
            >
              Log In
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
