import React from "react";
import Card from "./Cards";

function Modal(props){

    return(
        <div className="modal">
            <Card className="card-modal" >
                {props.children}
            </Card>
        </div>
    )
}

export default Modal;