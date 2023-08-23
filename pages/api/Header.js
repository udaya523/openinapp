import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUser,  } from '@fortawesome/free-solid-svg-icons';
import { useSession } from 'next-auth/react';

const Header = () => {
  const { data: session, status } = useSession();
  console.log(session)

  return (
    <div className="header" style={{display:'flex', flexDirection:'row'}}>
      <h1 className="dashboard-heading" >Dashboard</h1>
      <div className="search-bar-container" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>

        <div className="search-button" 
        style={{display:'flex',
         alignItems:'center', 
         justifyContent:'center', paddingTop:'20px'}}>
          <input  type="text" placeholder="Search..." />
          <FontAwesomeIcon icon={faSearch} className='searchicon' />
        </div>
          <FontAwesomeIcon icon={faBell} className='bell-icon'/>
          {/* <FontAwesomeIcon icon={faBell} className='bell-icon' /> */}
          <img src={session.user.image} width={40} height={40} className='user-icon' style={{borderRadius:'50px'}}/>
        {/* <FontAwesomeIcon icon={faUser}  className='user-icon'/> */}
        {/* </div> */}
      </div>
    </div>

  );
};

export default Header;
