import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

const Shop = () => {
  const dispatch = useDispatch();
  const {withdrawMoney}= bindActionCreators(actionCreators,dispatch)
  const {depositMoney}= bindActionCreators(actionCreators,dispatch)

  return (
    <div className='my-3 container'>
        <h2>Deposit Or Withdraw</h2>
        <button className='btn btn-primary rounded-0' onClick={()=>dispatch(withdrawMoney(100))}>-</button>
        <span className='mx-2'>Update Balance</span>
        <button className='btn btn-primary rounded-0' onClick={()=>dispatch(depositMoney(100))}>+</button>
    </div>
  )
}

export default Shop