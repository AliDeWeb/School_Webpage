// Types
import { Inputs } from "./PasswordReset_ConfirmPassword.types";

// Components
import { Header, Footer } from "../../configs/layout";

// React Hook From
import { useForm, SubmitHandler } from "react-hook-form";

// React Router
import { Link } from "react-router-dom";

const PasswordReset_ConfirmPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const SubmitHandler: SubmitHandler<Inputs> = (data: { password: string }) =>
    console.log(data);

  return (
    <div
      className={
        "min-h-[calc(100dvh-88px)] flex flex-col justify-between items-center"
      }
    >
      <Header />
      <div> </div>
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className={
          "my-10 flex flex-col w-[320px] rounded-2xl shadow-2xl py-6 px-5 bg-amber-100/10"
        }
      >
        <label htmlFor={"password"} className={"font-danaBold mb-1 text-sm"}>
          رمز عبور جدید:
        </label>
        <input
          {...register("password", {
            required: "رمز عبور خود را وارد نمایید!",
            minLength: {
              value: 8,
              message: "رمز عبور حداقل باید 8 رقم باشد!",
            },
          })}
          type="password"
          id={"password"}
          placeholder={"12345678"}
          dir={"ltr"}
          className={
            "ltr mb-4 font-dana outline-none bg-transparent p-2 border-b-2 border-solid border-b-[#f2d0a4]/35 focus:border-b-[#f2d0a4]/60 rounded-md text-sm"
          }
        />
        {errors.password && (
          <span className={"text-sm font-dana text-red-600 mb-4"}>
            * {errors.password.message as string}
          </span>
        )}

        <button
          type={"submit"}
          className={
            "font-danaBold py-2 w-full rounded-xl bg-[#f2d0a4]/60 hover:bg-[#f2d0a4] text-sm cursor-pointer transition-all"
          }
        >
          <Link to={"/confirm-password"}>ادامه</Link>
        </button>

        <span className={"font-dana text-xs mt-3"}>
          <Link to={"/confirm-email"} className={"text-red-600"}>
            بازگشت به صفحه ورود
          </Link>
        </span>
      </form>
      <Footer />
    </div>
  );
};

export default PasswordReset_ConfirmPassword;
