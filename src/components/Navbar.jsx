import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">🛍 ShopEase</h1>

      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
}

export default Navbar;