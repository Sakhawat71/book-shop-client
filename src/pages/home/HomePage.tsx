import { Link } from "react-router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestimonialsAndBlogs from "../../components/home/Testimonials";
import Features from "../../components/home/Features";

const HomePage = () => {

    const banners = [
        {
            id: 1,
            title: "Summer Reading Sale",
            subtitle: "Get 50% off on selected books",
            image: "https://via.placeholder.com/1200x400",
            cta: "Shop Now",
            link: "/books"
        },
        {
            id: 2,
            title: "New Arrivals",
            subtitle: "Explore the latest books in our collection",
            image: "https://via.placeholder.com/1200x400",
            cta: "Discover More",
            link: "/books"
        },
        {
            id: 3,
            title: "Free Shipping",
            subtitle: "On all orders over $50",
            image: "https://via.placeholder.com/1200x400",
            cta: "Learn More",
            link: "/offers"
        }
    ];

    return (
        <div className="container mx-auto px-4">
            {/* Banner Carousel */}
            <div className="carousel-wrapper my-6 rounded-2xl overflow-hidden">
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    interval={5000}
                >
                    {banners.map(banner => (
                        <div key={banner.id} className="relative">
                            <img
                                src={banner.image}
                                alt={banner.title}
                                className="w-full h-64 md:h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                <div className="text-center text-white max-w-2xl px-4">
                                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                        {banner.title}
                                    </h2>
                                    <p className="text-lg md:text-xl mb-6">
                                        {banner.subtitle}
                                    </p>
                                    <Link
                                        to={banner.link}
                                        className="btn btn-primary btn-lg"
                                    >
                                        {banner.cta}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* Featured Books */}
            <Features />

            {/* Features Section */}
            <section className="my-12 bg-primary text-primary-content py-12 rounded-2xl">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Why Choose BookHub?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <div className="text-4xl mb-4">📚</div>
                            <h3 className="text-xl font-bold mb-2">Huge Selection</h3>
                            <p>10,000+ books across all genres</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-4xl mb-4">🚚</div>
                            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                            <p>Next-day shipping available</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-4xl mb-4">🛡️</div>
                            <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
                            <p>100% secure checkout process</p>
                        </div>
                    </div>
                </div>
            </section>

            <TestimonialsAndBlogs />
        </div>
    );
};

export default HomePage;