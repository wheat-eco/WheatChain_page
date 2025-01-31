import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Buy() {
  return (
    <section id="buy" className="relative bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get SWHIT on DEXs
          </h2>
          <p className="text-gray-400">
            SWHIT is available on decentralized exchanges for easy swapping. Securely trade SWHIT and be part of the future of value storage.
          </p>
          {/* Trade Image - Optional */}
          <div className="relative w-full max-w-[600px] mx-auto aspect-[16/9] mb-8">
            <Image src="/trade-image.png" alt="Trade SWHIT" fill className="object-contain rounded-lg" />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link
                href="https://app.cetus.zone/swap/?outputCurrency=0x4eaaef2c74b1793e1c63e5f3843087921aebc815a36e9993958e199885c327b2::swhit::SWHIT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Image src="/Cetus_logo.png" alt="Cetus" width={24} height={24} />
                Trade on Cetus
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href="https://raidenx.io/sui/token/0x4eaaef2c74b1793e1c63e5f3843087921aebc815a36e9993958e199885c327b2::swhit::SWHIT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Image src="/raidenx.png" alt="RaidenX" width={24} height={24} />
                Trade on RaidenX
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}