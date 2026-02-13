// All panels defined here

export const PANELS = {
    // --------------------- Home Panels ----------------------------------------------------------------
    // Projects 
    home_projects_all: {
        type: "options",
        menuTitle: "All projects",
        menuSubtitle: "Select a group of projects",
        swapMenuHeader: true,
        options: [
            {
              title: "Large Software Projects",
              subtitle: "Software projects I've spent more than a month working on.",
              img: "/images/modules/terralink_project.png",
              panelId: "home_big_projects",
            },
            {
              title: "Small Software Projects",
              subtitle: "Software projects I've spent a few days or weeks working on.",
              img: "/images/modules/jokers_in_game.png",
              panelId: "home_small_projects",
            },
            {
              title: "Hardware Projects",
              subtitle: "Projects using Raspberry Pi, breadboards, etc.",
              img: "/images/modules/electronics.jpg",
              panelId: "home_hardware_projects",
            },
        ],
    },
    // big
    home_big_projects: {
        type: "cards",
        menuTitle: "Large Software Projects",
        menuSubtitle: "Click on a card to learn more",
        swapMenuHeader: true,
        cards: [
            {
              title: "TerraLink",
              desc:  "Procedural voxel terrain engine built in C++ with OpenGL and OpenAL. Supports terrain streaming.",
              img:   "/images/modules/terralink_project.png",
              href:  "/projects/terralink"
            },
            {
              title: "Senior Capstone",
              desc:  "Immersive space flight simulator built in Unreal Engine 5. Developed as my senior capstone project with a team.",
              img:   "/images/modules/capstone_project.png",
              href:  "/projects/capstone"
            },
            {
              title: "More to be come :]",
              desc:  "",
              img:   "/images/modules/happy.png",
              href:  "#"
            },
        ],
    },
    // small
    home_small_projects: {
        type: "cards",
        menuTitle: "Small Software Projects",
        menuSubtitle: "Click on a card to learn more",
        swapMenuHeader: true,
        cards: [
            {
              title: "Is the Port Open",
              desc:  "A port checker program I wrote in Python to quickly check if my hosted ports were still up.",
              img:   "/images/modules/itpo.png",
              panelId:  "itpo_about"
            },
            {
              title: "Balatro Mod: Buddy Jokers",
              desc:  "Small mod for the indie game 'Balatro' that adds some of my friends in as Jokers.",
              img:   "/images/modules/jokers_in_game.png",
              panelId:  "buddy_jokers_about"
            },
            {
              title: "More to be presented :]",
              desc:  "",
              img:   "/images/modules/happy.png",
              href:  "#"
            },
        ],
    },
    // hardware
    home_hardware_projects: {
        type: "cards",
        menuTitle: "Hardware Projects",
        menuSubtitle: "Click on a card to learn more",
        swapMenuHeader: true,
        cards: [
            {
              title: "Nothing yet...",
              desc:  "Coming soon",
              img:   "/images/modules/sad.png",
              href:  "#"
            },
        ],
    },
    // Photos home
    home_photos: {
        type: "cards",
        menuTitle: "Photo Albums",
        menuSubtitle: "Click an album to view more",
        swapMenuHeader: true,
        cards: [
            {
              title: "Nothing yet...",
              desc:  "Coming soon",
              img:   "/images/modules/sad.png",
              href:  "#"
            },
        ],
    },
    // 3D Prints home
    home_prints: {
        type: "cards",
        menuTitle: "3D Prints and Files",
        menuSubtitle: "Click on a card to learn more",
        swapMenuHeader: true,
        cards: [
            {
              title: "Nothing yet...",
              desc:  "Coming soon",
              img:   "/images/modules/sad.png",
              href:  "#"
            },
        ],
    },
    // --------------------- Project Panels ----------------------------------------------------------------
    // Terralink panels
    // about
    terralink_about: {
        type: "project_about",
        menuTitle: "About TerraLink",
        menuSubtitle: "In-site Wiki",
        swapMenuHeader: false,
        toc: [
          {
            title: "Overview",
            items: [
              { id: "general", label: "General" },
              { id: "highlights", label: "Highlights" },
              { id: "credits", label: "Credits" },

            ],
          },
          {
            title: "Systems",
            items: [
              { id: "network", label: "Networking" },
              { id: "threads", label: "Multi-Threading" },
              { id: "worldgen", label: "World Generation" },
              { id: "render", label: "Rendering Pipeline" },
            ],
          },
          {
            title: "Extra",
            items: [
              { id: "tools", label: "Tools I Made" },
              { id: "future", label: "Future Plans"},
            ],
          },
        ],
          pages: {
              general: {
                blocks: [
                  { type: "p", text: "* All the information here is a simplified version of what I've documented in my GitHub Wiki (linked below). For a deeper dive into the engine, check out the full write-ups there." },
                  
                  { type: "h2", text: "What is TerraLink?" },
                  { type: "p", text: "TerraLink is a sandbox-style terrain engine where the world is built from procedurally generated chunks. " +
                    "It uses a modular and performance-focused architecture with separate systems for chunk generation, rendering, networking, and saving. " +
                    "The engine supports:" },
                  { type: "ul", items: ["Singleplayer (offline) mode", "Client mode for connecting to dedicated servers", "Server mode with persistent terrain saving and chunk streaming"] },
                  
                  { type: "h2", text: "Why is TerraLink?" },
                  { type: "p", text: "Around January of 2023, I began to take an interest in OpenGL and computer graphics. " +
                    "Over the course of the next academic year, I learned the basics of OpenGL online and through a handful of courses I took at university." },
                  { type: "p", text:  "TerraLink began as a way for me to further explore computer graphics and networking. " +
                    "I wanted to build my own system and create something that other people could experience and use. " +
                    "I also wanted to better understand how real-time terrain generation works, how rendering pipelines are structured, and how data can be streamed efficiently across a network." },
                  { type: "p", text: "At the same time, I needed 5 additional elective credits to complete my degree. " +
                    "Turning this into a CS406 independent study project gave me the time to achieve my goal in a meaningful and structured way." },

                  { type: "h2", text: "The Experience" },
                  { type: "p", text: "With no player models, items, NPCs, bosses, or ultimate goals, the overall \"experience\" playing TerraLink is pretty mundane. " +
                    "However, if you enjoy sandbox games, listening to relaxing AI generated music, or Minecraft clones, then TerraLink is actually pretty great. " },
                  { type: "p", text: "The player can shape the terrain by placing or removing blocks, choosing from 18 block types across four distinct block models (Cube, Slim Cube, Grass, and Dead Bush). " +
                    "There's collision detection and basic physics, plus a no-clip mode that lets you fly around and ignore collisions. " +
                    "Each block belongs to one of six sound-effect groups, so whether you're walking on, placing, or breaking a block, you'll feel fully immersed." },
                ],
              },
              highlights: {
                blocks: [
                  { type: "h2", text: "Skills I Gained" },
                  { type: "ul", items: ["Safe multi-threaded programming", "How to design and build a system from scratch", "C++", "OpenGL", "OpenAL", "UDP / TCP networking"] },

                  { type: "h2", text: "Core Systems" },
                  { type: "ul", items: ["Multithreaded chunk generation, packet handeling, and audio streaming", "Networking and chunk streaming", "Block and biome registration"] },
                ],
              },
              credits: {
                blocks: [
                  { type: "h2", text: "Software and Design" },
                  { type: "p", text: "Created by Grant Kopczenski as part of CS406 Projects (Remote Procedural Terrain Generation) at Oregon State University." },

                  { type: "h2", text: "Assets" },
                  { type: "ul", items: ["Textures by Sarah Luginbill", "Music generated using Suno AI", "Sound effects from Freesound.org"] },
                ],
              },
              network: {
                blocks: [
                  { type: "h2", text: "Connection Roles" },
                  { type: "p", text: "TerraLink supports 2 roles:" },
                  { type: "ul", items: ["Client: Connects to a TerraLink server and requests chunk data.", "Server: Responds to chunk requests, accepts updates, and stores chunk files."] },

                  { type: "h2", text: "Connection Flow" },
                  { type: "h4", text: "1. Client connects via TCP" },
                  { type: "ul", items: ["Sends ClientInfo message with player name", "Waits for ClientConnectAck", "Server adds client to player map array, holding IP and username info"] },
                  { type: "h4", text: "2. Client performs UDP handshake" },
                  { type: "ul", items: ["Sends ClientConnect via UDP", "Waits for ClientConnectAck"] },
                  { type: "h4", text: "3. Both handshakes are completed" },
                  { type: "ul", items: ["Client requests chunk data as the player moves between chunks", "Server responds via UDP with compressed chunk data"] },
                  { type: "h4", text: "4. Client disconnects" },
                  { type: "ul", items: ["Client sends ClientDisconnect via TCP", "Server removes player from player map array", "Server responds with ClientDisconnectAck"] },

                  { type: "h2", text: "Chunk Serialization" },
                  { type: "p", text: "Chunks are serialized in the following order: " },
                  { type: "p", text: "1. Chunk position (int x, y, z)" },
                  { type: "p", text: "2. Block data (std::array<uint16_t, CHUNK_VOLUME>)" },
                  { type: "p", text: "3. Vertex buffer (std::vector<Vertex>)" },
                  { type: "p", text: "4. Index buffer (std::vector<GLuint>)" },
                  { type: "p", text: "The resulting binary is compressed and sent or saved." },

                  { type: "h2", text: "Multi-Threaded Server Request Handling" },
                  { type: "p", text: "The server runs on multiple threads: " },
                  { type: "ul", items: ["TCP listener thread (accepts and validates new connections)", "UDP receiver thread (handles chunk requests and updates)", "handlePendingRequests() thread (helper thread for UDP, also handles chunk saving)"] },

                ],
              },
              threads: {
                blocks: [
                  { type: "h2", text: "Thread Safe Queues" },
                  { type: "p", text: "ThreadSafeQueue<T> is a custom queue class designed to safely and efficiently pass tasks and information between threads in a multithreaded environment. These queues: " },
                  { type: "ul", items: ["Use std::mutex and std::condition_variable for synchronization", "Allow both blocking (waitPop) and non-blocking (tryPop) operations", "Support graceful shutdown (stop())", "Enable bulk operations with drain()"] },
                  { type: "p", text: "By using these queues, TerraLink decouples major stages of processing and prevents threads from stalling or spinning unnecessarily." },

                  { type: "h2", text: "Threads in TerraLink (Client)" },
                  { type: "h4", text: "Chunk Generation Threads" },
                  { type: "ul", items: ["Use waitPop() to sleep until new work arrives", "Never waste CPU cycles looping or polling", "Wake instantly when the manager thread queues a chunk"] },
                  { type: "h4", text: "Mesh Generation Threads" },
                  { type: "ul", items: ["First, check meshUpdateQueue with tryPop()", "If no mesh updates, check meshGenerationQueue", "Sleep briefly if both are empty to yield CPU"] },
                  { type: "h4", text: "Main Thread (Rendering)" },
                  { type: "ul", items: ["Uses tryPop() in uploadChunkMeshes() for safe, non-blocking mesh uploads", "Caps GPU mesh uploads per frame for consistent performance"] },
                  { type: "h4", text: "Manager Thread" },
                  { type: "ul", items: ["Uses drain() on various queues (like during position shifts)", "Moves large batches of work efficiently between stages"] },
                ]
              },
              worldgen: {
                blocks: [
                  { type: "h2", text: "How Terrain is Generated" },
                  { type: "p", text: "The world is procedurally generated using Perlin noise to fill 16x16x16 block chunks. " +
                    "Two coordinate systems are used: chunk coordinates (the X/Y/Z position of each chunk) and block coordinates (chunk coords x 16, plus the block's local X/Y/Z within that chunk). " +
                    "Chunk coordinates determine which biome a chunk belongs to, and that biome controls how the terrain is shaped and textured within it. " + 
                    "Biome blending then takes place that prevents extreme jumps in terrain and creates a nice smooth transition biome to biome." },

                  { type: "h2", text: "Biomes" },
                  { type: "p", text: "Biomes are managed through a Biome ID enum, with each ID mapped to its own Perlin-noise terrain generation function. Each biome has its own variables: " },
                  { type: "h4", text: "BiomeTerrain" },
                  { type: "p", text: "These parameters shape the biome's terrain during height generation." },
                  { type: "ul", items: ["baseHeight: sets the average elevation", "octaves, persistence, lacunarity: fractal noise parameters", "frequency, amplitude: scale and intensity of the heightmap", "noiseOffsetX, noiseOffsetZ: for spatial variation and blending"] },
                  { type: "h4", text: "Climate Fields" },
                  { type: "p", text: "During world generation, each block is assigned a temperature and humidity using domain-warped noise, and biomes are chosen based on the closest match." },
                  { type: "ul", items: ["minTemp, maxTemp: acceptable temperature range", "minHumidity, maxHumidity: acceptable humidity range"] },
                  { type: "h4", text: "Other Variables" },
                  { type: "p", text: "These fields help guide biome transitions and prevent repetitive shapes." },
                  { type: "ul", items: ["continentalness: how far from the ocean/landmass edges this biome appears", "erosion: flat vs. jagged terrain shaping", "depth: used to bias terrain into lowlands or highlands", "weirdness: adds variation or exotic traits for biome uniqueness"] },

                  { type: "h4", text: "TerraLink supports 5 different Biomes: " },
                  { type: "ul", items: ["Plains", "Forest*", "Desert", "Mountains", "Hills"] },
                  { type: "p", text: "* While the 'forest' biome generates, it looks identical to the 'hills' biome since no trees generate." },

                  { type: "h2", text: "Decorations" },
                  { type: "p", text: "Three plant block types can generate naturally on the surface: " },
                  { type: "ul", items: ["Cactus: Desert", "Dead Bush: Desert", "Grass: Plains, Forest, Hills, and Mountains (on grassy areas)"] },
                  { type: "p", text: "During the final step of chunk generation, random 'seeds' are rolled to decide whether a plant spawns on the surface. Cacti also have an extra chance to grow to two blocks tall." },
                ]
              },
              render: {
                blocks: [
                  { type: "h2", text: "Main Game Loop" },
                  { type: "p", text: "The program runs in the following step by step loop until the GLFW window is closed: " },
                  { type: "p", text: "1. Clear color and depth buffers" },
                  { type: "p", text: "2. Call tick() to handle simulation and logic" },
                  { type: "p", text: "3. Call render() to draw the 3D world" },
                  { type: "p", text: "4. Call renderUI() to draw the on-screen HUD" },
                  { type: "p", text: "5. Swap buffers and poll user input" },      
                  
                  { type: "h2", text: "Frame Update (tick())" },
                  { type: "p", text: "Each frame, tick() handles: " },
                  { type: "ul", items: ["Uploading a fixed number of chunk meshes (uploadChunkMeshes(max_chunks_per_frame))", "Unloading distant chunks from memory", "Uploading chunks to the in-game map system (if applicable)"] },
                  { type: "p", text: "This keeps the world rendering centered around the player" },

                  { type: "h2", text: "World Rendering (render())" },
                  { type: "p", text: "The 3D world is rendered chunk by chunk: " },
                  { type: "ul", items: ["Uses shaderProgram (Default Shader object for all blocks)", "Applies camera matrix and camera position uniforms", "Binds the block atlas texture", "Iterates over all active chunks"] },
                  { type: "p", text: "For each chunk: " },
                  { type: "ul", items: ["Checks that the mesh is uploaded and valid", "Binds the chunk's VAO", "Draws the chunk using glDrawElements"] },
                  { type: "p", text: "The result is a real-time, block-based 3D world rendered from chunk mesh data." },
                  
                ]
              },
            },
        links: [
            { text: "Wiki", href: "https://github.com/GrantKop/TerraLink/wiki" },
            { text: "Repository", href: "https://github.com/GrantKop/TerraLink" },
            { text: "Latest Release", href: "https://github.com/GrantKop/TerraLink/releases" },
        ],
    },
    // images
    terralink_images: {
        type: "cards",
        menuTitle: "Images",
        menuSubtitle: "WIP",
        swapMenuHeader: false,
        cards: [
            {
              title: "Nothing yet...",
              desc:  "Coming soon",
              img:   "/images/modules/sad.png",
              href:  "#"
            },
        ],
    },
    // Capstone panels
    // about
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
    // images 
    capstone_images: {
        type: "cards",
        menuTitle: "Images",
        menuSubtitle: "WIP",
        swapMenuHeader: false,
        cards: [
            {
              title: "Nothing yet...",
              desc:  "Coming soon",
              img:   "/images/modules/sad.png",
              href:  "#"
            }
        ],
    },
    // Buddy Jokers about
    buddy_jokers_about: {
        type: "project_about",
        menuTitle: "Balatro Mod: Buddy Jokers",
        menuSubtitle: "Lua | Steamodded API | Custom Content",
        swapMenuHeader: true,
        toc: [
          {
            title: "Overview",
            items: [
              { id: "general", label: "General" },
            ],
          },
        ],
          pages: {
            },
        links: [
            { text: "Repository", href: "https://github.com/GrantKop/Buddy-Jokers-Balatro-Mod" },
            { text: "Steamodded GitHub", href: "https://github.com/Steamodded" },
        ],
    },
    // Is The Port Open About
    itpo_about: {
        type: "project_about",
        menuTitle: "Is the Port Open",
        menuSubtitle: "Python | TCP Port Scanner | CustomTkinter GUI",
        swapMenuHeader: true,
        toc: [
          {
            title: "Overview",
            items: [
              { id: "general", label: "General" },
            ],
          },
        ],
          pages: {
            },
        links: [
            { text: "Repository", href: "https://github.com/Fabrivis-Plugin/ITPO" },
            { text: "TKinter Documentation", href: "https://docs.python.org/3/library/tkinter.html" },
        ],
    },
};
