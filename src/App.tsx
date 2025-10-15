import { IconArrow } from "./component-icons/icon-arrow";
import { useForm } from "react-hook-form";
import iconerror from "./assets/IconError.svg";
import "./index.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      EmailAddress: "",
    },
  });
  console.log(errors);

  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans  items-center md:cols-2">
      {/* ✅ Hero image on top for mobile */}
      {/* Mobile image */}
      <div className="md:hidden max-w-1/1 h-auto">
        <img
          src="/images/hero-mobile.jpg"
          alt="Hero mobile"
          className="w-full h-auto object-cover mt-4"
        />
      </div>
      {/* Left Content */}
      <div className=" justify-items-center -mr-5 p-2.5 -py-10 md:px-15 md:w-2/3 bg-White-500">
        {/* Logo */}
        <img
          src="/images/logo.svg"
          alt=" Base apperal"
          className="mb-5 w-40 m-9 mr-120 ml-70 md:ml-20 md:mr-80 h-auto object-cover"
        />
        <img
          src="/images/bg-pattern-desktop.svg"
          alt="Logo de la portada"
          className="flex justify-self-center-safe w-300 h-150 -z-10 md:flex-col-reverse md:flex-wrap-reverse"
        />
        <div className="flex justify-center flex-col relative ">
          <h1 className="absolute -top-130 uppercase text-Pink-400 text-tiny  font-josefin ml-10">
            {" "}
            we're{" "}
          </h1>
          <p className="uppercase ml-12 -mt-169 text-Gray-900 font-josefin  text-7xl text-tiny leading-[1.1]">
            coming <br />
            soon{" "}
          </p>
          {/* Description */}
          <p className="text-Pink-400 font-josefin leading-[1.8] ml-12 mt-3">
            <strong>
              {" "}
              Hello fellow shoppers! We're currently building our new <br />{" "}
              fashion store. Add your email below to stay up-to-date with <br />{" "}
              announcements and our launch deals.{" "}
            </strong>{" "}
          </p>
        </div>
        <div>
          {/* Acción al enviar el formulario */}
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
              alert("Thanks for subscribing!");
            })}
          >
            {/* Input y Botton de Error*/}
            <input
              {...register("EmailAddress", {
                required: "Please provide a valid email",
                minLength: {
                  value: 6,
                  message: "Min length is 6 characters",
                },
                pattern: /^\S+@\S+$/i,
              })}
              placeholder="EmailAddress"
              id="EmailAddress"
              name="EmailAddress"
              className="flex font-josefin text-xl no-italic text-Gray-900 focus:border-Linear-139 placeholder:text-Linear-137
             focus:outline-Linear-139 border-Linear-137 rounded-full w-100 h-13 -mt-37 hover:caret-Pink-400 border-2 relative justify-center px-15 "
              minLength={5}
              maxLength={50}
              type="text"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                aria-label="Submit email"
                className="bg-gradient-to-r  to-Linear-138 w-24 relative -top-13 -ml-24
                 h-13 rounded-full hover:bg-amber-50 transition duration-400 cursor-pointer hover:shadow-Red-500/70 bg-Red-500/50 shadow-lg drop-shadow-Linear-139"
              >
                <IconArrow className="ml-10 mt-3" />
              </button>
            </div>
            {errors.EmailAddress && (
              <div className="flex flex-row-reverse">
                <img
                  src={iconerror}
                  alt="error"
                  className="relative right-30 -top-22"
                />
                <p className="font-Toñin text-red-500 text-md  -mt-9 mr-15">
                  {errors.EmailAddress?.message}
                </p>
              </div>
            )}
            {/* Mensaje de error */}
          </form>
        </div>
      </div>
      {/* Right Image */}
      <div>
        <img
          src="images/hero-desktop.jpg"
          alt="Chica imagen"
          className="w-full h-180 md:block hidden object-cover md:w-178"
        />
      </div>
    </div>
    /*</div>*/
  );
}
export default App;
