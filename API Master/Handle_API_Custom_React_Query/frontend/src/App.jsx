import { useEffect, useState } from "react"
import axios from 'axios'

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    (async ()=> {
      const res = await axios.get('/api/products')
      console.log(res.data)
    })()
  },[])

  return (
    <div>
      <h1>API Integration</h1>
      <h2>Num of products are: {products.length}</h2>
    </div>
  )
}

export default App
