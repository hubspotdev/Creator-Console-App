# Building on HubSpot's Developer Platform

Public companion repo for the training series on building real apps on HubSpot.

This repo is the audience-facing side of the project. It is meant to help developers follow the series, find episode resources, and track the build as new videos are released.


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
| 01 | Account Setup & Developer Environment | HubSpot accounts, GCP projects, CLI setup | Published | https://youtu.be/GAA7X7NhCLQ |
| 02 | Git, Governance & AI Rules | repo setup, workflow, AI-assisted development patterns | Published | https://youtu.be/u6wsjFGf3pE |

### Project Setup & Data Model

| # | Episode | Focus | Status | Resources |
|---|---------|-------|--------|-----------|
| 03 | HubSpot Project Setup & App Registration | `hsproject.json`, platform versioning, dev/prod app registration | Published | https://youtu.be/ON_HPcc6Hv8 |
| 04 | App Object Approval (with Marina Lupin) | guest walkthrough of the App Object review process | Published | https://youtu.be/b8pz4qR5f-U |
| 05 | App Object Schema Design | custom CRM schema design end-to-end | Published | https://youtu.be/JbfkzrYFarE |

### Backend & Deployment

| # | Episode | Focus | Status | Resources |
|---|---------|-------|--------|-----------|
| 06 | Firebase Scaffold & Backend Setup | Firebase project, Firestore, backend structure | Scheduled — 2026-05-08 | https://youtu.be/aELfcdILhJw |
| 07 | CI/CD: Automated Dev & Prod Deploys | GitHub Actions, deploy workflow, environment separation | Scheduled — 2026-05-14 | `ADD_LINKS` |
| 08 | Scopes, First Deployment & Approval | app scopes, first upload, approval handoff | `Planned` | `ADD_LINKS` |

### Authentication

| # | Episode | Focus | Status | Resources |
|---|---------|-------|--------|-----------|
| 09 | HubSpot OAuth Flow | HubSpot OAuth v3 implementation | `Planned` | `ADD_LINKS` |
| 10 | External OAuth & Identity Mapping | Google/YouTube OAuth and identity mapping | `Planned` | `ADD_LINKS` |

### Showcase

| # | Episode | Focus | Status | Resources |
|---|---------|-------|--------|-----------|
| 11 | AI Content Studio (In-Series Hero) | narrative payoff tying OAuth, scopes, deploy, and AI together | `Planned` | `ADD_LINKS` |

### UI Extensions

| # | Episode | Focus | Status | Resources |
|---|---------|-------|--------|-----------|
| 12 | App Home: Your App's Dashboard | native HubSpot app homepage | `Planned` | `ADD_LINKS` |
| 13 | App Settings: Configuration UI | settings UI and connection management | `Planned` | `ADD_LINKS` |
| 14 | CRM Cards: Extending Record Pages | App Cards, legacy CRM card migration | `Planned` | `ADD_LINKS` |
| 15 | Advanced Cards: Iframes & File Upload | iframe panels and advanced browser capabilities | `Planned` | `ADD_LINKS` |

### Data Synchronization

| # | Episode | Focus | Status | Resources |
|---|---------|-------|--------|-----------|
| 16 | Background Sync Engine | scheduled sync, Webhooks Journal patterns | `Planned` | `ADD_LINKS` |
| 17 | Analytics & ETag Optimization | analytics sync and efficiency patterns | `Planned` | `ADD_LINKS` |

### AI Integration

| # | Episode | Focus | Status | Resources |
|---|---------|-------|--------|-----------|
| 18 | Gemini Backend Setup | Gemini setup and structured outputs | `Planned` | `ADD_LINKS` |
| 19 | AI-Powered CRM Cards | AI-assisted suggestions inside HubSpot cards | `Planned` | `ADD_LINKS` |

### Attribution

| # | Episode | Focus | Status | Resources |
|---|---------|-------|--------|-----------|
| 20 | Campaign & Revenue Attribution | UTM tracking and ROI attribution | `Planned` | `ADD_LINKS` |

### Platform Integration

| # | Episode | Focus | Status | Resources |
|---|---------|-------|--------|-----------|
| 21 | App Events: Notifying the Ecosystem | app events and timeline patterns | `Planned` | `ADD_LINKS` |
| 22 | Workflow Actions: Automating Operations | workflow actions, Agent Tools foundation | `Planned` | `ADD_LINKS` |

### Production

| # | Episode | Focus | Status | Resources |
|---|---------|-------|--------|-----------|
| 23 | Production Readiness & Marketplace | production hardening and Marketplace listing readiness | `Planned` | `ADD_LINKS` |

### Series Close

| # | Episode | Focus | Status | Resources |
|---|---------|-------|--------|-----------|
| 24 | Genkit Flows | multi-step Genkit orchestration (series close) | `Planned` | `ADD_LINKS` |

### Advanced / Deferred

| # | Episode | Focus | Status | Resources |
|---|---------|-------|--------|-----------|
| 25 | Google Docs Sync | bidirectional Drive-webhook sync patterns | Deferred — Q4 2026 (optional) | `ADD_LINKS` |
| 26 | Agent Cards (Planner/Scriptwriter/Director) | multi-agent UI patterns in HubSpot | Deferred — Q1 2027 | `ADD_LINKS` |





## Notes For Viewers

- You do not need to build the exact same app to get value from the series.
- The point is to learn the transferable patterns behind real HubSpot app development.
- If you build your own version, copy the pattern, not the nouns.
