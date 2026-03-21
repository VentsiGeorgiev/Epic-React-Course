import { useMemo, useState, type ReactNode } from "react";

function Footer({ color, name }: { color: string; name: string }) {
  return (
    <footer style={{ color }}>
      I am the (black) footer, my name is: {name}
    </footer>
  );
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

function Feature03() {
  const [color, setColor] = useState("black");
  const [name, setName] = useState("smith");
  const footer = useMemo(
    () => <Footer color={color} name={name} />,
    [color, name],
  );
  return (
    <>
      <div>
        <div>
          <button onClick={() => setColor("black")}>black</button>
          <button onClick={() => setColor("blue")}>blue</button>
          <button onClick={() => setColor("orange")}>orange</button>
        </div>
      </div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <Main footer={footer} />
    </>
  );
}
export default Feature03;
