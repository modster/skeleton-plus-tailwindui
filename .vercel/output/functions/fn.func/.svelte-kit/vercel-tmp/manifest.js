export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Quicksand.ttf"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.0cbcff99.js","app":"_app/immutable/entry/app.6318e10a.js","imports":["_app/immutable/entry/start.0cbcff99.js","_app/immutable/chunks/scheduler.eef617db.js","_app/immutable/chunks/singletons.65257f25.js","_app/immutable/chunks/index.1e8c2453.js","_app/immutable/entry/app.6318e10a.js","_app/immutable/chunks/scheduler.eef617db.js","_app/immutable/chunks/index.a1ad533f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
