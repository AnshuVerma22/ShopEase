import "../styles/ProductCard.css";
function ProductCard({
  name,
  image,
  price,
  category,
  rating,
  inStock,
}) {
  return (
    <div className="product-card">
      <h2>{name}</h2>

      <img src={image} alt={name} width="200" />

      <p><strong>Price:</strong> ₹{price}</p>

      <p><strong>Category:</strong> {category}</p>

      <p>⭐ {rating}</p>

      <p
        style={{
          color: inStock ? "green" : "red",
          fontWeight: "bold",
        }}
      >
        {inStock ? "✅ In Stock" : "❌ Out of Stock"}
      </p>

      <p>
        {price > 50000
          ? " Premium Product"
          : " Budget Product"}
      </p>

      <button disabled={!inStock}>
        {inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
}

export default ProductCard;