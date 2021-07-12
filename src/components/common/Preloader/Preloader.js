import s from "../../common/Preloader/Preloader.module.css";
import loaderGif from "../../../assets/images/loaderGif.gif";
import React from "react";

let Preloader=(props)=>{
    return <div>
       <img className={s.loader} src={loaderGif} alt='loader'/>
       <img className={s.loader} src={loaderGif} alt='loader'/>
       <img className={s.loader} src={loaderGif} alt='loader'/>
    </div>
}
export default Preloader;
