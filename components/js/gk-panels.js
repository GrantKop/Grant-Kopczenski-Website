// All panels (and their content) defined here

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
              subtitle: "Software projects I've spent a few months working on.",
              img: "/projects/terralink/images/terralink_house.png",
              panelId: "home_big_projects",
            },
            {
              title: "Small Software Projects",
              subtitle: "Software projects I've spent a few days or weeks working on.",
              img: "/images/small-projects/jokers_in_game.png",
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
              img:   "/projects/terralink/images/thumbs/terralink_house.png",
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
              title: "All my Scripts",
              desc:  "A collection of every script I've ever made.",
              img:   "/images/small-projects/backup_mc.png",
              panelId:  "all_scripts"
            },
            {
              title: "Is the Port Open",
              desc:  "A port pinger app I wrote in Python to quickly check if my hosted ports were still up.",
              img:   "/images/small-projects/itpo.png",
              panelId:  "itpo_about"
            },
            {
              title: "Tarpaulin REST API with OAuth 2.0",
              desc:  "Flask-based REST API that protects its resources using OAuth authentication via JWT access tokens.",
              img:   "/images/small-projects/postman.png",
              panelId:  "rest_auth_about"
            },
            {
              title: "Balatro Mod: Buddy Jokers",
              desc:  "Mod for the indie game 'Balatro' that adds some of my friends in as Jokers.",
              img:   "/images/small-projects/jokers_in_game.png",
              panelId:  "buddy_jokers_about"
            },
            {
              title: "Small Shell",
              desc:  "Custom terminal with 3 built in functions and calls execvp for handling many more.",
              img:   "/images/small-projects/random_commands.png",
              panelId:  "smallsh_about"
            },
            {
              title: "Hunt the Wumpus",
              desc:  "Terminal game I made in less than 2 hours as a challenge.",
              img:   "/images/small-projects/wumpus_gold.png",
              panelId:  "wumpus_about"
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
              { id: "tools", label: "Other Tools" },
              { id: "future", label: "Future Plans"},
            ],
          },
        ],
          pages: {
              general: {
                blocks: [
                  { type: "p", text: "*All the information here is a simplified version of what I've documented in my GitHub Wiki (linked below). For a deeper dive into the engine, check out the full write-ups there.*" },
                  
                  { type: "h2", text: "What is TerraLink?" },
                  { type: "p", text: "TerraLink is a sandbox-style terrain engine where the world is built from procedurally generated chunks. " +
                    "It uses a modular and performance-focused architecture with separate systems for chunk generation, rendering, networking, and saving. " +
                    "The engine supports:" },
                  { type: "ul", items: ["Singleplayer (offline) mode", "Client mode for connecting to dedicated servers", "Server mode with persistent terrain saving and chunk streaming"] },
                  
                  { type: "h2", text: "Why is TerraLink?" },
                  { type: "p", text: "Around January of 2023, I began to take an interest in `OpenGL` and computer graphics. " +
                    "Over the course of the next academic year, I learned the basics of `OpenGL` online and through a handful of courses I took at university." },
                  { type: "p", text:  "TerraLink began as a way for me to further explore computer graphics and networking. " +
                    "I wanted to build my own system and create something that other people could experience and use. " +
                    "I also wanted to better understand how real-time terrain generation works, how rendering pipelines are structured, and how data can be streamed efficiently across a network." },
                  { type: "p", text: "At the same time, I needed 5 additional elective credits to complete my degree. " +
                    "Turning this into a CS406 independent study project gave me the time to achieve my goal in a meaningful and structured way." },

                  { type: "h2", text: "The Experience" },
                  { type: "p", text: "With no player models, items, NPCs, bosses, or ultimate goals, the overall \"experience\" playing TerraLink is pretty mundane. " +
                    "However, if you enjoy sandbox games, listening to relaxing AI generated music, or Minecraft clones, then TerraLink is actually pretty great. " },
                  { type: "p", text: "The player can shape the terrain by placing or removing blocks, choosing from 18 block types across four distinct block models: `block_full`, `block_slim`, `cross`, and `covered_cross`. " +
                    "There's collision detection and basic physics, plus a no-clip mode that lets you fly around and ignore collisions. " +
                    "Each block belongs to one of six sound-effect groups, so whether you're walking on, placing, or breaking a block, you'll feel fully immersed." },
                ],
              },
              highlights: {
                blocks: [
                  { type: "h2", text: "Skills I Gained" },
                  { type: "ul", items: ["Safe multi-threaded programming", "How to design and build a system from scratch", "`C++`", "`OpenGL`", "`OpenAL`", "`UDP` / `TCP` networking"] },

                  { type: "h2", text: "Core Systems" },
                  { type: "ul", items: ["Multithreaded chunk generation, packet handling, and audio streaming", "Networking and chunk streaming", "Block and biome registration"] },
                ],
              },
              credits: {
                blocks: [
                  { type: "h2", text: "Software and Design" },
                  { type: "p", text: "Created by *Grant Kopczenski* as part of *CS406 Projects (Remote Procedural Terrain Generation)* at *Oregon State University.*" },

                  { type: "h2", text: "Assets" },
                  { type: "ul", items: ["Textures by *Sarah Luginbill*", "Music generated using *Suno AI*", "Sound effects from *Freesound.org*"] },
                ],
              },
              network: {
                blocks: [
                  { type: "h2", text: "Connection Roles" },
                  { type: "p", text: "TerraLink supports 2 roles:" },
                  { type: "ul", items: ["`Client`: Connects to a TerraLink server and requests chunk data.", "`Server`: Responds to chunk requests, accepts updates, and stores chunk files."] },

                  { type: "h2", text: "Connection Flow" },
                  { type: "h4", text: "1. Client and server exchange `TCP` handshake" },
                  { type: "ul", items: ["Sends `ClientInfo` message with player name", "Waits for `ClientConnectAck` via `TCP` from server", "Server adds client to player map array, holding IP and username info"] },
                  { type: "h4", text: "2. Client and server exchange `UDP` 'handshake'" },
                  { type: "ul", items: ["Sends `ClientConnect` via `UDP`", "Waits for `ClientConnectAck` via `UDP` from server"] },
                  { type: "h4", text: "3. Both handshakes are completed" },
                  { type: "ul", items: ["Client requests chunk data via `UDP` as the player moves between chunks", "Server responds via `UDP` with compressed chunk data"] },
                  { type: "h4", text: "4. Client disconnects" },
                  { type: "ul", items: ["Client sends `ClientDisconnect` via `TCP`", "Server removes player from player map array", "Server responds with `ClientDisconnectAck`"] },

                  { type: "h2", text: "Chunk Serialization" },
                  { type: "p", text: "Chunks are serialized in the following order: " },
                  { type: "p", text: "1. Chunk position `int x, y, z`" },
                  { type: "p", text: "2. Block data `std::array<uint16_t, CHUNK_VOLUME>`" },
                  { type: "p", text: "3. Vertex buffer `std::vector<Vertex>`" },
                  { type: "p", text: "4. Index buffer `std::vector<GLuint>`" },
                  { type: "p", text: "The resulting binary is compressed and sent or saved." },

                  { type: "h2", text: "Multi-Threaded Server Request Handling" },
                  { type: "p", text: "The server runs on multiple threads: " },
                  { type: "ul", items: ["`TCP` listener thread (accepts and validates new connections, tracks connected players)", "`UDP` receiver thread (handles chunk requests and updates)", "`handlePendingRequests()` thread (helper thread for `UDP`, also handles chunk saving)"] },

                ],
              },
              threads: {
                blocks: [
                  { type: "h2", text: "Thread Safe Queues" },
                  { type: "p", text: "`ThreadSafeQueue<T>` is a custom queue class designed to safely and efficiently pass tasks and information between threads in a multithreaded environment. These queues: " },
                  { type: "ul", items: ["Use `std::mutex` and `std::condition_variable` for synchronization", "Allow both blocking (`waitPop()`) and non-blocking (`tryPop()`) operations", "Support graceful shutdown with `stop()`", "Enable bulk operations with `drain()`"] },
                  { type: "p", text: "By using these queues, TerraLink decouples major stages of processing and prevents threads from stalling or spinning unnecessarily." },

                  { type: "h2", text: "Threads in TerraLink (Client)" },
                  { type: "h4", text: "Chunk Generation Threads" },
                  { type: "ul", items: ["Use `waitPop()` to sleep until new work arrives", "Never waste CPU cycles looping or polling", "Wake instantly when the manager thread queues a chunk"] },
                  { type: "h4", text: "Mesh Generation Threads" },
                  { type: "ul", items: ["First, check `meshUpdateQueue` with `tryPop()`", "If no mesh updates, check `meshGenerationQueue`", "Sleep briefly if both are empty to yield CPU"] },
                  { type: "h4", text: "Main Thread (Rendering)" },
                  { type: "ul", items: ["Uses `tryPop()` in `uploadChunkMeshes()` for safe, non-blocking mesh uploads", "Caps GPU mesh uploads per frame for consistent performance"] },
                  { type: "h4", text: "Manager Thread" },
                  { type: "ul", items: ["Uses `drain()` on various queues (like during position shifts)", "Moves large batches of work efficiently between stages"] },
                ]
              },
              worldgen: {
                blocks: [
                  { type: "h2", text: "How Terrain is Generated" },
                  { type: "p", text: "The world is procedurally generated using Perlin noise to fill `16x16x16` block chunks. " +
                    "Two coordinate systems are used: chunk coordinates (the X/Y/Z position of each chunk) and block coordinates (chunk coords x 16, plus the block's local X/Y/Z within that chunk). " +
                    "Chunk coordinates determine which biome a chunk belongs to, and that biome controls how the terrain is shaped and textured within it. " + 
                    "Biome blending then takes place that prevents extreme jumps in terrain and creates a nice smooth transition biome to biome." },

                  { type: "h2", text: "Biomes" },
                  { type: "p", text: "Biomes are managed through a `BiomeID` enum, with each ID mapped to its own Perlin-noise terrain generation function. Each biome has its own variables: " },
                  { type: "h4", text: "Biome Terrain" },
                  { type: "p", text: "These parameters shape the biome's terrain during height generation." },
                  { type: "ul", items: ["`baseHeight`: sets the average elevation", "`octaves`, `persistence`, `lacunarity`: fractal noise parameters", "`frequency`, `amplitude`: scale and intensity of the heightmap", "`noiseOffsetX`, `noiseOffsetZ`: for spatial variation and blending"] },
                  { type: "h4", text: "Climate Fields" },
                  { type: "p", text: "During world generation, each block is assigned a temperature and humidity using domain-warped noise, and biomes are chosen based on the closest match." },
                  { type: "ul", items: ["`minTemp`, `maxTemp`: acceptable temperature range", "`minHumidity`, `maxHumidity`: acceptable humidity range"] },
                  { type: "h4", text: "Other Variables" },
                  { type: "p", text: "These fields help guide biome transitions and prevent repetitive shapes." },
                  { type: "ul", items: ["`continentalness`: how far from the ocean/landmass edges this biome appears", "`erosion`: flat vs. jagged terrain shaping", "`depth`: used to bias terrain into lowlands or highlands", "`weirdness`: adds variation or exotic traits for biome uniqueness"] },

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
                  { type: "p", text: "The program runs in the following step by step loop until the `GLFW window` is closed: " },
                  { type: "p", text: "1. Clear color and depth buffers" },
                  { type: "p", text: "2. Call `tick()` to handle simulation and logic" },
                  { type: "p", text: "3. Call `render()` to draw the 3D world" },
                  { type: "p", text: "4. Call `renderUI()` to draw the on-screen HUD" },
                  { type: "p", text: "5. Swap buffers and poll user input" },      
                  
                  { type: "h2", text: "Frame Update: `tick()`" },
                  { type: "p", text: "Each frame, `tick()` handles: " },
                  { type: "ul", items: ["Uploading a fixed number of chunk meshes with `uploadChunkMeshes(max_chunks_per_frame)`", "Unloading distant chunks from memory", "Uploading chunks to the in-game map system (if applicable)"] },
                  { type: "p", text: "This keeps the world rendering centered around the player" },

                  { type: "h2", text: "World Rendering: `render()`" },
                  { type: "p", text: "The 3D world is rendered chunk by chunk: " },
                  { type: "ul", items: ["Uses `shaderProgram` (Default Shader object for all blocks)", "Applies camera matrix and camera position uniforms", "Binds the block atlas texture", "Iterates over all active chunks"] },
                  { type: "p", text: "For each chunk: " },
                  { type: "ul", items: ["Checks that the mesh is uploaded and valid", "Binds the chunk's `VAO`", "Draws the chunk using `glDrawElements`"] },
                  { type: "p", text: "The result is a real-time, block-based 3D world rendered from chunk mesh data." },
                ]
              },
              tools: {
                blocks: [
                  { type: "h2", text: "Texture Atlas Generation" },
                  { type: "p", text: "I built a texture atlas system that scans a folder for `.png` textures, packs them into a single square atlas image, and records where each texture lands. " +
                    "It chooses an atlas grid size in powers of two, finds the largest texture, and uses that to compute the final atlas resolution. " +
                    "Each texture is copied into its own tile slot in the atlas, and I store a map from texture name to its (x, y) offset so I can look it up later. " +
                    "After the atlas is written to disk, I link my blocks to it by converting those pixel offsets into normalized UV coordinates and writing them into each block model's vertex `texCoords`, so every block pulls the correct part of the atlas at render time." },
                  { type: "h2", text: "TerraLink Makefile" },
                  { type: "code", 
                    lang: "makefile", 
                    filename: "Makefile",
                    code:  String.raw`BUILD_DIR = build
TOOLCHAIN_FILE = ../vcpkg/scripts/buildsystems/vcpkg.cmake

.PHONY: configure build clean run vcpkg gdb debug installer

setup: vcpkg configure build

all: configure build

rebuild: clean configure build

configure:
	@printf "\nConfiguring project...\n\n"
	@cd $(BUILD_DIR) && cmake .. -DCMAKE_TOOLCHAIN_FILE=$(TOOLCHAIN_FILE)

build:
	@printf "\nBuilding project...\n\n"
	@cd $(BUILD_DIR) && cmake --build .

debug:
	@printf "\nBuilding project in Debug mode...\n\n"
	@cd $(BUILD_DIR) && cmake --debug-output .

clean:
	@if [ -d build ]; then \
		/usr/bin/find build -mindepth 1 ! -name .gitkeep -delete; \
	fi

clear: clean

run: build
	@if [ -d build ] && [ -d build/Debug ]; then \
		cd build/Debug && ./TerraLink.exe $(ARGS); \
	fi

vcpkg:
	@git clone https://github.com/microsoft/vcpkg.git
	@./vcpkg/bootstrap-vcpkg.bat
	@cd vcpkg && ./vcpkg install glfw3 glad glm stb nlohmann-json zstd openal-soft libvorbis libogg

gdb: 
	@cd build/Debug && gdb TerraLink.exe

installer:
	@printf "\nConfiguring CMake for Release build...\n\n"
	@cmake -S . -B build -DCMAKE_TOOLCHAIN_FILE=$(TOOLCHAIN_FILE) -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=build/install
	@printf "\nBuilding project in Release mode...\n\n"
	@cmake --build build --config Release
	@printf "\nInstalling project...\n\n"
	@cmake --install build --config Release
	@printf "\nProject installed to build/install\n"
	@printf "\nCreating installer...\n\n"
	@cd build && "C:/Program Files/CMake/bin/cpack.exe" -G NSIS

install: installer
`
                  },
                  { type: "p", text: "I used this `Makefile` as a shortcut layer over `CMake`. " +
                    "It configures and builds into the build folder using my `vcpkg` toolchain, so dependencies come from `vcpkg`. " +
                    "With my `run` target, I was able to easily launch and debug my project as I was creating it. " +
                    "It also has an `installer` target that builds a 'Release' version, installs it, and runs `CPack` to generate an `NSIS` installer." },
                ]
              }
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
            { text: "Repository", href: "https://github.com/GrantKop/capstone-space-ship-simulator-game" },
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
    // Small projects
    rest_auth_about: {
        type: "project_about",
        menuTitle: "Tarpaulin OAuth REST API",
        menuSubtitle: "Python | REST API | Auth0 + OAuth 2.0",
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
            general: {
              blocks: [
                { type: "h2", text: "About" },
                { type: "p", text: "**Tarpaulin** is a **Flask-based REST API** for a mock course management system (users, courses, and enrollments). " +
                  "It protects resources using **OAuth authentication via Auth0** and **JWT access tokens**. " +
                  "Clients authenticate with Auth0 to obtain an access token, then include it in API requests; the server validates the token before allowing access to protected endpoints." },
                { type: "p", text: "This was an assignment for a class I took in college. The hosted deployment was only live for the duration of the course, so the public endpoint is no longer running." },

                { type: "h2", text: "Authentication & authorization model" },
                { type: "ul", items: ["Requests are authenticated using a `Bearer <token>` header", "The API fetches Auth0's **JWKS** and verifies JWT signature + claims (issuer, audience, RS256)", "The token's `sub` is used to look up the corresponding user record in Datastore to enforce role-based permissions (admin / instructor / student)"] },

                { type: "h2", text: "Data & Hosting" },
                { type: "ul", items: ["**Google Cloud Datastore** stores application entities like `users` and `courses`", "**Google Cloud Storage** is used for avatar uploads (only accepts PNG), storing blobs and serving them back through authenticated routes", "Designed to run on **Google App Engine** with **Gunicorn** as the entrypoint and environment variables for Auth0 + GCP config"] },

                { type: "h2", text: "Postman" },
                { type: "p", text: "I used **Postman** to test authentication flows and validate each endpoint (request/response formats, status codes, and role-based access)." },
              ],
            },
          },
        links: [
            { text: "Repository", href: "https://github.com/GrantKop/tarpaulin-rest-api-oauth" },  
        ],
    },
    buddy_jokers_about: {
        type: "project_about",
        menuTitle: "Balatro Mod: Buddy Jokers",
        menuSubtitle: "Lua | Steamodded API",
        swapMenuHeader: true,
        toc: [
          {
            title: "Overview",
            items: [
              { id: "general", label: "General" },
              { id: "assets", label: "Assets" },
            ],
          },
        ],
          pages: {
            general: {
              blocks: [
                { type: "h2", text: "About the Mod" },
                { type: "p", text: "During late 2024 and early 2025, *Balatro* was a popular game among my friends (and in general). " +
                  "Around January 2025, modding the game was also becoming popular. There is a joker in the game called 'Gros Michel' that we liked to call 'Gross Mitchell' after our friend Mitch. " +
                  "Because of that, I got the bright idea to actually add my buddy Mitch into the game, with his own functioning joker. Once I got into it, I started adding a lot of my friends and myself in as all sorts of jokers, and it turned into a whole thing. " },
                { type: "p", text: "Learning Lua and the Steamodded API simultaneously was pretty challenging, especially since there were no proper tutorials out at the time. " +
                  "But I did eventually get everything working, and even included a backport to an older version so the mod could be played with the Multiplayer mod, which was only available for an older version at the time. " +
                  "The mod is now most likely out of date, and probably doesn't work properly with the current version of the game or API."
                },
                { type: "p", text: "I really enjoy making projects like this. From creating the assets to writing the functionality, making completely custom content for other people to use is a lot of fun. Especially when it involves my friends." },

                { type: "h2", text: "In-Game Screenshots" },
                { type: "img", 
                  src: "/images/small-projects/jokers_action.jpg", 
                  alt: "Buddy Jokers shown in action",
                  caption: "Buddy Jokers being used with normal jokers in scoring",
                },
                { type: "img", 
                  src: "/images/small-projects/jokers_abilities.jpg", 
                  alt: "Legendary joker ability",
                  caption: "Stud Muffin legendary joker ability",
                },
                { type: "img", 
                  src: "/images/small-projects/jokers_in_game.png", 
                  alt: "Buddy Jokers shown in jokers collection",
                  caption: "All Buddy Jokers shown on the in-game collection screen",
                },
                { type: "img", 
                  src: "/images/small-projects/mods_list.png", 
                  alt: "Buddy Jokers mod shown in mods list",
                  caption: "Buddy Jokers mod showing up in the mod list",
                },
              ],
            },
            assets: {
              blocks: [
                { type: "h2", text: "The Assets I Made" },
                { type: "p", text: "Balatro has an in-game setting to change the resolution of the cards and jokers for lower-end machines to be more optimized. It requires a spritesheet for each resolution (1x and 2x sheets)." },
                { type: "p", text: "I wanted the jokers to be real images of my friends, fit somewhat into the artstyle of the game. " +
                  "I achieved this by cropping an existing photo I had of a friend, shrank it down to the resolution that matched the existing jokers (142x190 each at full resolution), and finally overlayed the 'Joker' text on top. " +
                  "Some of the jokers needed a few overlay tweaks due to the lighting or subjects face not being quite centered. There was also one Joker- *Stud Muffin*, that was of **LEGENDARY** rarity which required its own overlay."
                 },

                { type: "h2", text: "Tools I Used" },
                { type: "p", text: "I like to use *Aseprite* to make all of my image and pixel-based assets; this is the case for all of my projects. Below is a screenshot of my spritesheet for this mod inside of Asprite." },
                { type: "img", 
                  src: "/images/small-projects/asset_creation.png", 
                  alt: "jokers sprite sheet open in aseprite",
                  caption: "Full resolution Buddy Jokers sprite sheet open in Asprite",
                },
              ],
            },
          },
        links: [
            { text: "Repository", href: "https://github.com/GrantKop/buddy-jokers-balatro-mod" },
            { text: "Steamodded GitHub", href: "https://github.com/Steamodded" },
            { text: "Aseprite", href: "https://www.aseprite.org/" },   
        ],
    },
    itpo_about: {
        type: "project_about",
        menuTitle: "Is the Port Open",
        menuSubtitle: "Python | TCP Port Scanner | CustomTkinter",
        swapMenuHeader: true,
        toc: [
          {
            title: "Overview",
            items: [
              { id: "general", label: "General" },
              { id: "refresh_status", label: "Refresh & Status" },
              { id: "settings", label: "Settings" },
            ],
          },
        ],
          pages: {
            general: {
              blocks: [
                { type: "h2", text: "General" },
                { type: "p", text: "This is a simple desktop app to quickly check whether a TCP port is reachable (OPEN/CLOSED/TIMEOUT/DNS_FAIL) across multiple targets with a clean UI, fast concurrent checks, and persistent saved targets." },
                { type: "p", text: "I made this program when a friend and I were working on a Minecraft plug-in together. The plug-in, *Fabrivis*, took advantage of a database to save and load player data. " +
                  "It was originally just so I could quickly check if the data base and Minecraft server were still up, but I now use it for my Ubuntu system, to quickly check if any of my hosted applications are down." },

                { type: "h2", text: "What it does" },
                { type: "h4", text: "- Lets you manage targets in-app: " },
                { type: "ul", items: [
                  "Add targets with the **+** button (Name, Host, Port)",
                  "Delete targets with the **✕** button on each row",
                  "Displays targets in a scrollable list showing **Name**, **Host**, **Port**, and **Status**"] },
                { type: "h4", text: "- Lets you edit scan settings in-app:" },
                { type: "ul", items: [
                  "**Timeout seconds** (per connection attempt)",
                  "**Max workers** (thread pool size / concurrency)",
                  "**Auto refresh seconds** (set to `0` to disable)"] },
                { type: "h4", text: "- Runs port checks concurrently using a `ThreadPoolExecutor` so multiple targets can be tested quickly." },
                { type: "h4", text: "- Updates the UI with a status chip and latency (ms) when the port is open." },

                { type: "h2", text: "Screenshots" },
                { type: "img", 
                  src: "/images/small-projects/itpo.png", 
                  alt: "ITPO showing results for 5 different ports",
                  caption: "In this screenshot you can see my Minecraft and Terraria servers timed out, my Hytale and database showed closed, and this website responded as Open",
                },
                { type: "img", 
                  src: "/images/small-projects/itpo_target.png", 
                  alt: "ITPO target add window",
                  caption: "This is the window to add a target to the ping list",
                },
                { type: "img", 
                  src: "/images/small-projects/itpo_settings.png", 
                  alt: "ITPO settings window",
                  caption: "Here is the ITPO settings window",
                },
              ],
            },
            refresh_status: {
              blocks: [
                { type: "h2", text: "How refresh works" },
                { type: "p", text: "Pressing the refresh button triggers and asynchronous scan: "},
                { type: "ul", items: [
                  "The Refresh button disables to prevent spamming",
                  "All targets update to **Checking...**",
                  "A background worker thread submits checks to the thread pool",
                  "Results are applied back on the `Tkinter` main thread via `after(0, ...)`"] },
                { type: "p", text: "If **Auto refresh seconds** is set above 0 in Settings, the app will automatically refresh on that interval."},

                { type: "h2", text: "Statuses and their meaning" },
                { type: "ul", items: [
                  "**OPEN**: connection was successful. Color is green and includes latency: `OPEN (*ms)`",
                  "**CLOSED**: connection was refused. Color is red",
                  "**TIMEOUT**: no response within the configured time. Color is yellow",
                  "**DNS_FAIL**: hostname lookup failed. Color is blue",
                  "**ERROR**: some other error occurred. Color is gray"] },
              ],
            },
            settings: {
              blocks: [
                { type: "h2", text: "Save file layout" },
                { type: "code", 
                  lang: "key-value config", 
                  filename: "itpo.ini",
                  code: `[SETTINGS]
TIMEOUT_SECONDS = 5.0
MAX_WORKERS = 5
AUTO_REFRESH_SECONDS = 0

[TARGETS]
; Target Name = Host:Port
Minecraft = 68.118.58.102:25565
GrantKopczenski.com = grantkopczenski.com:443
`
    },
    {
      type: "p",
      text:
        "You can edit `itpo.ini` manually in `%APPDATA%/Roaming/IsThePortOpen/itpo.ini`, but the intended workflow is managing targets and settings directly inside the app."
    },
              ],
            },
          },
        links: [
            { text: "Repository", href: "https://github.com/GrantKop/is-the-port-open" },
            { text: "Latest Release", href: "https://github.com/GrantKop/is-the-port-open/releases" },            
            { text: "TKinter Documentation", href: "https://docs.python.org/3/library/tkinter.html" },
        ],
    },
    smallsh_about: {
        type: "project_about",
        menuTitle: "Small Shell",
        menuSubtitle: "C | Signal Handling | Process Forking",
        swapMenuHeader: true,
        toc: [
          {
            title: "Overview",
            items: [
              { id: "general", label: "General" },
              { id: "built_commands", label: "Built-in Commands" },
            ],
          },
        ],
          pages: {
            general: {
              blocks: [
                  { type: "h2", text: "About" },
                  { type: "p", text: "This program acts as a small shell. It has 3 built-in functions, as well as a call to `execvp` to handle many more commands. This was an assignment for a class I took in college." },
                  { type: "p", text: "The shell will also: " },
                  { type: "ul", items: ["Handle redirection and background processes", "Replace `$$` with the `PID` of the shell", "`CTRL C` will not close the shell, it will instead kill the foreground process the shell is running", "`CTRL Z` will put the shell in foreground mode, where all processes will run in the foreground, even if told to run in the background"] },

                  { type: "h2", text: "Outputs" },
                  { type: "img", 
                  src: "/images/small-projects/pwd_command.png", 
                  alt: "pwd command in action",
                  caption: "Printing and changing the current working directory",
                  },
                  { type: "img", 
                  src: "/images/small-projects/random_commands.png", 
                  alt: "other commands in action",
                  caption: "Several commands being handled by my shell",
                  },
                  { type: "img", 
                  src: "/images/small-projects/echo_command.png", 
                  alt: "echo command in action",
                  caption: "Shell also handles output/input redirection",
                  },
              ],
            },
            built_commands: {
              blocks: [
                  { type: "h2", text: "All Built in commands" },
                  { type: "p", text: "Any other command not listed here (`ls`, `cat`, `grep`, `echo`, etc.) are treated as an external command and run through `createChild() -> fork() -> execvp()`, with support for `<`, `>`, and `&`" },

                  { type: "h3", text: "Change Directory: `cd`" },
                  { type: "ul", items: ["If the user types `cd <path>`, it will change the current directory to `<path>`", "If the user types just `cd`, it switches to the user's home directory via `getenv(\"HOME\")`", "if `chdir()` fails, it will print an error message"] },
                  
                  { type: "h3", text: "Status: `status`" },
                  { type: "ul", items: ["Reports the exit status / signal of last foreground command", "If the process was killed by a signal, it will print 'Terminated by signal N'", "Uses the global `exitCode` that gets updated when the parent does `waitpid(spawnPid, &exitCode, 0)` for foreground commands"] },

                  { type: "h3", text: "Exit: `exit`" },
                  { type: "ul", items: ["Ends the shell process immediately and exits to the actual terminal"] },               
              ]
            }
          },
        links: [
            { text: "Repository", href: "https://github.com/GrantKop/small-shell" },
        ],
    },
    wumpus_about: {
        type: "project_about",
        menuTitle: "Hunt the Wumpus",
        menuSubtitle: "C++",
        swapMenuHeader: true,
        toc: [
          {
            title: "Overview",
            items: [
              { id: "general", label: "General" },
              { id: "events", label: "Events" },
            ],
          },
        ],
          pages: {
            general: {
              blocks: [
                  { type: "h2", text: "Why I made this in 2 hours" },
                  { type: "p", text: "My roommate at the time was currently taking a lower level Computer Science class and was still learning the basics. " +
                    "The current assignment he was working on was this very game, *Hunt the Wumpus*. He had completed most of the project on his own, but occasionally had asked me for help figuring some things out. " +
                    "I started to remember when I was taking the same entry-level classes, and thought about how much better I've gotten at programming. I then had the idea to see how fast I could finish that assignment, so I asked him to send me the outline. " +
                    "Over the next 2 hours, I quickly layed out and filled in all of the classes functions I would need, until I could ultimately run the game properly in (my own) record time." +
                    "I was proud of myself until I later learned that occasionaly there is an invalid memory read, which crashes the game entirely, but that's okay with me for what this project was."
                  },
                  { type: "h2", text: "Gameplay Loop" },
                  { type: "p", text: "In the project instructions, the user had to be able to set the map size by entering the amount of columns and rows it should be (min: `4x4`, max: `30x30`). " +
                    "It also stated after setting the map size that there needs to be a difficulty setting, where easy mode is a 'debug' mode and hard mode is the actual game. " +
                    "Once both these are set, the user is shown a grid of rooms, with their current room marked as a `*`. Below the grid, there is a notification text about the room they are in, and information about adjacent rooms. " +
                    "Below that, is a list of commands the player can enter to control the game. They have the option to move into an adjacent room (if it exists), or shoot an arrow in a direction (if they have one). "
                  },
                  { type: "h2", text: "Screenshots" },
                  { type: "img", 
                  src: "/images/small-projects/wumpus_arrow.png", 
                  alt: "Player collected an arrow",
                  caption: "Player entered a room with an arrow, and gained an additional shot",
                  },
                  { type: "img", 
                  src: "/images/small-projects/wumpus_gold.png", 
                  alt: "Player collected the gold",
                  caption: "Player found the room with the gold, and can now escape if they find the rope",
                  },
                  { type: "img", 
                  src: "/images/small-projects/wumpus_died.png", 
                  alt: "Player fell to their death",
                  caption: "Player entered a room with a bottomless pit, and fell to their death",
                  },
              ],
            },
            events: {
              blocks: [
                  { type: "h2", text: "Events" },
                  { type: "p", text: "Every time the map is generated, there are specific events that get assigned to some of the rooms. These events are crucial to the core gameplay of Hunt the Wumpus. Below is a list of all the events: " },                  
                  { type: "ul", items: ["Arrow: If the player enters this room, they will gain an additional arrow.",
                                        "Bats: When the player enters a bat event room, their next move will be randomized.",
                                        "Bottomless Pit: If a player enters a room with this event, they immediately lose.",
                                        "Gold: The player must find this room if they wish to escape. Only a single gold event spawns.",
                                        "Rope: Once the player finds the gold, they can use this room to escape and win.",
                                        "Wumpus: Like the gold, only a single wumpus will spawn, and it will randomly move between rooms. If the player shoots in the direction of the wumpus, they kill it and immediately win. If they enter the same room as the wumpus, they die and lose."
                  ] },               

              ]
            }
          },
        links: [
            { text: "Repository", href: "https://github.com/GrantKop/dungeon-crawler-game" },
            { text: "Wikipedia", href: "https://en.wikipedia.org/wiki/Hunt_the_Wumpus" },
        ],
    },
    all_scripts: {
        type: "project_about",
        menuTitle: "Scripting",
        menuSubtitle: "Bash | Makefile", // PowerShell | Python
        swapMenuHeader: true,
        toc: [
          {
            title: "Sections",
            items: [
              { id: "minecraft", label: "Minecraft" },
              { id: "website", label: "My Website" },
              { id: "terralink", label: "TerraLink" },
              { id: "other", label: "Other" },
            ],
          },
        ],
          pages: {
            minecraft: {
              blocks: [
                { type: "h2", text: "Start Server" },
                { type: "code", 
                  lang: "bash", 
                  filename: "start_server.sh",
                  code: `#!/bin/bash

cd ~/ssd/minecraft/modded/Current_Server

while true; do
	if [ -f "stop_server" ]; then
		echo "Stop file found. Exiting reboot loop."
		rm stop_server
		break
	fi

	echo "Starting server..."
	./run.sh

	echo "Server crashed or stopped. Restarting in 5 seconds..."
	sleep 5
done

tmux wait-for -S mc_done
`
                },
                { type: "p", text: "This script will call the `run.sh` script that Minecraft auto-generates in your directory. " +
                  "It runs in a persistent loop, so if the server crashes or reboots, the server automatically restarts without needing my attention. " +
                  "When I need to stop the server, I have a command to create a file in the directory and the script detects it and exits the loop. " +
                  "I have another command that creates a `tmux` session labeled 'minecraft' that runs this script, so I can easily find the console whenever I need." },
                { type: "h2", text: "Backup World" },
                { type: "code", 
                  lang: "bash", 
                  filename: "backup_world.sh",
                  code: `#!/bin/bash

WORLD_DIR="world"
BACKUP_DIR="backups"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_FILE="$BACKUP_DIR/world_backup_$TIMESTAMP.tar.gz"

cd ~/ssd/minecraft/modded/Current_Server

if tmux has-session -t minecraft 2>/dev/null; then
	tmux send-keys -t minecraft "say Backing up the world... Server may lag a bit until complete" C-m
	tmux send-keys -t minecraft "save-off" C-m
	tmux send-keys -t minecraft "save-all" C-m
	sleep 5
fi

if [ -d "world" ]; then
	tar -czf "$BACKUP_FILE" "$WORLD_DIR"
fi

if tmux has-session -t minecraft 2>/dev/null; then
	tmux send-keys -t minecraft "save-on" C-m
	tmux send-keys -t minecraft "say Backup complete!" C-m
fi

find "$BACKUP_DIR" -type f -name "*.tar.gz" -mmin +2160 -exec rm {} \;

echo "World backup complete: $BACKUP_FILE"
`
                },
                { type: "p", text: "I run this script via `cron` on my Ubuntu server. It executes every six hours (12pm, 6pm, 12am). " +
                  "Each run compresses the world directory into a `tar.gz` file and saves it to a backups directory with a date/time stamp. " +
                  "It also prunes backups older than a configured retention period to prevent unnecessary disk usage. " + 
                  "Before starting, it also notifies players that a backup is in progress in case the server performance is affected." },
                { type: "h2", text: "Restart Server" },
                { type: "code", 
                  lang: "bash", 
                  filename: "restart_server.sh",
                  code: `#!/bin/bash

if tmux has-session -t minecraft 2>/dev/null; then
	tmux send-keys -t minecraft "say Server rebooting in 60 seconds..." C-m
	sleep 30
	tmux send-keys -t minecraft "say Server rebooting in 30 seconds..." C-m
	sleep 30
	tmux send-keys -t minecraft "say Server rebooting..." C-m
	sleep 1
	tmux send-keys -t minecraft "stop" C-m
fi
`
                },
                { type: "p", text: "I also run this script via `cron` on my Ubuntu server. Typically it executes 3 days a week (MWF), at 5am when (probably) nobody is online. " +
                  "It will notify players that the server is about to be restarted, then it sends the `stop` command to the Minecraft console for a clean shutdown. " + 
                  "Once shutdown, my start-up script kicks in and automatically restarts the server." },
              ],
            },
            website: {
              blocks: [
                { type: "h2", text: "Make Thumbs" },
                { type: "code", 
                  lang: "bash", 
                  filename: "make-thumbs.sh",
                  code: String.raw`#!/usr/bin/env bash
set -euo pipefail
shopt -s nullglob nocaseglob

ROOT="\${1:-.}"
MAX_W=900
JPEG_Q=65

find "$ROOT" -type d -name "images" -print0 | while IFS= read -r -d '' IMGDIR; do
        THUMBDIR="$IMGDIR/thumbs"
        mkdir -p "$THUMBDIR"

        echo "==> $IMGDIR"

        for SRC in "$IMGDIR"/*.jpg "$IMGDIR"/*.jpeg "$IMGDIR"/*.png "$IMGDIR"/*.webp; do
                [[ -f "$SRC" ]] || continue

                base="$(basename "$SRC")"
                out="$THUMBDIR/$base"

                if [[ -f "$out" && "$out" -nt "$SRC" ]]; then
                        continue
                fi

                convert "$SRC" \
                        -auto-orient \
                        -resize "\${MAX_W}x\${MAX_W}>" \
                        -strip \
                        -interlace Plane \
                        -sampling-factor 4:2:0 \
                        -quality "$JPEG_Q" \
                        "$out"
                done
        done

echo "make-thumbs.sh done."
`
                },
                { type: "p", text: "This script scans for folders named `images` (starting at `ROOT`, which defaults to the current directory) and creates an `images/thumbs` folder in each one. " +
                  "It then generates resized thumbnails for every `.jpg` / `.jpeg` / `.png` / `.webp` file, saving them into the thumbs folder with the same filename. " +
                  "If a thumbnail already exists and is newer than the original, it skips that file. " +
                  "Thumbnails are made with the ImageMagick `convert` command using auto-rotation, stripped metadata, a max size of 900px (no upscaling), and quality set to 65 to reduce file size. " + 
                  "I use this to create lower quality images on my website for slower connections to look smoother." },
              ],
            },
            terralink: {
              blocks: [
                { type: "h2", text: "TerraLink Makefile" },
                { type: "code", 
                  lang: "makefile", 
                  filename: "Makefile",
                  code:  String.raw`BUILD_DIR = build
TOOLCHAIN_FILE = ../vcpkg/scripts/buildsystems/vcpkg.cmake

.PHONY: configure build clean run vcpkg gdb debug installer

setup: vcpkg configure build

all: configure build

rebuild: clean configure build

configure:
	@printf "\nConfiguring project...\n\n"
	@cd $(BUILD_DIR) && cmake .. -DCMAKE_TOOLCHAIN_FILE=$(TOOLCHAIN_FILE)

build:
	@printf "\nBuilding project...\n\n"
	@cd $(BUILD_DIR) && cmake --build .

debug:
	@printf "\nBuilding project in Debug mode...\n\n"
	@cd $(BUILD_DIR) && cmake --debug-output .

clean:
	@if [ -d build ]; then \
		/usr/bin/find build -mindepth 1 ! -name .gitkeep -delete; \
	fi

clear: clean

run: build
	@if [ -d build ] && [ -d build/Debug ]; then \
		cd build/Debug && ./TerraLink.exe $(ARGS); \
	fi

vcpkg:
	@git clone https://github.com/microsoft/vcpkg.git
	@./vcpkg/bootstrap-vcpkg.bat
	@cd vcpkg && ./vcpkg install glfw3 glad glm stb nlohmann-json zstd openal-soft libvorbis libogg

gdb: 
	@cd build/Debug && gdb TerraLink.exe

installer:
	@printf "\nConfiguring CMake for Release build...\n\n"
	@cmake -S . -B build -DCMAKE_TOOLCHAIN_FILE=$(TOOLCHAIN_FILE) -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=build/install
	@printf "\nBuilding project in Release mode...\n\n"
	@cmake --build build --config Release
	@printf "\nInstalling project...\n\n"
	@cmake --install build --config Release
	@printf "\nProject installed to build/install\n"
	@printf "\nCreating installer...\n\n"
	@cd build && "C:/Program Files/CMake/bin/cpack.exe" -G NSIS

install: installer
`
                },
                { type: "p", text: "I used this `Makefile` for my TerraLink project as a shortcut layer over `CMake`. " +
                  "It configures and builds into the build folder using my `vcpkg` toolchain, so dependencies come from `vcpkg`. " +
                  "With my `run` target, I was able to easily launch and debug my project as I was creating it. " +
                  "It also has an `installer` target that builds a 'Release' version, installs it, and runs `CPack` to generate an `NSIS` installer." },
              ],
            },
            other: {
              blocks: [
                { type: "h2", text: "Bash Aliases" },
                { type: "code", 
                  lang: "bash", 
                  filename: ".bash_aliases",
                  code: `# All aliases used for my Ubuntu server
alias zedit='vim ~/.bash_aliases'
alias zu='source ~/.bash_aliases'
alias lnxupd='sudo apt update && sudo apt upgrade -y && sudo apt autoremove -y'
alias drvpt='lsblk; echo; df -hT'

# Website Commands
alias mkthumbs='sudo /bin/make-thumbs.sh /var/www/grantkopczenski'

# Minecraft
alias modmc='cd ~/ssd/minecraft/modded'
alias vanmc='cd ~/ssd/minecraft/vanilla'

alias startmc='tmux new-session -d -s minecraft bash -c "/home/grant/ssd/minecraft/modded/current_server/start_server.sh"'
alias stopmc='touch "/home/grant/ssd/minecraft/modded/current_server/stop_server" && tmux send-keys -t minecraft "stop" C-m && tmux wait-for mc_done && tmux kill-session -t minecraft'
alias backupmc='~/ssd/minecraft/modded/current_server/backup_world.sh'
alias grabmc='tmux attach -t minecraft'
alias startvanillamc='java -Xms4G -Xmx10G -jar server1.21.9.jar -nogui'
alias startpxmon='tmux new-session -d -s minecraft bash -c "/home/grant/ssd/minecraft/modded/pixelmon/start_pixelmon_server.sh"'
alias stoppxmon='touch "/home/grant/ssd/minecraft/modded/pixelmon/stop_server" && tmux send-keys -t minecraft "stop" C-m && tmux wait-for mc_done && tmux kill-session -t minecraft'

# Terraria
alias starttr='tmux new-session -d -s terraria bash -c "/home/grant/ssd/tmodloader/start-tModLoaderServer.sh"'
alias stoptr='tmux send-keys -t terraria "exit"'
alias grabtr='tmux attach -t terraria'

# Hytale
alias startht='tmux new-session -d -s hytale bash'
alias grabht='tmux attach -t hytale'
`
                },
                { type: "p", text: "These are my current Ubuntu server aliases, which are shorthand commands for the things I most commonly do/use." },
              ],
            },
          },
    },
};
