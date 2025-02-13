
const AboutUs = () => {
    return (
        <div className="bg-base-100 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-lg text-gray-600">
                        Welcome to BookNest, your one-stop destination for a vast collection of books across all genres. Our mission is to foster a love for reading by providing an extensive selection of books and exceptional customer service.
                    </p>
                </div>
                <div className="mt-10 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 flex mx-auto justify-center items-center">
                        <img
                            src="/public/logo.svg"
                            alt="BookNest Store"
                            className="rounded-lg shadow-lg w-[50%]"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
                        <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
                        <p className="text-gray-600 mb-4">
                            Established in 2025, BookNest began as a small local bookstore in Dhaka. Over the years, we have grown into an online platform, reaching book enthusiasts worldwide. Our dedication to quality and passion for literature has been the cornerstone of our success.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Customer Satisfaction: We prioritize our customers' needs and strive to exceed their expectations.</li>
                            <li>Integrity: We conduct our business with honesty and transparency.</li>
                            <li>Community: We believe in giving back and fostering a love for reading within our community.</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
                    <div className="flex flex-wrap justify-center">
                        {/* <!-- Team Member 1 --> */}
                        <div className="w-64 m-4">
                            <div className="card shadow-lg">
                                <figure>
                                    <img src="https://i.ibb.co.com/kqHCD0d/userprofile.png" alt="Team Member 1" className="rounded-t-lg" />
                                </figure>
                                <div className="card-body">
                                    <h3 className="card-title">Jane Doe</h3>
                                    <p className="text-gray-600">Founder & CEO</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Team Member 2 --> */}
                        <div className="w-64 m-4">
                            <div className="card shadow-lg">
                                <figure>
                                    <img src="https://i.ibb.co.com/x7NGnrY/profile.png" alt="Team Member 2" className="rounded-t-lg" />
                                </figure>
                                <div className="card-body">
                                    <h3 className="card-title">John Smith</h3>
                                    <p className="text-gray-600">Chief Operating Officer</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Add more team members as needed --> */}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutUs;