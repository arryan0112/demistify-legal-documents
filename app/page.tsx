"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { FileText, Users, Zap, Scale, AlertTriangle, CheckCircle, Eye, Lock } from "lucide-react"

export default function LegalAIPage() {
  const [showDemo, setShowDemo] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background Effects */}
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

          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Try It Now
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
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
            <Card className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-gray-700 p-8 text-center hover:bg-gradient-to-b hover:from-gray-700/50 hover:to-gray-800/50 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Summarize</h3>
              <p className="text-gray-400">Get clear, concise summaries of complex documents</p>
            </Card>

            <Card className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-gray-700 p-8 text-center hover:bg-gradient-to-b hover:from-gray-700/50 hover:to-gray-800/50 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Explain Clauses</h3>
              <p className="text-gray-400">Understand what each clause means in plain English</p>
            </Card>

            <Card className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-gray-700 p-8 text-center hover:bg-gradient-to-b hover:from-gray-700/50 hover:to-gray-800/50 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Answer Questions</h3>
              <p className="text-gray-400">Get instant answers about your legal documents</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Features</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 border-gray-700/50 p-6 hover:bg-gradient-to-b hover:from-cyan-500/10 hover:to-blue-500/10 hover:border-cyan-500/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="w-12 h-12 mb-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Clear Summaries</h3>
              <p className="text-gray-400 text-sm">Distill complex documents into key points</p>
            </Card>

            <Card className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 border-gray-700/50 p-6 hover:bg-gradient-to-b hover:from-green-500/10 hover:to-emerald-500/10 hover:border-green-500/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-green-500/10">
              <div className="w-12 h-12 mb-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Clause Explanations</h3>
              <p className="text-gray-400 text-sm">Break down legal terms into simple language</p>
            </Card>

            <Card className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 border-gray-700/50 p-6 hover:bg-gradient-to-b hover:from-purple-500/10 hover:to-pink-500/10 hover:border-purple-500/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="w-12 h-12 mb-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Lock className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Private & Secure</h3>
              <p className="text-gray-400 text-sm">Your documents stay confidential and protected</p>
            </Card>

            <Card className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 border-gray-700/50 p-6 hover:bg-gradient-to-b hover:from-orange-500/10 hover:to-red-500/10 hover:border-orange-500/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="w-12 h-12 mb-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Easy Guidance</h3>
              <p className="text-gray-400 text-sm">Designed for everyone, no legal background needed</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">See It In Action</h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-gray-400">Hide Demo</span>
              <Switch checked={showDemo} onCheckedChange={setShowDemo} className="data-[state=checked]:bg-cyan-500" />
              <span className="text-gray-400">Show Demo</span>
            </div>
          </div>

          {showDemo && (
            <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
              <Card className="bg-gradient-to-b from-red-900/20 to-red-800/20 border-red-700/30 p-6">
                <h3 className="text-lg font-semibold mb-4 text-red-300">Original Contract Text</h3>
                <div className="bg-black/50 p-4 rounded-lg text-xs text-gray-300 leading-tight">
                  "The Lessee hereby covenants and agrees that they shall not, without the prior written consent of the
                  Lessor, which consent may be withheld in the Lessor's sole and absolute discretion, assign, transfer,
                  mortgage, pledge, hypothecate or otherwise encumber this Lease or any interest therein, or sublet the
                  whole or any part of the demised premises..."
                </div>
              </Card>

              <Card className="bg-gradient-to-b from-green-900/20 to-green-800/20 border-green-700/30 p-6">
                <h3 className="text-lg font-semibold mb-4 text-green-300">AI Simplified Output</h3>
                <div className="bg-black/50 p-4 rounded-lg text-sm text-gray-200 leading-relaxed">
                  <strong className="text-green-400">Simple Translation:</strong>
                  <br />
                  "You cannot transfer your lease, rent out part of your apartment, or use it as collateral for a loan
                  without getting written permission from your landlord first. Your landlord can say no for any reason."
                </div>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Scale className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-semibold text-white">LegalAI</span>
            </div>
            <div className="flex gap-8 text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors duration-200">
                About
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
