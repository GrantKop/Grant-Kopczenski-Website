// All panels defined here

export const PANELS = {
    projects: {
        type: "cards",
        menuTitle: "Software Projects",
        menuSubtitle: "Click on a card to learn more",
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
    photos: {
        type: "cards",
        menuTitle: "Photo Albums",
        menuSubtitle: "Click an album to view more",
        cards: [
            {
                title: "Nothing yet...",
                desc:  "",
                img:   "/images/sad.png",
                href:  "#"
            },
        ],
    },
    prints: {
        type: "cards",
        menuTitle: "3D Prints and Files",
        menuSubtitle: "Click on a card to learn more",
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
