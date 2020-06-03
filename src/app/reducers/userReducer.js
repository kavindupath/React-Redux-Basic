

const userReducer = (state = {name:"Kavindu",age: 24}, action) => {
    switch (action.type) {
      case "SET_NAME":
        state = {
          ...state,
          name: action.payload  //overload the initial name property in initialUserState
  
        };
        break;
  
      case "SET_AGE":
        state = {
          ...state,
  
          age: action.payload
        };
        break;
    }
  
    return state;
  };
  
  export default userReducer;