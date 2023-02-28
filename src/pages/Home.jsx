import Appointment from "../components/Appointment";
import Doctors from "../components/Doctors";

const Home = () => {
  return (
    <main className="text-center mt-2 vh-100">
      <h1 className="display-5 text-danger">SOUTHGATE HOSPITAL</h1>
      <Doctors />
      <Appointment />
    </main>
  );
};

export default Home;
