import React from 'react';

import { User } from "../Components/User";
import { Main } from "../Components/Main";
import { connect } from 'react-redux';
import {setName} from "../actions/userActions";


 class App extends React.Component {

render() {
    return (
        <div className="container">

            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">

                <Main changeUserName={()=>this.props.LocalsetNameMethod("Anna")} />

                    <User username={this.props.Localuser.name} />

                </div>
            </div>
        </div>
    );
}
}

const MapStateToProps =(state)=> {
    return{
        Localuser: state.user,
        Localmath: state.math

    };
};

const MapDispatchToProps =(dispatch)=> {
    return{
        LocalsetNameMethod: (name)=>{  //setName is a method which take name as a parameter
            dispatch(setName(name));

        }

    };
};


export default connect (MapStateToProps,MapDispatchToProps)(App);
