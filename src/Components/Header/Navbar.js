import { Menu,Image } from 'antd';

import Navbutton from './Navbutton';
import Navicon from './Navicon';
import Navuserimg from './Navuserimg';

 const Navbar = () => {
   return (
        <>                                         
      <Menu  mode="horizontal">
        <Menu.Item  style={{marginLeft:'4rem'}} >
         <a href='#'>
          <Image src='../opinion-logo.png' alt='opinionLogo' 
          style={{width:'80px',height:'72px',padding: '8px 0px 3px 6px'}}/>
          </a>
        </Menu.Item>
        <div style={{float:'right'}}>
          <div style={{marginTop:'1rem',justifyContent:'space-between'}}>
          <Navbutton value='Post Opinion' />
          <Navicon />
          <Navuserimg />
           </div>
          </div>
          </Menu>   
        </>
    )
}
export default Navbar
