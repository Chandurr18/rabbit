import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Gender Collection Section */}
      <GenderCollectionSection />

      {/* New Arrivals Section */}
      <NewArrivals/>

      {/* Best Seller Section*/}
      <h2 className="text-3xl text-center font-bold mb-4 mt-14 sm:mt-10">Best Seller</h2>
      <ProductDetails/>
    </div>
  );
};

export default Home;
