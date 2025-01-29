import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center bg-black overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-90" />
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00a6ed]/20 blur-[120px] rounded-full" />
      </div>

      <div className="container relative flex flex-col items-center justify-center space-y-12 text-center px-4">
        <div className="space-y-6">
          <h1 className="font-titillium font-black text-5xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            WheatChain
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            Sowing the Seeds of Digital Prosperity
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button
            asChild
            size="lg"
            className="font-medium text-base px-8 py-6 bg-gradient-to-r from-[#00a6ed] to-[#0077ff] hover:from-[#0077ff] hover:to-[#00a6ed] transition-all duration-300"
          >
            <Link href="#buy">Buy Now</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-medium text-base px-8 py-6 border-white/20 hover:bg-white/10 transition-all duration-300"
          >
            <Link href="#about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

