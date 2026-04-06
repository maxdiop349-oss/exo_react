import React from 'react'

export default function AboutPage() {
  return (
    <section className='bg-gray-50 py-16 px-4'>
      <div className="max-w-6xl mx-auto">
        {/* En-tête de la section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">About</h2>
          <div className="w-12 h-1 bg-gray-400 mx-auto mb-6"></div>
          <p className="text-black font-bold max-w-2xl mx-auto italic">
            Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci.
            Suspendisse vulputate semper nunc eget rhoncus.
          </p>
          <p className='text-gray-600 italic mx-auto max-w-2xl mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus. Ut sit amet porta sem, interdum tincidunt libero. Nulla vel quam lobortis, varius est scelerisque, dapibus nisl.
          </p>
        </div>
      </div>
      <section
        className="bg-fixed bg-[url('/vet.jpg')] bg-center bg-cover min-h-screen flex items-center">
        {/* Overlay sombre */}
        <div className=" px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-white">
            {/* Paragraphe gauche */}
            <div>
              <h1 className='mb-4 text-xl'>The mission</h1>
              <p className="text-lg font-bold leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <div className='w-15 h-1 bg-black  mt-9'></div>
            </div>
            {/* Paragraphe droite */}
            <div>
              <h1 className="text-2xl font-bold leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt.
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto">
          {/* En-tête de la section */}
          <div className="text-center ">
            <h2 className="text-4xl font-bold text-black mt-4">How it started</h2>
            <div className="w-12 h-1 bg-black mx-auto mt-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto italic mt-6">
              Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci.
              Suspendisse vulputate semper nunc eget rhoncus.
            </p>
          </div>
        </div>
        <div className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0 items-stretch">
            <div className="bg-[#e8dcd7] p-10 md:p-16">
              <h2 className="text-4xl font-bold text-black mb-6 leading-tight">
                Vel mauris molestie dignissim
              </h2>
              <p className="font-semibold text-gray-900 mb-4">
                Proin eu ante vel mauris molestie dignissim non eget nunc.
                Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Praesent vel faucibus ligula. Sed sit amet ipsum eget velit aliquet faucibus.
                Maecenas et odio id turpis sollicitudin pulvinar sit amet vitae augue.
                Phasellus nec ultricies arcu. Quisque efficitur tellus sit amet bibendum molestie.
                Duis id egestas odio. Phasellus lacinia ex quis faucibus tempor. Sed feugiat.
              </p>
            </div>
            {/* Image à droite */}
            <div className="">
              <img
                src="/habit.jpg"
                alt="interior"
                className="h-full object-cover "
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
