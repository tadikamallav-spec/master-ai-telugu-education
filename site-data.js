
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
    {name:"ChatGPT", icon:"💬", category:"LLM", desc:"AI assistant for teaching, planning, writing, learning and creative work.", url:"https://chatgpt.com/", tags:["LLM","Teacher"]},
    {name:"Google Gemini", icon:"✦", category:"LLM", desc:"Google AI assistant for learning, research and content creation.", url:"https://gemini.google.com/", tags:["LLM","Google"]},
    {name:"Canva", icon:"🎨", category:"Design", desc:"Design presentations, posters, worksheets, certificates and social media content.", url:"https://www.canva.com/", tags:["Design","Teacher"]},
    {name:"ElevenLabs", icon:"🎙️", category:"Voice", desc:"AI voice and audio creation tools.", url:"https://elevenlabs.io/", tags:["Voice","Audio"]},
    {name:"ADD NEW AI TOOL", icon:"＋", category:"Future", desc:"Duplicate this item in site-data.js and paste the official link.", url:"#", tags:["Easy Add"]}
  ],

  teacherTools: [
    {name:"Lesson Plan Assistant",icon:"📘",desc:"Use a ready prompt with your preferred AI tool.",url:"#"},
    {name:"Worksheet Maker",icon:"📝",desc:"Build classroom worksheets and activities.",url:"#"},
    {name:"MCQ & Quiz Planner",icon:"✅",desc:"Create practice questions and revision sets.",url:"#"},
    {name:"Translation Assistant",icon:"🌐",desc:"Telugu • Hindi • English teaching support.",url:"#"}
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
