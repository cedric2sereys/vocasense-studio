import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Sandbox = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-accent/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Interactive Code Sandbox</h3>
                  <p className="text-muted-foreground">Try VocaSense directly in your browser. No installation required</p>
                </div>
                <Button variant="accent">Open Sandbox</Button>
              </div>
              <div className="bg-muted rounded-lg p-6 font-mono text-sm">
                <pre className="text-foreground">
                  <code>{`import VocaSense from 'vocasense';

const client = new VocaSense({
  apiKey: 'your_api_key_here'
});

// Real-time transcription
const stream = await client.transcribe({
  language: 'auto',
  model: 'turbo'
});

stream.on('transcript', (text) => {
  console.log('Transcription:', text);
});`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Sandbox;
