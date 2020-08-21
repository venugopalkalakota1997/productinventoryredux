const getavalabilestockBroadcast = function(product){
    return ({
        type:'AVAILABLE_PRODUCT',
        payload:product
    })

}

export default getavalabilestockBroadcast