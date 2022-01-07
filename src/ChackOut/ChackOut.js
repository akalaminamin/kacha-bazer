import React from 'react';
import { useForm } from "react-hook-form";


const ChackOut = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));
  return (
    <div className="ml-20 grid grid-rows grid-cols-2 bg-green-300 " style={{ width: "600px", height: "450px" }}>
      <div className="mt-5 mx-auto mb-2  " style={{ width: "500px", height: "400px" }}>
        <h4 className="text-black font-bold text-2xl">Please ChackOut</h4>
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)} className="mt-3 mx-3">
            <input className="w-100 h-10 mb-1 mt-3 m-3" {...register("name")} Placeholder="Name" />
            <br />
            <input className="w-100 h-10 mb-1 m-3" type="text" {...register("email")} Placeholder="Email" />
            <br />
            <input className="w-100 h-10 mb-1 m-3" type="text" {...register("address")} Placeholder="Address" />
            <br />
            <select className="w-100 h-10 mb-1 m-3" {...register("ticket-type")}>
              <option value="Select Type">Delivery Type</option>
              <option value="expensive">Quick</option>
              <option value="normal">normal</option>
            </select>
            <br />


            <button type="button" class="bg-gray-300 text-black w-40 mt-3 h-10 rounded-md">Chackout</button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default ChackOut;