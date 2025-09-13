"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { FileText, Users, Zap, Scale, AlertTriangle, Eye } from "lucide-react"

export default function LegalAIPage() {
  const [showDemo, setShowDemo] = useState(false)
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  const askQuestion = async () => {
    if (!question) return
    setLoading(true)
    try {
      const response = await fetch("http://127.0.0.1:8000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      })
      const data = await response.json()
      setAnswer(data.answer)
    } catch (err) {
      console.error(err)
      setAnswer("Error connecting to backend")
    }
    setLoading(false)
  }

  const uploadFile = async () => {
    if (!file) return
    setUploading(true)
    try {
      const formData = new FormData()
      formData.append("file", file)
      const response = await fetch("http://127.0.0.1:8000/upload", {
        method: "POST",
        body: formData,
      })
      const data = await response.json()
      alert(`✅ File uploaded! Chunks stored: ${data.chunks}`)
    } catch (err) {
      console.error(err)
      alert("❌ File upload failed")
    }
    setUploading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse" />
              <div className="relative w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <Scale className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent leading-tight">
            Demystify Legal Documents with AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Turning complex contracts into clarity
          </p>

          {/* File Upload */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <input
              type="file"
              accept="application/pdf"
              className="p-2 rounded-md text-gray-200"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
            <Button
              onClick={uploadFile}
              disabled={uploading || !file}
              className="px-6 py-2"
            >
              {uploading ? "Uploading..." : "Upload PDF"}
            </Button>
          </div>

          {/* Input + Ask Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <input
              type="text"
              placeholder="Ask a legal question..."
              className="p-4 rounded-md text-black w-full max-w-lg"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <Button
              size="lg"
              onClick={askQuestion}
              disabled={loading || !question}
              className="px-8 py-4"
            >
              {loading ? "Thinking..." : "Ask"}
            </Button>
          </div>

          {answer && (
            <Card className="mt-4 p-4 bg-gray-800 max-w-lg mx-auto">
              <h3 className="text-white font-semibold mb-2">Answer:</h3>
              <p className="text-gray-300">{answer}</p>
            </Card>
          )}
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">The Challenge</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Legal documents are filled with complex jargon that creates information asymmetry, financial risks, and
            confusion for everyday users.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <FileText className="w-10 h-10 text-red-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Complex Jargon</h3>
            <p className="text-gray-400">Dense legal language that's impossible to understand</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <AlertTriangle className="w-10 h-10 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Financial Risks</h3>
            <p className="text-gray-400">Hidden clauses that can cost you money</p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Scale className="w-10 h-10 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Information Asymmetry</h3>
            <p className="text-gray-400">Unequal access to legal understanding</p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our AI transforms rental agreements, loan contracts, and terms of service into plain language that
              everyone can understand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 p-8 text-center hover:bg-gray-700/50 transition-all duration-300 group">
              <FileText className="w-8 h-8 text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4 text-white">Summarize</h3>
              <p className="text-gray-400">Get clear, concise summaries of complex documents</p>
            </Card>

            <Card className="bg-gray-800/50 p-8 text-center hover:bg-gray-700/50 transition-all duration-300 group">
              <Eye className="w-8 h-8 text-green-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4 text-white">Explain Clauses</h3>
              <p className="text-gray-400">Understand what each clause means in plain English</p>
            </Card>

            <Card className="bg-gray-800/50 p-8 text-center hover:bg-gray-700/50 transition-all duration-300 group">
              <Zap className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-4 text-white">Answer Questions</h3>
              <p className="text-gray-400">Get instant answers about your legal documents</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">See It In Action</h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-gray-400">Hide Demo</span>
            <Switch checked={showDemo} onCheckedChange={setShowDemo} className="data-[state=checked]:bg-cyan-500" />
            <span className="text-gray-400">Show Demo</span>
          </div>

          {showDemo && (
            <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
              <Card className="bg-red-900/20 p-6">
                <h3 className="text-red-300 mb-4">Original Contract Text</h3>
                <div className="bg-black/50 p-4 rounded-lg text-xs text-gray-300 leading-tight">
                  "The Lessee hereby covenants and agrees..."
                </div>
              </Card>

              <Card className="bg-green-900/20 p-6">
                <h3 className="text-green-300 mb-4">AI Simplified Output</h3>
                <div className="bg-black/50 p-4 rounded-lg text-sm text-gray-200 leading-relaxed">
                  "You cannot transfer your lease, rent out part of your apartment, or use it as collateral..."
                </div>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Scale className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-semibold text-white">LegalAI</span>
          </div>
          <div className="flex gap-8 text-gray-400">
            <a href="#" className="hover:text-cyan-400">About</a>
            <a href="#" className="hover:text-cyan-400">Privacy</a>
            <a href="#" className="hover:text-cyan-400">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

