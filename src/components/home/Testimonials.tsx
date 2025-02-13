const TestimonialsAndBlogs = () => {
    // Testimonials data
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            location: "New York, USA",
            comment: "I absolutely love BookHub! The selection is incredible, and the delivery is always on time. Highly recommend!",
            image: "https://i.ibb.co.com/x7NGnrY/profile.png",
            rating: 5
        },
        {
            id: 2,
            name: "Michael Smith",
            location: "London, UK",
            comment: "The best online bookstore I've ever used. Great prices and excellent customer service.",
            image: "https://i.ibb.co.com/MDCQdKNq/69854120-9467799.jpg",
            rating: 4.5
        },
        {
            id: 3,
            name: "Emily Davis",
            location: "Sydney, Australia",
            comment: "BookHub has made reading so much more accessible for me. I can't imagine shopping anywhere else!",
            image: "https://i.ibb.co.com/x7NGnrY/profile.png",
            rating: 5
        }
    ];

    // Blog posts data
    const blogs = [
        {
            id: 1,
            title: "Top 10 Must-Read Books of 2024",
            excerpt: "Discover the most anticipated books of the year, from gripping thrillers to heartwarming memoirs.",
            image: "https://i.ibb.co.com/RkyXqytt/23945937-6891838.jpg",
            link: "#"
        },
        {
            id: 2,
            title: "How to Build a Reading Habit",
            excerpt: "Learn practical tips to make reading a daily habit and enjoy the benefits of a book-filled life.",
            image: "https://i.ibb.co.com/012Y6DV/23945910-6891641.jpg",
            link: "#"
        },
        {
            id: 3,
            title: "The Benefits of Reading Before Bed",
            excerpt: "Find out why reading before bed can improve your sleep and overall well-being.",
            image: "https://i.ibb.co.com/pB7bztw2/23945885-6891726.jpg",
            link: "#"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Testimonials Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">What Our Readers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="card bg-base-100 shadow-lg">
                            <div className="card-body">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="avatar">
                                        <div className="w-12 h-12 rounded-full">
                                            <img src={testimonial.image} alt={testimonial.name} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold">{testimonial.name}</h3>
                                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4">{testimonial.comment}</p>
                                <div className="rating rating-sm">
                                    {[...Array(5)].map((_, i) => (
                                        <input
                                            key={i}
                                            type="radio"
                                            name={`rating-${testimonial.id}`}
                                            className="mask mask-star-2 bg-orange-400"
                                            checked={i + 1 === testimonial.rating}
                                            readOnly
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Blogs Section */}
            <section>
                <h2 className="text-3xl font-bold text-center mb-8">From Our Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map(blog => (
                        <div key={blog.id} className="card bg-base-100 shadow-lg">
                            <figure className="px-4 pt-4 w-80 flex justify-center items-center mx-auto">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="rounded-xl h-full w-full "
                                />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title">{blog.title}</h3>
                                <p className="text-gray-700">{blog.excerpt}</p>
                                <div className="card-actions justify-end">
                                    <a
                                        href={blog.link}
                                        className="btn btn-primary btn-sm"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TestimonialsAndBlogs;