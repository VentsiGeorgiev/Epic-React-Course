import type { TiltOptions } from "vanilla-tilt";
import Tilt from "./Tilt";
import "./styles.css";

const options: TiltOptions = {
  scale: 1.05,
  speed: 1000,
  max: 30,
};

function Feature02() {
  return (
    <section className="feature-02">
      <Tilt className="box" options={options}>
        <div className="box__content">
          <h2>Tilt Box</h2>
          <p>Move the cursor over the card.</p>
        </div>
      </Tilt>
    </section>
  );
}

export default Feature02;
