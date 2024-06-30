// Types
import { Inputs } from "./PasswordReset_ConfirmCode.types.ts";

// Components
import { Header, Footer } from "../../configs/layout";

// React Hook From
import { useForm, SubmitHandler } from "react-hook-form";

// React Router
import { Link } from "react-router-dom";

const PasswordReset_ConfirmCode = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const SubmitHandler: SubmitHandler<Inputs> = (data: { code: string }) =>
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
        <label htmlFor={"code"} className={"font-danaBold mb-1 text-sm"}>
          کد تایید:
        </label>
        <input
          {...register("code", {
            required: "کد تایید را وارد نمایید!",
            pattern: {
              value: /^\d{6}$/g,
              message: "کد تایید را به درستی وارد نمایید!",
            },
          })}
          type="text"
          id={"code"}
          placeholder={"123456"}
          dir={"ltr"}
          className={
            "ltr mb-4 font-dana outline-none bg-transparent p-2 border-b-2 border-solid border-b-[#f2d0a4]/35 focus:border-b-[#f2d0a4]/60 rounded-md text-sm"
          }
        />
        {errors.code && (
          <span className={"text-sm font-dana text-red-600 mb-4"}>
            * {errors.code.message as string}
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

export default PasswordReset_ConfirmCode;
