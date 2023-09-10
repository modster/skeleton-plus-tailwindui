

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.172660f4.js","_app/immutable/chunks/scheduler.eef617db.js","_app/immutable/chunks/index.a1ad533f.js","_app/immutable/chunks/singletons.65257f25.js","_app/immutable/chunks/index.1e8c2453.js"];
export const stylesheets = [];
export const fonts = [];
