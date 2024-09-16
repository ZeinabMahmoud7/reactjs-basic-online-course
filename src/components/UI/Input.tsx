import { ButtonHTMLAttributes } from "react"
interface IProps extends ButtonHTMLAttributes <HTMLButtonElement>{}
const Input = ({...rest}:IProps) => {
  return  <input className='p-2 mt-1 shadow-md border-[1px] border-gray-400  focus:border-indigo-600  focus:outline-none focus:ring-1 
                            rounded-md 
                           ' {...rest} />;
  
}

export default Input
