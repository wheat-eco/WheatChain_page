import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center bg-black">
      <div className="container relative flex flex-col items-center justify-center space-y-12 text-center px-4">
        {/* Hero Image */}
        <div className="relative w-full max-w-[800px] aspect-[16/9] mb-8">
          <Image src="/hero.png" alt="WheatChain Hero" fill className="object-contain" priority />
        </div>
        <div className="space-y-6">
          <h1 className="font-titillium font-black text-5xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-white">
            WheatChain
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            Building The Future Of Decentralized Finance.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button asChild size="lg" className="font-medium text-base px-8 py-6">
            <Link href="#buy">Trade Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-medium text-base px-8 py-6">
            <Link href="#about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

