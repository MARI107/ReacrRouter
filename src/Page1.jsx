import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Pege1ページです</h1>
      <Link to="/page1/detailA">DatailA</Link>
      <br />
      <Link to="/page1/detailB">DatailB</Link>
    </div>
  );
};
