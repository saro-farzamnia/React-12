import { useEffect } from "react";
import { useNavigate } from "react-router"

const Landeng = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate("/")
    },[])
  return (
    <div>
      <h1>LANDING PAGE</h1>
    </div>
  )
}

export default Landeng
 
//قبلا این صفحه وجود داشته ولی حالا وجود ندارد و زمانی که کاربری دنبال آن بگردد بک بار صفخه رندر مشود و به صغحه اصلی میروذ
// این روش اول است