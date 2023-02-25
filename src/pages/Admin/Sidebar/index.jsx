import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function Sidebar() {
    const HandleLi = (e) => {
      window.localStorage.setItem('HandleLi', e.target.id)
      window.location.reload()
    }
  return (
    <div className="Sidebar">
      <button>T</button>
      <ul>
          <li><NavLink to='/' className='Linker'><i class="fa-solid fa-house"></i> <p className='SideText'>Home</p></NavLink></li>
          <li onClick={HandleLi} id="Projects"><i class="fa-solid fa-file"></i> <p id="Projects" onClick={HandleLi} className='SideText'>Projects</p></li>
          <li onClick={HandleLi} id="Blogs"><i class="fa-solid fa-folder"></i> <p id="Blogs" onClick={HandleLi} className='SideText'>Blogs</p></li>
          <li onClick={HandleLi} id="Messages"><i class="fa-solid fa-message"></i> <p id="Messages" onClick={HandleLi} className='SideText'>Messages</p></li>
      </ul>
    </div>
  );
}

export default Sidebar;