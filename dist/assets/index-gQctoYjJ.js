(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();var A,d,J,w,q,Q,$,C={},X=[],ne=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,I=Array.isArray;function x(_,e){for(var t in e)_[t]=e[t];return _}function Y(_){var e=_.parentNode;e&&e.removeChild(_)}function oe(_,e,t){var l,n,r,i={};for(r in e)r=="key"?l=e[r]:r=="ref"?n=e[r]:i[r]=e[r];if(arguments.length>2&&(i.children=arguments.length>3?A.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(r in _.defaultProps)i[r]===void 0&&(i[r]=_.defaultProps[r]);return N(_,i,l,n,null)}function N(_,e,t,l,n){var r={type:_,props:e,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:n??++J,__i:-1,__u:0};return n==null&&d.vnode!=null&&d.vnode(r),r}function H(_){return _.children}function M(_,e){this.props=_,this.context=e}function P(_,e){if(e==null)return _.__?P(_.__,_.__i+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?P(_):null}function Z(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return Z(_)}}function z(_){(!_.__d&&(_.__d=!0)&&w.push(_)&&!U.__r++||q!==d.debounceRendering)&&((q=d.debounceRendering)||Q)(U)}function U(){var _,e,t,l,n,r,i,s,u;for(w.sort($);_=w.shift();)_.__d&&(e=w.length,l=void 0,r=(n=(t=_).__v).__e,s=[],u=[],(i=t.__P)&&((l=x({},n)).__v=n.__v+1,d.vnode&&d.vnode(l),B(i,l,n,t.__n,i.ownerSVGElement!==void 0,32&n.__u?[r]:null,s,r??P(n),!!(32&n.__u),u),l.__.__k[l.__i]=l,te(s,l,u),l.__e!=r&&Z(l)),w.length>e&&w.sort($));U.__r=0}function ee(_,e,t,l,n,r,i,s,u,f,p){var o,m,c,h,b,v=l&&l.__k||X,a=e.length;for(t.__d=u,re(t,e,v),u=t.__d,o=0;o<a;o++)(c=t.__k[o])!=null&&typeof c!="boolean"&&typeof c!="function"&&(m=c.__i===-1?C:v[c.__i]||C,c.__i=o,B(_,c,m,n,r,i,s,u,f,p),h=c.__e,c.ref&&m.ref!=c.ref&&(m.ref&&R(m.ref,null,c),p.push(c.ref,c.__c||h,c)),b==null&&h!=null&&(b=h),65536&c.__u||m.__k===c.__k?u=_e(c,u,_):typeof c.type=="function"&&c.__d!==void 0?u=c.__d:h&&(u=h.nextSibling),c.__d=void 0,c.__u&=-196609);t.__d=u,t.__e=b}function re(_,e,t){var l,n,r,i,s,u=e.length,f=t.length,p=f,o=0;for(_.__k=[],l=0;l<u;l++)(n=_.__k[l]=(n=e[l])==null||typeof n=="boolean"||typeof n=="function"?null:typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?N(null,n,null,null,n):I(n)?N(H,{children:n},null,null,null):n.constructor===void 0&&n.__b>0?N(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):n)!=null?(n.__=_,n.__b=_.__b+1,s=le(n,t,i=l+o,p),n.__i=s,r=null,s!==-1&&(p--,(r=t[s])&&(r.__u|=131072)),r==null||r.__v===null?(s==-1&&o--,typeof n.type!="function"&&(n.__u|=65536)):s!==i&&(s===i+1?o++:s>i?p>u-i?o+=s-i:o--:o=s<i&&s==i-1?s-i:0,s!==l+o&&(n.__u|=65536))):(r=t[l])&&r.key==null&&r.__e&&(r.__e==_.__d&&(_.__d=P(r)),W(r,r,!1),t[l]=null,p--);if(p)for(l=0;l<f;l++)(r=t[l])!=null&&!(131072&r.__u)&&(r.__e==_.__d&&(_.__d=P(r)),W(r,r))}function _e(_,e,t){var l,n;if(typeof _.type=="function"){for(l=_.__k,n=0;l&&n<l.length;n++)l[n]&&(l[n].__=_,e=_e(l[n],e,t));return e}return _.__e!=e&&(t.insertBefore(_.__e,e||null),e=_.__e),e&&e.nextSibling}function le(_,e,t,l){var n=_.key,r=_.type,i=t-1,s=t+1,u=e[t];if(u===null||u&&n==u.key&&r===u.type)return t;if(l>(u!=null&&!(131072&u.__u)?1:0))for(;i>=0||s<e.length;){if(i>=0){if((u=e[i])&&!(131072&u.__u)&&n==u.key&&r===u.type)return i;i--}if(s<e.length){if((u=e[s])&&!(131072&u.__u)&&n==u.key&&r===u.type)return s;s++}}return-1}function G(_,e,t){e[0]==="-"?_.setProperty(e,t??""):_[e]=t==null?"":typeof t!="number"||ne.test(e)?t:t+"px"}function T(_,e,t,l,n){var r;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof l=="string"&&(_.style.cssText=l=""),l)for(e in l)t&&e in t||G(_.style,e,"");if(t)for(e in t)l&&t[e]===l[e]||G(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in _?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+r]=t,t?l?t.u=l.u:(t.u=Date.now(),_.addEventListener(e,r?K:V,r)):_.removeEventListener(e,r?K:V,r);else{if(n)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?_.removeAttribute(e):_.setAttribute(e,t))}}function V(_){var e=this.l[_.type+!1];if(_.t){if(_.t<=e.u)return}else _.t=Date.now();return e(d.event?d.event(_):_)}function K(_){return this.l[_.type+!0](d.event?d.event(_):_)}function B(_,e,t,l,n,r,i,s,u,f){var p,o,m,c,h,b,v,a,y,k,D,S,j,L,O,g=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(u=!!(32&t.__u),r=[s=e.__e=t.__e]),(p=d.__b)&&p(e);e:if(typeof g=="function")try{if(a=e.props,y=(p=g.contextType)&&l[p.__c],k=p?y?y.props.value:p.__:l,t.__c?v=(o=e.__c=t.__c).__=o.__E:("prototype"in g&&g.prototype.render?e.__c=o=new g(a,k):(e.__c=o=new M(a,k),o.constructor=g,o.render=se),y&&y.sub(o),o.props=a,o.state||(o.state={}),o.context=k,o.__n=l,m=o.__d=!0,o.__h=[],o._sb=[]),o.__s==null&&(o.__s=o.state),g.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=x({},o.__s)),x(o.__s,g.getDerivedStateFromProps(a,o.__s))),c=o.props,h=o.state,o.__v=e,m)g.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(g.getDerivedStateFromProps==null&&a!==c&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(a,k),!o.__e&&(o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(a,o.__s,k)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(o.props=a,o.state=o.__s,o.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(E){E&&(E.__=e)}),D=0;D<o._sb.length;D++)o.__h.push(o._sb[D]);o._sb=[],o.__h.length&&i.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(a,o.__s,k),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(c,h,b)})}if(o.context=k,o.props=a,o.__P=_,o.__e=!1,S=d.__r,j=0,"prototype"in g&&g.prototype.render){for(o.state=o.__s,o.__d=!1,S&&S(e),p=o.render(o.props,o.state,o.context),L=0;L<o._sb.length;L++)o.__h.push(o._sb[L]);o._sb=[]}else do o.__d=!1,S&&S(e),p=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++j<25);o.state=o.__s,o.getChildContext!=null&&(l=x(x({},l),o.getChildContext())),m||o.getSnapshotBeforeUpdate==null||(b=o.getSnapshotBeforeUpdate(c,h)),ee(_,I(O=p!=null&&p.type===H&&p.key==null?p.props.children:p)?O:[O],e,t,l,n,r,i,s,u,f),o.base=e.__e,e.__u&=-161,o.__h.length&&i.push(o),v&&(o.__E=o.__=null)}catch(E){e.__v=null,u||r!=null?(e.__e=s,e.__u|=u?160:32,r[r.indexOf(s)]=null):(e.__e=t.__e,e.__k=t.__k),d.__e(E,e,t)}else r==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=ie(t.__e,e,t,l,n,r,i,u,f);(p=d.diffed)&&p(e)}function te(_,e,t){e.__d=void 0;for(var l=0;l<t.length;l++)R(t[l],t[++l],t[++l]);d.__c&&d.__c(e,_),_.some(function(n){try{_=n.__h,n.__h=[],_.some(function(r){r.call(n)})}catch(r){d.__e(r,n.__v)}})}function ie(_,e,t,l,n,r,i,s,u){var f,p,o,m,c,h,b,v=t.props,a=e.props,y=e.type;if(y==="svg"&&(n=!0),r!=null){for(f=0;f<r.length;f++)if((c=r[f])&&"setAttribute"in c==!!y&&(y?c.localName===y:c.nodeType===3)){_=c,r[f]=null;break}}if(_==null){if(y===null)return document.createTextNode(a);_=n?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,a.is&&a),r=null,s=!1}if(y===null)v===a||s&&_.data===a||(_.data=a);else{if(r=r&&A.call(_.childNodes),v=t.props||C,!s&&r!=null)for(v={},f=0;f<_.attributes.length;f++)v[(c=_.attributes[f]).name]=c.value;for(f in v)c=v[f],f=="children"||(f=="dangerouslySetInnerHTML"?o=c:f==="key"||f in a||T(_,f,null,c,n));for(f in a)c=a[f],f=="children"?m=c:f=="dangerouslySetInnerHTML"?p=c:f=="value"?h=c:f=="checked"?b=c:f==="key"||s&&typeof c!="function"||v[f]===c||T(_,f,c,v[f],n);if(p)s||o&&(p.__html===o.__html||p.__html===_.innerHTML)||(_.innerHTML=p.__html),e.__k=[];else if(o&&(_.innerHTML=""),ee(_,I(m)?m:[m],e,t,l,n&&y!=="foreignObject",r,i,r?r[0]:t.__k&&P(t,0),s,u),r!=null)for(f=r.length;f--;)r[f]!=null&&Y(r[f]);s||(f="value",h!==void 0&&(h!==_[f]||y==="progress"&&!h||y==="option"&&h!==v[f])&&T(_,f,h,v[f],!1),f="checked",b!==void 0&&b!==_[f]&&T(_,f,b,v[f],!1))}return _}function R(_,e,t){try{typeof _=="function"?_(e):_.current=e}catch(l){d.__e(l,t)}}function W(_,e,t){var l,n;if(d.unmount&&d.unmount(_),(l=_.ref)&&(l.current&&l.current!==_.__e||R(l,null,e)),(l=_.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(r){d.__e(r,e)}l.base=l.__P=null,_.__c=void 0}if(l=_.__k)for(n=0;n<l.length;n++)l[n]&&W(l[n],e,t||typeof _.type!="function");t||_.__e==null||Y(_.__e),_.__=_.__e=_.__d=void 0}function se(_,e,t){return this.constructor(_,t)}function fe(_,e,t){var l,n,r,i;d.__&&d.__(_,e),n=(l=typeof t=="function")?null:t&&t.__k||e.__k,r=[],i=[],B(e,_=(!l&&t||e).__k=oe(H,null,[_]),n||C,C,e.ownerSVGElement!==void 0,!l&&t?[t]:n?null:e.firstChild?A.call(e.childNodes):null,r,!l&&t?t:n?n.__e:e.firstChild,l,i),te(r,_,i)}A=X.slice,d={__e:function(_,e,t,l){for(var n,r,i;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(_)),i=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(_,l||{}),i=n.__d),i)return n.__E=n}catch(s){_=s}throw _}},J=0,M.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof _=="function"&&(_=_(x({},t),this.props)),_&&x(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),z(this))},M.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),z(this))},M.prototype.render=H,w=[],Q=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,$=function(_,e){return _.__v.__b-e.__v.__b},U.__r=0;var ce=0;function F(_,e,t,l,n,r){var i,s,u={};for(s in e)s=="ref"?i=e[s]:u[s]=e[s];var f={type:_,props:u,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--ce,__i:-1,__u:0,__source:n,__self:r};if(typeof _=="function"&&(i=_.defaultProps))for(s in i)u[s]===void 0&&(u[s]=i[s]);return d.vnode&&d.vnode(f),f}function ue(){return F("div",{className:"w-[450px] h-[600px] flex flex-col border border-300 fixed bottom-0 right-20",children:F("h1",{className:"font-bold w-full text-center",children:"CHAT"})})}fe(F(ue,{}),document.getElementById("app"));
