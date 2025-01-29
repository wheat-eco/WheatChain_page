import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Contracts() {
  return (
    <section id="contracts" className="relative bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contracts</h2>
          <p className="text-gray-400">View our smart contracts on blockchain explorers.</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link
                href="https://suiscan.xyz/mainnet/coin/0x4eaaef2c74b1793e1c63e5f3843087921aebc815a36e9993958e199885c327b2::swhit::SWHIT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Image src="/Suiscan.png" alt="Suiscan" width={24} height={24} />
                View on Suiscan
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href="https://suivision.xyz/coin/0x4eaaef2c74b1793e1c63e5f3843087921aebc815a36e9993958e199885c327b2::swhit::SWHIT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Image src="" alt="" width={24} height={24} />
                View on Suivision
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

