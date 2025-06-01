import React from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../services/axiosInstance';
import toast from 'react-hot-toast';
import DisplayTasks from '../components/DisplayTasks';


function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit =async(value)  => {
// will contain { title: "...", description: "..." }
  const{data}=  await axiosInstance.post("http://localhost:4000/api/task/add",value)
  console.log(data)
  if(data){
    toast.success("task added")
  }
  };

  return ( <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Title:</label>
        <input
          {...register('title', { required: 'Title is required' })}
          placeholder="Enter title"
        />
        {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
      </div>

      <div>
        <label>Description:</label>
        <textarea
          {...register('description', { required: 'Description is required' })}
          placeholder="Enter description"
        />
        {errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
<DisplayTasks/>
   </>
  );
}

export default MyForm;
