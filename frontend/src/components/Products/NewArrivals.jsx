import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStartLeft, setScrollStartLeft] = useState(0);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [{ url: "https://picsum.photos/500/500?random=1" }],
    },
    {
      _id: "2",
      name: "Stylish Jacket",
      price: 120,
      images: [{ url: "https://picsum.photos/500/500?random=2" }],
    },
    {
      _id: "3",
      name: "Stylish Jacket",
      price: 120,
      images: [{ url: "https://picsum.photos/500/500?random=3" }],
    },
    {
      _id: "4",
      name: "Stylish Jacket",
      price: 120,
      images: [{ url: "https://picsum.photos/500/500?random=4" }],
    },
    {
      _id: "5",
      name: "Stylish Jacket",
      price: 120,
      images: [{ url: "https://picsum.photos/500/500?random=5" }],
    },
    {
      _id: "6",
      name: "Stylish Jacket",
      price: 120,
      images: [{ url: "https://picsum.photos/500/500?random=6" }],
    },
    {
      _id: "7",
      name: "Stylish Jacket",
      price: 120,
      images: [{ url: "https://picsum.photos/500/500?random=7" }],
    },
    {
      _id: "8",
      name: "Stylish Jacket",
      price: 120,
      images: [{ url: "https://picsum.photos/500/500?random=8" }],
    },
  ];

  // ----------------------
  // Drag Handlers
  // ----------------------

  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollStartLeft(scrollRef.current.scrollLeft);
  }, []);

  const handleMouseUpLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      e.preventDefault(); // Prevent text/image selection

      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = x - startX;
      scrollRef.current.scrollLeft = scrollStartLeft - walk;
    },
    [isDragging, startX, scrollStartLeft]
  );

  // ----------------------
  // Scroll Button Logic
  // ----------------------

  const scroll = (direction) => {
    const amount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  const updateScrollButtons = useCallback(() => {
    const container = scrollRef.current;
    if (container) {
      const leftScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(Math.ceil(leftScroll) < Math.ceil(maxScroll));
    }
  }, []);

  useLayoutEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
    };
  }, [updateScrollButtons]);

  return (
    <section className="mt-8 sm:mt-0">
      <div className="container mx-auto text-center mb-12 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-sm sm:text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>

        {/* Scroll Buttons */}
        <div className="absolute right-5 sm:right-10 bottom-[-40px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-1 sm:p-2 rounded border transition ${
              canScrollLeft
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-1 sm:p-2 rounded border transition ${
              canScrollRight
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable Gallery */}
      <div className="mx-5 sm:mx-10">
        <div
          ref={scrollRef}
          className={`container w-full flex space-x-6 overflow-x-scroll select-none 
                     scrollbar-hide relative [scrollbar-width:none] ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpLeave}
          onMouseLeave={handleMouseUpLeave}
        >
          {newArrivals.map((product) => (
            <div
              key={product._id}
              className="min-w-[70%] sm:min-w-[40%] lg:min-w-[25%] relative"
            >
                 {/* Image */}
              <img
                src={product.images[0].url}
                alt={product.name}
                draggable={false}
                onLoad={updateScrollButtons}
                className="w-full rounded-lg"
              />

              {/* Bottom Blur */}
              <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm text-white p-2 sm:p-4 rounded-b-lg">
                <Link to={`/product/${product._id}`}>
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="mt-1">${product.price}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
