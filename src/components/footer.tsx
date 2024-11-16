'use client'

import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Company Name</h2>
            <p className="mb-4">We are dedicated to providing the best service to our customers.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary-foreground transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="hover:text-secondary-foreground transition-colors" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" className="hover:text-secondary-foreground transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="hover:text-secondary-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p>123 Main Street</p>
              <p>Anytown, ST 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@company.com</p>
            </address>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-secondary text-secondary-foreground"
              />
              <Button type="submit" className="w-full">
                <Mail className="mr-2 h-4 w-4" /> Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-secondary text-center">
          <p>&copy; {currentYear} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}