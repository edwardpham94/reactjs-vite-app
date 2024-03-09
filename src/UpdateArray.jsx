import { useState } from "react";

function UpdateArray() {
  const [foods, setFood] = useState(["Banana", "Apple", "Mango"]);

  function AddToList() {
    const newFood = document.getElementsById("newFood").value;
    document.getElementById("newFood").value = "";
    alert(newFood);
    setFood([newFood]);
  }

  function RemoveFromList(index) {
    alert(`Removing ${index}`);
  }

  return (
    <div>
      <h2>My list of food is:</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => RemoveFromList(food)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="newFood" placeholder="Enter Food Name" />
      <button onClick={() => AddToList}>Add to list</button>
    </div>
  );
}

export default UpdateArray;
