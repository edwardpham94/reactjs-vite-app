import { useState } from "react";

function UpdateObject() {
  const [car, setCar] = useState({ year: "2024", make: "Ford", model: "SUV" });

  function onChangeYear(event) {
    setCar((car) => ({ ...car, year: event.target.value }));
  }

  function onChangeMake(event) {
    setCar((car) => ({ ...car, make: event.target.value }));
  }

  function onChangeModel(event) {
    setCar((car) => ({ ...car, model: event.target.value }));
  }

  return (
    <div>
      <h1>
        My car is: {car.year} {car.make} {car.model}
      </h1>
      <input
        type="number"
        name=""
        id=""
        onChange={onChangeYear}
        value={car.year}
      />

      <input type="text" value={car.make} onChange={onChangeMake} />
      <input type="text" value={car.model} onChange={onChangeModel} />
    </div>
  );
}

export default UpdateObject;
