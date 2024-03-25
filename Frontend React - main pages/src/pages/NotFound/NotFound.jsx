import React from "react";
import svg from "../../assets/Na_Nov_26.jpg";
import './style.css'
import { Button } from "@mui/base";
import { useNavigate } from "react-router";

const PageNotFound = () => {
    const navigate =useNavigate()
    return (
        <>
            <div className="cont-404">
                <img  src={svg} alt="svg" />
                <Button  style={{backgroundColor:"#3563E9",color:'#fff', border:'1px none ',borderRadius:"5px" ,textTransform:'unset' , cursor : "pointer"}}  onClick={()=>{
                   navigate('/') 
                }} >Back to Home</Button>
            </div>
        </>
    );
};

export default PageNotFound;