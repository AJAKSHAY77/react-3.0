const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRESsGm92deQDTJR9fiWcHZ8S94NCmFLSkkQg&usqp=CAU"
        alt="logo"
      />
    </a>
  );
};




const Header = () => {
  const title = "Food Villa"
  return (
    <div className="header">
      <Title />

      <h1>{title}</h1>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header

