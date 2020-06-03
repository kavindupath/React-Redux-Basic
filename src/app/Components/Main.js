import React from "react";
import {setName} from "../actions/userActions";


export const Main=(props)=> {

    
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12"></div>
                    <h2>The Main Page</h2>
                </div>


                <div className="row">
                    <div className="col-xs-12"></div>
                    <button className="btn btn-primary" onClick={()=>props.changeUserName()}>Change User Name</button>

                </div>
            </div>


        );
    }



