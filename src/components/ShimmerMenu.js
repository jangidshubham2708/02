const ShimmerMenu = () => {
  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-72 h-12 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="w-72 h-12 bg-gray-300 rounded-lg animate-pulse"></div>
      </div>
      <div className="w-full flex flex-col items-center space-y-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="w-full max-w-4xl h-16 bg-gray-300 rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerMenu;
