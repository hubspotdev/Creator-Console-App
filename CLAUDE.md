# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working on this project.

IMPORTANT: IF THE 'HubSpotDev' MCP SERVER IS INSTALLED, USE ITS TOOLS BEFORE TRYING TO USE CLI COMMANDS OR MANUALLY INTERACT WITH HUBSPOT ASSETS.

@docs/ai-rules/hubspot-platform.md
@docs/ai-rules/firebase-backend.md
@docs/ai-rules/admin.md

---

## Project Overview

Creator Console is a HubSpot app that bridges YouTube analytics with HubSpot CRM, enabling marketers to track video performance alongside business outcomes.

**Architecture**: HubSpot UI Extensions (frontend) + Firebase Cloud Functions (backend)

## Project Structure

```
creator-console/
├── app/                        # HubSpot app source
│   ├── app.functions/          # Serverless functions
│   ├── cards/                  # UI Extension cards
│   ├── settings/               # App settings page
│   └── app-events/             # App event definitions
├── functions/                  # Firebase Cloud Functions (backend)
├── docs/
│   ├── ai-rules/               # AI assistant rule files (imported above)
│   ├── templates/              # Starter templates for viewers
│   ├── v2/walkthrough/         # Step-by-step tutorial docs
│   ├── ROADMAP.md
│   ├── SYSTEM_DEPENDENCIES.md
│   ├── CHANGELOG.md
│   ├── REQUESTS.md
│   └── GOTCHAS.md              # Platform quirks and hard-won lessons
├── hsproject.json              # HubSpot project config
└── firebase.json               # Firebase config

