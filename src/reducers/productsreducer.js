
const allproductsreducer = function allproductsreducer(state = null, action) {
  console.log(action)
  var products = [

    {
      "name": "LG Televison",
      "productdetails": "hd tv 32inch",
      "quantity": "0",
      "price": "20000",
      "category": "Televison",
      "image": "televison.jpg",
      "id": 12
    },
    {
      "name": "LG Televison",
      "productdetails": "64 inch 4k ",
      "quantity": "0",
      "price": "640000",
      "category": "Televison",
      "image": "televison.jpg",
      "id": 14
    },
    {
      "name": "Iphone",
      "productdetails": "6gd ram/256gb memory",
      "quantity": "12",
      "price": "100000",
      "category": "Mobile",
      "image": "mobile.jpg",
      "id": 16
    },
    {
      "name": "oneplus 8pro",
      "productdetails": "8gb ram/256gb memory",
      "quantity": "10",
      "price": "70000",
      "category": "Mobile",
      "image": "mobile.jpg",
      "id": 17
    },
    {
      "name": "samsung S10",
      "productdetails": "8gb ram/256gb memory",
      "quantity": "22",
      "price": "10",
      "category": "Mobile",
      "image": "mobile.jpg",
      "id": 19
    },
    {
      "name": "venu",
      "productdetails": "hjjhhjhjhjhjhjhjhjhjhjhjnn",
      "quantity": "12",
      "price": "12",
      "category": "Televison",
      "image": "televison.jpg",
      "id": 23
    },
    {
      "name": "hp laptop",
      "productdetails": "intel i3 processor,1gb ram",
      "quantity": "50",
      "price": "300000",
      "category": "Computer Accessories",
      "image": "computer.jpg",
      "id": 24
    },
    {
      "name": "sofa",
      "productdetails": "eydrfkjyredfcvbhjui7trfgvbn",
      "quantity": "0",
      "price": "10000",
      "category": "Furniture",
      "image": "furniture.jpg",
      "id": 25
    },
    {
      "name": "Optical mouse",
      "productdetails": "opicat mouse",
      "quantity": "01",
      "price": "300",
      "category": "Computer Accessories",
      "image": "computer.jpg",
      "id": 26
    },
    {
      "name": "realme ",
      "productdetails": "12gd / 256gb",
      "quantity": "22",
      "price": "1000",
      "category": "Mobile",
      "image": "mobile.jpg",
      "id": 27
    }
  ]

  switch (action.type) {
    case "NEW_PRODUCT":
      console.log(action.payload);
      let length = state.length
      let newallproducts = [{
        id: length + 1,
        name: action.payload.name,
        productdetails: action.payload.productdetails,
        quantity: action.payload.quantity,
        price: action.payload.price,
        category: action.payload.category,
        image: action.payload.image
      }, ...state]
      return newallproducts
    case "DELETE_PRODUCT":
      console.log(action.payload);
      products = state.filter((product) => {
        return (product.id !== action.payload.id)
      })
      return products;
    case "UPDATE_PRODUCT":
      console.log(action.payload)
      return products.map(product => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            name: action.payload.name,
            productdetails: action.payload.productdetails,
            quantity: action.payload.quantity,
            price: action.payload.price,
            category: action.payload.category,
            image: action.payload.image
          }
        };
        return product;
      });
    case "SEARCH_PRODUCT":
      products = products.filter((product) => {
        return (product.name.toLowerCase().includes(action.payload))
      })
      return products
    default:
      break;
  }

  return products
}

export default allproductsreducer