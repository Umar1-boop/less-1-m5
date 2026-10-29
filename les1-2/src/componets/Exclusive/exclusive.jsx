
import "./Exclusive.css";
import product4 from '../../img/N4.png';

export default function Exclusive() {
  return (
    <section className="exclusive">
      <div className="exclusive-image">
        <img
          src={product4}
          alt="Woman wearing fashionable clothes"
        />
        <div className="exclusive-dots"></div>
      </div>

      <div className="exclusive-content">
        <h1>Exclusive offer</h1>

        <p>
          Unlock the ultimate style upgrade with our exclusive
          offer Enjoy savings of up to 40% off on our latest New
          Arrivals
        </p>

        <div className="exclusive-timer">
          <div className="timer-box">
            <h2>06</h2>
            <span>Days</span>
          </div>

          <div className="timer-box">
            <h2>18</h2>
            <span>Hours</span>
          </div>

          <div className="timer-box">
            <h2>48</h2>
            <span>Min</span>
          </div>
        </div>

        <button className="exclusive-button">
          BUY NOW
        </button>
      </div>
    </section>
  );
}

