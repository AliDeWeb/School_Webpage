const Footer = () => {
  return (
    <footer className={"pt-8 pb-6"}>
      <div className="container">
        <hr className={"mb-4"} />
        <div
          className={
            "flex sm:flex-row flex-col sm:gap-0 gap-2 sm:text-base text-sm items-center justify-evenly"
          }
        >
          <p className={"font-danaBold"}>
            طراحی شده توسط{" "}
            <a className={"text-blue-500"} href="https://github.com/alideweb">
              Ali Moradi
            </a>{" "}
            با <span className={"font-light text-red-600"}>❤</span>
          </p>
          <p dir={"ltr"} className={"font-danaBold text-left"}>
            &copy; Copyrighted 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
