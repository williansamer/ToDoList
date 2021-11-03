import React from "react";

    function DoneImg(props){ // Define a function to render the done image
        if(props.done){
            return( <img alt="on" src="../../assets/on.png"></img>)
        } else{
            return (<img alt="off" src="../../assets/off.png"></img>)
        }
}

export default DoneImg;