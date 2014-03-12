var Handlebars=function(){var u=function(){function f(l){this.string=l}f.prototype.toString=function(){return""+this.string};return f}(),r=function(f){function l(b){return n[b]||"&amp;"}var d={},n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},g=/[&<>"'`]/g,k=/[&<>"'`]/;d.extend=function(b,h){for(var a in h)Object.prototype.hasOwnProperty.call(h,a)&&(b[a]=h[a])};var e=Object.prototype.toString;d.toString=e;var m=function(b){return"function"===typeof b};m(/x/)&&(m=function(b){return"function"===
typeof b&&"[object Function]"===e.call(b)});d.isFunction=m;var q=Array.isArray||function(b){return b&&"object"===typeof b?"[object Array]"===e.call(b):!1};d.isArray=q;d.escapeExpression=function(b){if(b instanceof f)return b.toString();if(!b&&0!==b)return"";b=""+b;return k.test(b)?b.replace(g,l):b};d.isEmpty=function(b){return b||0===b?q(b)&&0===b.length?!0:!1:!0};return d}(u),s=function(){function f(d,f){var g;f&&f.firstLine&&(g=f.firstLine,d+=" - "+g+":"+f.firstColumn);for(var k=Error.prototype.constructor.call(this,
d),e=0;e<l.length;e++)this[l[e]]=k[l[e]];g&&(this.lineNumber=g,this.column=f.firstColumn)}var l="description fileName lineNumber message name number stack".split(" ");f.prototype=Error();return f}(),w=function(f,l){function d(b,c){this.helpers=b||{};this.partials=c||{};n(this)}function n(a){a.registerHelper("helperMissing",function(c){if(2!==arguments.length)throw new m("Missing helper: '"+c+"'");});a.registerHelper("blockHelperMissing",function(c,t){var h=t.inverse||function(){},m=t.fn;b(c)&&(c=
c.call(this));return!0===c?m(this):!1===c||null==c?h(this):q(c)?0<c.length?a.helpers.each(c,t):h(this):m(c)});a.registerHelper("each",function(c,a){var h=a.fn,m=a.inverse,p=0,e="",f;b(c)&&(c=c.call(this));a.data&&(f=v(a.data));if(c&&"object"===typeof c)if(q(c))for(var d=c.length;p<d;p++)f&&(f.index=p,f.first=0===p,f.last=p===c.length-1),e+=h(c[p],{data:f});else for(d in c)c.hasOwnProperty(d)&&(f&&(f.key=d,f.index=p,f.first=0===p),e+=h(c[d],{data:f}),p++);0===p&&(e=m(this));return e});a.registerHelper("if",
function(c,a){b(c)&&(c=c.call(this));return!a.hash.includeZero&&!c||e.isEmpty(c)?a.inverse(this):a.fn(this)});a.registerHelper("unless",function(c,b){return a.helpers["if"].call(this,c,{fn:b.inverse,inverse:b.fn,hash:b.hash})});a.registerHelper("with",function(c,a){b(c)&&(c=c.call(this));if(!e.isEmpty(c))return a.fn(c)});a.registerHelper("log",function(c,b){var h=b.data&&null!=b.data.level?parseInt(b.data.level,10):1;a.log(h,c)})}function g(b,c){a.log(b,c)}var k={},e=f,m=l;k.VERSION="1.3.0";k.COMPILER_REVISION=
4;k.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};var q=e.isArray,b=e.isFunction,h=e.toString;k.HandlebarsEnvironment=d;d.prototype={constructor:d,logger:a,log:g,registerHelper:function(a,c,b){if("[object Object]"===h.call(a)){if(b||c)throw new m("Arg not supported with multiple helpers");e.extend(this.helpers,a)}else b&&(c.not=b),this.helpers[a]=c},registerPartial:function(a,c){"[object Object]"===h.call(a)?e.extend(this.partials,a):this.partials[a]=c}};var a=
{methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(b,c){if(a.level<=b){var h=a.methodMap[b];"undefined"!==typeof console&&console[h]&&console[h].call(console,c)}}};k.logger=a;k.log=g;var v=function(a){var c={};e.extend(c,a);return c};k.createFrame=v;return k}(r,s),x=function(f,l,d){function n(f,e,b){var h=function(a,h){h=h||{};return e(a,h.data||b)};h.program=f;h.depth=0;return h}var g={},k=d.COMPILER_REVISION,e=d.REVISION_CHANGES;g.checkRevision=
function(f){var d=f&&f[0]||1;if(d!==k){if(d<k)throw new l("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+e[k]+") or downgrade your runtime to an older version ("+e[d]+").");throw new l("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+f[1]+").");}};g.template=function(e,d){if(!d)throw new l("No environment passed to template");
var b={escapeExpression:f.escapeExpression,invokePartial:function(b,a,f,e,c,m){var g=d.VM.invokePartial.apply(this,arguments);if(null!=g)return g;if(d.compile)return g={helpers:e,partials:c,data:m},c[a]=d.compile(b,{data:void 0!==m},d),c[a](f,g);throw new l("The partial "+a+" could not be compiled when running in runtime-only mode");},programs:[],program:function(b,a,f){var d=this.programs[b];f?d=n(b,a,f):d||(d=this.programs[b]=n(b,a));return d},merge:function(b,a){var d=b||a;b&&a&&b!==a&&(d={},f.extend(d,
a),f.extend(d,b));return d},programWithDepth:d.VM.programWithDepth,noop:d.VM.noop,compilerInfo:null};return function(f,a){a=a||{};var g=a.partial?a:d,k,c;a.partial||(k=a.helpers,c=a.partials);g=e.call(b,g,f,k,c,a.data);a.partial||d.VM.checkRevision(b.compilerInfo);return g}};g.programWithDepth=function(d,f,b){var e=Array.prototype.slice.call(arguments,3),a=function(a,d){d=d||{};return f.apply(this,[a,d.data||b].concat(e))};a.program=d;a.depth=e.length;return a};g.program=n;g.invokePartial=function(d,
f,b,e,a,g){e={partial:!0,helpers:e,partials:a,data:g};if(void 0===d)throw new l("The partial "+f+" could not be found");if(d instanceof Function)return d(b,e)};g.noop=function(){return""};return g}(r,s,w);return function(f,l,d,n,g){var k=function(){var e=new f.HandlebarsEnvironment;n.extend(e,f);e.SafeString=l;e.Exception=d;e.Utils=n;e.VM=g;e.template=function(d){return g.template(d,e)};return e},e=k();e.create=k;return e}(w,u,s,r,x)}();