import { useState } from "react";
import Appointment from "../components/Appointment";
import Doctors from "../components/Doctors";
import { doctorData } from "../helper/data";
import { appointmentData } from "../helper/data";
const Home = () => {
  const [appointments, setAppointments] = useState(appointmentData);
  const [doctors, setDoctors] = useState(doctorData);
  console.log(doctors);
  console.log(appointmentData);
  return (
    <main className="text-center mt-2 vh-100">
      <h1 className="display-5 text-danger">SOUTHGATE HOSPITAL</h1>
      <Doctors
        doctors={doctors}
        appointments={appointments}
        setAppointments={setAppointments}
      />
      <Appointment />
    </main>
  );
};

export default Home;
