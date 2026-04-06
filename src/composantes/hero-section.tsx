export default function HeroSection() {
  return (
    <section
      className="h-screen mx-6  bg-[url('/couple.jpg')] bg-fixed bg-center bg-cover flex items-center justify-center"
    //   style={{
    //     backgroundImage:
    // `url('/couple.jpg') ` ,
    //   }}
    >
      {/* Overlay sombre */}
      <div className="bg-black/40 w-full h-full flex items-center justify-center">
        
        {/* Contenu */}
        <div className="text-center text-white space-y-4 px-4">
          <p className="text-sm tracking-wide">New Collection</p>

          <h1 className="text-3xl md:text-5xl font-bold">
            Be different in your own way!
          </h1>

          <p className="text-lg">Find your unique style.</p>

          <button className="bg-black px-6 py-2 mt-4 hover:bg-gray-800 transition">
            Shop Collection
          </button>
        </div>

      </div>
    </section>
  );
}