"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("greed.jesse.business@gmail.com")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about my Unity asset? Need custom development? Or just want to discuss game development? I'd
            love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 text-center">
                I'm always excited to discuss Unity development, asset creation, and help fellow developers solve
                challenging problems. Whether you need support with my asset or want to collaborate on something new,
                don't hesitate to reach out!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <Card className="text-center p-6 hover:scale-102 transition-all duration-300 hover:shadow-sm">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <Mail className="h-8 w-8" />
                    </div>
                  </div>
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <a
                      href="mailto:greed.jesse.business@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-102 block"
                    >
                      greed.jesse.business@gmail.com
                    </a>
                    <Button
                      variant="outline"
                      onClick={copyEmail}
                      className={`w-full bg-transparent transition-all duration-300 ${
                        copied ? "bg-green-500/10 border-green-500 text-green-600" : ""
                      }`}
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy Email
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:scale-102 transition-all duration-300 hover:shadow-sm">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                      </svg>
                    </div>
                  </div>
                  <CardTitle>Reddit</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <a
                      href="https://www.reddit.com/user/greedjesse/"
                      className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-102 block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      u/greedjesse
                    </a>
                    <Button variant="outline" asChild className="w-full bg-transparent">
                      <a href="https://www.reddit.com/user/greedjesse/" target="_blank" rel="noopener noreferrer">
                        Visit Profile
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center pt-8">
              <h4 className="font-medium mb-4">Asset Support</h4>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Need help with my Unity asset? Feel free to contact me directly via email or Reddit. I provide
                comprehensive support and am always happy to help developers succeed with their projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
