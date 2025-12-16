import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Layout/Hero";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import { fetchProductsByFilters } from "../redux/slice/productsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [bestSellerProduct, setBestSellerProduct] = useState(null);

  useEffect(() => {
    // Fetch products for a specific collection
    dispatch(
      fetchProductsByFilters({
        gender: "Women",
        category: "Bottom Wear",
        limit: 8,
      })
    );

    // Fetch Best Seller ProductDetails
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );

        setBestSellerProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBestSeller();
  }, [dispatch]);

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Gender Collection Section */}
      <GenderCollectionSection />

      {/* New Arrivals Section */}
      <NewArrivals />

      {/* Best Seller Section*/}
      <h2 className="text-3xl text-center font-bold mb-4 mt-14 sm:mt-10">
        Best Seller
      </h2>
      {bestSellerProduct ? (
        <ProductDetails productId={bestSellerProduct._id} />
      ) : (
        <p className="text-center">Loading best seller product ...</p>
      )}

      {/* Top Wears for Women Section */}
      <div className="container mx-auto px-2 sm:px-20">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={products} loading={loading} error={error} />
      </div>

      {/* Featured Collection Section */}
      <FeaturedCollection />

      {/* Features Section */}
      <FeaturesSection />
    </div>
  );
};

export default Home;
