const selectProductBroadcast = function(product){
    return ({
        type:'SELECT_PRODUCT',
        payload:product
    })

}

export default selectProductBroadcast