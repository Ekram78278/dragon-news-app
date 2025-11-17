import { Outlet, useNavigation } from "react-router";
import Header from "../Components/Header";
import Latest from "../Components/Latest";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/homelayout/LeftAside";
import RightAside from "../Components/homelayout/RightAside";
import Loading from "../pages/Loading";

const MainLayout = () => {
  const {state} = useNavigation()
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <section className="w-11/12  mx-auto">
        <Latest></Latest>
      </section>
      <nav className="w-11/12 mx-auto my-3">
        <Navbar></Navbar>
      </nav>

      <main className="w-11/12 mx-auto my-3 grid grid-cols-12">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6 p-4 ">
          {state == 'loading' ? <Loading/> : <Outlet></Outlet> }
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default MainLayout;
