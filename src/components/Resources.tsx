import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Code2, Rocket, BookOpen } from "lucide-react";

const Resources = () => {
  return (
    <section id="resources" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Everything you need to get started
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive documentation, code samples, and guides to help you integrate VocaSense in minutes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:border-accent/50">
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">API Reference</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Complete API documentation with examples and best practices
              </p>
              <Button variant="link" className="p-0 h-auto">
                View Docs →
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:border-accent/50">
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                <Rocket className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">Quickstart</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get up and running in under 5 minutes with our quickstart guide
              </p>
              <Button variant="link" className="p-0 h-auto">
                Get Started →
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:border-accent/50">
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                <Code2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">Code Samples</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Ready-to-use code examples in Python, JavaScript, Go, and more
              </p>
              <Button variant="link" className="p-0 h-auto">
                Browse Code →
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:border-accent/50">
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">Tutorials</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Step-by-step guides for common use cases and integrations
              </p>
              <Button variant="link" className="p-0 h-auto">
                Read Tutorials →
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Code Sandbox Preview */}
        <div className="mt-16 max-w-5xl mx-auto">
          <Card className="border-2 border-accent/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Interactive Code Sandbox</h3>
                <Button variant="outline">Open Sandbox</Button>
              </div>
              <div className="bg-slate-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="space-y-2">
                  <div><span className="text-blue-400">import</span> VocaSense <span className="text-blue-400">from</span> <span className="text-yellow-400">'vocasense'</span>;</div>
                  <div className="mt-4"><span className="text-purple-400">const</span> client = <span className="text-blue-400">new</span> VocaSense(</div>
                  <div className="pl-4">api_key: <span className="text-yellow-400">'your_api_key_here'</span></div>
                  <div>);</div>
                  <div className="mt-4"><span className="text-purple-400">const</span> result = <span className="text-blue-400">await</span> client.transcribe(</div>
                  <div className="pl-4">audio_file: <span className="text-yellow-400">'audio.mp3'</span>,</div>
                  <div className="pl-4">language: <span className="text-yellow-400">'auto'</span></div>
                  <div>);</div>
                  <div className="mt-4">console.log(result.text);</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Try our API directly in your browser. No installation required.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resources;
