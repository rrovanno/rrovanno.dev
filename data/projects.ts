export type Project = {
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  status: string;
  type: string;
  stack: string[];
  sections: {
    title: string;
    content: string;
  }[];
  links?: {
    label: string;
    url: string;
  }[];
};

export const projects: Project[] = [
{
  number: "01",
  title: "Atlas",

  shortDescription:
    "A local-first personal knowledge system built around user-owned knowledge.",

  description:
    "Atlas started with me wondering if there was a better way to organize and preserve personal knowledge. Naturally, instead of leaving that thought alone, I started building one.",

  status: "In Development",
  type: "Knowledge System",

  stack: ["Next.js", "TypeScript", "SQLite"],

  sections: [
    {
      title: "About",
      content:
        "Atlas is my ongoing experiment with personal knowledge and local-first software. I'm figuring out what it should become by actually building it, breaking things, changing my mind, and slowly turning the idea into something real—all while keeping the user's data in their hands.",
    },
    {
      title: "What I'm Building",
      content:
        "Pretty much the whole thing. I'm designing the interface, building the local data systems, figuring out how information should be organized, and putting together the architecture that keeps everything working.",
    },
    {
      title: "Design Principles",
      content:
        "A few things aren't negotiable for me: local-first software, user-owned data, privacy, and building something I won't hate maintaining six months from now.",
    },
    {
      title: "Development",
      content:
        "Atlas is very much still being built. There are parts of the idea—and where I eventually want to take it—that I keep to myself for now. You'll see them when they're ready.",
    },
  ],
},

{
  number: "02",
  title: "Seal",

  shortDescription:
    "A digital letters experience built around preserving meaningful memories.",

  description:
    "Seal came from a pretty simple thought: digital communication is incredibly convenient, but sometimes convenience makes everything feel a little disposable. So I started experimenting with what happens when you slow it down and treat a message more like a letter.",

  status: "In Development",
  type: "Web Experience",

  stack: ["React", "Vite", "Supabase"],

  sections: [
    {
      title: "About",
      content:
        "Seal is my take on digital letters. Instead of trying to make communication faster, I wanted to make it feel a little more intentional—something you actually sit down to write, wait to receive, and might want to keep afterward.",
    },
    {
      title: "The Idea",
      content:
        "Most communication today is designed to be instant. Send, receive, reply, repeat. Seal deliberately goes the other way. I'm exploring anticipation, intention, and permanence, and whether those things can make a digital interaction feel meaningful again.",
    },
    {
      title: "The Experience",
      content:
        "A lot of the experience borrows from physical letters and keepsakes: envelopes, wax seals, personal connections, and stories worth preserving. I'm not trying to literally recreate mail on a screen, but I do want some of that “this was made for me” feeling to survive digitally.",
    },
    {
      title: "What I Built",
      content:
        "I've been designing and developing the early experience myself, including the onboarding flow, the letter-writing concept, the connection system, story exploration, and the overall visual direction. Basically, figuring out what Seal should feel like while also figuring out how to make that feeling actually work as software.",
    },
    {
      title: "Current State",
      content:
        "Seal is still in development. Right now I'm more interested in getting the core experience and interactions right than pretending it's already a giant finished product. There's plenty more I could add—the important part first is making sure the thing that made me want to build Seal in the first place actually works.",
    },
  ],
},

  {
  number: "03",
  title: "Dude, Where's Our Stage?",

  shortDescription:
    "A retro-style 2D platformer inspired by classic Mario games, except the playable characters are Tom, Mark, and Travis from Blink-182. Because apparently that was an idea I needed to make real.",

  description:
  "Dude, Where's Our Stage? is a fan-made Blink-182 platformer I built in Godot. After a riot breaks out following their concert, the band's bus crashes in the middle of a forest, kicking off a progressively more ridiculous journey through places they absolutely should not be in.",

  status: "Completed",
  type: "Game",

  stack: ["Godot Engine", "GDScript"],

  sections: [
    {
      title: "About",
      content:
        "This started with me wanting to build a classic retro platformer. Somewhere along the way, that became “what if I made Mario, but Blink-182?” I liked that idea way too much to leave it as a joke, so I turned Tom, Mark, and Travis into playable characters and gave them an appropriately chaotic reason to start platforming.",
    },
    {
      title: "The Game",
      content:
        "The game is built around retro 2D platforming: running, jumping, avoiding enemies and hazards, and making your way through increasingly chaotic levels. I love games that are difficult and a little cruel—stuff like Dark Souls and Cat Mario—so naturally some of that made its way into the level design. There are tricky jumps, hazards meant to catch you off guard, and sections that might take a few attempts before you figure them out.",
    },
    {
      title: "What I Built",
      content:
        "I developed the game in Godot using GDScript, implementing the player movement and jumping physics, enemy and hazard behavior, platform challenges, level logic, UI, and level design. I also built the game around three playable characters—Tom DeLonge, Mark Hoppus, and Travis Barker—and carried the project from the initial idea all the way to a finished playable release.",
    },
    {
      title: "What I Learned",
      content:
        "This was one of the first times I had to deal with the difference between having a game idea and actually finishing a game. Building individual mechanics was one thing; turning them into multiple levels, designing challenges around them, debugging everything that broke, and eventually deciding the game was actually done taught me a lot more. I also got to experiment with something I genuinely enjoy as a player: making levels difficult and tricky without making them impossible. Most importantly, I learned how to take a ridiculous idea seriously enough to ship it.",
    },
    {
      title: "Current State",
      content:
        "Finished. The game is publicly playable on itch.io, and the project is complete rather than eternally sitting in my “I'll finish this eventually” pile. It was made as a non-commercial fan project for educational and portfolio purposes.",
    },
    {
      title: "Disclaimer",
      content:
        "This is a fan-made, non-commercial project created for educational and portfolio purposes. Blink-182 and related names, music, and trademarks belong to their respective owners.",
    },
  ],

  links: [
    {
      label: "Play on itch.io",
      url: "https://rrovanno.itch.io/blink182-dude-wheres-our-stage",
    },
  ],
},
];