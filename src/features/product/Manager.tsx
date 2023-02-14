import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DELETE_PRODUCT, GET_PRODUCT } from './productSlice'

type Props = {}

const Manager = (props: Props) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch<any>(GET_PRODUCT())
    },[])

    const products = useSelector((store:any)=>store.product.value)
    console.log(products);
    
  return (
    <div>Manager
        <div><Link to="/add">Add new product</Link></div>
        <div>
         
         <table border={1}>
            <thead >
                <tr>
                    <td>STT</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>tool</td>
                </tr>
            </thead>
            <tbody>
                {products.map((item:any,index:number)=>(
                    <>
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td><button onClick={()=>{dispatch<any>(DELETE_PRODUCT(item.id))}}>delete</button> <button><Link to={`/${item.id}/update`}>Update</Link></button></td>
                </tr>
                    </>
                ))}
            </tbody>
         </table>
        </div>
    </div>
  )
}

export default Manager