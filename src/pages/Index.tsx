import { useEffect, useState } from "react";
import { CheckCircle2, AlertTriangle, ShieldCheck, Clock, ArrowRight } from "lucide-react";

const AFFILIATE_URL = "https://YOUR-OFFER-LINK";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({ m: 9, s: 47 });
  const [spotsLeft] = useState(17);

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft((t) => {
        if (t.s > 0) return { ...t, s: t.s - 1 };
        if (t.m > 0) return { m: t.m - 1, s: 59 };
        return { m: 9, s: 47 };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const handleCTA = () => {
    window.location.href = AFFILIATE_URL;
  };

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <main className="min-h-screen bg-background bg-radial-glow text-foreground">
      <div className="mx-auto flex min-h-screen max-w-md flex-col px-5 pb-10 pt-6">
        {/* Top status bar */}
        <header className="mb-8 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 font-bold tracking-tight">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg cta-gradient text-primary-foreground">
              <ShieldCheck className="h-4 w-4" strokeWidth={3} />
            </div>
            <span className="text-sm text-foreground">
              Offer<span className="text-primary">Eligibility</span>Check
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-card/60 px-2.5 py-1 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-medium text-muted-foreground">🇺🇸 US Live</span>
          </div>
        </header>

        {/* Hero */}
        <section className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-warning/30 bg-warning/10 px-3 py-1 text-xs font-semibold text-warning">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-warning" />
            LIMITED PROMOTIONAL ACCESS
          </div>

          <h1 className="text-balance text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">
            Claim Your{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Free US Reward
            </span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Limited-time promotional access for eligible users in the United States.
            Check if you qualify in under 30 seconds.
          </p>
        </section>

        {/* Trust bullets */}
        <section className="mb-6 space-y-3">
          {[
            { icon: CheckCircle2, text: "No credit card required" },
            { icon: ShieldCheck, text: "Free eligibility check" },
            { icon: Clock, text: "Takes less than 30 seconds" },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-3 rounded-xl border border-border bg-card/50 px-4 py-3 backdrop-blur"
            >
              <Icon className="h-5 w-5 shrink-0 text-primary" strokeWidth={2.5} />
              <span className="text-sm font-medium">{text}</span>
            </div>
          ))}
        </section>

        {/* Urgency box */}
        <section className="mb-8 rounded-xl border border-warning/40 bg-warning/10 p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-warning" strokeWidth={2.5} />
            <div className="flex-1">
              <p className="text-sm font-semibold leading-snug text-foreground">
                This promotional access may close anytime due to limited availability.
              </p>
              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Closes in:</span>
                <span className="font-mono text-base font-bold text-warning">
                  00:{pad(timeLeft.m)}:{pad(timeLeft.s)}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Spots remaining:</span>
                <span className="font-bold text-warning">{spotsLeft} left</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-6">
          <button
            onClick={handleCTA}
            className="group relative flex w-full items-center justify-center gap-2 rounded-2xl cta-gradient px-6 py-5 text-lg font-extrabold text-primary-foreground shadow-cta transition-all duration-200 hover:shadow-cta-hover active:scale-[0.98] animate-pulse-ring"
          >
            Check Availability Now
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            👆 Tap to verify your eligibility instantly
          </p>
        </section>

        {/* Social proof line */}
        <section className="mb-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <div className="flex -space-x-2">
            {["from-primary to-primary-glow", "from-warning to-primary", "from-primary-glow to-warning"].map((g, i) => (
              <div
                key={i}
                className={`h-6 w-6 rounded-full border-2 border-background bg-gradient-to-br ${g}`}
              />
            ))}
          </div>
          <span>
            <span className="font-semibold text-foreground">2,847</span> Americans claimed today
          </span>
        </section>

        {/* Footer */}
        <footer className="mt-auto border-t border-border pt-5">
          <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
            This page contains promotional content and may redirect to third-party offers.
            Eligibility and rewards are determined by the third-party provider.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
