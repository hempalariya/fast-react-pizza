import React from 'react'
import Button from '../../ui/Button'
import { use } from 'react'
import { useDispatch } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice'

export default function UpdatePizzaQuantity({id, quantity}) {

    const dispatch = useDispatch()
  return (
    <div className='flex items-center gap-2 md:gap-3'>
      <Button type="round" onClick={() => {
        dispatch(decreaseItemQuantity(id))
      }}>-</Button>
      <span className='text-sm font-medium'>{quantity}</span>
      <Button type="round" onClick={() => {
        dispatch(increaseItemQuantity(id))  
      }}>+</Button>
    </div>
  )
}
