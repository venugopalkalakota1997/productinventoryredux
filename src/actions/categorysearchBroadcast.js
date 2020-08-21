
const getcategorysearchBroadcast = function(product){
    return ({
        type:'CATEGORY_SEARCH_PRODUCT',
        payload:product
    })

}

export default getcategorysearchBroadcast