import { Link } from "react-router-dom";
import mensCollectionImage from "../../assets/mens-collection.webp";
import womensCollectionImage from "../../assets/womens-collection.webp";
const GenderCollectionSection = () => {
  return (
    <section className="px-10 sm:px-20 py-6 sm:py-12">
      <div className="container flex flex-col justify-around gap-10 items-center  md:flex-row">
        {/* Women's Collection */}
        <div className="relative">
          <img
            src={womensCollectionImage}
            alt="Women's Collection"
            className="w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] object-center"
          />
          <div className="absolute bottom-8 left-8 bg-white/90 p-2">
            <h2 className="text-xl font-bold text-gray-900">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="underline text-gray-900"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Men's Collection */}
        <div className="relative">
          <img
            src={mensCollectionImage}
            alt="Men's Collection"
            className="w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] object-center"
          />
          <div className="absolute bottom-8 left-8 bg-white/90 p-4">
            <h2 className="text-xl font-bold text-gray-900">
              Men's Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="underline text-gray-900"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
