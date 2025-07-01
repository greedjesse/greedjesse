import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Zap } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Unity Development",
      description: "Creating powerful tools and systems for Unity game developers",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Asset Creation",
      description: "Building assets that solve real development challenges",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Performance Focus",
      description: "Optimized solutions designed for real-time applications and games",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a Unity developer passionate about creating tools and assets that empower game developers to bring their
            visions to life. My focus is on building practical, performance-optimized solutions that solve real
            development challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 hover:bg-primary/5 cursor-pointer hover:scale-102"
            >
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:border-primary/20">
            <CardContent className="pt-0">
              <h3 className="text-2xl font-semibold mb-6">My Development Journey</h3>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  My journey began with game development, where I discovered the power of creating reusable tools and
                  assets. I believe that great Unity assets should be intuitive, well-documented, and solve real
                  problems that developers face every day.
                </p>
                <p>
                  Every asset I create is born from actual development needs and tested in real projects. I focus on
                  providing comprehensive documentation and responsive support to help developers succeed. Let's build
                  amazing games together!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
