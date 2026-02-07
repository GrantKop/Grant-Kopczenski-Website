// All panels defined here

export const PANELS = {
    home_projects: {
        type: "cards",
        menuTitle: "Software Projects",
        menuSubtitle: "Click on a card to learn more",
        swapMenuHeader: true,
        cards: [
            {
                title: "TerraLink",
                desc:  "Procedural voxel terrain engine built in C++ with OpenGL and OpenAL. Supports terrain streaming.",
                img:   "/images/terralink_project.png",
                href:  "/projects/terralink"
            },
            {
                title: "Senior Capstone",
                desc:  "Immersive space flight simulator built in Unreal Engine 5. Developed as my senior capstone project with a team.",
                img:   "/images/capstone_project.png",
                href:  "/projects/capstone"
            },
        ],
    },
    home_photos: {
        type: "cards",
        menuTitle: "Photo Albums",
        menuSubtitle: "Click an album to view more",
        swapMenuHeader: true,
        cards: [
            {
                title: "Nothing yet...",
                desc:  "",
                img:   "/images/sad.png",
                href:  "#"
            },
        ],
    },
    home_prints: {
        type: "cards",
        menuTitle: "3D Prints and Files",
        menuSubtitle: "Click on a card to learn more",
        swapMenuHeader: true,
        cards: [
            {
                title: "Nothing yet...",
                desc:  "",
                img:   "/images/sad.png",
                href:  "#"
            },
        ],
    },
    terralink_about: {
        type: "project_about",
        menuTitle: "About TerraLink",
        menuSubtitle: "In-site Wiki",
        swapMenuHeader: false,
        toc: [
          {
            title: "Overview",
            items: [
              { id: "terralink", label: "What is TerraLink" },
              { id: "highlights", label: "Highlights" },
            ],
          },
          {
            title: "Systems",
            items: [
              { id: "network", label: "Networking" },
              { id: "threads", label: "Multi-Threading" },
              { id: "worldgen", label: "World Generation" },
            ],
          },
        ],
          pages: {
              t: {
                blocks: [
                  { type: "h2", text: "What is TerraLink?" },
                  { type: "p", text: "The quick brown fox jumped over the lazy dog" },
                ],
              },
              systems3: {
                blocks: [
                  { type: "h2", text: "placeholder" },
                  { type: "ul", items: ["Chunk streaming", "Biome system", "Multithreading"] },
                ],
              },
              systems2: {
                blocks: [
                  { type: "h2", text: "placeholder" },
                  { type: "ul", items: ["C++17", "OpenGL", "OpenAL", "FastNoiseLite"] },
                ],
              },
              systems: {
                blocks: [
                  { type: "h2", text: "placeholder" },
                  { type: "p", text: "placeholder" },
                ],
              },
            },
        links: [
            { text: "Wiki", href: "https://github.com/GrantKop/TerraLink/wiki" },
            { text: "Repository", href: "https://github.com/GrantKop/TerraLink" },
            { text: "Latest Release", href: "https://github.com/GrantKop/TerraLink/releases" },
        ],
    },
    terralink_images: {
        type: "cards",
        menuTitle: "Images",
        menuSubtitle: "WIP",
        swapMenuHeader: false,
        cards: [
            {
                title: "Nothing yet...",
                desc:  "",
                img:   "/images/sad.png",
                href:  "#"
            },
        ],
    },
    capstone_about: {
        type: "project_about",
        menuTitle: "About my Capstone",
        menuSubtitle: "In-site Wiki",
        swapMenuHeader: false,
        toc: [
          {
            title: "Overview",
            items: [
              { id: "capstone", label: "About my Capstone" },
              { id: "highlights", label: "Highlights" },
            ],
          },
          {
            title: "Our goal",
            items: [],
          },
        ],
          pages: {
              capstone: {
                blocks: [
                  { type: "h2", text: "What was my Capstone?" },
                  { type: "p", text: "" },
                  { type: "h2", text: "My Team" },
                  { type: "ul", items: ["Jacob Irace", "Zhong Zheng", "Michael Molineaux", "Grant Kopczenski"]},
                ],
              },
            },
        links: [
            { text: "Repository", href: "https://github.com/GrantKop/Capstone-Space-Ship-Simulator-Game" },
        ],
    },
    capstone_images: {
        type: "cards",
        menuTitle: "Images",
        menuSubtitle: "WIP",
        swapMenuHeader: false,
        cards: [
            {
                title: "Nothing yet...",
                desc:  "",
                img:   "/images/sad.png",
                href:  "#"
            },
        ],
    },
};
