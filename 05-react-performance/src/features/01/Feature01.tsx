import { useState } from "react";

function Footer() {
  return <footer>I'm the footer</footer>;
}

const footer = <Footer />;

function Feature01() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
        <br />
        <br />
      </div>
      {footer}
    </>
  );
}
export default Feature01;
