import React from "react";

    function DoneImg(props){ // Define a function to render the done image
        if(props.done){
            return( <img alt="on" src="../../public/assets/on.png"></img>)
        } else{
            return (<img alt="off" src="../../public/assets/off.png"></img>)
        }
}

export default DoneImg;