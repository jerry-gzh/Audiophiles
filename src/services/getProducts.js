import axios from "axios";

const allProducts = async (state) => {
  const request = await axios.get ('https://react-fb-auth-29035-default-rtdb.firebaseio.com/products.json')
  state(request.data)
  //console.log(request.data)
}

export {
  allProducts
}