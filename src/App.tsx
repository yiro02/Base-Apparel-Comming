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
      {/* Left Content */}
      <div className="flex flex-col justify-center px-6 -py-10 md:px-15 md:w-1/2 m-0">
      <img
          src="/images/logo.svg"
          alt="Base Apparel"
          className="w-32 mb-10 md:mb-10"
        />
         {/* logo de la portada */}
          <img src="/images/bg-pattern-desktop.svg " alt="Logo de la portada"
          className="w-full h-screen flex rounded-lg items-center justify-start md:col object-cover"/>
         <div className="flex justify-center flex-col relative">
          <h1 className="absolute -top-130 uppercase text-Pink-400 text-tiny font-josefin ml-10 bg-gradient-root  tracking-widest"> we're </h1>
          <p className="uppercase ml-12 -mt-169 text-Gray-900  font-medium text-7xl text-tiny leading-[1.2]">coming <br />soon </p>
          {/* Description */}
          <p className="text-Pink-400  font-josefin leading-[1.9] ml-12 mt-3 ">
            <strong> Hello fellow shoppers! We're currently building our new <br /> fashion store.
              Add your email below to stay up-to-date with <br /> announcements and our launch deals. </strong> </p>
        </div>
        <div>

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
               ${errors.EmailAddress ? "placeholder:text-red-500 focus:outline-red-600 border-red-400 hover:caret-red-700" : "placeholder:text-Linear-137 focus:outline-Linear-139 border-Linear-137 hover:caret-Pink-400"} -top-25 rounded-full w-95 h-13 
                relative left-13.5 border-2  px-14`}/>

            {/* button pink and arrow icon-Error */}
            <button
              type="submit"
              className="bg-gradient-to-r from-Linear-137 to-Linear-139 m-2 w-23 h-13 relative left-85 -top-40 rounded-full transition duration-400 cursor-pointer hover:shadow-lg shadow-Red-500 focus:bg-Linear-135">
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
        {/* Mobile image */}
        <img
          src="/images/hero-mobile.jpg"
          alt="Hero mobile"
          className="block md:hidden w-full h-auto object-cover"
        />
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
