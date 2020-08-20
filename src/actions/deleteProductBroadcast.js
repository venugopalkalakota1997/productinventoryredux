const deleteProductBroadcast = function(product){

    console.log(product);
    console.log("Broadcast the custom event with payload....");
    console.log("Reducer will capture the custom-event + payload....")
    return ({
        type:'DELETE_PRODUCT',
        payload:product
    })

}

export default deleteProductBroadcast