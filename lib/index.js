// dsh-plugin-multi-chat-windows host half.
//
// Pure UI plugin: the empty apply exists so the plugin appears in the host
// cordis composition (Loader entry / cordis.patch.yml); the browser half ships
// via exports["./client"], discovered through the package.json `dsh.client`
// declaration (same shape as @deepseek-ai/dsh-client-ui-*).
/** Host plugin body — no host-side behavior for this surface plugin. */
function apply() {}
export { apply };
