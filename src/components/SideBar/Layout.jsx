import React, { useEffect, useState } from 'react';
import AddNewProject from '../AddNewProject/AddNewProject';
import Deliveries from '../Deliveries/Deliveries';
import AllDeliveries from '../History/AllDeliveries';
import History from '../History/AllDeliveries';
import AllTasksApproval from '../History/AllTasksApproval';
import Login from '../Login/Login';
import MyProject from '../MyProject/MyProject';
import ApproveTask from '../ProjectManagement/ApproveTask';
import AddNewUser from '../UserMangement/AddNewUser';
import EditUser from '../UserMangement/EditUser';
import User from '../UserMangement/User';
import Aside from './Aside';
import Main from './Main';

function Layout({ setLocale }) {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const [selected, setSelected] = useState(() => {
    const selected = localStorage.getItem('selected');
    return selected !== null ? selected : 'MyProject';
  });

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  useEffect(() => {
    window.localStorage.setItem('selected', selected);
  }, [selected]);

  return (
    <div className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
      <Aside
        image={image}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        setSelected={setSelected}
      />
      {selected === 'MyProject' && (
        <MyProject
          toggled={toggled}
          collapsed={collapsed}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
        />
      )}
      {selected === 'MyTasks' && (
        <Main
          toggled={toggled}
          collapsed={collapsed}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
        />
      )}
      {selected === 'AddNewProject' && (
        <AddNewProject
          toggled={toggled}
          collapsed={collapsed}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
        />
      )}
      {selected === 'Login' && (
        <Login
          toggled={toggled}
          collapsed={collapsed}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
        />
      )}
      {selected === 'Deliveries' && (
        <Deliveries
          toggled={toggled}
          collapsed={collapsed}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
        />
      )}
      {selected === 'AddNewUser' && (
        <AddNewUser
          toggled={toggled}
          collapsed={collapsed}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
        />
      )}
      {selected === 'EditUser' && (
        <EditUser
          toggled={toggled}
          collapsed={collapsed}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
        />
      )}
      {selected === 'Users' && (
        <User
          toggled={toggled}
          collapsed={collapsed}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
        />
      )}
      {selected === 'ApproveTasks' && (
        <ApproveTask
          toggled={toggled}
          collapsed={collapsed}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
        />
      )}
      {selected === 'AllDeliveries' && (
        <AllDeliveries
          toggled={toggled}
          collapsed={collapsed}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
        />
      )}
      {selected === 'AllTasksApproval' && (
        <AllTasksApproval
          toggled={toggled}
          collapsed={collapsed}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
        />
      )}
    </div>
  );
}

export default Layout;
