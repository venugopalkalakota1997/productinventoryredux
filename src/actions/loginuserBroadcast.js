const loginuserBroadcast = function(user){

    console.log(user);
    return ({
        type:'FIND_USER',
        payload:user
    })

}

export default loginuserBroadcast