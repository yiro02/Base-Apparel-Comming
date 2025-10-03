import { IconArrow } from "./component-icons/icon-arrow";
import { useForm } from "react-hook-form";
import './assets/icon-error.svg';
import "./index.css";

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      EmailAddress: " weAWFSD"
    }
  });
  console.log(errors);

  return (
    <div className='flex flex-row justify-center justify-items-center font-sans'>
      {/* Left Content */}
      <div className=" justify-items-center -mr-5 p-2.5 ">
        {/* Logo */}
        <img src="/images/logo.svg" alt=" Base apperal" className="mb-5 w-40 m-9 mr-120 ml-70" />
        <img src="/images/bg-pattern-desktop.svg" alt="Logo de la portada"
          className="w-full  h-156" />
        <div className="flex justify-center flex-col relative " >
          <h1 className="absolute -top-130 uppercase text-Pink-400 text-tiny  font-josefin ml-10"> we're </h1>
          <p className="uppercase ml-12 -mt-169 text-Gray-900 font-josefin  text-7xl text-tiny leading-[1.1]">coming <br />soon </p>
          {/* Description */}
          <p className="text-Pink-400 font-josefin leading-[1.8] ml-12 mt-3">
            <strong> Hello fellow shoppers! We're currently building our new <br /> fashion store.
              Add your email below to stay up-to-date with <br /> announcements and our launch deals. </strong> </p>
        </div>
        <div>

          { /* Acción al enviar el formulario */}
          <form onSubmit={handleSubmit((data) => {
            console.log(data);
            alert("Thanks for subscribing!")
          }
          )} >
            {/* Input y Botton de Error*/}
            <input {...register("EmailAddress", {
              required: "This is required",
              minLength: {
                value: 5, message:
                  "Min length is 5"
              }, pattern: /^\S+@\S+$/i
            })}
              placeholder="EmailAddress" id="EmailAddress" name="EmailAddress"
              className="flex font-josefin text-xl no-italic text-Gray-900 focus:border-Linear-139 placeholder:text-Linear-137
             focus:outline-Linear-139 border-Linear-137 rounded-full w-97 h-13 -mt-32 hover:caret-Pink-400 border-2 relative justify-center px-12 right-5"
              minLength={5} maxLength={50} type="text" 
              onError={( value) => <img src="./assets/icon-error.svg" alt="Error Icon" className="w-4 h-4 absolute right-28 top-5" />}
            />
            <p> {errors.EmailAddress?.message} </p>
            <button
              type="submit"
              className="bg-gradient-to-r from-Linear-137 to-Linear-139 m-2 text-white -mt-0 font-bold sm:w-23 w-screen h-13 
            rounded-full hover:bg-Pink-400 transition duration-400 cursor-pointer relative left-67 -top-13 bg-Red-500/50 shadow-lg drop-shadow-Linear-137">
              <IconArrow className=" absolute left-9  top-3.5" />
            </button>
          </form>
        </div>
      </div>
      {/* Right Image */}
      <div>
        <img src="images/hero-desktop.jpg" alt="Chica imagen" className="w-full h-180 " />
      </div>
    </div>
  )
}
export default App;
