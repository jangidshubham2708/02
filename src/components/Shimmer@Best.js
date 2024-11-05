const ShimmerBest = () => {
    return (
      <div className="flex flex-wrap justify-center my-8">
        {Array.from({ length: 20}).map((index) => (
          <div
            key={index}
            className="w-80 h-8 pr-44 m-1 rounded-lg bg-gray-200 animate-pulse"
            aria-hidden="true"
          ></div>
        ))}
      </div>
    );
  };
  
  export default ShimmerBest;
  