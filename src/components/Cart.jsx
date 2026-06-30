import { useState } from "react";

function Cart() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>🛒 Cart: {count}</h2>
      
      <button onClick={() => setCount(count + 1)}>
        Add to Cart
      </button>
      <button
      onClick={() => {
        if (count > 0) {
            setCount(count - 1);
        }
        }}
        >
            Remove from Cart
            </button>
      <button onClick={() => setCount(count + 5)}>
        +5 Items
      </button>
      <button onClick={() => {
        setCount(Math.max(0, count - 5));
        }}
        >
            -5 Items
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </section>
  );
}

export default Cart;