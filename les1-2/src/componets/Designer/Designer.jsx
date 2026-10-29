import "./designer.css";
import product5 from '../../img/N5.png';
import product6 from '../../img/N6.png';
import product7 from '../../img/N7.png';
import DesignerCard from "./ui/DesignerCard";

export default function Designer() {
  return (
    <section className="dc">
      <header className="dc__header">
        <h2 className="dc__title">Designer Clothes For You</h2>
        <p className="dc__subtitle">
          Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!
        </p>
      </header>

      <ul className="dc__grid">
        <li>
          <a className="dc__card" href="#accessories">
            <div className="dc__media dc__media--green">
              <img
                className="dc__img"
                src={product5}
                alt="Модель с соломенной шляпой и сумкой"
                loading="lazy"
              />
            </div>
            <h3 className="dc__card-title">Accessories</h3>
            <p className="dc__card-text">
              Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.
            </p>
          </a>
        </li>

        <li>
          <a className="dc__card" href="#dresses">
            <div className="dc__media dc__media--light">
              <img
                className="dc__img"
                src={product6}
                alt="Модель в белой рубашке и кожаной куртке"
                loading="lazy"
              />
            </div>
            <h3 className="dc__card-title">Dresses</h3>
            <p className="dc__card-text">
              Explore a stunning range of designer dresses, including evening gowns and chic day dresses.
            </p>
          </a>
        </li>

        <li>
          <a className="dc__card" href="#outerwear">
            <div className="dc__media dc__media--grey">
              <img
                className="dc__img"
                src={product7}
                alt="Модель в красном комбинезоне с принтом"
                loading="lazy"
              />
            </div>
            <h3 className="dc__card-title">Outerwear</h3>
            <p className="dc__card-text">
              Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.
            </p>
          </a>
        </li>
      </ul>

        {/* <div className="card">
            <DesignerCard />
            <DesignerCard />
            <DesignerCard />
        </div> */}



    </section>
  );
}