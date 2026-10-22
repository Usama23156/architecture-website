

const stats = [
  {
    value: "01—04",
    label: "Property to project support",
  },
  {
    value: "2D / 3D",
    label: "Design & visualization",
  },
  {
    value: "EGYPT",
    label: "Project-based handover",
  },
];

export default function Hero() {
 
return (
  <section
    id="home"
    className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-[#17251f] py-20 md:min-h-[680px]"
  >
    {/* Background Image */}
    <img
      src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90"
      alt="Contemporary architectural interior"
      className="absolute inset-0 -z-20 h-full w-full object-cover"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 -z-10 bg-[#17251f]/65" />

    {/* Hero Content */}
    <div className="mx-auto w-[92%] max-w-[1180px]">
      <div className="max-w-[700px] text-white">
        <span className="text-[11px] font-extrabold uppercase tracking-[2.5px] text-[#d4b58d]">
          A considered approach to property
        </span>

        <h1 className="my-5 text-[clamp(40px,6vw,76px)] font-bold leading-[1.02] tracking-[-2.7px] max-sm:tracking-[-1.5px]">
          Find your place.
          <br />
          Shape your space.
        </h1>

        <p className="max-w-[550px] text-base leading-relaxed text-white/80 md:text-lg">
          Property discovery meets architectural thinking. Explore
          selected units, plan your interiors, and move through
          handover with a professional by your side.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#properties"
            className="rounded-full border border-[#b58a56] bg-[#b58a56] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#9e7443]"
          >
            Explore properties ↗
          </a>

          <a
            href="#services"
            className="rounded-full border border-white/60 px-6 py-3 text-xs font-bold text-white transition hover:bg-white hover:text-[#17251f]"
          >
            View services
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 grid max-w-[620px] grid-cols-3 gap-4 border-t border-white/25 pt-6">
          {stats.map((stat) => (
            <div key={stat.value}>
              <strong className="block text-lg font-bold md:text-2xl">
                {stat.value}
              </strong>

              <span className="mt-1 block text-[10px] leading-relaxed text-white/70 md:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

}
