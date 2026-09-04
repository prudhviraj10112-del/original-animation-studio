# Original Animation Studio

A full-stack web application for turning original stories into structured animated episode/movie productions.

## Overview

Original Animation Studio is a comprehensive production tool that guides creators through the entire animation pipeline:

```
Story → Characters → Locations → Storyboard → Animation → Audio → Timeline → Render & Export
```

## Key Features

### 1. **Story Studio**
- Create project metadata (title, genre, episode name, duration)
- Define visual style and aspect ratio
- Structure stories into acts and scenes
- Add character appearances, locations, and dialogue
- Set camera direction and atmosphere

### 2. **Character Studio**
- Create detailed character profiles with appearance and personality
- **Identity Locking**: Lock character descriptions for consistent visual generation
- Color palettes and reference images
- Voice profiles for audio generation

### 3. **Location Studio**
- Build reusable location library
- Define architecture, lighting, weather, and mood
- Lock locations for consistency
- Reference images for visual consistency

### 4. **Storyboard Studio**
- Convert stories into cinematic 15-second shots
- Define camera work, lighting, and animation instructions
- Generate AI video prompts from locked character/location data
- Track shot status: Draft → Ready → Queued → Generating → Completed

### 5. **Animation Studio**
- Video generation queue with provider-adapter architecture
- Support for multiple AI providers (initially mock)
- Status tracking for each generation job
- Render progress monitoring

### 6. **AI Prompt Engine**
- Centralized prompt builder combining:
  - Style (locked project style)
  - Characters (from Character Bible)
  - Locations (from Location Bible)
  - Shot instructions
  - Camera/lighting/motion specifications
  - Audio cues
- Generates timecoded 15-second prompts

### 7. **Audio Studio**
- Create separate tracks for dialogue, voice, music, ambient sound, and SFX
- Associate audio with storyboard shots
- Timeline-based audio management

### 8. **Master Timeline**
- Visual timeline showing all shots sequentially
- Integrated video, audio, dialogue, music, and SFX tracks
- Total episode duration display
- Shot duration markers

### 9. **Export Studio**
- Configure export settings (MP4, WebM, resolution, aspect ratio)
- Queue render jobs
- Monitor render progress

### 10. **Project Management**
- Create, save, open, duplicate, and delete projects
- Complete project persistence
- Auto-save functionality

## Tech Stack

### Frontend
- **React** - UI framework
- **Vite** - Build tool
- **JavaScript** - Language
- **CSS** - Styling with dark cinematic theme
- **Lucide React** - Icon library

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **REST API** - Communication protocol

### Database
- **SQLite/JSON** - MVP persistence (easily upgradeable to PostgreSQL)

## Project Structure

```
original-animation-studio/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── SceneCard.jsx
│   │   │   ├── CharacterCard.jsx
│   │   │   ├── LocationCard.jsx
│   │   │   ├── ShotCard.jsx
│   │   │   └── Timeline.jsx
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── StoryStudio.jsx
│   │   │   ├── CharacterStudio.jsx
│   │   │   ├── LocationStudio.jsx
│   │   │   ├── StoryboardStudio.jsx
│   │   │   ├── AnimationStudio.jsx
│   │   │   ├── AudioStudio.jsx
│   │   │   ├── Timeline.jsx
│   │   │   ├── ExportStudio.jsx
│   │   │   └── Settings.jsx
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── projectService.js
│   │   ├── hooks/
│   │   │   └── useProject.js
│   │   ├── utils/
│   │   │   ├── constants.js
│   │   │   └── helpers.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   ├── health.js
│   │   │   ├── projects.js
│   │   │   ├── story.js
│   │   │   ├── characters.js
│   │   │   ├── locations.js
│   │   │   ├── storyboard.js
│   │   │   ├── video.js
│   │   │   ├── jobs.js
│   │   │   ├── audio.js
│   │   │   └── render.js
│   │   ├── services/
│   │   │   ├── projectService.js
│   │   │   ├── promptService.js
│   │   │   ├── storyService.js
│   │   │   ├── storyboardService.js
│   │   │   ├── videoService.js
│   │   │   ├── audioService.js
│   │   │   ├── renderService.js
│   │   │   └── jobService.js
│   │   ├── providers/
│   │   │   ├── VideoProvider.js
│   │   │   ├── ImageProvider.js
│   │   │   ├── VoiceProvider.js
│   │   │   └── MockVideoProvider.js
│   │   ├── middleware/
│   │   │   ├── errorHandler.js
│   │   │   └── cors.js
│   │   ├── utils/
│   │   │   ├── database.js
│   │   │   ├── logger.js
│   │   │   └── validators.js
│   │   ├── store/
│   │   │   └── store.js
│   │   └── server.js
│   ├── package.json
│   └── .env.example
│
├── package.json
├── .gitignore
└── README.md
```

## Installation

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/prudhviraj10112-del/original-animation-studio.git
   cd original-animation-studio
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Configure environment variables**
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your configuration
   cd ..
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   This starts both frontend (http://localhost:5173) and backend (http://localhost:5000) concurrently.

## API Endpoints

### Health
- `GET /api/health` - Server health check

### Projects
- `POST /api/projects` - Create new project
- `GET /api/projects` - List all projects
- `GET /api/projects/:id` - Get project details
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Story
- `POST /api/story/generate` - Generate story structure

### Characters
- `POST /api/characters` - Create character
- `GET /api/characters/:id` - Get character
- `PUT /api/characters/:id` - Update character
- `DELETE /api/characters/:id` - Delete character

### Locations
- `POST /api/locations` - Create location
- `GET /api/locations/:id` - Get location
- `PUT /api/locations/:id` - Update location
- `DELETE /api/locations/:id` - Delete location

### Storyboard
- `POST /api/storyboard/generate` - Generate storyboard from story
- `GET /api/storyboard/:projectId` - Get storyboard shots

### Video Generation
- `POST /api/video/generate` - Queue video generation
- `GET /api/jobs` - List all jobs
- `GET /api/jobs/:id` - Get job status

### Audio
- `POST /api/audio` - Create audio track
- `GET /api/audio/:projectId` - Get audio tracks

### Render
- `POST /api/render` - Queue render job
- `GET /api/render/:id` - Get render status

## Development Workflow

### Frontend Development
```bash
cd frontend
npm run dev
```

### Backend Development
```bash
cd backend
npm run dev
```

### Building for Production
```bash
npm run build
```

## Security Considerations

- ✅ All API keys stored in `.env` (never committed)
- ✅ Provider credentials kept server-side only
- ✅ CORS configured for frontend domain
- ✅ Input validation on all API endpoints
- ✅ No sensitive data exposed to frontend

## Provider Architecture

The app uses a provider-adapter pattern for extensibility:

### Video Provider
- `MockVideoProvider` - Mock implementation (MVP)
- Future: OpenAI, Runway, Synthesia, etc.

### Image Provider
- Future: DALL-E, Midjourney, Stable Diffusion, etc.

### Voice Provider
- Future: ElevenLabs, Google Cloud TTS, etc.

Providers are configured via environment variables and can be swapped without frontend changes.

## Database

Currently uses JSON-based file storage for MVP. 

To upgrade to PostgreSQL:
1. Install `pg` package
2. Update `backend/src/utils/database.js`
3. Create migration scripts
4. Update environment variables

## Roadmap

### Phase 1 (MVP)
- [x] Project structure
- [ ] Dashboard
- [ ] Story Studio
- [ ] Character Bible with identity locking
- [ ] Location Bible
- [ ] Storyboard Studio (15-second shots)
- [ ] Animation queue (mock)
- [ ] Master Timeline
- [ ] Export configuration

### Phase 2
- [ ] Real AI provider integration
- [ ] Audio Studio
- [ ] Advanced prompt engineering
- [ ] Collaboration features

### Phase 3
- [ ] PostgreSQL migration
- [ ] User authentication
- [ ] Team workspace
- [ ] Cloud storage integration
- [ ] Advanced rendering options

## Contributing

This is an open-source project. Contributions welcome!

## License

MIT

## Support

For issues, feature requests, or questions, please open a GitHub issue.

---

**Built with ❤️ for creators**
