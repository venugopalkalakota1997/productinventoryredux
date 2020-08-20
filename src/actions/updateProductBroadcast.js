const updateProductBroadcast = function(product){

    console.log(product);
    return ({
        type:'UPDATE_PRODUCT',
        payload:product
    })

}

export default updateProductBroadcast