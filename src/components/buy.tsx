import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Buy() {
  return (
    <section id="buy" className="relative min-h-screen bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Buy SWHIT</h2>
          <p className="text-gray-400">
            Join us in revolutionizing long-term value storage. SWHIT token is available on multiple decentralized
            exchanges.
          </p>
          <div className="relative w-full aspect-[16/9] mb-8">
            <Image src="/buy.png" alt="Buy SWHIT" fill className="object-cover rounded-lg shadow-lg" />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="https://app.uniswap.org" target="_blank" rel="noopener noreferrer">
                Trade On Cetus
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="https://pancakeswap.finance" target="_blank" rel="noopener noreferrer">
                Trade On RaidenX 
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

