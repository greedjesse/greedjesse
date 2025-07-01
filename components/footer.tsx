import Link from "next/link"
import { Github, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">greedjesse</h3>
            <p className="text-muted-foreground">
              Unity Asset Developer creating stunning visual effects for game developers worldwide.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/greedjesse"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-102"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://assetstore.unity.com/publishers/104649"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-102"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="w-5 h-5 bg-current"
                  style={{
                    maskImage: "url('/images/unity-logo.png')",
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskImage: "url('/images/unity-logo.png')",
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                  }}
                />
              </Link>
              <Link
                href="https://gmail.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-102"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.reddit.com/user/greedjesse/"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-102"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-102"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-102"
                >
                  Unity Assets
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-102"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="https://assetstore.unity.com/publishers/104649"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-102"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unity Asset Store
                </Link>
              </li>
            </ul>
          </div>

          {/* Asset Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Unity Assets</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Depth-Based Pixelator</p>
              <p>Available on Unity Asset Store</p>
              <p>URP Compatible</p>
              <p>Full documentation included</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} greedjesse. Made with <Heart className="h-4 w-4 text-red-500" /> for Unity developers.
          </p>
        </div>
      </div>
    </footer>
  )
}
