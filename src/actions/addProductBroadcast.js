const addProductBroadcast = function(product){

    console.log(product);
    return ({
        type:'NEW_PRODUCT',
        payload:product
    })

}

export default addProductBroadcast