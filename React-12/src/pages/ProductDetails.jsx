import { useNavigate, useParams } from "react-router"

const ProductDetails = () => {
    // const params = useParams();
    // console.log(params)
    const {id} = useParams();

    const navigate = useNavigate();
    const backHandler = () => {
        // navigate("/") //رفتن به صفحه اولی
        navigate(-1) //رفتن به یک صفحه قبل
        // navigate(-1,{replace:false}) //به یکک صفخه قبل می رود ولی امکان رفتن دوباره به صفحه ای که در آن بودیم وجود ندارد
    }
  return (
    <div>
      <h2>Product Details</h2>
      {/* <h3>This is Id {params.id}</h3> */}
      <h3>This is Id {id}</h3>
      <button onClick={backHandler}>Back</button>
    </div>
  )
}

export default ProductDetails
