
const services = [
  {
    icon: "⌂",
    title: "Property sourcing & listings",
    description:
      "Explore available units and get clear information to support your next property decision.",
    topic: "Property enquiry",
  },
  {
    icon: "✳",
    title: "Interior finishing",
    description:
      "Scope definition, finish selection, coordination, and practical support from concept to execution.",
    topic: "Interior finishing",
  },
  {
    icon: "▧",
    title: "Custom furniture drawings",
    description:
      "Made-to-measure furniture concepts and technical drawings tailored to your space.",
    topic: "Furniture drawings",
  },
  {
    icon: "◫",
    title: "2D drawings & 3D visualization",
    description:
      "Architectural plans, technical drawing packages, and 3D views to communicate design intent.",
    topic: "2D / 3D design",
  },
  {
    icon: "✓",
    title: "Unit handover & snagging",
    description:
      "Project-based inspection support across Egypt, with observations organized for follow-up.",
    topic: "Unit handover inspection",
  },
  {
    icon: "▤",
    title: "Project management",
    description:
      "Progress follow-up, coordination, documentation, and clear reporting for project stakeholders.",
    topic: "Project management",
  },
  {
    icon: "⌘",
    title: "Architecture academic support",
    description:
      "Presentation layout, research guidance, and drawing support for undergraduate architecture students.",
    topic: "Academic support",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#e9ece5] py-16 md:py-20"
    >
      <div className="mx-auto w-[92%] max-w-[1180px]">
        {/* Section Heading */}
        <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-[2.5px] text-[#8d6b42]">
              Beyond the listing
            </span>

            <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#17251f] md:text-[42px]">
              Architecture, made practical.
            </h2>
          </div>

          <p className="max-w-[420px] text-sm leading-relaxed text-[#69746d]">
            A focused set of services for property owners, buyers,
            project teams, and architecture students.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex min-h-[210px] flex-col rounded-2xl border border-[#dce1d8] bg-[#fdfcf7] p-[23px] transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 grid h-[42px] w-[42px] place-items-center rounded-xl bg-[#dfe6dc] text-xl text-[#17251f]">
                {service.icon}
              </div>

              <h3 className="mb-2 text-[17px] font-bold text-[#17251f]">
                {service.title}
              </h3>

              <p className="mb-5 text-[13px] leading-relaxed text-[#69746d]">
                {service.description}
              </p>

              <a
                href={`#contact?service=${encodeURIComponent(service.topic)}`}
                className="mt-auto text-xs font-extrabold text-[#17251f] transition-colors hover:text-[#b58a56]"
              >
                Discuss this service ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
