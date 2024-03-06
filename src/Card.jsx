function Card() {
  const clickbutton1 = (e) => (e.target.textContent = "Bao pham clicked");

  return (
    <div className="card">
      <img
        className="card-img"
        src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
        alt="profile pictur"
      />
      <h2 className="card-name">Bao Pham Hong Gia</h2>
      <p className="description">A Full-stack Software Developer</p>
      <button onClick={(e) => clickbutton1(e)}>Clicl me!</button>
    </div>
  );
}

export default Card;
