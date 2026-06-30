import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
//import products from "./data/products";
import Hero from "./components/Hero";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading...");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Welcome to ShopEase!");

    setMessage("Day 8 Started 🚀");

    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <Navbar />

      <h2>{message}</h2>

      <SearchBar />

      <h1 className="page-title">Featured Products</h1>
   
      {loading ? (
        <h2>Loading Products...</h2>
      ) : (
      <div className="products-container">
       {products.slice(0, 10).map((product) => (
        <ProductCard
        key={product.id}
        name={product.title}
        image={product.image}
        price={product.price}
        category={product.category}
        rating={product.rating.rate}
        inStock={Math.random() > 0.5}
        />
        ))}
      </div>
    )}
      <Hero
        name="Anshu Verma"
        role="Frontend Developer"
        city="Delhi"
        experience="Fresher"
        company="Open to Internship"
      />

      <Hero
        name="Rahul Sharma"
        role="Backend Developer"
        city="Mumbai"
        experience="2 Years"
        company="HCL Tech"
      />

      <Cart />
      <Footer />
    </div>
  );
}
export default App;