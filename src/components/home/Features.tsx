const Features = () => {


    return (
        <div className="my-12 bg-primary text-primary-content py-12 rounded-2xl">
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
        </div>
    );
};

export default Features;