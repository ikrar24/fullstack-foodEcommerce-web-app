import React, { useReducer } from 'react';
import {reducerFun, formState} from '../Componets/OrderPage/OrderFunctions';



function UseReducer() {
  const [state, dispatch] = useReducer(reducerFun, formState);


  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });


  };

  return (
    <form>
      <input
        type="text"
        name="Name"
        value={state.Name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="address"
        value={state.address}
        onChange={handleChange}
        placeholder="Address"
      />
      <input
        type="text"
        name="pinCode"
        value={state.pinCode}
        onChange={handleChange}
        placeholder="Pin Code"
      />
      <input
        type="text"
        name="phone"
        value={state.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
    </form>
  );
}

export default UseReducer;
