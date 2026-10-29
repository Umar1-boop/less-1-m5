
export default function DesignerCard() {
  return (
    <div>

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

    </div>
  )
}
