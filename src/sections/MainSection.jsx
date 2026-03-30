import Stats from "../components/Stats";
import CartSection from "./CartSection";
import ProductsSection from "./ProductsSection";
import Started from "./Started";



export default function MainSection() {
  return (
    <div className='container mx-auto px-2'>
      <Stats />
      <ProductsSection />
      <Started />
      <CartSection />
    </div>
  );
}
