import Link from "next/link"
import { Twitter, Send, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-black py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-gray-400">© 2024 WheatChain. All rights reserved.</p>
        <div className="flex items-center space-x-4">
          <Link
            href="https://x.com/wheatchain_xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary"
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            href="https://t.me/swhit_tg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary"
          >
            <Send className="h-5 w-5" />
          </Link>
          <Link href="mailto:info@wheatchain.xyz" className="text-gray-400 hover:text-primary">
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

