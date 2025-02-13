import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {

    const banners = [
        {
            id: 1,
            title: "Summer Reading Sale",
            subtitle: "Get 50% off on selected books",
            image: "https://i.ibb.co.com/0RQLnt3F/38858726-8666479.jpg",
            cta: "Shop Now",
            link: "/products"
        },
        {
            id: 2,
            title: "New Arrivals",
            subtitle: "Explore the latest books in our collection",
            image: "https://i.ibb.co.com/YFTmm1fg/22891620-6712469.jpg",
            cta: "Discover More",
            link: "/products"
        },
        {
            id: 3,
            title: "Free Shipping",
            subtitle: "On all orders over $50",
            image: "https://i.ibb.co.com/XxWxFFzS/29799371-7629997.jpg",
            cta: "Learn More",
            link: "/products"
        }
    ];


    return (
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
                            className="w-full h-64 md:h-96 lg:h-[450px] object-cover"
                        />
                        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                            <div className="text-center text-black max-w-2xl px-4">
                                {/* <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                    {banner.title}
                                </h2> */}
                                {/* <p className="text-lg md:text-xl mb-6">
                                    {banner.subtitle}
                                </p> */}
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
    );
};

export default Banner;