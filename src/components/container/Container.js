import Contents from "../contents/Contents";
import Sidebar from "../sidebar/Sidebar";
import "./container.scss";
const Container = () => {
  return (
    <div className="container">
      <Sidebar />
      <Contents />
    </div>
  );
};

export default Container;
