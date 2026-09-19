import PropAssistant from '../components/PropAssistant';

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory-50 p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-maroon-900 mb-2">
        Beloveeth Realty
      </h1>
      <p className="text-neutral-slate mb-8">
        AI-Native Real Estate Intelligence Concierge
      </p>

      <div className="w-full max-w-2xl">
        <PropAssistant />
      </div>
    </main>
  );
}