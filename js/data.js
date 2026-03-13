// ============================================================
//  MANSI'S PORTFOLIO — CONTENT DATA FILE
//  Edit this file to update all content across the site.
//  No design knowledge needed — just change the text & links!
// ============================================================

const SITE_DATA = {

  // ── PERSONAL INFO ──────────────────────────────────────────
  name: "Mansi",
  title: "Decarbonisation & Sustainability Engineer",
  tagline: "Transforming complex environmental data into actionable decarbonisation strategies through advanced LCA and carbon footprinting.",
  email: "your@email.com",                          // ← Change this
  instagram: "https://instagram.com/mansimn0123",   // ← Change this
  linkedin: "https://linkedin.com/in/yourprofile",  // ← Change this
  researchgate: "https://researchgate.net/profile/yourprofile", // ← Change this

  // ── ABOUT PAGE ─────────────────────────────────────────────
  about: {
    photo: "images/about-photo.jpg",  // ← Replace with your photo filename
    paragraphs: [
      "I am Mansi, a sustainability professional working in the areas of carbon accounting, GHG emissions analysis, life cycle assessment, and energy systems. My work focuses on understanding how industries, technologies, and ecosystems interact with the climate and how data-driven insights can support effective decarbonization strategies.",
      "I specialize in quantifying environmental impacts across systems, using approaches such as life cycle assessment (LCA), greenhouse gas accounting, and environmental data analysis. These tools help identify where emissions occur and reveal opportunities to improve resource efficiency and reduce carbon intensity.",
      "One of my key projects involved conducting a life cycle assessment of copper tubing used in HVAC systems, where I analyzed the environmental implications of material choices and manufacturing processes. The study demonstrated how small design optimizations can reduce material usage and carbon footprint, highlighting the role of sustainability in improving both environmental and operational performance.",
      "My work has also explored passive cooling technologies, including radiative cooling materials capable of reducing surface temperatures by 7–11°C, which shows potential for reducing energy demand in buildings.",
      "In addition to engineered systems, I have studied natural carbon systems through spatio-temporal analysis of mangrove ecosystems in the Sundarbans, examining long-term vegetation dynamics and their role in carbon sequestration and ecosystem resilience.",
      "Through these experiences, I aim to develop deeper expertise in carbon accounting, energy systems, and climate strategy, with the goal of contributing to practical pathways for decarbonisation across industries and ecosystems."
    ]
  },

  // ── PROJECTS ───────────────────────────────────────────────
  // To add a new project: copy one block, paste below, change the content.
  // image: put your image file in the /images/ folder and enter the filename.
  projects: [
    {
      id: "supply-chain",
      number: "01",
      title: "The Carbon-Efficient Supply Chain (LCA+ROI)",
      image: "images/project-supply-chain.jpg",  // ← Replace
      summary: "Sustainability is often viewed as a cost, but I proved it's a competitive advantage. By auditing the life cycle of industrial cooling components, I identified a design pivot that simultaneously cut raw material costs and carbon intensity—proving that the most 'green' path is often the most profitable.",
      // ── Detail page content ──
      detail: {
        tools: ["SimaPro", "OpenLCA", "Python", "Excel"],
        standards: ["ISO 14040", "ISO 14044", "GHG Protocol"],
        domain: ["Industrial Manufacturing", "Supply Chain", "LCA"],
        mission: "Sustainability is often viewed as a cost, but I proved it's a competitive advantage. By auditing the life cycle of industrial cooling components, I identified a design pivot that simultaneously cut raw material costs and carbon intensity—proving that the most 'green' path is often the most profitable.",
        framework: "Conducted a full cradle-to-gate LCA on copper tubing used in industrial HVAC cooling systems. Identified material hotspots and modeled alternative alloy configurations that reduced both embodied carbon and raw material spend.",
        impact: "The redesigned specification reduced carbon intensity by 18% and material costs by 12%, demonstrating that sustainability and profitability are not trade-offs but design opportunities."
      }
    },
    {
      id: "carbon-auditing",
      number: "02",
      title: "Spatio-Temporal Carbon Auditing",
      image: "images/project-carbon-auditing.jpg",  // ← Replace
      summary: "You cannot manage what you do not measure. In the world of Carbon Credits, verification is the only currency that matters. I utilized two decades of satellite intelligence to transform abstract ecological shifts into a concrete, high-integrity carbon sequestration audit—bridging the gap between raw pixels and planetary value.",
      detail: {
        tools: ["Google Earth Engine", "Python", "QGIS", "R"],
        standards: ["Verra VCS", "Gold Standard"],
        domain: ["Remote Sensing", "Carbon Credits", "Ecosystem Analysis"],
        mission: "Verification is the only currency that matters in carbon markets. This project transformed two decades of satellite data into a high-integrity carbon sequestration audit for mangrove ecosystems in the Sundarbans.",
        framework: "Applied time-series NDVI analysis and mangrove canopy classification across 20 years of Landsat imagery to quantify biomass change and carbon stock evolution. Validated against ground-truth data.",
        impact: "Produced a reproducible carbon audit methodology now being considered for integration into regional carbon credit verification frameworks."
      }
    },
    {
      id: "green-hydrogen",
      number: "03",
      title: "Cryogenic Precision: Green Hydrogen (Simulation)",
      image: "images/project-green-hydrogen.jpg",  // ← Replace
      summary: "In the race to a net-zero future, energy efficiency is the primary driver of commercial viability. I utilize high-fidelity process simulations to identify thermodynamic bottlenecks in cryogenic systems—transforming complex chemical engineering data into the technical foundation for a profitable and scalable green hydrogen supply chain.",
      detail: {
        tools: ["Aspen HYSYS", "Python", "MATLAB"],
        standards: ["IEA Hydrogen Roadmap", "EU Green Hydrogen Standards"],
        domain: ["Process Engineering", "Green Hydrogen", "Energy Systems"],
        mission: "Energy efficiency is the primary driver of commercial viability in green hydrogen. This simulation-driven study identified thermodynamic bottlenecks in cryogenic liquefaction systems.",
        framework: "Built high-fidelity process models in Aspen HYSYS to simulate cryogenic hydrogen liquefaction pathways. Conducted parametric sensitivity analysis to identify efficiency improvement opportunities.",
        impact: "Identified a 14% efficiency improvement opportunity in the compression stage, providing a clear pathway for cost reduction in green hydrogen production."
      }
    },
    {
      id: "radiative-cooling",
      number: "04",
      title: "Passive Radiative Cooling: Thermal Infrastructure",
      image: "images/project-radiative-cooling.jpg",  // ← Replace
      summary: "True sustainability requires rethinking the laws of cooling. I spearheaded the experimental investigation and technical validation of a passive radiative cooling system—transforming a zero-electricity cooling concept into a patented intellectual asset backed by an MIT Solve [ED] exploratory grant.",
      detail: {
        tools: ["Python", "Statistical Modeling", "Experimental Instrumentation"],
        standards: ["ASHRAE", "Energy Performance Standards"],
        domain: ["Materials Science", "Building Energy", "Climate Adaptation"],
        mission: "Rethinking the laws of cooling for a warming world. This work validated passive radiative cooling as a viable, zero-electricity thermal management strategy for buildings.",
        framework: "Designed and executed controlled outdoor experiments to measure sub-ambient cooling performance of spectrally-selective radiative cooling materials. Built statistical models to predict performance under varying climate conditions.",
        impact: "Demonstrated 7–11°C surface temperature reduction without electricity. Work supported by an MIT Solve exploratory grant and currently in the patent pipeline."
      }
    },
    {
      id: "heat-modeling",
      number: "05",
      title: "Climate Risk Intelligence: Predictive Heat Modeling",
      image: "images/project-heat-modeling.jpg",  // ← Replace
      summary: "Climate change is the ultimate financial and systemic tail-risk. I collaborated with researchers from the University of Pennsylvania and Tsinghua University to transform raw meteorological data into predictive early-warning systems—proving that technical intelligence is the first line of defense in protecting urban infrastructure and human capital.",
      detail: {
        tools: ["Python (Statistical Modeling)", "Climate Modeling & Downscaling"],
        standards: ["IMD Heatwave Protocol"],
        domain: ["Physical Climate Risk", "Public Health Policy", "ESG Consulting"],
        mission: "Climate change is the ultimate financial and systemic tail-risk. This research developed predictive heat-wave early-warning systems to protect urban populations and infrastructure.",
        framework: "Built classification models aligned with IMD Heatwave Protocol standards. Evaluated Heat Action Plan implementation effects on maternal health outcomes. Partnered with University of Pennsylvania and Tsinghua University researchers.",
        impact: "Manuscript currently under review with The Lancet Regional Health – Southeast Asia. Provides physical risk data required for TCFD-aligned ESG reporting."
      }
    }
  ],

  // ── BLOG POSTS ─────────────────────────────────────────────
  // To add a new blog post: copy one block, paste below, change the content.
  blogs: [
    {
      id: "movie-night-carbon",
      title: "Your Movie Night Has a Carbon Footprint!",
      date: "March 2025",
      readTime: "2 min read",
      image: "images/blog-data-center.jpg",  // ← Replace
      excerpt: "Last night you might have opened Netflix, picked a movie, and started streaming without thinking twice. It feels simple, right? But behind every stream sits a data centre humming at full capacity...",
      content: `
        <p>Last night you might have opened Netflix, picked a movie, and started streaming without thinking twice. It feels simple, right? But behind every stream sits a data centre humming at full capacity, drawing enormous amounts of electricity, most of it still fossil-fuel powered.</p>
        <p>Streaming one hour of HD video generates roughly 36 grams of CO₂ equivalent — similar to boiling a kettle three times. Multiply that by the 700 million hours streamed globally every day, and we're looking at a substantial and growing source of emissions.</p>
        <p>The good news? The streaming industry is rapidly shifting to renewable energy. Companies like Google and Microsoft have made ambitious pledges. But infrastructure takes time, and in the interim, every watt matters.</p>
        <p>What can you do? Download content over Wi-Fi instead of streaming on mobile data (mobile networks are far less energy efficient). Choose standard definition when HD isn't necessary. And consider the embodied carbon of the devices you watch on — a new TV purchased every 5 years vs. 10 years makes a significant difference.</p>
        <p>Sustainability isn't just about the big decisions — it's in the texture of everyday life.</p>
      `
    }
    // ← Add more blog posts here
  ]
};
