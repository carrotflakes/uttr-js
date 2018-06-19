# uttr-js
Uttr-js is an altjs.

Language specification is [here](https://github.com/carrotflakes/uttr).

# Usage with webpack and uttr-loader

You can use [uttr-loader](https://github.com/carrotflakes/uttr-loader) as webpack loader.

foo.uttr:
``` foo.uttr
bar(x) = x + 1
```

index.js:
``` index.js
const {bar} = require('foo.uttr');
console.log(bar(1)); // => 2
```
