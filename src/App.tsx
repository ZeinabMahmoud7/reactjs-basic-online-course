import ProductsCard from './components/ProductsCard'
import { productList } from './data'
import { useState } from 'react';
import Modal from './components/UI/Modal'
import { Button } from '@headlessui/react';

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

  return (
    <main className="container mx-auto p-4">
      <Button className='w-full  p-3 rounded-sm bg-purple-600' onClick={open}>ADD</Button>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} title='Add New Product' isClose={close} >
        <div className='flex space-x-3'>
        <Button className='w-full text-white p-3 rounded-sm bg-blue-400'>Submit</Button>
        <Button className='w-full text-white p-3 rounded-sm  bg-gray-400'> Cancel</Button>
        </div>
      
      </Modal>
    </main>
  );
}

export default App;
