import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
  FaUserEdit,
  FaUserAlt,
  FaWarehouse,
} from 'react-icons/fa';

const Aside = ({
  image,
  collapsed,
  rtl,
  toggled,
  handleToggleSidebar,
  setSelected,
}) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    localStorage.getItem('email') !== undefined &&
      setEmail(localStorage.getItem('email'));
  }, []);

  let admin = email === 'admin@gmail.com' ? true : false;
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    setEmail('');
    navigate('/');
  };
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
          {admin && (
            <MenuItem
              onClick={() => setSelected('MyProject')}
              icon={<FaTachometerAlt />}
              suffix={<span className="badge red">new</span>}
            >
              My Project
            </MenuItem>
          )}
          <MenuItem onClick={() => setSelected('MyTasks')} icon={<FaGem />}>
            {' '}
            My Tasks
          </MenuItem>
          <MenuItem onClick={() => setSelected('Deliveries')} icon={<FaGem />}>
            {' '}
            Deliveries
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={'Project Management'}
            icon={<FaRegLaughWink />}
          >
            <MenuItem onClick={() => setSelected('ApproveTasks')}>
              Approve Tasks
            </MenuItem>
          </SubMenu>
          {admin && (
            <SubMenu
              prefix={<span className="badge gray">3</span>}
              title={'Active Projects'}
              icon={<FaHeart />}
            >
              <MenuItem onClick={() => setSelected('AddNewProject')}>
                Add New Project{' '}
              </MenuItem>
              <MenuItem onClick={() => setSelected('project1')}>
                project1{' '}
              </MenuItem>
              <MenuItem onClick={() => setSelected('project2')}>
                project2{' '}
              </MenuItem>
              <MenuItem onClick={() => setSelected('project3')}>
                project3{' '}
              </MenuItem>
            </SubMenu>
          )}

          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={'History'}
            icon={<FaWarehouse />}
          >
            <MenuItem
              onClick={() => setSelected('AllDeliveries')}
              icon={<FaWarehouse />}
            >
              {' '}
              All Deliveries
            </MenuItem>
            <MenuItem
              onClick={() => setSelected('AllTasksApproval')}
              icon={<FaWarehouse />}
            >
              {' '}
              All Tasks Approvals
            </MenuItem>
          </SubMenu>

          {admin && (
            <SubMenu title={'User Management'} icon={<FaUserEdit />}>
              <MenuItem onClick={() => setSelected('Users')}>Users </MenuItem>
              <MenuItem onClick={() => setSelected('AddNewUser')}>
                Add New User
              </MenuItem>
              <MenuItem onClick={() => setSelected('EditUser')}>
                Edit User{' '}
              </MenuItem>
            </SubMenu>
          )}
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          {email ? (
            <div>
              <p>{email.split('@')[0]}</p>
              <a
                href="#"
                className="sidebar-btn"
                rel="noopener noreferrer"
                onClick={logOutHandler}
              >
                <FaGithub />
                <span
                  style={{
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                  }}
                >
                  Log Out
                </span>
              </a>
            </div>
          ) : (
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
          )}
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
