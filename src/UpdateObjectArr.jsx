import { useState } from "react";

function UpdateObjectArr() {
  const [cars, setCars] = useState([]);
  const [carYear, setYear] = useState(2024);
  const [carMake, setMake] = useState("");
  const [carModel, setModel] = useState("");

  function AddNewCar() {
    const newCar = { year: carYear, model: carModel, make: carMake };

    setCars((c) => [...c, newCar]);
    setYear(2024);
    setMake("");
    setModel("");
  }

  function RemoveCar(index) {
    const updatedCars = [...cars];
    updatedCars.splice(index, 1);
    setCars(updatedCars);
  }

  function changeYear(event) {
    setYear(event.target.value);
  }

  function changeMake(event) {
    setMake(event.target.value);
  }

  function changeModel(event) {
    setModel(event.target.value);
  }

  return (
    <>
      <h2>List of cars</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => RemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input
        type="number"
        name=""
        id=""
        value={carYear}
        onChange={changeYear}
      />{" "}
      <br />
      <input
        type="text"
        name=""
        id=""
        value={carMake}
        placeholder="Enter Make"
        onChange={changeMake}
      />{" "}
      <br />
      <input
        type="text"
        name=""
        id=""
        value={carModel}
        placeholder="Enter Model"
        onChange={changeModel}
      />{" "}
      <br />
      <button onClick={AddNewCar}>Add</button>
    </>
  );
}

export default UpdateObjectArr;
