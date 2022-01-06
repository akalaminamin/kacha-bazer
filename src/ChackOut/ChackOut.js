import React from 'react';
import { useForm } from "react-hook-form";


  

const ChackOut = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); 
    return (
        <div>
            <h2 className='text-3xl mt-5 mb-5'>ChackOut</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
     
      <input defaultValue="test" {...register("example")} />
      
     
      <input {...register("exampleRequired", { required: true })} />
     
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default ChackOut;