import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Check className="h-6 w-6 text-purple-500" />
            <span className="text-xl font-bold">AIMaster</span>
          </div>
          <Button
            variant="outline"
            className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
          >
            <Link href="/sign-in">Login</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight">Your AI tasks, simplified</h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
          Create, manage, and conquer your to-do lists with the power of artificial intelligence.
          Let AI handle the complexity while you focus on what matters.
        </p>
        <Button className="bg-purple-500 text-white hover:bg-purple-600">
          Get started for free
        </Button>
        <div className="mt-4 text-sm text-gray-500">No credit card required</div>

        {/* App Preview */}
        <div className="mt-16 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4">
          <Image
            src="/placeholder.svg?height=600&width=800"
            width={800}
            height={600}
            alt="App interface preview"
            className="rounded-lg shadow-2xl"
          />
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400">Trusted by over</p>
          <p className="text-3xl font-bold">50,000</p>
          <p className="text-sm text-gray-400">AI enthusiasts and developers</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="mb-16 text-center text-3xl font-bold">
          Three simple steps to AI-powered organization
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              number: "1",
              title: "Connect",
              description: "Link your tasks and let AI understand your workflow",
            },
            {
              number: "2",
              title: "Optimize",
              description: "AI analyzes and optimizes your task management",
            },
            {
              number: "3",
              title: "Execute",
              description: "Complete tasks efficiently with AI assistance",
            },
          ].map((step) => (
            <div key={step.number} className="relative rounded-lg bg-gray-900 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-xl font-bold">
                {step.number}
              </div>
              <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="mb-16 text-center text-3xl font-bold">Choose your AI power level</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: "AIMasterPro",
              price: "$4.99",
              features: [
                "Unlimited tasks",
                "Advanced AI suggestions",
                "Priority task optimization",
                "Custom AI workflows",
                "24/7 AI assistance",
              ],
            },
            {
              title: "AIMasterTeam",
              price: "$9.99",
              features: [
                "All AIMasterPro features",
                "Team collaboration tools",
                "Advanced analytics",
                "Custom AI training",
                "Dedicated account manager",
              ],
            },
          ].map((plan) => (
            <Card key={plan.title} className="border-gray-800 bg-gray-900">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">{plan.title}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400"> / month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-white">
                      <Check className="mr-2 h-5 w-5 text-purple-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full bg-purple-600 text-white hover:bg-purple-700">
                  Get started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <div className="rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src="/placeholder.svg?height=50&width=50"
                width={50}
                height={50}
                alt="User avatar"
                className="rounded-full"
              />
              <div>
                <div className="font-bold">Sarah Chen</div>
                <div className="text-sm text-gray-400">AI Product Manager</div>
              </div>
            </div>
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
              Verified User
            </Badge>
          </div>
          <p className="mt-4 text-lg">
            &quot;AIMaster revolutionized my daily workflow. The AI suggestions are incredibly
            accurate, and I&apos;ve never been more productive!&quot;
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 AIMaster. All rights reserved.</p>
          <div className="mt-4">
            <Link href="#" className="text-purple-500 hover:text-purple-400">
              Terms
            </Link>
            <span className="mx-2">·</span>
            <Link href="#" className="text-purple-500 hover:text-purple-400">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
