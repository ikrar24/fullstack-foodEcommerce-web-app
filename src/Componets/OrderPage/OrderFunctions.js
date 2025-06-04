// formReducer.js

export const formState = {
    Name: "Ikrar Ansari",
    Address: "Near K.k School",
    PinCode: "828122",
    Phone: "9060917993",
  };
  
  export function reducerFun(state, action) {
    switch (action.type) {
      case "INPUT_VALUE":
        return {
          ...state,
          [action.field]: action.value,
        };
      default:
        return state;
    }
  }
  