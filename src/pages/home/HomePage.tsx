import TestimonialsAndBlogs from "../../components/home/Testimonials";
import FeaturedBooks from "../../components/home/FeaturedBooks";
import Features from "../../components/home/Features";
import Banner from "../../components/home/Banner";

const HomePage = () => {



    return (
        <div className="container mx-auto px-4 bg-gray-50">
            {/* Banner Carousel */}
            <Banner />

            {/* Featured Books */}
            <FeaturedBooks />

            {/* Features Section */}
            <Features />

            <TestimonialsAndBlogs />
        </div>
    );
};

export default HomePage;