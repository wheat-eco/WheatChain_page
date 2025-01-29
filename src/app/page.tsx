import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Buy } from "@/components/buy"
import { Contracts } from "@/components/contracts"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="-mt-32">
        {" "}
        {/* Increased negative margin to reduce gap */}
        <About />
        <Buy />
        <Contracts />
      </div>
      <Footer />
    </div>
  )
}

