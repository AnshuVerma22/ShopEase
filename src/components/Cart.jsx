function Cart({
  cartCount,
  removeFromCart,
  emptyCart,
}) {
  return (
    <section>

      <h2
        style={{
          color: cartCount > 0 ? "green" : "red",
        }}
      >
        🛒 Cart: {cartCount}
      </h2>

      <p>
        {cartCount === 0
          ? "Your cart is empty."
          : `You have ${cartCount} item(s) in your cart.`}
      </p>

      <button
  onClick={() => {
    console.log("Remove clicked");
    removeFromCart();
  }}
  disabled={cartCount === 0}
>
  Remove Item
</button>

      <button
  onClick={() => {
    console.log("Empty clicked");
    emptyCart();
  }}
  disabled={cartCount === 0}
>
  Empty Cart
</button>

      {cartCount >= 5 && (
        <h3 style={{ color: "green" }}>
          🎉 Congratulations! You have 5 or more items.
        </h3>
      )}

    </section>
  );
}

export default Cart;