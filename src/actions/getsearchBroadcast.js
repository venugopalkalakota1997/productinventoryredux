const getsearchBroadcast = function(product){
    return ({
        type:'SEARCH_PRODUCT',
        payload:product
    })

}

export default getsearchBroadcast