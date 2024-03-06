import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("none");

  const changeName = () => {
    setName("Bao Pham");
  };

  return (
    <div>
      <h1>Name: {name}</h1>
      <button onClick={changeName}>Change name!</button>
    </div>
  );
}

export default MyComponent;
