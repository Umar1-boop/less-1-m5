
import Banner from "./componets/banner/Banner";
import Header from "./componets/header/Header";
import BestSelling from "./componets/BestSelling/BestSelling";
import OurProducts from "./componets/ourProducts/OurProducts";
import Exclusive from "./componets/Exclusive/exclusive";
import Designer from "./componets/Designer/Designer";
import "./app.css";

export default function App() {
  return (
    <div>
      <div className="top_container">
        <Header />
        <Banner />
      </div>

      <BestSelling />
      <OurProducts />
      <Exclusive />
      <Designer />
    </div>
  );
}
