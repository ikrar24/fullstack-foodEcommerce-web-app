export const profileInitiValue = {
    Name: "Ikar Anari",
    Address: "Near k.K School",
    PinCode: "828122",
    HouseName: "Golden House",
    PhoneNumber: "9060917993",
}


export function updateProfile (state , action ) {
switch (action.type) {
    case "PROFILE_INPUTS":
        return {
            ...state,
            [action.inputName]: action.inputValue
        }
        

    default:
        return state
}


    
} 