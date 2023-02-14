import instance from "./instance";


export const addProduct =(data:any)=>{
  const url ="/products/"
  return instance.post(url,data)
}
export const getProduct =()=>{
  const url ="/products/"
  return instance.get(url)
}
export const deleteProduct =(id:string | number)=>{
  const url ="/products/"+id
  return instance.delete(url)
}
export const updateProduct =(data:any)=>{
  const url ="/products/"+data.id
  return instance.put(url,data)
}