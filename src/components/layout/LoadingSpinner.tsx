const LoadingSpinner = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-100">
            {/* Spinner Animation */}
            <div className="relative w-24 h-24">
                {/* Outer Ring */}
                <div className="absolute w-full h-full rounded-full border-4 border-primary border-opacity-25"></div>

                {/* Spinning Circle */}
                <div className="absolute w-full h-full rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
            </div>

            {/* Loading Text */}
            <p className="mt-4 text-lg font-semibold text-primary">Loading...</p>

            {/* Optional: Subtle Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-25 animate-pulse"></div>
        </div>
    );
};

export default LoadingSpinner;