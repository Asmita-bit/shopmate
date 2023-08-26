import { useTitle } from "../hooks/useTitle";
import { CardCart } from "../components";

export const Cart = () => {
    useTitle("Cart");
    const products = [
        {"id":1, "name":"sony Wh-Ch510 Bluetooth Wireless" ,"price":123,"image":"/assets/images/1001.png"},
        {"id":2, "name":"boAt Rockerz 450","price":234 ,"image":"/assets/images/1002.png"}
    ]
  return (
    <main>
      <section className="cart">
      {
        products.map((product) => (<CardCart key={product.id} product = {product} />))
      }
      </section>
    </main>
  )
  
}
