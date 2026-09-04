/** True on Netlify deploy previews / branch deploys, not on production. */
export function isStagingDeploy(): boolean {
  return process.env.CONTEXT === "deploy-preview" || process.env.CONTEXT === "branch-deploy";
}
