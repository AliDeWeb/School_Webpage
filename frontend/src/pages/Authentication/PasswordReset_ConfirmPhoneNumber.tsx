// Types
import { Inputs } from "./PasswordReset_ConfirmPhoneNumber.types.ts";

// Components
import { Header, Footer } from "../../configs/layout";

// React Hook From
import { useForm, SubmitHandler } from "react-hook-form";

// React Router
import { Link, useNavigate } from "react-router-dom";

// Axios
import { auth } from "../../configs/axios.ts";

// Ant Design
import { notification } from "antd";

const PasswordReset_ConfirmPhoneNumber = () => {
  // Navigator Hook
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const SubmitHandler: SubmitHandler<Inputs> = async (data: {
    phone: string;
  }) => {
    try {
      const result = await auth("/reset_password", {
        data: { phoneNumber: data.phone },
        method: "POST",
      });

      notification.success({
        duration: 2,
        message: "عملیات موفقیت‌آمیز بود!",
        description: "کد تایید با موفقیت ارسال شد",
      });

      alert(`کد تایید شما:\n${result.data.data.generatedCode}`);

      navigate(`/confirm-code?phone=${data.phone}`);
    } catch (err: unknown) {
      notification.error({
        duration: 2,
        message: "خطا در انجام عملیات",
        description:
          (err as any).response.data.message || "متاسفیم. دوباره تلاش کنید",
      });
    }
  };

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

        <button
          type={"submit"}
          className={
            "font-danaBold py-2 w-full rounded-xl bg-[#f2d0a4]/60 hover:bg-[#f2d0a4] text-sm cursor-pointer transition-all"
          }
        >
          ادامه
        </button>

        <span className={"font-dana text-xs mt-3"}>
          <Link to={"/login"} className={"text-red-600"}>
            بازگشت به صفحه ورود
          </Link>
        </span>
      </form>
      <Footer />
    </div>
  );
};

export default PasswordReset_ConfirmPhoneNumber;
