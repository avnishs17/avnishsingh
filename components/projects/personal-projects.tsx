import Image from "next/image"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PersonalProjects() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 animate-in">
      <Card className="card-hover border-0 shadow-lg overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start">
            <CardTitle>Sentiment Analysis with Kubernetes Deployment</CardTitle>
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">2024</span>
          </div>
          <CardDescription>September 2024 - October 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video overflow-hidden rounded-lg">
            <Image
              alt="Sentiment analysis dashboard"
              className="object-cover w-full h-full"
              height={225}
              src="/images/sentiment-analysis.png"
              width={400}
              loading="lazy"
            />
          </div>
          <div className="mt-4 space-y-2">
            <p>
              Built a scalable sentiment analysis service using DistilBERT, achieving efficient API endpoints with
              FastAPI and Hugging Face Transformers.
            </p>
            <p>
              Containerized the application with Docker, incorporating NVIDIA GPU support for enhanced performance and
              reducing inference time.
            </p>
            <p>
              Successfully implemented Kubernetes deployment in a local environment using Docker Desktop and Minikube,
              demonstrating proficiency in container orchestration principles.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <a href="https://github.com/avnishs17" target="_blank" rel="noopener noreferrer" className="w-full">
            <Button variant="outline" className="w-full group">
              <Github className="mr-2 h-4 w-4" />
              <span>View on GitHub</span>
            </Button>
          </a>
        </CardFooter>
      </Card>
      <Card className="card-hover border-0 shadow-lg overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start">
            <CardTitle>Food–Not Food Image Classification</CardTitle>
            <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs">2024</span>
          </div>
          <CardDescription>April 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video overflow-hidden rounded-lg">
            <Image
              alt="Food classification examples"
              className="object-cover w-full h-full"
              height={225}
              src="/images/food-classification.png"
              width={400}
              loading="lazy"
            />
          </div>
          <div className="mt-4 space-y-2">
            <p>
              Designed and implemented a TensorFlow + Keras CNN model achieving 93.67% training accuracy and 87.28%
              validation accuracy on a custom-curated dataset.
            </p>
            <p>
              Enhanced model generalization by 8% through strategic incorporation of Batch Normalization and Dropout
              layers.
            </p>
            <p>Integrated Weights & Biases for performance monitoring, reducing model optimization time.</p>
            <div className="mt-4">
              <h4 className="font-semibold">Key Features</h4>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Custom CNN architecture with optimized layers</li>
                <li>Data augmentation pipeline for improved generalization</li>
                <li>Comprehensive experiment tracking with W&B</li>
                <li>Model deployment with TensorFlow Serving</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
