import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const ProductsDetails = ({ products }) => {
  const navigate = useNavigate();
  function handleClickforBack() {
    navigate(-1)
  }
  const { id } = useParams()
  const filterOutput = products.filter((products) => {
    return products.id === parseInt(id)
  })
  console.log(filterOutput)
  return (
    <>
     <button onClick={handleClickforBack} className='px-8 py-2 border-black bg-slate-900 text-white rounded-lg mx-5 my-5'>
        BACK
      </button>
      <div className='flex flex-col w-1/3 rounded-lg mx-20 my-20 border-2 p-5 bg-slate-400 text-black'>
        <h1 className='text-2xl font-semibold uppercase pb-5'>Category : {filterOutput[0].category}</h1>
        <h1 className='text-xl font-semibold'>Description : {filterOutput[0].description}</h1>
        <img src={filterOutput[0].image} alt="" className='w-72 h-80 mix-blend-color-burn pt-10' />
        <h1 className='text-xl font-bold py-5 text-red-600'>Price : {filterOutput[0].price}</h1>
      </div>
     
    </>
  )
}

export default ProductsDetails