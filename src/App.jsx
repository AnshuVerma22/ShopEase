import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
import products from "./data/products";
import Hero from "./components/Hero";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <SearchBar/>
      <h1 className="page-title">Featured Products</h1>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          category={product.category}
          rating={product.rating}
          inStock={product.inStock}
          />
        ))}
      </div>
      <Hero 
        name ="Anshu Verma"
        role = "Frontend Developer"
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
       <Cart/>
       <Footer/>
    </div>
  );
}

export default App;