import Header from "../Components/Headers";
import Navigation from "../Components/Navigation";

const Main = () => {
  return (
    <>
      <Header />
      <section className="max-w-md m-auto">
        <div className="flex flex-col ">
          <div>Main page</div>
        </div>
      </section>
      <Navigation />
    </>
  );
};

export default Main;
