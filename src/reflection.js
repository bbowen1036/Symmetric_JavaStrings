const p = { x: 1, y: 3 };

const compose = (f,g) => x => f(g(x)) // curried function of reflecting x & y

const invert       = p => ({ x: p.y, y: p.x });
const xReflect = p => ({ x: p.x, y: -p.y });
const yReflect = p => ({ x: -p.x, y: p.y });
// const reflect = p => yReflect(xReflect(p));
const reflect = compose(yReflect, xReflect);

const derivedPattern = (p) => {
  return [
    (p),
    (invert(p)),
    (xReflect(invert(p))),
    (xReflect(p)),
    (reflect(p)),
    (invert(yReflect(xReflect(p)))),
    (yReflect(invert(p))),
    (yReflect(p)),
  ]
}
console.log(

  derivedPattern(p)
)

// console.log(p);
// console.log(invert(p));
// console.log(xReflect(invert(p)));
// console.log(xReflect(p));
// console.log(reflect(p));
// console.log(invert(yReflect(xReflect(p))));
// console.log(yReflect(invert(p)));
// console.log(yReflect(p));