import Project from './Projects';
import Blogs from './Blogs';
import Message from './Message';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import OperaIco from "../../operaIcon.ico"
import './style.css';
import { useDispatch } from 'react-redux';
import { GetBlog, GetBlogMore } from '../../redux/blog';
import { GetMessage } from '../../redux/message';
import { GetProject, GetProjectId } from '../../redux/project';

function Admin() {
  const navigate = useNavigate();
  const [handleLi, setHandleLi] = useState('')
  const dispatch = useDispatch()
  const navlink = useNavigate()
  useEffect(() => {
    window.localStorage.getItem("AuthToken") ? console.log("ok") : navigate("/sign")
  }, [])
  const HandleLi = (e) => {
    setHandleLi(e.target.id)
  }
  const SignOut = () => {
    window.localStorage.removeItem("AuthToken")
    navlink("/sign")
  }
  const Refresh = () => {
    dispatch(GetBlog)
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
            <li onClick={SignOut} ><i onClick={SignOut} className="fa-solid fa-right-from-bracket"></i> <p onClick={SignOut} className='SideText'>Sign out</p></li>
            {/* <li onClick={Refresh} ><i onClick={Refresh} className="fa-solid fa-rotate-right"></i> <p onClick={Refresh} className='SideText'>Refresh</p></li> */}
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