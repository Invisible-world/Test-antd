import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined,UserOutlined } from '@ant-design/icons';
import Userlist from './Userlist';

const { SubMenu } = Menu;

const Navbar = ({ resourceType,setresourceType,items,click,setClick }) => {
  
  console.log(items)
  
  const handleClick = () => {
    setresourceType('posts')
    setClick(!click)

    
   
         
       
        }
       
    
       
         
         
       

      
   
    return (
        <>
         <Menu  mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />} style={{marginLeft:'8rem'}} 
        onClick={handleClick}>
          Home
        </Menu.Item>
        <Menu.Item key="app"  icon={<AppstoreOutlined />}>
          About
        </Menu.Item>
        <Menu.Item key="alipay" icon={<SettingOutlined />}>
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </Menu.Item>
        <SubMenu key="SubMenu"  icon={<UserOutlined />} title="User" style={{float:'right'}}>
          <Menu.ItemGroup title='Setting' >
            <Menu.Item key="setting:1">Privacy</Menu.Item>
            <Menu.Item key="setting:2">Register</Menu.Item>
            <Menu.Item key="setting:3">Profile</Menu.Item>
            <Menu.Item key="setting:4">Logout</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
       
      </Menu>   
        </>
    )
}

export default Navbar
