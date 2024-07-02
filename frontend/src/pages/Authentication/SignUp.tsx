import { useCallback } from "react";

// Types
import { Inputs } from "./SignUp.types.ts";

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

const SignUp = () => {
  // Navigator Hook
  const navigate = useNavigate();

  // Submit Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const signUp: SubmitHandler<Inputs> = useCallback(
    async (data: {
      birthday: string;
      classNumber: string;
      lastName: string;
      name: string;
      phone: string;
      password: string;
    }) => {
      try {
        const result = await auth(`/signup`, {
          data: {
            name: data.name.trim().toLowerCase(),
            lastName: data.lastName.trim().toLowerCase(),
            phoneNumber: data.phone.trim(),
            password: data.password.trim().toLowerCase(),
            classNumber: data.classNumber.trim(),
            birthday: data.birthday,
          },
          method: "POST",
        });

        setTokenCookie(result.data.token);
        notification.success({
          duration: 2,
          message: "ثبت نام موفقیت‌آمیز بود!",
          description: result.data.message,
        });

        navigate("/");
      } catch (err: unknown) {
        notification.error({
          duration: 2,
          message: "خطا در ثبت نام",
          description:
            (err as any).response.data.message || "مشکلی در ثبت نام پیش آمد.",
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
        onSubmit={handleSubmit(signUp)}
        className={
          "my-10 flex flex-col w-[320px] rounded-2xl shadow-2xl py-6 px-5 bg-amber-100/10"
        }
      >
        <label htmlFor="name" className={"font-danaBold mb-1 text-sm"}>
          نام:
        </label>
        <input
          {...register("name", { required: "نام خود را وارد نمایید!" })}
          type="text"
          id={"name"}
          placeholder={"علی"}
          className={
            "mb-4 font-dana outline-none bg-transparent p-2 border-b-2 border-solid border-b-[#f2d0a4]/35 focus:border-b-[#f2d0a4]/60 rounded-md text-sm"
          }
        />
        {errors.name && (
          <span className={"text-sm font-dana text-red-600 mb-4"}>
            * {errors.name.message as string}
          </span>
        )}

        <label htmlFor="lastName" className={"font-danaBold mb-1 text-sm"}>
          نام خانوادگی:
        </label>
        <input
          {...register("lastName", {
            required: "نام خانوادگی خود را وارد نمایید!",
          })}
          type="text"
          id={"lastName"}
          placeholder={"احمدی"}
          className={
            "mb-4 font-dana outline-none bg-transparent p-2 border-b-2 border-solid border-b-[#f2d0a4]/35 focus:border-b-[#f2d0a4]/60 rounded-md text-sm"
          }
        />
        {errors.lastName && (
          <span className={"text-sm font-dana text-red-600 mb-4"}>
            * {errors.lastName.message as string}
          </span>
        )}

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

        <label htmlFor="birthday" className={"font-danaBold mb-1 text-sm"}>
          تاریخ تولد:
        </label>
        <input
          {...register("birthday", {
            required: "تاریخ تولد خود را وارد نمایید!",
            pattern: {
              value: /^\d{4}-\d{2}-\d{2}$/g,
              message: "تاریخ تولد را به درستی وارد نمایید!",
            },
          })}
          type="date"
          id={"birthday"}
          dir={"ltr"}
          className={
            "ltr mb-4 font-dana outline-none bg-transparent p-2 border-b-2 border-solid border-b-[#f2d0a4]/35 focus:border-b-[#f2d0a4]/60 rounded-md text-sm"
          }
        />
        {errors.birthday && (
          <span className={"text-sm font-dana text-red-600 mb-4"}>
            * {errors.birthday.message as string}
          </span>
        )}

        <label htmlFor="classNumber" className={"font-danaBold mb-1 text-sm"}>
          شماره کلاس سال ورودی:
        </label>
        <input
          {...register("classNumber", {
            required: "شماره کلاس خود را وارد نمایید!",
            pattern: {
              value: /^10\d$/g,
              message: "شماره کلاس را به درستی وارد نمایید!",
            },
          })}
          type="text"
          id={"classNumber"}
          placeholder={"101 | 102 | 103"}
          dir={"ltr"}
          className={
            "ltr mb-4 font-dana outline-none bg-transparent p-2 border-b-2 border-solid border-b-[#f2d0a4]/35 focus:border-b-[#f2d0a4]/60 rounded-md text-sm"
          }
        />
        {errors.classNumber && (
          <span className={"text-sm font-dana text-red-600 mb-4"}>
            * {errors.classNumber.message as string}
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
          value={"ثبت نام"}
          className={
            "font-danaBold py-2 w-full rounded-xl bg-[#f2d0a4]/60 hover:bg-[#f2d0a4] text-sm cursor-pointer transition-all"
          }
        />

        <span className={"font-dana text-xs mt-3"}>
          ثبت نام کرده اید؟{" "}
          <Link to={"/login"} className={"text-red-600"}>
            ورود
          </Link>
        </span>
      </form>
      <Footer />
    </div>
  );
};

export default SignUp;
