import ProductsCard from './components/ProductsCard'
import { productList } from './data'
import { useState } from 'react';
import Modal from './components/UI/Modal'
import { Button } from '@headlessui/react';
import { formInputsList } from './data';
import Input from './components/UI/Input';
function App() {
  const renderProductList = productList.map(prod => (
    <ProductsCard key={prod.id} product={prod} />
  ));
  const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  const renderInput=formInputsList.map(inp=>(
    <div className="flex flex-col my-3">
     <label className='text-md' htmlFor={inp.id}>{inp.label}</label>
     <Input type={inp.type} id={inp.id} name={inp.name} />
    </div>
  ))
  return (
    <main className="container mx-auto p-4">
      <Button className='w-full  p-3 rounded-sm bg-purple-600' onClick={open}>ADD</Button>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} title='Add New Product' isClose={close} >
     
      <div className="space-y-3">
      {renderInput}
      <div className='flex space-x-3 mt-3' >   
        <Button className='w-full text-white p-3 rounded-md bg-blue-600'>Submit</Button>
        <Button className='w-full text-white p-3 rounded-md  bg-gray-400'> Cancel</Button>
        </div>
      </div>
       
      
      </Modal>
    </main>
  );
}

export default App;
