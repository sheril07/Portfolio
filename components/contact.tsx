"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Let's Connect</h2>
        <p className="text-xl text-gray-400 mb-16 max-w-2xl">
          Have a project in mind or want to collaborate? I'm always interested in hearing about new opportunities and
          innovative ideas.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-3 text-white">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-3 text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-3 text-white">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-full font-semibold text-white bg-black border border-gray-700 hover:bg-gray-900 hover:border-teal-500 transition-all duration-300"
            >
              {submitted ? "Message Sent! ✓" : "Send Message"}
            </button>
          </form>

          {/* Contact Information */}
          <div className="flex flex-col justify-start space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Get In Touch</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always interested in hearing about new projects, collaborations, and opportunities. Feel free to
                reach out!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:sherilsiby111@gmail.com"
                className="flex items-center gap-4 p-5 bg-gray-900/50 border border-gray-700 rounded-xl hover:border-teal-500 hover:bg-gray-900 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-sm text-gray-400">sherilsiby111@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/sheril-siby-thomas-899860377"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-gray-900/50 border border-gray-700 rounded-xl hover:border-teal-500 hover:bg-gray-900 transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-white">LinkedIn</p>
                  <p className="text-sm text-gray-400">View my profile</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 p-5 bg-gray-900/50 border border-gray-700 rounded-xl hover:border-teal-500 hover:bg-gray-900 transition-all duration-300 group"
              >
                <Github className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-white">GitHub</p>
                  <p className="text-sm text-gray-400">Check my repositories</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
