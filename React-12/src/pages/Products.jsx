import { Link } from "react-router";

const Products = () => {
  const data = [
    {id: 1 , name: "product1"},
    {id: 2 , name: "product2"},
    {id: 3 , name: "product3"},
    {id: 4 , name: "product4"},
  ];
  return (
    <div>
        <h2>Products</h2>
        {/* <ul>
          {
            data.map((item) => (
              <Link to={`/products/${item.id}`} >
                <li key={item.id}>{item.name}</li>
              </Link>
            ))
          }
        </ul> */}

        <ul>
          {
            data.map(i => (
              <li key={i.id}>
              <Link to={`/products/${i.id}`} >
                {i.name}
              </Link>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default Products
