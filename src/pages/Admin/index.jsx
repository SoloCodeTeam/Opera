import Project from './Projects';
import Blogs from './Blogs';
import Message from './Message';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import OperaIco from "../../operaIcon.ico"
import './style.css';

function Admin() {
  const navigate = useNavigate();
  const [handleLi, setHandleLi] = useState('')
  useEffect(() => {
    window.localStorage.getItem("AuthToken") ? console.log("ok") : navigate("/sign")
  }, [])
  const HandleLi = (e) => {
    setHandleLi(e.target.id)
  }
  return (
    <div className="Admin"> 
      <div className="Sidebar">
        <img src={OperaIco} />
        <ul>
            <li><NavLink to='/' className='Linker'><i className="fa-solid fa-house"></i> <p  className='SideText'>Home</p></NavLink></li>
            <li onClick={HandleLi} id="Projects"><i onClick={HandleLi} id="Projects" className="fa-solid fa-folder"></i> <p  id="Projects" onClick={HandleLi} className='SideText'>Projects</p></li>
            <li onClick={HandleLi} id="Message"><i onClick={HandleLi} id="Message" className="fa-solid fa-message"></i> <p  id="Message" onClick={HandleLi} className='SideText'>Messages</p></li>
            <li onClick={HandleLi} id="Blogs"><i onClick={HandleLi} id="Blogs" className="fa-solid fa-user"></i> <p  id="Blogs" onClick={HandleLi} className='SideText'>Admins</p></li>
        </ul>
      </div>
      <div className="AdminMain">
        {handleLi == "Projects" ? <Project/> :
        handleLi == "Message" ? <Message/> : 
        handleLi == "Blogs" ? <Blogs/> :null
      }
      </div>
    </div>
  );
}

export default Admin;