


const addUserBroadcast = function(user){

    console.log(user);
    return ({
        type:'NEW_USER',
        payload:user
    })

}

export default addUserBroadcast