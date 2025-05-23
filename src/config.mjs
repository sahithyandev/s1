import starlight from "@astrojs/starlight";
// import starlightLinksValidator from "starlight-links-validator";

export const SITE_TITLE = "Sahithyan's S1";
export const SITE_DESCRIPTION = "Sahithyan's 1st semester notes of Engineering";
export const SITE_DOMAIN = "s1.sahithyan.dev";
export const SITE_HREF = `https://${SITE_DOMAIN}`;
export const CREATE_E_BOOK = process.env.CREATE_E_BOOK || false;

export const HTML__HOMEPAGE_DESCRIPTION =
  "I have included all my 1st semester short notes of Engineering as a website. <b>Maintaining this notes helped me get <u>4.0 GPA</u> in my first semester.</b>";

/**
 * @type {Record<string, string>}
 */
export const MODULE_CODES = {
  "Electrical Fundamentals": "EE1040",
  "Fluid Mechanics": "CE1023",
  Mathematics: "MA1014",
  Mechanics: "ME1033",
  "Programming Fundamentals": "CS1033",
  "Properties of Materials": "MT1023",
};

export const BOOK_CONFIG = {
  description:
    "This e-book is a complete compilation of all the modules I studied during my 1st semester of Engineering. It is designed to serve as a well-organized and accessible resource for students, offering a streamlined way to review key concepts and materials.\n\nWhile all of this content is freely available on the website, this e-book provides a convenient, offline format for easy reference. By purchasing this e-book, you are not only supporting my work but also helping me continue to share educational resources for students like you.",
};

/**
 * @type {Parameters<typeof starlight>[0]["head"]}
 */
export const STARLIGHT_CONFIG_HEAD = [];
if (process.env.NODE_ENV === "production") {
  STARLIGHT_CONFIG_HEAD.push({
    tag: "script",
    attrs: {
      defer: true,
      "data-domain": "s1.sahithyan.dev",
      src: "https://analytics.sahithyan.dev/js/script.js",
    },
  });
}

/**
 * @type {Parameters<typeof starlight>[0]["sidebar"]}
 */
export const STARLIGHT_SIDEBAR_CONFIG = [
  {
    label: "Dimensions & Units",
    link: "/dimensions-and-units",
  },
  {
    label: "Electrical Fundamentals",
    items: [
      {
        label: "Basics",
        collapsed: true,
        autogenerate: {
          directory: "electrical-fundamentals/basics",
        },
      },
      {
        label: "Electrical Installation",
        collapsed: true,
        autogenerate: {
          directory: "electrical-fundamentals/electrical-installation",
        },
      },
    ],
  },
  {
    label: "Fluid Mechanics",
    items: [
      {
        label: "Statics",
        collapsed: true,
        autogenerate: {
          directory: "fluid-mechanics/statics",
        },
      },
      {
        label: "Dynamics",
        collapsed: true,
        autogenerate: {
          directory: "fluid-mechanics/dynamics",
        },
      },
      {
        label: "Machinery",
        collapsed: true,
        autogenerate: {
          directory: "fluid-mechanics/machinery",
        },
      },
    ],
  },
  {
    label: "Mathematics",
    items: [
      {
        label: "Vectors",
        collapsed: true,
        autogenerate: {
          directory: "mathematics/vectors",
        },
      },
      {
        label: "Matrices",
        collapsed: true,
        autogenerate: {
          directory: "mathematics/matrices",
        },
      },
      {
        label: "Complex Analysis",
        collapsed: true,
        autogenerate: {
          directory: "mathematics/complex-analysis",
        },
      },
      {
        label: "Real Analysis",
        collapsed: true,
        autogenerate: {
          directory: "mathematics/real-analysis",
        },
      },
      {
        collapsed: true,
        label: "ODE",
        autogenerate: {
          directory: "mathematics/ode",
        },
      },
      {
        collapsed: true,
        label: "Riemann Integration",
        autogenerate: {
          directory: "mathematics/riemann-integration",
        },
      },
    ],
  },
  {
    label: "Mechanics",
    items: [
      {
        label: "Statics",
        collapsed: true,
        autogenerate: {
          directory: "mechanics/statics",
        },
      },
      {
        label: "Dynamics",
        collapsed: true,
        autogenerate: {
          directory: "mechanics/dynamics",
        },
      },
    ],
  },
  {
    label: "Programming Fundamentals",
    items: [
      {
        label: "A book",
        collapsed: true,
        autogenerate: {
          directory: "programming-fundamentals/a-book",
        },
      },
      {
        collapsed: true,
        label: "B book",
        autogenerate: {
          directory: "programming-fundamentals/b-book",
        },
      },
      {
        collapsed: true,
        label: "C book",
        autogenerate: {
          directory: "programming-fundamentals/c-book",
        },
      },
    ],
  },
  {
    label: "Properties of Materials",
    items: [
      {
        label: "Basics",
        collapsed: true,
        autogenerate: {
          directory: "properties-of-materials/basics",
        },
      },
      {
        label: "Mechanical Properties",
        collapsed: true,
        autogenerate: {
          directory: "properties-of-materials/mechanical-properties",
        },
      },
      {
        label: "Electrical Properties",
        collapsed: true,
        autogenerate: {
          directory: "properties-of-materials/electrical-properties",
        },
      },
      {
        label: "Nanotechnology",
        collapsed: true,
        autogenerate: {
          directory: "properties-of-materials/nanotechnology",
        },
      },
      {
        label: "Degradation",
        collapsed: true,
        autogenerate: {
          directory: "properties-of-materials/degradation",
        },
      },
    ],
  },
  {
    label: "License",
    link: "/license",
  },
];
