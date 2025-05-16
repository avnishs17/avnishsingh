import Image from "next/image"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Research Portfolio</h1>
      <p className="text-lg mb-8">Explore my projects and publications in machine learning and neuroscience.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <Image
            alt="GNN research visualization"
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
            height={180}
            width={320}
            src="/images/gnn-research.png"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h2 className="text-xl font-semibold">Graph Neural Networks</h2>
            <p className="text-sm">Research on GNNs for node classification.</p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <Image
            alt="EEG brain scan visualization"
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
            height={180}
            width={320}
            src="/images/eeg-brain.png"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h2 className="text-xl font-semibold">EEG Analysis</h2>
            <p className="text-sm">Decoding brain activity from EEG data.</p>
          </div>
        </div>

        {/* Project 3 (Example - you can add more) */}
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <Image
            alt="Placeholder Image"
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
            height={180}
            width={320}
            src="/images/placeholder.png"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h2 className="text-xl font-semibold">Project Title</h2>
            <p className="text-sm">Brief project description.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
