import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-black">
      <div className="container flex flex-col items-center justify-center space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="font-titillium font-black text-4xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            WheatChain
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl font-light">
            Sowing the Seeds of Digital Prosperity
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="font-medium">
            <Link href="#buy">Buy Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-medium">
            <Link href="#about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

