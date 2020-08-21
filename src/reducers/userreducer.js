const allusersreducer = function alluserreducer(state = null, action) {
    var userdetails = [
        {
            "id": 1,
            "name": "venu",
            "contactnumber": 9703898363,
            "password": "pwd",
            "relatedTo_id": 1
        },
        {
            "password": "nn",
            "contactNumber": "nn",
            "id": 2
        },
        {
            "name": "jj",
            "password": "jj",
            "contactNumber": "jjj",
            "id": 3
        },
        {
            "name": "hh",
            "password": "hh",
            "contactNumber": "hh",
            "id": 4
        },
        {
            "name": "kk",
            "password": "kk",
            "contactNumber": "kk",
            "id": 5
        },
        {
            "name": "jkj",
            "password": "kjk",
            "contactNumber": "jkjk",
            "id": 6
        },
        {
            "name": "nn",
            "password": "nn",
            "contactNumber": "nn",
            "id": 7
        },
        {
            "name": "hjh",
            "password": "hjj",
            "contactNumber": "hjhj",
            "id": 8
        },
        {
            "name": "venu",
            "password": "pwd",
            "contactNumber": "9703898363",
            "id": 9
        },
        {
            "name": "kk",
            "password": "pwd",
            "contactNumber": "7894561230",
            "id": 10
        },
        {
            "name": "kiran",
            "password": "pw",
            "contactNumber": "7894561230",
            "id": 11
        },
        {
            "name": "hom",
            "password": "oo",
            "contactNumber": "7777777777",
            "id": 12
        },
        {
            "name": "jhh",
            "password": "pwd",
            "contactNumber": "7894661230",
            "id": 13
        },
        {
            "name": "venu",
            "password": "pwd",
            "contactNumber": "7894561230",
            "id": 14
        }
    ]
    switch (action.type) {
        case "NEW_USER":
            console.log("in userreducer" + state);
            console.log(action.payload);
            let length = state.length
            let newallusers = [{
                id: length + 1,
                name: action.payload.name,
                password:action.payload.password,
                contactNumber:action.payload.contactNumber
            }, ...state]
            console.log(newallusers);
            return newallusers
        case "FIND_USER":
            console.log(action.payload);
           userdetails= state.filter((user)=>{
              
             return(user.name===action.payload.username && user.password===action.payload.password );}
           )
           console.log(userdetails)
          return userdetails
         
        default:
            break;
    }
    return userdetails
}

export default allusersreducer