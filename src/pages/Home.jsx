import { useState } from "react";
import Appointment from "../components/Appointment";
import Doctors from "../components/Doctors";
import { doctorData } from "../helper/data";
const Home = () => {
  const [doctors, setDoctors] = useState(doctorData);
  console.log(doctors);
  return (
    <main className="text-center mt-2 vh-100">
      <h1 className="display-5 text-danger">SOUTHGATE HOSPITAL</h1>
      <Doctors doctors={doctors} />
      <Appointment />
    </main>
  );
};

export default Home;
