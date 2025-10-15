import { IconArrow } from "./component-icons/icon-arrow";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import "./index.css";
import IconError from "./assets/icon-error.svg";

type Inputs = {
  EmailAddress: string;
  emailError: string;
};

// we use the library react-hook-form 
function App() {
  const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
    defaultValues: {
      EmailAddress: "",
      emailError: "janeappleseed#email.com"
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("", data);
    alert("Thanks for subscribing!");
  };

  return (
    <div className='flex flex-col md:flex-row min-h-screen font-sans '>
      {/* ✅ Hero image on top for mobile */}
      <div className="md:hidden w-full">
        <img
          src="/images/hero-mobile.jpg"
          alt="Hero mobile"
          className="w-full h-auto object-cover"
        />
      </div>
      {/* Left Content */}
      <div className="flex flex-col justify-center px-6 -py-10 md:px-15 md:w-1/2 m-0">
      <img
          src="/images/logo.svg"
          alt="Base Apparel"
          className="w-32 mb-11 md:mb-10 mt-12"
        />
        <div className="flex flex-row md:flex-col sm:flex-row relative sm:relative  ">
         {/* logo de la portada */}
          <img src="/images/bg-pattern-desktop.svg " alt="Logo de la portada"
          className="w-full h-screen flex rounded-lg items-center justify-start md:col object-cover"/>
          <h1 className="absolute uppercase text-Pink-400 text-tiny font-josefin  bg-gradient-root 
           tracking-widest self-center-safe md:flex  font-medium  text-7xl md:text4xl   md:text-tiny top-30 sm:ml-19"> we're </h1>
          <p className="uppercase  absolute text-Gray-900 top-43 font-medium text-7xl text-tiny leading-[1.3] self-center-safe sm:ml-19">coming <br  />soon </p>
        </div>
          {/* Description */}
         <div className="flex justify-center flex-col relative sm:relative sm:-top-5 ">      
        <p className="text-Pink-400 font-josefin leading-[1.7] absolute justify-center -top-50 sm:self-center-safe ">
            <strong> Hello fellow shoppers! We're currently building our new <br /> fashion store.
              Add your email below to stay up-to-date with <br /> announcements and our launch deals. </strong> </p>
        </div>


        <div className="flex flex-col justify-center relative">
     
            
          { /* Acción al enviar el formulario */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Input y Botton de Error*/}
            <input {...register("EmailAddress", {
              required: {
                value: true,
                message: "El campo es requerido",
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                message: "Plase provide a valid email",
              }
            },
            )}
               placeholder="EmailAddress" type="EmailAddress" 
               id="EmailAddress" name="EmailAddress" 
               className={`flex font-Toñin text-xl no-italic not-visited: text-Gray-900  
               ${errors.EmailAddress ? "placeholder:text-red-500 focus:outline-red-600 border-red-400 hover:caret-red-700" : 
              "placeholder:text-Linear-137 focus:outline-Linear-139 border-Linear-137 hover:caret-Pink-400"}  -top-25 right-40 absolute rounded-full w-95 h-13 border-2 px-14`}/>

            {/* button pink and arrow icon-Error */}
            <button
              type="submit"
              className="bg-gradient-to-r from-Linear-137 to-Linear-139 m-2 w-23 h-13 relative left-104 -top-40 rounded-full transition duration-400 cursor-pointer hover:shadow-lg shadow-Red-500 focus:bg-Linear-135">
           <IconArrow className="mt-3 ml-9"/>
             </button>
              {errors.EmailAddress && <div className="flex items-center justify-start flex-row-reverse gap-3">
              <img src={IconError} alt="error" className="flex relative right-120 -top-53" />
              <p className="text-red-600 text-2xl position relative -top-35 right-65 font-josefin flex">{errors.EmailAddress.message}</p>
            </div>}
          </form>
        </div>
      </div>
       {/* Right Image Section */}
      <div className="md:w-1/2 w-screen">
        
        {/* Desktop image */}
        <img
          src="/images/hero-desktop.jpg"
          alt="Hero desktop"
          className="hidden md:block w-full h-200 object-cover"
        />
      </div>
    </div>
  );
}

export default App;
