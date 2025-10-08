export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[#0099C2]">
      {/* Background Pattern/Image can be added here */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0099C2] to-[#0299C2] opacity-90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Discover Your Next Adventure
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Explore breathtaking destinations and create memories that last a lifetime
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-[#0099C2] px-8 py-3 rounded-full font-medium hover:bg-[#F2F8FB] transition-colors">
            Explore Destinations
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-[#0099C2] transition-colors">
            View Tours
          </button>
        </div>
      </div>
    </section>
  );
}
