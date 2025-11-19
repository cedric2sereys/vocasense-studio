const clients = [
  "VoiceFlow", "Podify", "AudioNest", "SpeechCraft", "VocalTech",
  "TranscribeAI", "SoundWave", "VoiceHub", "AudioSync", "TalkStream",
  "MeetingBot", "VoiceNotes", "SpeakEasy", "AudioFlow", "VocalSync"
];

const ClientPortfolio = () => {
  return (
    <section className="py-12 bg-muted/30 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 py-4 mx-4 bg-card border border-border rounded-lg"
            >
              <span className="text-foreground font-semibold whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientPortfolio;
