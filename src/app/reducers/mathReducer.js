
const mathReducer = (state ={result:1,lastValues:[]} , action) => {
    switch (action.type) {
      case "ADD":
        state = {
          ...state, // take all the properties of the old state or here the inital state
          /*similar to this
          result:state.result,
          lastValues: state.lastValues,
          username: state.username*/
  
          //below the state means the old state or the initial state
          result: state.result + action.payload,
          lastValues: [...state.lastValues, action.payload]
  
        };
        break;
  
      case "SUBSTRACT":
        state = {
          ...state,
  
          //below the state means the old state or the initial state
          result: state.result - action.payload,
          lastValues: [...state.lastValues, action.payload]
  
        };
        break;
    }
  
    return state;
  };


  export default mathReducer;
  
  
  