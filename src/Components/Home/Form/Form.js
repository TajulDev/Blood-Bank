import React, { useEffect, useState } from "react";
import OrgBtn from "../../../Utils/OrgBtn";
import { useFormik } from "formik";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const Form = () => {
//   const [data, setData] = useState([]);
//   const [image, setImage] = useState(null);
//   const formik = useFormik({
//     initialValues: {
//       avatar: "",
//       name: "",
//       email: "",
//       phone: "",
//       center: "",
//       date: "",
//       time: "",
//       comment: "",
//     },
//     onSubmit: (values, { resetForm }) => {
//       console.log(values);

//       const newData = { ...values, image };
//       resetForm({ values: "" });
//       localStorage.setItem("donar", JSON.stringify([...data, newData]));
//       setData((current) => [...current, newData]);
//     },
//   });

//   const handleDelete = () => {
//     localStorage.removeItem("donar");
//     setData("");
//   };

//   useEffect(() => {
//     const newData = localStorage.getItem("donar");
//     if (newData) {
//       setData(JSON.parse(newData));
//     }
//   }, []);

//   const fiilehandler = (e) => {
//     // console.log();
//     const fileImage = e.target.files[0];
//     const createdURL = URL.createObjectURL(fileImage);
//     setImage(createdURL);
//   };
//   return (
//     <div className="info__form w-[100%] lg:max-w-[555px]">
//       <div>
//         <h3 className="form__title text-[22px] sm:text-[28px] leading-[36px]
//          text-[#fff] p-[20px] sm:p-[30px] bg-[#4E4E4E] font-[700] text-center">
//           {/* {" "} */}
//           REQUEST APPOINTMENT
//         </h3>
//       </div>
//       {/* <h1> Image {image ? "image ache " : "Image nai"}</h1> */}
//       <img src={image} alt="" />
//       <div className="p-[25px] sm:px-[35px] sm:pt-[40px] sm:pb-[20px] bg-[#eaedf1]">
//         <form
//           onSubmit={formik.handleSubmit}
//           className="grid -grid-cols-1 gap-[24px]"
//         >
//           <div className="grid sm:grid-cols-2 gap-[20px] sm:gap-[35px]">
//             <input
//               onChange={formik.handleChange}
//               placeholder="Name"
//               type="text"
//               name="name"
//               id="name"
//               value={formik.values.name}
//               required
//             />
//             <input
//               onChange={formik.handleChange}
//               placeholder="Email"
//               type="email"
//               name="email"
//               id="email"
//               value={formik.values.email}
//               // required
//             />
//           </div>
//           <div className="grid sm:grid-cols-2 gap-[20px] sm:gap-[35px]">
//             <input
//               onChange={formik.handleChange}
//               placeholder="Phone"
//               type="phone"
//               name="phone"
//               id="phone"
//               value={formik.values.phone}
//               // required
//             />
//             <select
//               onChange={formik.handleChange}
//               name="center"
//               id="center"
//               value={formik.values.center}
//               // required
//             >
//               <option value="" selected>
//                 Donation Center
//               </option>
//               <option value="Dhaka">Dhaka</option>
//               <option value="Chittagong">Chittagong</option>
//             </select>
//           </div>
//           <div className="grid sm:grid-cols-2 gap-[20px] sm:gap-[35px]">
//             <input
//               onChange={formik.handleChange}
//               placeholder="Date"
//               type="text"
//               name="date"
//               id="date"
//               value={formik.values.date}
//             />
//             <input
//               onChange={formik.handleChange}
//               placeholder="Time"
//               type="text"
//               name="time"
//               id="time"
//               value={formik.values.time}
//             />
//           </div>
//           <div>
//             <input
//               onChange={(e) => fiilehandler(e)}
//               type="file"
//               id="avatar"
//               name="avatar"
//               accept="image/png, image/jpeg"
//               // Value="C:\\fakepath\\1.jpg"
//             />
//           </div>
//           <div>
//             <textarea
//               onChange={formik.handleChange}
//               className="w-[100%]"
//               placeholder="Comment"
//               name="comment"
//               id="comment"
//               rows="4"
//               value={formik.values.comment}
//             ></textarea>
//           </div>
//           <button type="submit">
//             <OrgBtn>BECOME A VOLUNTER</OrgBtn>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

const Form = () => {
  // const [data, setData] = useState([]);
  // const [image, setImage] = useState(null);
  // const formik = useFormik({
  //   initialValues: {
  //     avatar: "",
  //     name: "",
  //     email: "",
  //     phone: "",
  //     center: "",
  //     date: "",
  //     time: "",
  //     comment: "",
  //   },
  //   onSubmit: (values, { resetForm }) => {
  //     console.log(values);

  //     const newData = { ...values, image };
  //     resetForm({ values: "" });
  //     localStorage.setItem("donar", JSON.stringify([...data, newData]));
  //     setData((current) => [...current, newData]);
  //   },
  // });

  // const handleDelete = () => {
  //   localStorage.removeItem("donar");
  //   setData("");
  // };

  // useEffect(() => {
  //   const newData = localStorage.getItem("donar");
  //   if (newData) {
  //     setData(JSON.parse(newData));
  //   }
  // }, []);

  // const fiilehandler = (e) => {
  //   // console.log();
  //   const fileImage = e.target.files[0];
  //   const createdURL = URL.createObjectURL(fileImage);
  //   setImage(createdURL);
  // };

  const [data, setData] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [center, setCenter] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [group, setGroup] = useState("");
  const [comment, setComment] = useState("");

  const handleDlt = () =>{
    const allData = ("Name", "Email", 'Group')
    localStorage.removeItem(allData)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      toast.error("Name Is Required!");
    } 
    else if (email === "") {
      toast.error("Email Is Required!");
    } else if (phone === "") {
      toast.error("Phone Number is Required!");
    } else if (group === ""){
      toast.error("Blood Group is Required!");
    }

    else{
      localStorage.setItem("Name", name);
      localStorage.setItem("Email", email);
      localStorage.setItem("Phone", phone);
      localStorage.setItem("Date", date);
      localStorage.setItem("Time", time);
      localStorage.setItem("Group", group);


      // const newPerson = [name, email, phone, center, date, time, group, comment]

      // localStorage.setItem("Person", JSON.stringify(...data, newPerson));
      // setData((current)=> [...current, newPerson])

      setName("")
      setEmail("")
      setPhone("")
      setDate("")
      setTime("")
      setGroup("")

      toast.success("Form Submit Successfully !")
    }
  };

  return (
    <div className="info__form w-[100%] lg:max-w-[555px]">
      <div>
        <h3
          className="form__title text-[22px] sm:text-[28px] leading-[36px]
         text-[#fff] p-[20px] sm:p-[30px] bg-[#4E4E4E] font-[700] text-center"
        >
          {/* {" "} */}
          REQUEST APPOINTMENT
        </h3>
      </div>
      {/* <h1> Image {image ? "image ache " : "Image nai"}</h1> */}
      {/* <img src={image} alt="" /> */}
      <div className="p-[25px] sm:px-[35px] sm:pt-[40px] sm:pb-[20px] bg-[#eaedf1]">
        <form
          // onSubmit={formik.handleSubmit}
          className="grid -grid-cols-1 gap-[24px]"
        >
          <div className="grid sm:grid-cols-2 gap-[20px] sm:gap-[35px]">
            <input
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              type="text"
              name="name"
              id="name"
              value={name}
              required
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              value={email}
              // required
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-[20px] sm:gap-[35px]">
            <input
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              type="phone"
              name="phone"
              id="phone"
              value={phone}
              // required
            />
            <select
              // onChange={e => setCenter(e.target.value)}
              name="center"
              id="center"
              // value={center}
              // required
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
              onChange={(e) => setDate(e.target.value)}
              placeholder="Date"
              type="text"
              name="date"
              id="date"
              value={date}
            />
            <input
              onChange={(e) => setTime(e.target.value)}
              placeholder="Time"
              type="text"
              name="time"
              id="time"
              value={time}
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-[20px] sm:gap-[35px]">
            <input
              // onChange={(e) => fiilehandler(e)}
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              // Value="C:\\fakepath\\1.jpg"
            />
            <input 
            onChange={e => setGroup(e.target.value)}
            type="text" 
            name="group"
            id="group"
            placeholder="Enter Your Blood Group"
            value={group}
            />
          </div>
          <div>
            <textarea
              onChange={(e) => setComment(e.target.value)}
              className="w-[100%]"
              placeholder="Comment"
              name="comment"
              id="comment"
              rows="4"
              value={comment}
            ></textarea>
          </div>
          <button type="submit" onClick={handleSubmit}>
            <OrgBtn>BECOME A VOLUNTER</OrgBtn>
          </button>
        </form>
          {/* <button onClick={handleDlt}>dlt</button> */}
      </div>
    </div>
  );
};

export default Form;
