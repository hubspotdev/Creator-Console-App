const appId = () => process.env.HUBSPOT_APP_ID;

export const FirestorePaths = {
  user:             (portalId: string) => `artifacts/${appId()}/users/${portalId}`,
  users:            ()                 => `artifacts/${appId()}/users`,
  hubspotTokens:    (portalId: string) => `artifacts/${appId()}/users/${portalId}/tokens/hubspot`,
  youtubeTokens:    (portalId: string) => `artifacts/${appId()}/users/${portalId}/tokens/youtube`,
  youtubeSub:       (portalId: string) => `artifacts/${appId()}/users/${portalId}/subscriptions/youtube`,
  youtubeProfile:   (portalId: string) => `artifacts/${appId()}/users/${portalId}/profile/youtube`,
  contentStudioProject: (portalId: string, projectId: string) =>
    `contentStudio/${portalId}/projects/${projectId}`,
  contentStudioSettings: (portalId: string) =>
    `contentStudio/${portalId}/settings/config`,
};