// Components
import { Header, Banner, SectionWrapper } from "../../configs/layout";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <SectionWrapper title={"رویداد ها"} link={"/"}>
          <span></span>
        </SectionWrapper>
      </main>
    </>
  );
};

export default Home;
