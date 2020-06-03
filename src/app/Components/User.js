import React from "react";

export const User= (props)=> {

        return (
            <div>
                <div className="row">
                    <div className="col-xs-12"></div>
                    <h2>The User Page</h2>
                </div>


                <div className="row">
                    <div className="col-xs-12"></div>
                    <p>User Name : {props.username}</p>
                </div>
            </div>


        );
    }



