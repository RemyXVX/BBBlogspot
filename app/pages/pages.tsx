import HomePage from "./home/page";
import SideNav from "../components/sidenav/page";

const Main = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="bg-blue-200 col-span-1">
        <SideNav />
      </div>
      <div className="bg-pink-200 col-span-3">
        <HomePage />
      </div>
    </div>
  );
};

export default Main;
