import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function AcademicProjects() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:gap-8 animate-in">
      <Card className="card-hover border-0 shadow-lg overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start">
            <CardTitle>Paranoid Schizophrenia Classification using GNNs on EEG Data</CardTitle>
            <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs">MSc Final Project</span>
          </div>
          <CardDescription>November 2023 - May 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video overflow-hidden rounded-lg">
            <Image
              alt="EEG brain scan visualization"
              className="object-cover w-full h-full"
              height={225}
              src="/images/eeg-brain.png"
              width={400}
              loading="lazy"
            />
          </div>
          <div className="mt-4 space-y-2">
            <p>
              Developed a hybrid GCN-LSTM model achieving 97% accuracy in classifying paranoid schizophrenia from EEG
              brain data, published in Biomedical Signal Processing and Control.
            </p>
            <p>
              Engineered graph representations and preprocessing pipelines for EEG signals, improving model reliability
              by 12%.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-lg">Methodology</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <span className="font-medium">Data Preparation:</span> Processed raw EEG data from multiple channels,
                  applying filtering techniques to remove artifacts and noise.
                </li>
                <li>
                  <span className="font-medium">Graph Construction:</span> Transformed EEG channels into graph
                  structures where nodes represent electrodes and edges represent functional connectivity between brain
                  regions.
                </li>
                <li>
                  <span className="font-medium">Model Architecture:</span> Designed a hybrid model combining Graph
                  Convolutional Networks (GCN) to capture spatial patterns and Long Short-Term Memory (LSTM) networks to
                  model temporal dynamics in brain activity.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-lg">Results</h4>
              <p className="mt-2">
                The hybrid GCN-LSTM model achieved 97% accuracy in classifying paranoid schizophrenia, outperforming
                traditional machine learning approaches and single-architecture deep learning models. The model
                demonstrated strong generalization capabilities across different subjects and recording sessions.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <a
            href="https://doi.org/10.1016/j.bspc.2025.107657"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button variant="outline" className="w-full group">
              <ExternalLink className="mr-2 h-4 w-4" />
              <span>View Publication</span>
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  )
}
