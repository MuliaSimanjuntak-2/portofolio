'use client';

const TestImage = () => {
  return (
    <div className="p-8 bg-white">
      <h2 className="text-black mb-4">Test Images:</h2>
      <div className="space-y-4">
        <div>
          <p className="text-black">E-commerce main interface:</p>
          <img 
            src="/images/projects/ecommerce/main_interface.jpeg" 
            alt="Test"
            className="w-64 h-32 object-cover border"
          />
        </div>
        <div>
          <p className="text-black">About barista:</p>
          <img 
            src="/images/projects/ecommerce/about-barista.jpeg" 
            alt="Test"
            className="w-64 h-32 object-cover border"
          />
        </div>
        <div>
          <p className="text-black">Maps:</p>
          <img 
            src="/images/projects/ecommerce/maps.jpeg" 
            alt="Test"
            className="w-64 h-32 object-cover border"
          />
        </div>
      </div>
    </div>
  );
};

export default TestImage;