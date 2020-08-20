const addProductBroadcast = function(product){

    console.log(product);
    return ({
        type:'UPDATE_PRODUCT',
        payload:product
    })

}

export default addProductBroadcast