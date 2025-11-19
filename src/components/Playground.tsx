import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Mic, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Playground = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcription, setTranscription] = useState("");
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Simulate processing
      setIsProcessing(true);
      setTimeout(() => {
        setTranscription("This is a sample transcription of your audio file. In a real implementation, this would be the actual transcribed text from VocaSense's API.");
        setIsProcessing(false);
        toast({
          title: "Transcription Complete!",
          description: "Your audio has been successfully transcribed.",
        });
      }, 2000);
    }
  };

  return (
    <section id="playground" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-accent/20">
            <CardContent className="pt-6">
              <div className="space-y-6">
                {/* Upload Area */}
                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-accent/50 transition-colors">
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="audio-upload"
                    disabled={isProcessing}
                  />
                  <label htmlFor="audio-upload" className="cursor-pointer">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg font-semibold text-foreground mb-2">
                      Drop audio file here or click to upload
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Supports MP3, WAV, M4A (max 10 seconds)
                    </p>
                  </label>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-sm text-muted-foreground">or</span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                {/* Record Button */}
                <Button 
                  variant="outline" 
                  className="w-full h-16 text-lg"
                  disabled={isProcessing}
                >
                  <Mic className="mr-2 h-5 w-5" />
                  Record Audio
                </Button>

                {/* Processing State */}
                {isProcessing && (
                  <div className="flex items-center justify-center gap-3 py-8">
                    <Loader2 className="h-6 w-6 animate-spin text-accent" />
                    <span className="text-muted-foreground">Processing your audio...</span>
                  </div>
                )}

                {/* Transcription Result */}
                {transcription && !isProcessing && (
                  <div className="bg-muted/50 rounded-lg p-6 border border-border">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      Transcription Result
                    </h3>
                    <p className="text-foreground leading-relaxed">{transcription}</p>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 text-center border border-primary/20">
                  <p className="text-foreground mb-4">
                    Want to integrate this into your app?
                  </p>
                  <Button variant="accent" size="lg">
                    Get Your API Key Free
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Playground;
