import { memo, useState } from "react";

const Footer = memo(function Footer({
  color,
  name,
}: {
  color: string;
  name: string;
}) {
  return (
    <footer style={{ color }}>
      I am the (black) footer, my name is: {name}
    </footer>
  );
});

function Main({ name, color }: { name: string; color: string }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>
          the count is {count}
        </button>
      </div>
      <Footer name={name} color={color} />
    </>
  );
}

function Feature04() {
  const [color, setColor] = useState("black");
  const [name, setName] = useState("smith");

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
      <Main name={name} color={color} />
    </>
  );
}
export default Feature04;
