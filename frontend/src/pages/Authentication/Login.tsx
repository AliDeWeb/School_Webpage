import { useCallback } from "react";

// Types
import { Inputs } from "./Login.types.ts";

// Components
import { Header, Footer } from "../../configs/layout";

// React Hook From
import { useForm, SubmitHandler } from "react-hook-form";

// React Router
import { Link, useNavigate } from "react-router-dom";

// Axios
import { auth } from "../../configs/axios.ts";

// Save Cookies
import setTokenCookie from "../../utils/saveTokenInCookie.ts";

// Ant Design
import { notification } from "antd";

const Login = () => {
  // Navigator Hook
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const login: SubmitHandler<Inputs> = useCallback(
    async (data: { phone: string; password: string }) => {
      try {
        const result = await auth(`/login`, {
          data: {
            phoneNumber: data.phone.trim(),
            password: data.password.trim().toLowerCase(),
          },
          method: "POST",
        });

        setTokenCookie(result.data.token);
        notification.success({
          duration: 2,
          message: "ورود موفقیت‌آمیز بود!",
          description: result.data.message,
        });

        navigate("/");
      } catch (err: unknown) {
        notification.error({
          duration: 2,
          message: "خطا در ورود",
          description:
            (err as any).response.data.message || "مشکلی در ورود پیش آمد.",
        });
      }
    },

    [],
  );

  return (
    <div
      className={
        "min-h-[calc(100dvh-88px)] flex flex-col justify-between items-center"
      }
    >
      <Header />
      <div> </div>
      <form
        onSubmit={handleSubmit(login)}
        className={
          "my-10 flex flex-col w-[320px] rounded-2xl shadow-2xl py-6 px-5 bg-amber-100/10"
        }
      >
        <label htmlFor={"phone"} className={"font-danaBold mb-1 text-sm"}>
          شماره تلفن:
        </label>
        <input
          {...register("phone", {
            required: "شماره تلفن خود را وارد نمایید!",
            pattern: {
              value: /^09\d{9}$/g,
              message: "شماره تلفن را به درستی وارد نمایید!",
            },
          })}
          type="text"
          id={"phone"}
          placeholder={"09123456789"}
          dir={"ltr"}
          className={
            "ltr mb-4 font-dana outline-none bg-transparent p-2 border-b-2 border-solid border-b-[#f2d0a4]/35 focus:border-b-[#f2d0a4]/60 rounded-md text-sm"
          }
        />
        {errors.phone && (
          <span className={"text-sm font-dana text-red-600 mb-4"}>
            * {errors.phone.message as string}
          </span>
        )}

        <label htmlFor="password" className={"font-danaBold mb-1 text-sm"}>
          رمز عبور
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

        <input
          type="submit"
          value={"ورود"}
          className={
            "font-danaBold py-2 w-full rounded-xl bg-[#f2d0a4]/60 hover:bg-[#f2d0a4] text-sm cursor-pointer transition-all"
          }
        />

        <span className={"font-dana text-xs mt-3"}>
          حساب کاربری ندارید؟{" "}
          <Link to={"/signup"} className={"text-red-600"}>
            ساخت حساب
          </Link>
        </span>
        <span className={"font-dana text-xs mt-3"}>
          رمز عبور خود را فراموش کرده اید؟{" "}
          <Link to={"/confirm-phone-number"} className={"text-red-600"}>
            بازیابی
          </Link>
        </span>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
