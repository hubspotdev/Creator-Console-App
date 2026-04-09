# Firebase Backend Rules

## Architecture
- All backend logic lives in `functions/` — Firebase Cloud Functions
- HubSpot cards and settings pages never call external APIs directly; they call Firebase functions via `hubspot.fetch()`
- Firestore is the primary database for tokens, sync state, and cached data

## MCP Server
- If the Google/Firebase MCP server is available, use its tools before running Firebase CLI commands manually

## Secrets and Credentials
- Never hardcode API keys or secrets in function code
- Use Firebase environment config or Secret Manager for all sensitive values
- Service account keys (`service-account-key.json`, `*-credentials.json`) must never be committed — they are in `.gitignore`

## Functions Structure
- Functions live in `functions/src/`
- Each major feature area should have its own module (e.g., `auth/`, `sync/`, `youtube/`)
- Export all functions from `functions/src/index.ts`

## Firestore
- Use subcollections to scope data by portal ID: `portals/{portalId}/...`
- Never store OAuth tokens in plaintext — encrypt or use Secret Manager

## General
- This section will grow as the Firebase backend is built out in Videos 4–6
