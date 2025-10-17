

import { IconArrow } from "./component-icons/icon-arrow";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import "./index.css";
import IconError from "./assets/IconError.svg";

type Inputs = {
  EmailAddress: string;
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: { EmailAddress: "" },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(`Gracias por suscribirte: ${data.EmailAddress}`);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen font-josefin bg-white ">
      {/* ✅ Imagen superior en mobile */}

      {/* Logo */}
      <img
        src="/images/logo.svg"
        alt="Base Apparel"
        className="w-40 mb-10 mt-10 pl-3.2 sm:hidden ml-25"
      />
      <div className="block md:hidden w-full">
        <img
          src="/images/hero-mobile.jpg"
          alt="Hero mobile"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* ✅ Sección izquierda (contenido) */}
      <div className="flex flex-col justify-items-center-safe md:items-start md:w-1/2 bg-[url('/images/bg-pattern-desktop.svg')] bg-cover bg-no-repeat">
        {/* Logo */}
        <div className="w-full sr-only md:not-sr-only flex  self-center-safe ">
          <img
            src="/images/logo.svg"
            alt="Base Apparel"
            className="w-40 mb-25 mt-20 relative -left-35"
          />
        </div>
        <div className="flex flex-col items-center self-center-safe md:flex">
          {/* Títulos */}
          <h1 className="uppercase text-[#ce9797] tracking-[17px] md:text-7xl mb-4 self-center-safe 
            md:-ml-25 md:text-center font-josefin text-4xl sm:leading-[1.2] mt-5">
            we're
          </h1>

          <h2 className="uppercase text-[#413a3a] md:font-Toñin realtive sm:tracking-[16px] text-5xl md:text-7xl
         leading-[3rem] mb-6 text-center md:text-left font-medium sm:leading-[5.6rem]  ">
            coming <br /> soon
          </h2>
        </div>
        {/* Descripción */}
        <p className="text-base self-center-safe  md:text-left text-Pink-400 josefin-sans font-medium 
        leading-[1.7] text-justify md:px-20">
          Hello fellow shoppers! We're currently building our new <br /> fashion store.
          Add your email below to stay up-to-date with <br /> announcements and our launch deals.
        </p>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative w-full max-w-md self-center-safe top-10"
        >
          <input
            {...register("EmailAddress", {
              required: "El campo es requerido",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                message: "Please provide a valid email",
              },
            })}
            placeholder="Email Address"
            type="email"
            className={`w-full border-2 rounded-full px-6 py-3 text-gray-800 focus:outline-none
                font-black font-josefin text-2xl ${errors.EmailAddress
                ? "border-red-400 placeholder:text-red-400"
                : "border-[#ce9797] placeholder:text-[#ce9797]"
              }`}
          />

          {/* Botón con flecha */}
          <button
            type="submit"
            className="w-27 h-15 cursor-pointer absolute right-0 top-0 bottom-0 bg-gradient-to-r from-[#f8bfbf] to-[#ee8c8c] px-6 rounded-full flex items-center
            hover:bg-amber-200 duration-200 font-Toñin  justify-center hover:opacity-70 shadow-Red-500 hover:shadow-xl"
          >
            <IconArrow className="mt-6 ml-6" />
          </button>
                
          {/* Mensaje de error */}
            {errors.EmailAddress && (
            <div className="relative top-30 left-1  text-Red-500 font-josefin  font-extrabold text-2xl flex items-center justify-items-center flex-row-reverse">
              <img src={IconError} alt="Error" className="w-10 h-10 mr-30 absolute -top-42.5" />
               <p className="font-Toñin flex flex-1 -top-25 relative font-medium">{errors.EmailAddress.message}</p>
            </div>
          )}
        </form>
      </div>

      {/* ✅ Imagen lateral en desktop */}
      <div className="hidden md:flex md:w-1/2">
        <img
          src="/images/hero-desktop.jpg"
          alt="Hero desktop"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default App;
