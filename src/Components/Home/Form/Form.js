import React, { useEffect, useState } from "react";
import OrgBtn from "../../../Utils/OrgBtn";
import { useFormik } from "formik";

const Form = () => {

  const [data, setData]= useState([])
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      center: "",
      date: "",
      time: "",
      comment: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
      localStorage.setItem("donar", JSON.stringify([...data,values]));                  
      setData(current=>[...current,values])
    },  
    
  });

  const handleDelete =()=>{
    localStorage.removeItem("donar")
    setData("")
  } 

  useEffect(()=>{
    const newData = localStorage.getItem("donar")
    if(newData){
      setData(JSON.parse(newData))
    } 

  },[])

  console.log(data,"dddd")

  return (
    <div className="info__form w-[100%] lg:max-w-[555px]">
      <div>
        <h3 className="form__title text-[22px] sm:text-[28px] leading-[36px] text-[#fff] p-[20px] sm:p-[30px] bg-[#4E4E4E] font-[700] text-center"> 
          {/* {" "} */}
          REQUEST APPOINTMENT
        </h3>
      </div>
      <div className="p-[25px] sm:px-[35px] sm:pt-[40px] sm:pb-[20px] bg-[#eaedf1]">
        <form
          onSubmit={formik.handleSubmit}
          className="grid -grid-cols-1 gap-[24px]"
        >    
          <div className="grid sm:grid-cols-2 gap-[20px] sm:gap-[35px]">
            <input
              onChange={formik.handleChange}
              placeholder="Name"
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              required
            />
            <input
              onChange={formik.handleChange}
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              required
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-[20px] sm:gap-[35px]">
            <input
              onChange={formik.handleChange}
              placeholder="Phone"
              type="phone"
              name="phone"
              id="phone"
              value={formik.values.phone}
              required
            />
            <select
              onChange={formik.handleChange}
              name="center"
              id="center"
              value={formik.values.center}
              required
            >
              <option value="" selected>
                Donation Center
              </option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagong">Chittagong</option>
            </select>
          </div>
          <div className="grid sm:grid-cols-2 gap-[20px] sm:gap-[35px]">
            <input
              onChange={formik.handleChange}
              placeholder="Date"
              type="text"
              name="date"
              id="date"
              value={formik.values.date}
            />
            <input
              onChange={formik.handleChange}
              placeholder="Time"
              type="text"
              name="time"
              id="time"
              value={formik.values.time} 
            />
          </div>
          <div>
            <textarea
              onChange={formik.handleChange}
              className="w-[100%]"
              placeholder="Comment"
              name="comment"
              id="comment"
              rows="4"
              value={formik.values.comment}
            ></textarea>
          </div>
          <button type="submit">
            <OrgBtn>BECOME A VOLUNTER</OrgBtn>
          </button>
        </form>

        {/* <button onClick={handleDelete}>delete</button>
        <p>{data?.name}</p>
        <p>{data?.email}</p>
        <p>{data?.phone}</p>
        <p>{data?.center}</p>
        <p>{data?.date}</p>
        <p>{data?.time}</p>
        <p>{data?.comment}</p> */}

        {data.map(item=><div className="bg-red-400 p-5 m-5">
          <p>{item?.name}</p>
        <p>{item?.email}</p>
        <p>{item?.phone}</p>
        <p>{item?.center}</p>
        <p>{item?.date}</p>
        <p>{item?.time}</p>
        <p>{item?.comment}</p> 
        {/* <button onClick={handleDelete}>delete</button> */}  
        </div>)}
      </div>
    </div>
  );
};

export default Form;