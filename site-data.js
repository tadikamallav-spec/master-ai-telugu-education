
/* ==========================================================
   MASTER AI TELUGU EDUCATION — EASY EDIT AREA
   Routine update rule:
   TITLE + URL + optional description/image/category.
   Replace "#" with your real public link.
   ========================================================== */

const SITE_DATA = {
  tasks: [
    "Lesson Plan","Worksheet","Question Paper","Quiz","Presentation","Poster",
    "Thumbnail","AI Image","AI Video","Voiceover","HTML Activity","Translation","Research","Social Media Post"
  ],

  aiTools: [
  {name:"ChatGPT",icon:"💬",category:"LLM",desc:"AI assistant for teaching, planning, writing, learning and creative work.",url:"https://chatgpt.com/",tags:["LLM","Teacher"]},
  {name:"Google Gemini",icon:"✨",category:"LLM",desc:"Google AI assistant for learning, research and content creation.",url:"https://gemini.google.com/",tags:["LLM","Google"]},
  {name:"Canva",icon:"🎨",category:"Design",desc:"Create presentations, posters, worksheets and educational designs.",url:"https://www.canva.com/",tags:["Design","Teacher"]},
  {name:"NotebookLM",icon:"📚",category:"Research",desc:"Study and organize source materials with Google's AI research assistant.",url:"https://notebooklm.google.com/",tags:["Research","Teacher"]},
  {name:"Perplexity",icon:"🔎",category:"Research",desc:"AI-powered research and web answer tool.",url:"https://www.perplexity.ai/",tags:["Research","AI"]},
  {name:"Gamma",icon:"📊",category:"Presentation",desc:"Create presentations and visual documents with AI.",url:"https://gamma.app/",tags:["Presentation","Teacher"]},
  {name:"Microsoft Copilot",icon:"🤖",category:"LLM",desc:"Microsoft AI assistant for writing, research and productivity.",url:"https://copilot.microsoft.com/",tags:["LLM","Productivity"]},
  {name:"Adobe Express",icon:"🖼️",category:"Design",desc:"Create educational graphics, posters and social media content.",url:"https://www.adobe.com/express/",tags:["Design","Creative"]},
  {name:"ElevenLabs",icon:"🎙️",category:"Voice",desc:"AI voice and audio creation tools.",url:"https://elevenlabs.io/",tags:["Voice","Audio"]},
  {name:"Google AI Studio",icon:"🧠",category:"AI",desc:"Experiment with Google's Gemini AI models and prompts.",url:"https://aistudio.google.com/",tags:["AI","Google"]},
  {name:"Suno",icon:"🎵",category:"Music",desc:"Create songs and music using AI.",url:"https://suno.com/",tags:["Music","Creative"]},
  {name:"CapCut",icon:"🎬",category:"Video",desc:"Video editing and AI-powered content creation.",url:"https://www.capcut.com/",tags:["Video","Creative"]}
],
  teacherTools: [
    {name:"Lesson Plan Assistant",icon:"📘",desc:"Use a ready prompt with your preferred AI tool.",url:"https://chatgpt.com/"},
    {name:"Worksheet Maker",icon:"📝",desc:"Build classroom worksheets and activities.",url:"https://www.canva.com/worksheets/templates/"},
    {name:"MCQ & Quiz Planner",icon:"✅",desc:"Create practice questions and revision sets.",url:"https://chatgpt.com/"},
    {name:"Translation Assistant",icon:"🌐",desc:"Telugu • Hindi • English teaching support.",url:"https://translate.google.com/"}
  ],

  practice: [
    {name:"TET Practice",icon:"🎯",desc:"Add your public HTML test link here.",url:"#",tags:["TET","HTML"]},
    {name:"Hindi Interactive Learning",icon:"अ",desc:"Add Hindi learning HTML files here.",url:"#",tags:["Hindi","Interactive"]},
    {name:"Telugu FLN / LIP",icon:"అ",desc:"Add Telugu FLN and LIP resources here.",url:"#",tags:["Telugu","FLN"]},
    {name:"Educational Games",icon:"🎮",desc:"Add quizzes, games and student activities.",url:"#",tags:["Games","Students"]}
  ],

  videos: [
    {name:"AI for Teachers",icon:"▶️",desc:"Paste your YouTube video or playlist link.",url:"#"},
    {name:"Prompt Engineering",icon:"▶️",desc:"Add your prompt training video link.",url:"#"},
    {name:"Canva Tutorials",icon:"▶️",desc:"Add your Canva class link.",url:"#"},
    {name:"TET Video Classes",icon:"▶️",desc:"Add coaching class links.",url:"#"}
  ],

  prompts: [
    {name:"Teacher Prompt",icon:"⚡",desc:"Create a lesson plan for [CLASS], [SUBJECT], [TOPIC] with objectives, activity, assessment and homework.",tool:"ChatGPT / Gemini"},
    {name:"MCQ Prompt",icon:"⚡",desc:"Create age-appropriate MCQs from [TOPIC] with four options, answer and brief explanation.",tool:"ChatGPT / Gemini"},
    {name:"Poster Prompt",icon:"⚡",desc:"Create a clear educational poster concept for [TOPIC], mobile-first, large readable text and classroom-friendly visuals.",tool:"Image / Design AI"},
    {name:"Video Prompt",icon:"⚡",desc:"Create a short educational video plan for [TOPIC] with consistent characters, scenes, dialogue and visual continuity.",tool:"Video AI"}
  ],

  app: {
    openUrl:"https://app.emergent.sh/share-preview?app=exp%3A%2F%2Fai-telugu-learn-1.preview.emergentagent.com%3Fexpo_go_prompt_device_auth%3D1%26expo_go_device_auth_verification_uri_override%3Dapp.emergent.sh&job_id=e6e101c8-9958-4a34-92e6-75dda1229994",
    downloadUrl:"https://app.emergent.sh/share-preview?app=exp%3A%2F%2Fai-telugu-learn-1.preview.emergentagent.com%3Fexpo_go_prompt_device_auth%3D1%26expo_go_device_auth_verification_uri_override%3Dapp.emergent.sh&job_id=e6e101c8-9958-4a34-92e6-75dda1229994",
    demoUrl:"https://youtube.com/@zphsvmbanjar"
  },

  resources: [
    {name:"Worksheets",icon:"📄",desc:"Google Drive / PDF / public file links.",url:"#"},
    {name:"Google Forms",icon:"📋",desc:"Registration, quiz and feedback forms.",url:"#"},
    {name:"Presentations",icon:"📊",desc:"Teacher training and classroom presentations.",url:"#"},
    {name:"Free Downloads",icon:"⬇️",desc:"Add your public educational resource links.",url:"#"}
  ],

  social: [
    {name:"YouTube",icon:"▶️",url:"https://youtube.com/@zphsvmbanjar"},
    {name:"Instagram",icon:"📸",url:"https://www.instagram.com/vandanamsir/"},
    {name:"Facebook",icon:"f",url:"https://www.facebook.com/share/r/1TzBXPDgPW/"},
    {name:"WhatsApp",icon:"💬",url:"https://wa.me/918639506336"}
  ]
};
