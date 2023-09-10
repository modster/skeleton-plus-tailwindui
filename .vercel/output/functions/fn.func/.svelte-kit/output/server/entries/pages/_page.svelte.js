import { n as noop, i as assign, j as identity, s as setContext, f as getContext, c as create_ssr_component, h as compute_rest_props, d as subscribe, v as validate_component, k as each } from "../../chunks/ssr.js";
import { t as tick, p as createRawEventDispatcher, G as Group, o as useFrame, f as forwardEventHandlers, T } from "../../chunks/PositionMesh.js";
import { w as writable } from "../../chunks/index.js";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
function quadInOut(t) {
  t /= 0.5;
  if (t < 1)
    return 0.5 * t * t;
  t--;
  return -0.5 * (t * (t - 2) - 1);
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = identity,
      interpolate = get_interpolator
    } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
function injectPlugin(nameOrNamedPlugin, maybePlugin) {
  const contextName = "threlte-plugin-context";
  if (Array.isArray(nameOrNamedPlugin)) {
    const [name, plugin] = nameOrNamedPlugin;
    setContext(contextName, {
      ...getContext(contextName),
      [name]: plugin
    });
  } else {
    const name = nameOrNamedPlugin;
    const plugin = maybePlugin;
    if (!plugin)
      return;
    setContext(contextName, {
      ...getContext(contextName),
      [name]: plugin
    });
  }
}
const isObject3D = (object) => object.isObject3D;
const injectAlignPlugin = (align) => {
  injectPlugin("align-plugin", ({ ref }) => {
    if (!isObject3D(ref))
      return;
    const waitForTickAndAlign = async () => {
      await tick();
      align();
    };
    return {
      onRefChange() {
        waitForTickAndAlign();
      }
    };
  });
};
const Align = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["x", "y", "z", "precise", "auto", "autoCenter", "calculate", "align"]);
  let $component, $$unsubscribe_component;
  let { x = 0 } = $$props;
  let { y = 0 } = $$props;
  let { z = 0 } = $$props;
  let { precise = false } = $$props;
  let { auto = false } = $$props;
  let { autoCenter = false } = $$props;
  createRawEventDispatcher();
  const containerGroup = new Group();
  const innerGroup = new Group();
  const outerGroup = new Group();
  const calculate = () => {
    return;
  };
  const { start: scheduleAligning, stop } = useFrame(
    ({ invalidate }) => {
      invalidate();
      stop();
    },
    { autostart: false, invalidate: false }
  );
  const align = () => {
    scheduleAligning();
  };
  if (auto || autoCenter)
    injectAlignPlugin(scheduleAligning);
  const component = forwardEventHandlers();
  $$unsubscribe_component = subscribe(component, (value) => $component = value);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.z === void 0 && $$bindings.z && z !== void 0)
    $$bindings.z(z);
  if ($$props.precise === void 0 && $$bindings.precise && precise !== void 0)
    $$bindings.precise(precise);
  if ($$props.auto === void 0 && $$bindings.auto && auto !== void 0)
    $$bindings.auto(auto);
  if ($$props.autoCenter === void 0 && $$bindings.autoCenter && autoCenter !== void 0)
    $$bindings.autoCenter(autoCenter);
  if ($$props.calculate === void 0 && $$bindings.calculate && calculate !== void 0)
    $$bindings.calculate(calculate);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      scheduleAligning();
    }
    $$rendered = `${validate_component(T, "T").$$render(
      $$result,
      Object.assign({}, { is: containerGroup }, $$restProps, { this: $component }),
      {
        this: ($$value) => {
          $component = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ ref }) => {
          return `${validate_component(T, "T").$$render($$result, { is: outerGroup }, {}, {
            default: () => {
              return `${validate_component(T, "T").$$render($$result, { is: innerGroup }, {}, {
                default: () => {
                  return `${slots.default ? slots.default({
                    align: scheduleAligning,
                    center: scheduleAligning,
                    ref
                  }) : ``}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_component();
  return $$rendered;
});
const Center = Align;
function normalize(count, base = 4, offset = 2) {
  switch (true) {
    case count === 0:
      return base;
    case count > 40:
      return count;
    default:
      return count * (base + offset);
  }
}
function getColor(level) {
  switch (level) {
    case 0:
      return "#0e0e0e";
    case 1:
      return "#00442a";
    case 2:
      return "#006d35";
    case 3:
      return "#00a648";
    case 4:
      return "#00d35c";
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $scaleY, $$unsubscribe_scaleY;
  let contributions = [];
  const scaleY = tweened(0, { duration: 2e3, easing: quadInOut });
  $$unsubscribe_scaleY = subscribe(scaleY, (value) => $scaleY = value);
  $$unsubscribe_scaleY();
  return ` ${validate_component(T.DirectionalLight, "T.DirectionalLight").$$render(
    $$result,
    {
      position: [0, 200, 200],
      intensity: 2,
      color: "#fff"
    },
    {},
    {}
  )} ${validate_component(T.AmbientLight, "T.AmbientLight").$$render($$result, { color: "#fff", intensity: 0.4 }, {}, {})} ${validate_component(T.DirectionalLight, "T.DirectionalLight").$$render(
    $$result,
    {
      position: [0, 200, -200],
      color: "#fff",
      intensity: 2
    },
    {},
    {}
  )} ${validate_component(Center, "Center").$$render($$result, { autoCenter: true, "position.y": 0 }, {}, {
    default: () => {
      return `${each(contributions, (row, i) => {
        return `${each(row, (day, j) => {
          return `${day ? (() => {
            let color = getColor(day.level), y = normalize(day.count);
            return `  ${validate_component(T.Group, "T.Group").$$render(
              $$result,
              {
                position: [0, 0, 12 * i],
                "scale.y": $scaleY
              },
              {},
              {
                default: () => {
                  return `${validate_component(T.Mesh, "T.Mesh").$$render($$result, { position: [12 * j, day.count / 2, 0] }, {}, {
                    default: () => {
                      return `${validate_component(T.BoxGeometry, "T.BoxGeometry").$$render($$result, { args: [10, y, 10] }, {}, {})} ${validate_component(T.BoxGeometry, "T.BoxGeometry").$$render($$result, { args: [10, day.count, 10] }, {}, {})} ${validate_component(T.MeshStandardMaterial, "T.MeshStandardMaterial").$$render($$result, { color }, {}, {})} `;
                    }
                  })} `;
                }
              }
            )}`;
          })() : ``}`;
        })}`;
      })}`;
    }
  })}`;
});
export {
  Page as default
};
