import { useState, type ReactNode } from "react";

function Footer({ color }: { color: string }) {
  return <footer style={{ color }}>I am the (black) footer</footer>;
}

function Main({ footer }: { footer: ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>
          the count is {count}
        </button>
      </div>
      {footer}
    </>
  );
}

function Feature02() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div>
        <div>
          <button onClick={() => setColor("black")}>black</button>
          <button onClick={() => setColor("blue")}>blue</button>
          <button onClick={() => setColor("orange")}>orange</button>
        </div>
      </div>
      <Main footer={<Footer color={color} />} />
    </>
  );
}
export default Feature02;
