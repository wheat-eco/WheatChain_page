import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Buy } from "@/components/buy"
import { Contracts } from "@/components/contracts"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Buy />
      <Contracts />
      <Footer />
    </div>
  )
}

