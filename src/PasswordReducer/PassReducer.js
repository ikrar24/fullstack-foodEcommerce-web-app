const UserPassInit = {
 password:""   
}



function UserPassFun(state , action){

    switch (action.type) {
       case "USER_PASSWORD":
        return {
          
            [action.feild]:action.password
        }

        default:
            return state
    }

}

export {UserPassInit , UserPassFun}