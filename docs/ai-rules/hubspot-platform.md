# HubSpot Platform Rules

## Project Configuration
- Project config lives in `hsproject.json`
- Platform version is set in `platformVersion` — this controls available features and config file shapes
- A directory is part of the project if it or a parent contains `hsproject.json`

## Component Rules

### Directory Structure
| Component | Required Directory |
|-----------|-------------------|
| `app` | `app/` (one only) |
| `card` | `app/cards/` |
| `settings` | `app/settings/` (one only) |
| `app-function` | `app/app.functions/` |
| `app-event` | `app/app-events/` |
| `app-object` | `app/app-object/` |
| `workflow-action` | `app/workflow-actions/` |
| `scim` | `app/scim/` (one only) |
| `webhooks` | `app/webhooks/` (one only) |

- Components cannot be in nested subdirectories
- The `uid` in every `-hsmeta.json` must be unique within the project
- `app-function` components are not available when `config.distribution` is `marketplace`

### Cards and Settings
- `window` object is NOT available — do not use it
- Do NOT use `window.fetch` — use `hubspot.fetch()` instead
- Only components from `@hubspot/ui-extensions` can be used
- React components from `@hubspot/ui-extensions/crm` cannot be used in `settings`

### hubspot.fetch()
- Requires fully qualified HTTPS URLs — relative paths are NOT supported
- Every URL called must be listed in `permittedUrls.fetch` in the app's `*-hsmeta.json`:
  ```json
  "permittedUrls": {
    "fetch": ["https://your-api.example.com"],
    "iframe": [],
    "img": []
  }
  ```
- `localhost` URLs are not valid — use `local.json` proxy for local development

## Local Development

### Dev Server
- `hs project dev` starts a local server that syncs changes to HubSpot in real-time
- Cards and settings pages show a "Developing locally" tag when the server is running
- Saving JSX files automatically refreshes the page

### Local Proxy (`local.json`)
- Create `local.json` in the same directory as your `*-hsmeta.json` to proxy fetch calls to a local backend:
  ```json
  {
    "proxy": {
      "https://your-api.example.com": "http://localhost:8080"
    }
  }
  ```
- Path-based routing is NOT supported (only domain-level mapping)
- To disable: rename to `local.json.bak` and restart the dev server

### Request Signing
- Inject `CLIENT_SECRET` when starting the dev server to enable request signing:
  ```bash
  CLIENT_SECRET="your-secret" hs project dev
  ```
