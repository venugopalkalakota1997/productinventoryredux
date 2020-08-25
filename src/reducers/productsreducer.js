
const allproductsreducer = function allproductsreducer(state = null, action) {
  console.log(action)
  var products = 
    [
  {
    "id": 1,
    "name": "Iphone",
    "productdetails": "6gd ram/256gb memory",
    "quantity": "100",
    "price": "100000",
    "category": "Mobile",
    "image": "mobile.jpg"
  },
  {
    "id": 2,
    "name": "oneplus 8pro",
    "productdetails": "8gb ram/256gb memory ",
    "quantity": "0",
    "price": "70000",
    "category": "Mobile",
    "image": "mobile.jpg"
  },
  {
    "name": "samsung S10",
    "productdetails": "8gb ram/256gb memory",
    "quantity": "22",
    "price": "10",
    "category": "Mobile",
    "image": "mobile.jpg",
    "id": 3
  },
  {
    "name": "venu",
    "productdetails": "hjjhhjhjhjhjhjhjhjhjhjhjnn",
    "quantity": "12",
    "price": "12",
    "category": "Televison",
    "image": "televison.jpg",
    "id": 4
  },
  {
    "name": "hp laptop",
    "productdetails": "intel i3 processor,1gb ram",
    "quantity": "50",
    "price": "300000",
    "category": "Computer Accessories",
    "image": "computer.jpg",
    "id": 5
  },
  {
    "name": "sofa",
    "productdetails": "eydrfkjyredfcvbhjui7trfgvbn",
    "quantity": "0",
    "price": "10000",
    "category": "Furniture",
    "image": "furniture.jpg",
    "id": 6
  },
  {
    "name": "Optical mouse",
    "productdetails": "opicat mouse",
    "quantity": "01",
    "price": "300",
    "category": "Computer Accessories",
    "image": "computer.jpg",
    "id": 7
  },
  {
    "name": "realme ",
    "productdetails": "12gd / 256gb",
    "quantity": "22",
    "price": "1000",
    "category": "Mobile",
    "image": "mobile.jpg",
    "id": 8
  },
  {
    "id": 9,
    "name": "sony tv",
    "productdetails": "32inch LCD",
    "quantity": "3",
    "price": "20000",
    "category": "Televison",
    "image": "televison.jpg"
  },
  {
    "id": 10,
    "name": "venu",
    "productdetails": "jjjj",
    "quantity": "10",
    "price": "10",
    "category": "Televison",
    "image": "televison.jpg"
  },
  {
    "name": "LG Telev",
    "productdetails": "hghgjhjuhg",
    "quantity": "0",
    "price": "100",
    "category": "Televison",
    "image": "televison.jpg",
    "id": 11
  },
  {
    "name": "venu",
    "productdetails": "uhjbnjhgvuytghbvn ",
    "quantity": "20",
    "price": "200",
    "category": "Furniture",
    "image": "mobile.jpg",
    "id": 12
  },
  {
    "id": 13,
    "name": "LG Telev",
    "productdetails": "uyhjbnhjnhujn",
    "quantity": "20",
    "price": "100",
    "category": "Televison",
    "image": "furniture.jpg"
  },
  {
    "name": "LG Telev",
    "productdetails": "rdfghbjnkuytf",
    "quantity": "22",
    "price": "100",
    "category": "Televison",
    "image": "televison.jpg",
    "id": 14
  },
  {
    "id": 15,
    "name": "ytrfcvbhjghfv",
    "productdetails": "ygufcvbnhjgv",
    "quantity": "100",
    "price": "100",
    "category": "Televison",
    "image": "computer.jpg"
  },
  {
    "name": "new",
    "productdetails": "hgbhjghbvnhjb",
    "quantity": ".0",
    "price": "1000",
    "category": "Televison",
    "image": "mobile.jpg",
    "id": 16
  }
]
  
  
  switch (action.type) {
    case "ALL_PRODUCT":
      state = action.payload
      return state;
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
      var updatedproducts = state.map(product => {
        console.log(product);
        if (product.id === action.payload.id) {
          product.name = action.payload.name;
          product.productdetails = action.payload.productdetails;
          product.quantity = action.payload.quantity;
          product.price = action.payload.price;
          product.category = action.payload.category;
          product.image = action.payload.image;
        }
        return product;
      });
      console.log(updatedproducts);
      return updatedproducts;
    case "SEARCH_PRODUCT":
      
       products = products.filter((product) => {
        return (product.name.toLowerCase().includes(action.payload))
      })
      return products;
    case "CATEGORY_SEARCH_PRODUCT":

      products = products.filter((fproduct) => {

        return (fproduct.category.includes(action.payload))
      })
      return products;
    case "AVAILABLE_PRODUCT":
      let newproducts = products.filter((fproduct) => {
        return (fproduct.quantity !== "0")
      })
      return newproducts;

    default:
      break;
  }
  return products;
}

export default allproductsreducer