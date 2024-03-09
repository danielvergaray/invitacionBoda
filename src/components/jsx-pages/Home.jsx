import React from "react";
import { ReactTyped } from "react-typed";
import CuentaRegresiva from "../contador/CuentaRegresiva";

const Home = () => {
  return (
    <>
      <section className="h-screen bg-[url('../../src/assets/imagenes/FOTO-HOME-MOBILE.jpg')] bg-center bg-no-repeat bg-cover">
        <p>29.06.24</p>
      </section>

      <section className="bg-white">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h2 className="text-black">Nuestra gran aventura comienza</h2>
        </div>
        <div>
          <p>y queremos que seas parte</p>
          <p>¡Te esperamos este día especial!</p>
          <ReactTyped className="text-white" strings={["Here you can find anything"]} typeSpeed={40} loop/>
        </div>
        <div>
        <CuentaRegresiva/>
        </div>
      </section>
    </>
  );
};

export default Home;
