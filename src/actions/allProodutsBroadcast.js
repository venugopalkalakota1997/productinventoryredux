const allProodutsBroadcast = function(products){

    console.log(products);
    return ({
        type:'ALL_PRODUCT',
        payload:products
    })

}

export default allProodutsBroadcast