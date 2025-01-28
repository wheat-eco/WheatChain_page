import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Buy } from "@/components/buy"
import { Chart } from "@/components/chart"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Buy />
      <Chart />
      <Footer />
    </div>
  )
}

