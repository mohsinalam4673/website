import { cn } from "@/lib/cn";

const CHANNELS = [
  { label: "PWR", value: "218 W", fill: "62%", tone: "bg-[#22c55e]" },
  { label: "THRM", value: "41 °C", fill: "38%", tone: "bg-[#22c55e]" },
  { label: "NET", value: "8.4 Gb", fill: "81%", tone: "bg-[#f1c40f]" },
  { label: "I/O", value: "12.1 k", fill: "27%", tone: "bg-[#22c55e]" },
];

/** The KTL-9 chassis, built entirely in CSS: bezel, CRT, dials and side keys. */
export function DeviceMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border-4 border-dark-chassis bg-dark-slate p-4 shadow-floating",
        "transition-transform duration-500 ease-mechanical hover:scale-[1.02]",
        className,
      )}
    >
      <div
        aria-hidden
        className="texture-carbon pointer-events-none absolute inset-0 rounded-[26px] opacity-20 mix-blend-overlay"
      />

      {/* Side hardware keys */}
      <div aria-hidden className="absolute -left-[10px] top-16 flex flex-col gap-3">
        <span className="h-10 w-2 rounded-l-sm bg-dark-chassis shadow-sharp" />
        <span className="h-6 w-2 rounded-l-sm bg-dark-chassis shadow-sharp" />
      </div>
      <div aria-hidden className="absolute -right-[10px] top-24 h-14 w-2 rounded-r-sm bg-dark-chassis shadow-sharp" />

      {/* Bezel header */}
      <div className="relative mb-3 flex items-center justify-between px-1">
        <span className="font-mono text-[0.625rem] font-bold uppercase tracking-[0.08em] text-[#a8b2d1]">
          KTL-9 / BAY 04
        </span>
        <span className="flex items-center gap-2">
          <span className="font-mono text-[0.625rem] font-bold uppercase tracking-[0.08em] text-[#a8b2d1]">
            PWR
          </span>
          <span
            className="h-2 w-2 animate-pulse rounded-full bg-[#22c55e]"
            style={{ boxShadow: "0 0 10px 2px rgba(34,197,94,0.8)" }}
          />
        </span>
      </div>

      {/* Screen */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-[#0d1114] p-5 shadow-[inset_0_6px_18px_rgba(0,0,0,0.9)] sm:aspect-video lg:aspect-square">
        <div aria-hidden className="texture-scanlines pointer-events-none absolute inset-0 opacity-60" />

        <div className="relative flex h-full flex-col justify-between gap-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[0.625rem] font-bold uppercase tracking-[0.08em] text-[#22c55e]">
              ● Live feed
            </span>
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.08em] text-[#5d6d7e]">
              t+ 00:41:12
            </span>
          </div>

          <div className="grid gap-3">
            {CHANNELS.map((channel) => (
              <div key={channel.label} className="grid grid-cols-[3rem_1fr_4rem] items-center gap-3">
                <span className="font-mono text-[0.625rem] font-bold uppercase tracking-[0.08em] text-[#5d6d7e]">
                  {channel.label}
                </span>
                <span className="h-1.5 w-full overflow-hidden rounded-full bg-[#1b2429]">
                  <span
                    className={cn("block h-full rounded-full", channel.tone)}
                    style={{ width: channel.fill }}
                  />
                </span>
                <span className="text-right font-mono text-[0.6875rem] text-[#e0e5ec]">
                  {channel.value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-end justify-between">
            <span
              aria-hidden
              className="h-8 w-8 animate-spin rounded-full border-2 border-[#1b2429] border-t-accent"
              style={{ animationDuration: "1s" }}
            />
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.08em] text-[#5d6d7e]">
              no threshold breach
            </span>
          </div>
        </div>
      </div>

      {/* Control strip */}
      <div className="mt-4 flex items-center justify-between gap-4 rounded-lg bg-dark-chassis px-4 py-3">
        <div aria-hidden className="flex gap-1.5">
          {[0, 1, 2, 3, 4].map((slot) => (
            <span key={slot} className="h-6 w-1 rounded-full bg-black/40" />
          ))}
        </div>
        <div aria-hidden className="flex items-center gap-3">
          <span className="h-7 w-7 rounded-full bg-[radial-gradient(circle_at_30%_30%,#5d6d7e,#1b2429)] shadow-sharp" />
          <span className="h-7 w-7 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ff7a85,#c22b38)] shadow-sharp" />
        </div>
      </div>
    </div>
  );
}
