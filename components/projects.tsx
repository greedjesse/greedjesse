"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Download, Play, Camera } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  const project = {
    title: "Depth-Based Pixelator",
    description:
      "This effect applies pixelation based on depth — objects closer to the camera appear more pixelated, while distant ones stay sharper to preserve detail. Built using multiple custom render passes and a renderer feature, designed specifically for perspective cameras. Features customizable depth mapping and per-level resolution control.",
    image: "/images/unity-scene-thumbnail.png",
    videoUrl: "https://drive.google.com/file/d/1WuXIAvOsDmispLoXKAlVDyLAcy_oD2Qy/preview",
    technologies: ["Unity", "URP", "HLSL", "Shader Graph", "Post-Processing", "Renderer Features", "Render Passes"],
    features: [
      "Depth-Based Pixelation",
      "Perspective Camera Support",
      "Customizable Depth Mapping",
      "Per-Level Resolution Control",
      "URP Compatible",
    ],
    assetStoreUrl: "https://assetstore.unity.com/packages/your-asset",
    demoUrl: "https://greedjesse.github.io/Depth-Based-Pixelator-Demo/",
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Featured Unity Asset</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My flagship Unity shader asset, designed to create unique visual effects with depth-based pixelation for URP
            projects.
          </p>
        </div>

        {/* Video Showcase */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Play className="h-6 w-6 text-primary" />
                Depth Based Pixelator
              </CardTitle>
              <p className="text-muted-foreground">
                See the Depth-Based Pixelator in action with live demonstrations of the depth-based pixelation effect
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-b-lg"
                  src={project.videoUrl}
                  title="Unity Shader Showcase"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Project Details */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-64 md:h-80 overflow-hidden bg-gray-900 group">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover object-center scale-150 transition-transform duration-500 group-hover:scale-155"
                priority
                style={{
                  objectPosition: "center center",
                  transform: "scale(1.5)",
                  transformOrigin: "center center",
                }}
              />
              {/* Perspective Camera Support Tag */}
              <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
                <Camera className="h-4 w-4" />
                Perspective Camera Support
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 text-lg">{project.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {project.features.map((feature, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-sm justify-center cursor-pointer transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-102 hover:shadow-sm"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-sm cursor-pointer transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-102 hover:shadow-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <Link href={project.assetStoreUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 mr-2" />
                    Unity Asset Store
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Demo
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">More assets coming soon!</p>
        </div>
      </div>
    </section>
  )
}
