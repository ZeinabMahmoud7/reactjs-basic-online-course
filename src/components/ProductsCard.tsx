import { IProduct } from "../interfaces"
import { txtSlicer } from "../UtLS/function";
import Image from "./Image" 
import Button from "./UI/Button"
interface IProps{
product:IProduct;
}

const ProductsCard = ({product}:IProps) => {
    const {title,price,imageURL,description,category}=product
  return (
  <div className="max-w-sm mx-auto md:max-w-lg border-2 rounded p-2 flex flex-col">
   <Image imageUrl={imageURL}
   alt="Product Image"
   className="mb-2"
   />
     <h1 className="font-medium text-xl text-blue-950">{title} </h1>
      <p className="text-gray-500 py-2">{txtSlicer(description)}</p>
      <div className="flex my-3 items-center space-x-2">
            <span className="h-5 w-5 rounded-full bg-yellow-500"/>
            <span className="h-5 w-5 rounded-full bg-blue-500"/>
            <span className="h-5 w-5 rounded-full bg-red-500"/>
      </div>
      <div className="flex justify-between mb-2 items-center">
     <span className="font-semibold text-blue-700">{`${price}$`}</span>
     <img src={category.imageURL} className="h-10 try w-10  rounded-full" alt={category.name} />
      </div>
      <div className="flex space-x-2">
        <Button className=" bg-blue-600" onClick={()=>{
            console.log("hi");
        }}>EDIT</Button>
        <Button className=" bg-red-600 " width="w-full">DELETE</Button>
      </div>
    </div>
  )
}

export default ProductsCard
