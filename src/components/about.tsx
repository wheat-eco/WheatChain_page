export function About() {
  return (
    <section id="about" className="relative min-h-screen bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About</h2>
          <div className="space-y-4 text-gray-400">
            <p>
              In the dark times, when people were just beginning to learn about the art of virtual gold, there lived a
              hero named WheatChain.
            </p>
            <img src="/about.png" alt="About WheatChain" className="my-8 rounded-lg shadow-lg" />
            <p>
              WheatChain (SWHIT) is a revolutionary blockchain-based platform designed to redefine the concept of
              long-term value storage in the digital age. Inspired by the timeless practice of storing wheat for future
              generations, WheatChain aims to create a digital asset that starts with a modest valuation but has the
              potential to surpass even Bitcoin in long-term value and utility.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

