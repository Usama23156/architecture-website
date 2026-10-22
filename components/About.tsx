
export default function About() {
  const highlights = [
    "Property listings",
    "2D / 3D design",
    "Handover inspection",
    "Project coordination",
  ];

  return (
    <section
      id="about"
      className="bg-[#f7f6f1] py-16 md:py-20"
    >
      <div className="mx-auto grid w-[92%] max-w-[1180px] grid-cols-1 items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-[45px]">
        {/* About Artwork */}
        <div className="flex min-h-[300px] flex-col justify-between rounded-[22px] bg-[#17251f] p-8 text-[#f7f6f1] md:min-h-[350px] md:p-[34px]">
          <span className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#d4b58d]">
            Architecture / Coordination
          </span>

          <div className="text-[80px] font-extrabold leading-none tracking-[-7px] text-[#d4b58d]">
            MI.
          </div>

          <p className="max-w-[260px] text-sm leading-relaxed text-[#c4cec6]">
            A practical mindset for spaces, details, and the people
            who use them.
          </p>
        </div>

        {/* About Content */}
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-[2.5px] text-[#8d6b42]">
            About Mohab
          </span>

          <h2 className="my-3 text-3xl font-bold leading-tight tracking-[-1.5px] text-[#17251f] md:text-[40px]">
            Good spaces start with clear thinking.
          </h2>

          <p className="text-sm leading-[1.9] text-[#69746d]">
            Architect / Mohab Ismail brings property discovery and
            architectural services together in one place. Whether you
            are comparing a unit, preparing a finishing scope,
            coordinating a project, or planning a handover inspection,
            the goal is clarity at every step.
          </p>

          {/* Highlights */}
          <div className="my-[22px] flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#e2e4dc] px-[11px] py-2 text-[11px] text-[#17251f]"
              >
                {item}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-[#17251f] bg-[#17251f] px-[17px] py-[11px] text-xs font-bold text-white transition hover:-translate-y-px hover:opacity-90"
          >
            Discuss your project ↗
          </a>
        </div>
      </div>
    </section>
  );
}
