import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfessionalResearch() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:gap-8 animate-in">
      <Card className="card-hover border-0 shadow-lg overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start">
            <CardTitle>GNN Architectures for Advanced Persistent Threat Detection</CardTitle>
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">Current</span>
          </div>
          <CardDescription>July 2024 - Present</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video overflow-hidden rounded-lg">
            <Image
              alt="GNN research visualization"
              className="object-cover w-full h-full"
              height={225}
              src="/images/gnn-research.png"
              width={400}
              loading="lazy"
            />
          </div>
          <div className="mt-4 space-y-2">
            <p>
              Investigating GNN architectures for improvising graph representational learning for provenance graphs,
              improving advanced persistent threat detection through classification of malicious nodes using node
              embeddings learned from graph representation.
            </p>
            <p>
              Evaluated various existing state-of-the-art models using DARPA E3 CADETS, Theia, TRACE, and StreamSpot
              datasets.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-lg">Research Methodology</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <span className="font-medium">Data Collection:</span> Utilizing DARPA E3 CADETS, Theia, TRACE, and
                  StreamSpot datasets to create comprehensive provenance graphs that capture system activities and
                  interactions.
                </li>
                <li>
                  <span className="font-medium">Graph Representation:</span> Developing techniques to transform system
                  logs and events into structured graph representations that preserve temporal and causal relationships.
                </li>
                <li>
                  <span className="font-medium">Model Development:</span> Implementing and evaluating various GNN
                  architectures including GraphSAGE, Graph Attention Networks, and custom hybrid models.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-lg">Current Findings</h4>
              <p className="mt-2">
                Initial results indicate that incorporating both structural and temporal features significantly improves
                detection accuracy. The Masked Graph Attention Autoencoder has shown promising results in unsupervised
                anomaly detection scenarios, while GraphSAGE with positional and contextual embeddings performs well in
                supervised classification tasks.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
