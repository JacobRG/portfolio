import React from 'react'

const MyDivider = ({content}) => {
  return (
    <div className="absolute bottom-2 left-0 right-0 text-center mx-72">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
        <span className="bg-white px-3 text-base font-medium leading-6 text-gray-900">{content}</span>
        </div>
    </div>
  )
}

export default MyDivider