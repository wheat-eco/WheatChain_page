export function Chart() {
  return (
    <section id="chart" className="relative min-h-screen bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl space-y-8">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Price Chart</h2>
          <div className="h-[600px] rounded-lg border border-border/40 bg-black/50">
            {/* Add your chart component here */}
            <div className="flex h-full items-center justify-center">
              <p className="text-gray-400">Chart coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

