// import {v4 as uuid} from "uuid"
import { IformInput, IProduct } from "../interfaces"

export const productList:IProduct[]=[
    {
        id:"1",
        title:"2022 Genesis GV78: Nominee",
        description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minima velit facilis deserunt optio voluptatem sequi accusantium nesciunt labore quasi!",
        imageURL:"https://media.istockphoto.com/id/942526180/photo/3d-illustration-of-red-generic-sports-coupe-car-on-white.jpg?s=612x612&w=0&k=20&c=aC2cknyVpBqFSDECB950gAn4IzJsdjit3fM2W8ehxPM=",
        price:"5000",
        colors:["red","blue"],
        category:{
            name:"Cars",
            imageURL:"https://media.istockphoto.com/id/942526180/photo/3d-illustration-of-red-generic-sports-coupe-car-on-white.jpg?s=612x612&w=0&k=20&c=aC2cknyVpBqFSDECB950gAn4IzJsdjit3fM2W8ehxPM=",
        }
        
    },
    {
        id:"2",
        title:"2022 Genesis GV78: Nominee",
        description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minima velit facilis deserunt optio voluptatem sequi accusantium nesciunt labore quasi!",
        imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrFjrAigg8zkdOMzfkuRWr_DbpiV4gs2n0w&s",
        price:"400",
        colors:["red","blue"],
        category:{
            name:"Cars",
            imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrFjrAigg8zkdOMzfkuRWr_DbpiV4gs2n0w&s",
        }
        
    }
]
export const formInputsList :IformInput[]=[
    {
        id:"title",
        name:"title",
        label:"Product Title",
        type:"text",
    },
    {
        id:"description",
        name:"description",
        label:"Product description",
        type:"text",
    },
    {
        id:"image",
        name:"imageURL",
        label:"Product Image URL",
        type:"text",
    },
    {
        id:"price",
        name:"price",
        label:"Product Price",
        type:"number",
    }
]