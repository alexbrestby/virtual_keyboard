(()=>{"use strict";function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),Object.defineProperty(n,"prototype",{writable:!1}),n}console.log("hello world");var t=n((function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=n,this.age=t}));t.name="VAsia",console.dir(t)})();