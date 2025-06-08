import { FaPencilAlt } from "react-icons/fa";
import { useReducer } from "react";
import { updateProfile , profileInitiValue } from "./ReducerProfile";
import { toast } from "react-toastify";
import {
  tailwindProfileContainer,
  tailwindProfileBox,
  tailwindProfileImgBox,
  tailwindBorder,
  tailwindProfileInputs,
} from "./Profile.Taiwind";

function Profile() {

const [state, dispatch] = useReducer(updateProfile , profileInitiValue)




const updateProfileHandle = (e)=>{
  e.preventDefault()
   const [Name , Address, Phone, PinCode, HouseName ] = state

   console.log(Name);

   if (!Name||!Address||!Phone||!PinCode||!HouseName) {
    console.log("hua");
   }

}



const profileInputHandle = (e)=>{
 dispatch({
  type:"PROFILE_INPUTS",
 inputName:e.target.name,
 inputValue:e.target.value,
 })

}




  return (
    <>
      <section className={`profileContainer ${tailwindProfileContainer} mb-20 mt-20`}>
        <main className={`tailwindProfileBox ${tailwindProfileBox}`}>
          <div className={`${tailwindProfileImgBox}`}>
            <img
              src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
              alt="profileImg"
              className="profileImg w-[90px] border-solid border-black border-2 rounded-full"
            />
            <FaPencilAlt className="bottom-3 right-2 absolute cursor-pointer" />
          </div>

          <div className="nameBox">Ikrar Ansari</div>

          <form
            className={`userEditBox flex flex-col items-center ${tailwindBorder} gap-3 w-full`}
            onSubmit={updateProfileHandle}
          >
            <input
              type="text"
              className="mt-2 outline-none p-[10px] w-[80%] rounded-md bg-gray-200"
              placeholder="Name"
              name="Name"
              value={state.Name}
              onChange={profileInputHandle}
            />

            <input
              type="text"
              className={tailwindProfileInputs}
              placeholder="Address"
              name="Address"
              value={state.Address}
              onChange={profileInputHandle}
            />

            <input
              type="text"
              className={tailwindProfileInputs}
              placeholder="Pin Code"
              name="PinCode"
              value={state.PinCode}
              onChange={profileInputHandle}
            />

            <input
              type="text"
              className={tailwindProfileInputs}
              placeholder="House Name"
              name="HouseName"
              value={state.HouseName}
              onChange={profileInputHandle}
            />

            <input
              type="number"
              className={tailwindProfileInputs}
              placeholder="Phone Number"
              name="PhoneNumber"
              value={state.PhoneNumber}
              onChange={profileInputHandle}
            />

            <button className="bg-green-400 p-2 rounded-md w-[80%]">Done</button>
          </form>
        </main>
      </section>
    </>
  );
}

export default Profile;
