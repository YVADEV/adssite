/** True when deployed to Netlify preview/staging (*.netlify.app), not production domain. */
export function isStagingDeploy(): boolean {
  const deployUrl =
    process.env.URL ??
    process.env.DEPLOY_PRIME_URL ??
    process.env.DEPLOY_URL ??
    "";

  return (
    deployUrl.includes("netlify.app") ||
    process.env.CONTEXT === "deploy-preview" ||
    process.env.CONTEXT === "branch-deploy"
  );
}
