import * as React from "react"
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";


const GoBack = () => {
  const history = useNavigate();

  const handleMoveBack = () => {
    // Go back to the previous page
    history(-1);
  };
  
    return (
      <div >
        <button type="button" id="goback" className="absolute top-5 left-5 " onClick={handleMoveBack}><IoMdArrowRoundBack size={45} /></button>
      </div>
    );
  };
  
  export default GoBack;