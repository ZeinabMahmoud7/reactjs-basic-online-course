import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { ReactNode, useState } from 'react'
interface IProps{
    isOpen:boolean;
    isClose:()=>void;
    title?:string;
    children:ReactNode;
}
export default function Modal({isOpen,isClose,title,children}:IProps) {

  return (
    <>
   
      <Dialog open={isOpen} as="div" className="relative  z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10  w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full shadow-xl max-w-md rounded-xl  p-6 bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-black">
                {title}
              </DialogTitle>
            <div className="mt-4">
                {children}
            </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}