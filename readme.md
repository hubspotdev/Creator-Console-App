# Building on HubSpot's Developer Platform

Public companion repo for the training series on building real apps on HubSpot.

This repo is the audience-facing side of the project. It is meant to help developers follow the series, find episode resources, and track the build as new videos are released.

> Replace the placeholders in this file before publishing.

## What This Series Is

This series shows how to build a real-world HubSpot app from scratch using:

- HubSpot App Objects
- UI Extensions and CRM cards
- App Home and settings pages
- HubSpot OAuth and external OAuth
- Firebase Cloud Functions and Firestore
- background sync and analytics
- workflow actions and app events
- Genkit and Gemini-powered AI features

The example app is **Creator Console**: a HubSpot app that connects YouTube workflows, CRM data, automation, and AI-assisted content operations.

## Who This Is For

- HubSpot developers who want real end-to-end patterns
- React or Firebase developers who want to learn the HubSpot platform
- technical marketers who want to understand how HubSpot apps are built
- builders who prefer a full project over disconnected demos

## What You’ll Learn

By following this series, you’ll learn how to:

- set up a proper HubSpot developer environment
- model custom CRM data with App Objects
- build native HubSpot UI experiences
- connect HubSpot to external APIs and OAuth providers
- ship a backend for HubSpot apps with Firebase
- automate sync, workflows, and events
- layer in AI only where it actually helps

## How To Use This Repo

There are a few good ways to use this repository:

1. Watch each episode and follow along from the matching resources.
2. Jump straight to a topic you care about, like App Objects, OAuth, CRM cards, or workflow actions.
3. Use the episode tracker below to see what is already published and what is coming next.

If this repo includes code snapshots or tags, check out the matching episode state before you begin.

## Links

- YouTube playlist: `https://www.youtube.com/playlist?list=PLTGNq2fWP3b0enpgcQdXFN6VlI1L_L6lD`
- Main channel: `https://www.youtube.com/@HubSpotDevelopers`
- HubSpot developer docs: [developers.hubspot.com](https://developers.hubspot.com/docs)
- Firebase docs: [firebase.google.com/docs](https://firebase.google.com/docs)

## Series Structure

### Foundation

| # | Episode | Focus | Status | Resources |
|---|---------|-------|--------|-----------|
| 01 | Account Setup & Developer Environment | HubSpot accounts, GCP projects, CLI setup | Published | `https://youtu.be/GAA7X7NhCLQ` |
| 02 | Git, Governance & AI Rules | repo setup, workflow, AI-assisted development patterns | `Planned` | `ADD_LINKS` |

### Data Model

| # | Episode | Focus | Status | Resources |
|---|---------|-------|--------|-----------|
| 03 | App Objects: Defining Custom CRM Data | custom CRM schema and approval prep | `Planned` | `ADD_LINKS` |
| 04 | Firebase Scaffold & Backend Setup | Firebase project, Firestore, backend structure | `Planned` | `ADD_LINKS` |
| 05 | CI/CD: Automated Dev & Prod Deploys | GitHub Actions, deploy workflow, environment separation | `Planned` | `ADD_LINKS` |
| 06 | Scopes, First Deployment & Approval | app scopes, first upload, approval handoff | `Planned` | `ADD_LINKS` |

### Authentication

| # | Episode | Focus | Status | Resources |
|---|---------|-------|--------|-----------|
| 07 | HubSpot OAuth Flow | HubSpot OAuth implementation | `Planned` | `ADD_LINKS` |
| 08 | External OAuth & Identity Mapping | Google/YouTube OAuth and identity mapping | `Planned` | `ADD_LINKS` |

### UI Extensions

| # | Episode | Focus | Status | Resources |
|---|---------|-------|--------|-----------|
| 09 | App Home: Your App's Dashboard | native HubSpot app homepage | `Planned` | `ADD_LINKS` |
| 10 | App Settings: Configuration UI | settings UI and connection management | `Planned` | `ADD_LINKS` |
| 11 | CRM Cards: Extending Record Pages | custom record cards and data display | `Planned` | `ADD_LINKS` |
| 12 | Advanced Cards: Iframes & File Upload | iframe panels and advanced browser capabilities | `Planned` | `ADD_LINKS` |

### Data Synchronization

| # | Episode | Focus | Status | Resources |
|---|---------|-------|--------|-----------|
| 13 | Background Sync Engine | scheduled sync and data refresh patterns | `Planned` | `ADD_LINKS` |
| 14 | Analytics & ETag Optimization | analytics sync and efficiency patterns | `Planned` | `ADD_LINKS` |

### AI Integration

| # | Episode | Focus | Status | Resources |
|---|---------|-------|--------|-----------|
| 15 | Gemini Backend Setup | Gemini setup and structured outputs | `Planned` | `ADD_LINKS` |
| 16 | AI-Powered CRM Cards | AI-assisted suggestions inside HubSpot cards | `Planned` | `ADD_LINKS` |

### Attribution

| # | Episode | Focus | Status | Resources |
|---|---------|-------|--------|-----------|
| 17 | Campaign & Revenue Attribution | UTM tracking and ROI attribution | `Planned` | `ADD_LINKS` |

### Platform Integration

| # | Episode | Focus | Status | Resources |
|---|---------|-------|--------|-----------|
| 18 | App Events: Notifying the Ecosystem | app events and timeline patterns | `Planned` | `ADD_LINKS` |
| 19 | Workflow Actions: Automating Operations | workflow actions and automation hooks | `Planned` | `ADD_LINKS` |

### Production

| # | Episode | Focus | Status | Resources |
|---|---------|-------|--------|-----------|
| 20 | Production Readiness & Marketplace | production hardening and marketplace readiness | `Planned` | `ADD_LINKS` |

### Advanced / Optional

| # | Episode | Focus | Status | Resources |
|---|---------|-------|--------|-----------|
| 21 | Genkit Flows | multi-step Genkit flows | `Planned` | `ADD_LINKS` |
| 22 | Google Docs Sync | Google Docs integration and sync patterns | `Planned` | `ADD_LINKS` |
| 23 | Agent Cards (Planner/Scriptwriter/Director) | multi-agent UI patterns in HubSpot | `Planned` | `ADD_LINKS` |

## Recommended Release Workflow

Each time you release an episode:

1. change that episode status from `Planned` to `Published`
2. add the live YouTube link in `Resources`
3. add any matching docs, branch, tag, or code snapshot links
4. update the short summary below if the public repo has meaningful new assets

## Published Now

Use this section for the currently live entry points.

- `ADD_EPISODE_01_LINK`
- `ADD_EPISODE_02_LINK`
- `ADD_HERO_VIDEO_LINK`

## Repo Contents

You can tune this section based on what you actually publish in the public repo.

- walkthrough notes
- code snapshots or tags by episode
- starter templates
- reference configs
- episode-specific assets

## Notes For Viewers

- You do not need to build the exact same app to get value from the series.
- The point is to learn the transferable patterns behind real HubSpot app development.
- If you build your own version, copy the pattern, not the nouns.

## License

`ADD_LICENSE`

## Maintainer Notes

Delete this section before publishing if you want a cleaner public README.

- Replace `ADD_*` placeholders.
- If you do not plan to expose all 23 episodes upfront, trim the tracker to only the currently announced scope.
- If the public repo contains episode branches or tags, add them in the `Resources` column.
