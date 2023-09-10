

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.4c1fce44.js","_app/immutable/chunks/scheduler.eef617db.js","_app/immutable/chunks/index.a1ad533f.js","_app/immutable/chunks/PositionMesh.e56c3b8b.js","_app/immutable/chunks/index.1e8c2453.js"];
export const stylesheets = ["_app/immutable/assets/PositionMesh.2388fa67.css"];
export const fonts = [];
