import { GetMessage } from "../../../redux/message";
import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import './style.css';

function Message() {
  const CopiedMes = useRef()
  const dispatch = useDispatch()
  const dataMessage = useSelector(state => state.message)
  const config = {
    headers:{
        token: `${window.localStorage.getItem("AuthToken")}` 
    }
  }
  useEffect(() => {
    dispatch(GetMessage(config))
  },[])
  const HandleCopy = (e) => {
    var textField = document.createElement('textarea')
    textField.innerText = e.target.id
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    CopiedMes.current.style.display = 'block'
    setTimeout(() => {
      CopiedMes.current.style.display = 'none'
    }, 4000)
  }
  console.log(dataMessage.getMessage.Error);
  return (
    <div className="Message">
      <h1><i className="fa-solid fa-message"></i> Messages</h1>
      <ul>
        {dataMessage.getMessage.Success == true ? 
        dataMessage.getMessage?.Data.length > 0 ?
        dataMessage.getMessage?.Data.map((elem, index) =>
          <li key={index}>
            <div className="MessageTexts">
              <h4>{elem.fullName}</h4>
              <h5 onClick={HandleCopy} id={elem.phone}>{elem.phone}</h5>
            </div>
            <p>{elem.message}</p>
          </li>) : <h2>No Messages Here Yet!</h2>
          : dataMessage.getMessage.Loading == true ? <i className="loading fa-solid fa-spinner fa-spin-pulse"></i> : dataMessage.getMessage.Error == true ? <h3 className='Error'><i className="fa-solid fa-triangle-exclamation fa-fade"></i> Error 500</h3> : null}
      </ul>
      <div ref={CopiedMes} className="CopiedMessage"><i className="fa-solid fa-file"></i> Number copied to clipboard.</div>
    </div>
  );
}

export default Message;