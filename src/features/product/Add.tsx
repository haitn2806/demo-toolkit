import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ADD_PRODUCT } from "./productSlice";

type Inputs = {
    id:string| number
  name: string,
  price: number,
};

export default function Add() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data:any) => {
    dispatch<any>(ADD_PRODUCT(data))
    navigate("/manager")
  };


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
              <input type="hidden" value={Date.now()} {...register("id")} />
      {/* register your input into the hook by invoking the "register" function */}
      <input type="text" {...register("name",{ required: true ,minLength:5})} />
      {errors.name && errors.name.type==="required" && <span>This field is required</span>}
      {errors.name && errors.name.type==="minLength" && <span>minLength:5 </span>}
      {/* include validation with required or other standard HTML validation rules */}
      <input  type="number" {...register("price", { required: true,minLength:5 })} />
      {/* errors will return when field validation fails  */}
      {errors.price && errors.price.type==="required" && <span>This field is required</span>}
      {errors.price && errors.price.type==="minLength" && <span>minLength:5 </span>}
      
      <input type="submit" />
    </form>
  );
}