/*!
 *  GMAP3 Plugin for JQuery 
 *  Version   : 5.0b
 *  Date      : 2012-11-17
 *  Licence   : GPL v3 : http://www.gnu.org/licenses/gpl.html  
 *  Author    : DEMONTE Jean-Baptiste
 *  Contact   : jbdemonte@gmail.com
 *  Web site  : http://gmap3.net
 */
(function(e,t){function i(){n||(n={verbose:!1,queryLimit:{attempt:5,delay:250,random:250},classes:{Map:google.maps.Map,Marker:google.maps.Marker,InfoWindow:google.maps.InfoWindow,Circle:google.maps.Circle,Rectangle:google.maps.Rectangle,OverlayView:google.maps.OverlayView,StreetViewPanorama:google.maps.StreetViewPanorama,KmlLayer:google.maps.KmlLayer,TrafficLayer:google.maps.TrafficLayer,BicyclingLayer:google.maps.BicyclingLayer,GroundOverlay:google.maps.GroundOverlay,StyledMapType:google.maps.StyledMapType,ImageMapType:google.maps.ImageMapType},map:{mapTypeId:google.maps.MapTypeId.ROADMAP,center:[46.578498,2.457275],zoom:2},overlay:{pane:"floatPane",content:"",offset:{x:0,y:0}},geoloc:{getCurrentPosition:{maximumAge:6e4,timeout:5e3}}})}function s(e,n){return e!==t?e:"gmap3_"+(n?r+1:++r)}function o(t,n,r,i,s){if(n.todo.events||n.todo.onces)var o={id:i,data:n.todo.data,tag:n.todo.tag};n.todo.events&&e.each(n.todo.events,function(e,n){google.maps.event.addListener(r,e,function(e){n.apply(t,[s?s:r,e,o])})}),n.todo.onces&&e.each(n.todo.onces,function(e,n){google.maps.event.addListenerOnce(r,e,function(e){n.apply(t,[s?s:r,e,o])})})}function u(){var e=[];this.empty=function(){return!e.length},this.add=function(t){e.push(t)},this.get=function(){return e.length?e[0]:!1},this.ack=function(){e.shift()}}function a(t,r,i){function f(e){var t={};return t[e]={},t}function l(){var e;for(e in i){if(e in s)continue;return e}}var s={},o=this,u,a={latLng:{map:!1,marker:!1,infowindow:!1,circle:!1,overlay:!1,getlatlng:!1,getmaxzoom:!1,getelevation:!1,streetviewpanorama:!1,getaddress:!0},geoloc:{getgeoloc:!0}};typeof i=="string"&&(i=f(i)),this.run=function(){var o,f;while(o=l()){if(typeof t[o]=="function"){u=o,f=e.extend(!0,{},n[o]||{},i[o].options||{}),o in a.latLng?i[o].values?M(i[o].values,t,t[o],{todo:i[o],opts:f,session:s}):O(t,t[o],a.latLng[o],{todo:i[o],opts:f,session:s}):o in a.geoloc?_(t,t[o],{todo:i[o],opts:f,session:s}):t[o].apply(t,[{todo:i[o],opts:f,session:s}]);return}s[o]=null}r.apply(t,[i,s])},this.ack=function(e){s[u]=e,o.run.apply(o,[])}}function f(e){var t,n=[];for(t in e)n.push(t);return n}function l(t,n){var r={};if(t.todo)for(var i in t.todo)i!=="options"&&i!=="values"&&(r[i]=t.todo[i]);var s,o=["data","tag","id","events","onces"];for(s=0;s<o.length;s++)c(r,o[s],n,t.todo);return r.options=e.extend({},t.todo.options||{},n.options||{}),r}function c(e,t){for(var n=2;n<arguments.length;n++)if(t in arguments[n]){e[t]=arguments[n][t];return}}function h(){var e=[];this.get=function(t){if(e.length){var n,r,i,s,o,u=f(t);for(n=0;n<e.length;n++){s=e[n],o=u.length==s.keys.length;for(r=0;r<u.length&&o;r++)i=u[r],o=i in s.request,o&&(typeof t[i]=="object"&&"equals"in t[i]&&typeof t[i]=="function"?o=t[i].equals(s.request[i]):o=t[i]===s.request[i]);if(o)return s.results}}},this.store=function(t,n){e.push({request:t,keys:f(t),results:n})}}function p(t,r,i,s){var o=this,u=[];n.classes.OverlayView.call(this),this.setMap(t),this.onAdd=function(){var t=this.getPanes();r.pane in t&&e(t[r.pane]).append(s),e.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "),function(t,n){u.push(google.maps.event.addDomListener(s[0],n,function(t){e.Event(t).stopPropagation(),google.maps.event.trigger(o,n,[t])}))}),u.push(google.maps.event.addDomListener(s[0],"contextmenu",function(t){e.Event(t).stopPropagation(),google.maps.event.trigger(o,"rightclick",[t])})),this.draw()},this.getPosition=function(){return i},this.draw=function(){this.draw=function(){var e=this.getProjection().fromLatLngToDivPixel(i);s.css("left",e.x+r.offset.x+"px").css("top",e.y+r.offset.y+"px")}},this.onRemove=function(){for(var e=0;e<u.length;e++)google.maps.event.removeListener(u[e]);s.remove()},this.hide=function(){s.hide()},this.show=function(){s.show()},this.toggle=function(){s&&(s.is(":visible")?this.show():this.hide())},this.toggleDOM=function(){this.getMap()?this.setMap(null):this.setMap(t)},this.getDOMElement=function(){return s[0]}}function d(e){function t(){return this.onAdd=function(){},this.onRemove=function(){},this.draw=function(){},n.classes.OverlayView.apply(this,[])}t.prototype=n.classes.OverlayView.prototype;var r=new t;return r.setMap(e),r}function v(n,r,i,u){function k(){x=E.getProjection();if(!x){setTimeout(function(){k.apply(p,[])},25);return}c=!0,v.push(google.maps.event.addListener(r,"zoom_changed",function(){_()})),v.push(google.maps.event.addListener(r,"bounds_changed",function(){_()})),P()}function L(e){typeof m[e]=="object"?(typeof m[e].obj.setMap=="function"&&m[e].obj.setMap(null),typeof m[e].obj.remove=="function"&&m[e].obj.remove(),typeof m[e].shadow.remove=="function"&&m[e].obj.remove(),typeof m[e].shadow.setMap=="function"&&m[e].shadow.setMap(null),delete m[e].obj,delete m[e].shadow):y[e]&&y[e].setMap(null),delete m[e]}function A(){var e,t,n,r,i,s,o,u;return arguments[0]instanceof google.maps.LatLng?(e=arguments[0].lat(),n=arguments[0].lng(),arguments[1]instanceof google.maps.LatLng?(t=arguments[1].lat(),r=arguments[1].lng()):(t=arguments[1],r=arguments[2])):(e=arguments[0],n=arguments[1],arguments[2]instanceof google.maps.LatLng?(t=arguments[2].lat(),r=arguments[2].lng()):(t=arguments[2],r=arguments[3])),i=Math.PI*e/180,s=Math.PI*n/180,o=Math.PI*t/180,u=Math.PI*r/180,6371e3*Math.acos(Math.min(Math.cos(i)*Math.cos(o)*Math.cos(s)*Math.cos(u)+Math.cos(i)*Math.sin(s)*Math.cos(o)*Math.sin(u)+Math.sin(i)*Math.sin(o),1))}function O(){var e=A(r.getCenter(),r.getBounds().getNorthEast()),t=new google.maps.Circle({center:r.getCenter(),radius:1.25*e});return t.getBounds()}function M(){var e={},t;for(t in m)e[t]=!0;return e}function _(){clearTimeout(S),S=setTimeout(function(){P()},25)}function D(e){var t=x.fromLatLngToDivPixel(e),n=x.fromDivPixelToLatLng(new google.maps.Point(t.x+i,t.y-i)),r=x.fromDivPixelToLatLng(new google.maps.Point(t.x-i,t.y+i));return new google.maps.LatLngBounds(r,n)}function P(){if(a||l||!c)return;var n=[],i={},s=r.getZoom(),o=u!==t&&s>u,p=M(),d,v,g,y,E,S,x,C=!1,k,A;f=!1,s>3&&(k=O(),C=k.getSouthWest().lng()<k.getNorthEast().lng()),e.each(b,function(e,t){if(!t)return;if(C&&!k.contains(t.options.position))return;if(T&&!T(w[e]))return;n.push(e)});for(;;){d=0;while(i[d]&&d<n.length)d++;if(d==n.length)break;S=[];if(h&&!o){do{x=S,S=[];if(x.length){y=E=0;for(g=0;g<x.length;g++)y+=b[n[x[g]]].options.position.lat(),E+=b[n[x[g]]].options.position.lng();y/=x.length,E/=x.length,k=D(new google.maps.LatLng(y,E))}else k=D(b[n[d]].options.position);for(v=d;v<n.length;v++){if(i[v])continue;k.contains(b[n[v]].options.position)&&S.push(v)}}while(x.length<S.length&&S.length>1)}else for(v=d;v<n.length;v++){if(i[v])continue;S.push(v);break}A={latLng:k.getCenter(),indexes:[],ref:[]};for(g=0;g<S.length;g++)i[S[g]]=!0,A.indexes.push(n[S[g]]),A.ref.push(n[S[g]]);A.ref=A.ref.join("-"),A.ref in p?delete p[A.ref]:(S.length===1&&(m[A.ref]=!0),function(e){setTimeout(function(){N(e)},1)}(A))}e.each(p,function(e){L(e)}),l=!1}var a=!1,f=!1,l=!1,c=!1,h=!0,p=this,v=[],m={},g={},y=[],b=[],w=[],E=d(r),S,x,T,N,C;k(),this.getById=function(e){return e in g?y[g[e]]:!1},this.clearById=function(e){if(e in g){var t=g[e];y[t]&&y[t].setMap(null),delete y[t],y[t]=!1,delete b[t],b[t]=!1,delete w[t],w[t]=!1,delete g[e],f=!0}},this.add=function(e,t){e.id=s(e.id),this.clearById(e.id),g[e.id]=y.length,y.push(null),b.push(e),w.push(t),f=!0},this.addMarker=function(e,t){t=t||{},t.id=s(t.id),this.clearById(t.id),t.options||(t.options={}),t.options.position=e.getPosition(),o(n,{todo:t},e,t.id),g[t.id]=y.length,y.push(e),b.push(t),w.push(t.data||{}),f=!0},this.todo=function(e){return b[e]},this.value=function(e){return w[e]},this.marker=function(e){return y[e]},this.setMarker=function(e,t){y[e]=t},this.store=function(e,t,n){m[e.ref]={obj:t,shadow:n}},this.free=function(){for(var t=0;t<v.length;t++)google.maps.event.removeListener(v[t]);v=[],e.each(m,function(e){L(e)}),m={},e.each(b,function(e){b[e]=null}),b=[],e.each(y,function(e){y[e]&&(y[e].setMap(null),delete y[e])}),y=[],e.each(w,function(e){delete w[e]}),w=[],g={}},this.filter=function(e){T=e,P()},this.enable=function(e){h!=e&&(h=e,P())},this.display=function(e){N=e},this.error=function(e){C=e},this.beginUpdate=function(){a=!0},this.endUpdate=function(){a=!1,f&&P()}}function m(e,t){this.id=function(){return e},this.filter=function(e){t.filter(e)},this.enable=function(){t.enable(!0)},this.disable=function(){t.enable(!1)},this.add=function(e,n,r){r||t.beginUpdate(),t.addMarker(e,n),r||t.endUpdate()},this.getById=function(e){return t.getById(e)},this.clearById=function(e,n){n||t.beginUpdate(),t.clearById(e),n||t.endUpdate()}}function g(){function i(n){if(n)return typeof n=="function"?n:(n=k(n),function(r){if(r===t)return!1;if(typeof r=="object"){for(var i=0;i<r.length;i++)if(e.inArray(r[i],n)>=0)return!0;return!1}return e.inArray(r,n)>=0})}function o(e){return{id:e.id,name:e.name,object:e.obj,tag:e.tag,data:e.data}}function u(e){typeof e.setMap=="function"&&e.setMap(null),typeof e.remove=="function"&&e.remove(),typeof e.free=="function"&&e.free(),e=null}var n={},r={};this.add=function(e,t,i,o){var u=e.todo||{},a=s(u.id);return n[t]||(n[t]=[]),a in r&&this.clearById(a),r[a]={obj:i,sub:o,name:t,id:a,tag:u.tag,data:u.data},n[t].push(a),a},this.getById=function(e,t,n){if(e in r)return t?r[e].sub:n?o(r[e]):r[e].obj;return!1},this.get=function(e,t,s,u){var a,f,l=i(s);if(!n[e]||!n[e].length)return null;a=n[e].length;while(a){a--,f=n[e][t?a:n[e].length-a-1];if(f&&r[f]){if(l&&!l(r[f].tag))continue;return u?o(r[f]):r[f].obj}}return null},this.all=function(e,s,u){var a=[],f=i(s),l=function(e){var t,i;for(t=0;t<n[e].length;t++){i=n[e][t];if(i&&r[i]){if(f&&!f(r[i].tag))continue;a.push(u?o(r[i]):r[i].obj)}}};if(e in n)l(e);else if(e===t)for(e in n)l(e);return a},this.rm=function(e,t,i){var s,o;if(!n[e])return!1;if(t)if(i)for(s=n[e].length-1;s>=0;s--){o=n[e][s];if(t(r[o].tag))break}else for(s=0;s<n[e].length;s++){o=n[e][s];if(t(r[o].tag))break}else s=i?n[e].length-1:0;return s in n[e]?this.clearById(n[e][s],s):!1},this.clearById=function(e,i){if(e in r){var s,o=r[e].name;for(s=0;i===t&&s<n[o].length;s++)e===n[o][s]&&(i=s);return u(r[e].obj),r[e].sub&&u(r[e].sub),delete r[e],n[o].splice(i,1),!0}return!1},this.objGetById=function(e){var t;if(n.clusterer)for(var i in n.clusterer)if((t=r[n.clusterer[i]].obj.getById(e))!==!1)return t;return!1},this.objClearById=function(e){if(n.clusterer)for(var t in n.clusterer)if(r[n.clusterer[t]].obj.clearById(e))return!0;return null},this.clear=function(e,t,r,s){var o,u,a,f=i(s);if(!e||!e.length){e=[];for(o in n)e.push(o)}else e=k(e);for(u=0;u<e.length;u++)if(e[u]){a=e[u];if(!n[a])continue;if(t)this.rm(a,f,!0);else if(r)this.rm(a,f,!1);else while(this.rm(a,f,!1));}}}function w(){return y.geocoder||(y.geocoder=new google.maps.Geocoder),y.geocoder}function E(){return y.directionsService||(y.directionsService=new google.maps.DirectionsService),y.directionsService}function S(){return y.elevationService||(y.elevationService=new google.maps.ElevationService),y.elevationService}function x(){return y.maxZoomService||(y.maxZoomService=new google.maps.MaxZoomService),y.maxZoomService}function T(){return y.distanceMatrixService||(y.distanceMatrixService=new google.maps.DistanceMatrixService),y.distanceMatrixService}function N(){if(n.verbose){var e,t=[];if(window.console&&typeof console.error=="function"){for(e=0;e<arguments.length;e++)t.push(arguments[e]);console.error.apply(console,t)}else{t="";for(e=0;e<arguments.length;e++)t+=arguments[e].toString()+" ";alert(t)}}}function C(e){return(typeof e=="number"||typeof e=="string")&&e!==""&&!isNaN(e)}function k(e){var n,r=[];if(e!==t)if(typeof e=="object")if(typeof e.length=="number")r=e;else for(n in e)r.push(e[n]);else r.push(e);return r}function L(t,n,r){var i=n?t:null;return!t||typeof t=="string"?i:t.latLng?L(t.latLng):t instanceof google.maps.LatLng?t:C(t.lat)?new google.maps.LatLng(t.lat,t.lng):!r&&e.isArray(t)?!C(t[0])||!C(t[1])?i:new google.maps.LatLng(t[0],t[1]):i}function A(t){var n,r;return!t||t instanceof google.maps.LatLngBounds?t||null:(e.isArray(t)?t.length==2?(n=L(t[0]),r=L(t[1])):t.length==4&&(n=L([t[0],t[1]]),r=L([t[2],t[3]])):"ne"in t&&"sw"in t?(n=L(t.ne),r=L(t.sw)):"n"in t&&"e"in t&&"s"in t&&"w"in t&&(n=L([t.n,t.e]),r=L([t.s,t.w])),n&&r?new google.maps.LatLngBounds(r,n):null)}function O(e,t,r,i,s){var o=r?L(i.todo,!1,!0):!1,u=o?{latLng:o}:i.todo.address?typeof i.todo.address=="string"?{address:i.todo.address}:i.todo.address:!1,a=u?b.get(u):!1,f=this;u?(s=s||0,a?(i.latLng=a.results[0].geometry.location,i.results=a.results,i.status=a.status,t.apply(e,[i])):(u.location&&(u.location=L(u.location)),u.bounds&&(u.bounds=A(u.bounds)),w().geocode(u,function(o,a){a===google.maps.GeocoderStatus.OK?(b.store(u,{results:o,status:a}),i.latLng=o[0].geometry.location,i.results=o,i.status=a,t.apply(e,[i])):a===google.maps.GeocoderStatus.OVER_QUERY_LIMIT&&s<n.queryLimit.attempt?setTimeout(function(){O.apply(f,[e,t,r,i,s+1])},n.queryLimit.delay+Math.floor(Math.random()*n.queryLimit.random)):(N("geocode failed",a,u),i.latLng=i.results=!1,i.status=a,t.apply(e,[i]))}))):(i.latLng=L(i.todo,!1,!0),t.apply(e,[i]))}function M(t,n,r,i){function u(){do o++;while(o<t.length&&!("address"in t[o]));if(o>=t.length){r.apply(n,[i]);return}O(s,function(n){delete n.todo,e.extend(t[o],n),u.apply(s,[])},!0,{todo:t[o]})}var s=this,o=-1;u()}function _(e,t,n){var r=!1;navigator&&navigator.geolocation?navigator.geolocation.getCurrentPosition(function(i){if(r)return;r=!0,n.latLng=new google.maps.LatLng(i.coords.latitude,i.coords.longitude),t.apply(e,[n])},function(){if(r)return;r=!0,n.latLng=!1,t.apply(e,[n])},n.opts.getCurrentPosition):(n.latLng=!1,t.apply(e,[n]))}function D(r){function y(){!d&&(d=f.get())&&d.run()}function b(){d=null,f.ack(),y.call(i)}function w(t){var n,i=[];for(n=1;n<arguments.length;n++)i.push(arguments[n]);typeof t.todo.callback=="function"?t.todo.callback.apply(r,i):typeof t.todo.callback=="object"&&e.each(t.todo.callback,function(e,t){typeof t=="function"&&t.apply(r,i)})}function C(e,t,n){n&&o(r,e,t,n),w(e,t),d.ack(t)}function O(t,i){i=i||{};if(h)i.todo&&i.todo.options&&h.setOptions(i.todo.options);else{var s=i.opts||e.extend(!0,{},n.map,i.todo&&i.todo.options?i.todo.options:{});s.center=t||L(s.center),h=new n.classes.Map(r.get(0),s)}}function M(t,n,i){var s=[],u="values"in t.todo;u||(t.todo.values=[{options:t.opts}]);if(!t.todo.values.length){C(t,!1);return}O(),e.each(t.todo.values,function(u,a){var f,p,d,v,m=l(t,a);if(m.options[i])if(m.options[i][0][0]&&e.isArray(m.options[i][0][0]))for(p=0;p<m.options[i].length;p++)for(d=0;d<m.options[i][p].length;d++)m.options[i][p][d]=L(m.options[i][p][d]);else for(p=0;p<m.options[i].length;p++)m.options[i][p]=L(m.options[i][p]);m.options.map=h,v=new google.maps[n](m.options),s.push(v),f=c.add({todo:m},n.toLowerCase(),v),o(r,{todo:m},v,f)}),C(t,u?s:s[0])}function _(s){var u=new v(r,h,s.radius,s.maxZoom),a={},f={},l=/^[0-9]+$/,c,p;for(p in s)l.test(p)?(f[p]=s[p],f[p].width=f[p].width||0,f[p].height=f[p].height||0):a[p]=s[p];return a.calculator?c=function(t){var n=[];return e.each(t,function(e,t){n.push(u.value(t))}),a.calculator.apply(r,[n])}:c=function(e){return e.length},u.error(function(){N.apply(i,arguments)}),u.display(function(s){var l,p,d=0,v,m,g,y=c(s.indexes);if(y>1){for(l in f)l=1*l,l>d&&l<=y&&(d=l);p=f[d]}p?(g=p.offset||[-p.width/2,-p.height/2],v=e.extend({},a),v.options=e.extend({pane:"overlayLayer",content:p.content?p.content.replace("CLUSTER_COUNT",y):"",offset:{x:("x"in g?g.x:g[0])||0,y:("y"in g?g.y:g[1])||0}},a.options||{}),m=i.overlay({todo:v,opts:v.options,latLng:L(s)},!0),v.options.pane="floatShadow",v.options.content=e(document.createElement("div")).width(p.width+"px").height(p.height+"px"),shadow=i.overlay({todo:v,opts:v.options,latLng:L(s)},!0),a.data={latLng:L(s),markers:[]},e.each(s.indexes,function(e,t){a.data.markers.push(u.value(t)),u.marker(t)&&u.marker(t).setMap(null)}),o(r,{todo:a},shadow,t,{main:m,shadow:shadow}),u.store(s,m,shadow)):e.each(s.indexes,function(e,t){if(u.marker(t))u.marker(t).setMap(h);else{var i=u.todo(t),s=new n.classes.Marker(i.options);u.setMarker(t,s),o(r,{todo:i},s,i.id)}})}),u}var i=this,f=new u,c=new g,h=null,d;this._plan=function(e){for(var t=0;t<e.length;t++)f.add(new a(i,b,e[t]));y()},this.map=function(e){O(e.latLng,e),o(r,e,h),C(e,h)},this.destroy=function(e){c.clear(),r.empty(),h&&(h=null),C(e,!0)},this.infowindow=function(i){var s=[],u="values"in i.todo;u||(i.latLng?i.opts.position=i.latLng:i.opts.position&&(i.opts.position=L(i.opts.position)),i.todo.values=[{options:i.opts}]),e.each(i.todo.values,function(e,a){var f,p,d=l(i,a);h||O(d.options.position),p=new n.classes.InfoWindow(d.options),p&&(d.open===t||d.open)&&(u?p.open(h,d.anchor?d.anchor:t):p.open(h,d.anchor?d.anchor:i.latLng?t:i.session.marker?i.session.marker:t)),s.push(p),f=c.add({todo:d},"infowindow",p),o(r,{todo:d},p,f)}),C(i,u?s:s[0])},this.circle=function(t){var i=[],s="values"in t.todo;s||(t.opts.center=t.latLng||L(t.opts.center),t.todo.values=[{options:t.opts}]);if(!t.todo.values.length){C(t,!1);return}e.each(t.todo.values,function(e,s){var u,a,f=l(t,s);f.options.center=f.options.center?L(f.options.center):L(s),h||O(f.options.center),f.options.map=h,a=new n.classes.Circle(f.options),i.push(a),u=c.add({todo:f},"circle",a),o(r,{todo:f},a,u)}),C(t,s?i:i[0])},this.overlay=function(t,r){var i,s,o=e(document.createElement("div")).css("border","none").css("borderWidth","0px").css("position","absolute");o.append(t.opts.content),p.prototype=new n.classes.OverlayView,s=new p(h,t.opts,t.latLng,o),o=null;if(r)return s;i=c.add(t,"overlay",s),C(t,s,i)},this.getaddress=function(e){w(e,e.results,e.status),d.ack()},this.getlatlng=function(e){w(e,e.results,e.status),d.ack()},this.getmaxzoom=function(e){x().getMaxZoomAtLatLng(e.latLng,function(t){w(e,t.status===google.maps.MaxZoomStatus.OK?t.zoom:!1,status),d.ack()})},this.getelevation=function(e){var t,n=[],r=function(t,n){w(e,n===google.maps.ElevationStatus.OK?t:!1,n),d.ack()};if(e.latLng)n.push(e.latLng);else{n=k(e.todo.locations||[]);for(t=0;t<n.length;t++)n[t]=L(n[t])}if(n.length)S().getElevationForLocations({locations:n},r);else{if(e.todo.path&&e.todo.path.length)for(t=0;t<e.todo.path.length;t++)n.push(L(e.todo.path[t]));n.length?S().getElevationAlongPath({path:n,samples:e.todo.samples},r):d.ack()}},this.defaults=function(t){e.each(t.todo,function(t,r){typeof n[t]=="object"?n[t]=e.extend({},n[t],r):n[t]=r}),d.ack(!0)},this.rectangle=function(t){var i=[],s="values"in t.todo;s||(t.todo.values=[{options:t.opts}]);if(!t.todo.values.length){C(t,!1);return}e.each(t.todo.values,function(e,s){var u,a,f=l(t,s);f.options.bounds=f.options.bounds?A(f.options.bounds):A(s),h||O(f.options.bounds.getCenter()),f.options.map=h,a=new n.classes.Rectangle(f.options),i.push(a),u=c.add({todo:f},"rectangle",a),o(r,{todo:f},a,u)}),C(t,s?i:i[0])},this.polyline=function(e){M(e,"Polyline","path")},this.polygon=function(e){M(e,"Polygon","paths")},this.trafficlayer=function(e){O();var t=c.get("trafficlayer");t||(t=new n.classes.TrafficLayer,t.setMap(h),c.add(e,"trafficlayer",t)),C(e,t)},this.bicyclinglayer=function(e){O();var t=c.get("bicyclinglayer");t||(t=new n.classes.BicyclingLayer,t.setMap(h),c.add(e,"bicyclinglayer",t)),C(e,t)},this.groundoverlay=function(e){e.opts.bounds=A(e.opts.bounds),e.opts.bounds&&O(e.opts.bounds.getCenter());var t,r=new n.classes.GroundOverlay(e.opts.url,e.opts.bounds,e.opts.opts);r.setMap(h),t=c.add(e,"groundoverlay",r),C(e,r,t)},this.streetviewpanorama=function(t){t.opts.opts||(t.opts.opts={}),t.latLng?t.opts.opts.position=t.latLng:t.opts.opts.position&&(t.opts.opts.position=L(t.opts.opts.position)),t.todo.divId?t.opts.container=document.getElementById(t.todo.divId):t.opts.container&&(t.opts.container=e(t.opts.container).get(0));var r,i=new n.classes.StreetViewPanorama(t.opts.container,t.opts.opts);i&&h.setStreetView(i),r=c.add(t,"streetviewpanorama",i),C(t,i,r)},this.kmllayer=function(t){var i=[],s="values"in t.todo;s||(t.todo.values=[{options:t.opts}]);if(!t.todo.values.length){C(t,!1);return}e.each(t.todo.values,function(e,s){var u,a,f=l(t,s);h||O(),f.options.opts.map=h,a=new n.classes.KmlLayer(f.options.url,f.options.opts),i.push(a),u=c.add({todo:f},"kmllayer",a),o(r,{todo:f},a,u)}),C(t,s?i:i[0])},this.panel=function(n){O();var i,s=0,o=0,u,a=e(document.createElement("div"));a.css("position","absolute").css("z-index","1000"),n.opts.content&&(u=e(n.opts.content),n.opts.left!==t?s=n.opts.left:n.opts.right!==t?s=r.width()-u.width()-n.opts.right:n.opts.center&&(s=(r.width()-u.width())/2),n.opts.top!==t?o=n.opts.top:n.opts.bottom!==t?o=r.height()-u.height()-n.opts.bottom:n.opts.middle&&(o=(r.height()-u.height())/2),a.css("top",o+"px").css("left",s+"px").append(u)),r.first().prepend(a),i=c.add(n,"panel",a),C(n,a,i),a=null},this.marker=function(t){var u="values"in t.todo,a=!h;u||(t.opts.position=t.latLng||L(t.opts.position),t.todo.values=[{options:t.opts}]);if(!t.todo.values.length){C(t,!1);return}a&&O();if(t.todo.cluster&&!h.getBounds()){google.maps.event.addListenerOnce(h,"bounds_changed",function(){i.marker.apply(i,[t])});return}if(t.todo.cluster){var f,p;t.todo.cluster instanceof m?(f=t.todo.cluster,p=c.getById(f.id(),!0)):(p=_(t.todo.cluster),f=new m(s(t.todo.id,!0),p),c.add(t,"clusterer",f,p)),p.beginUpdate(),e.each(t.todo.values,function(e,n){var r=l(t,n);r.options.position=r.options.position?L(r.options.position):L(n),r.options.map=h,a&&(h.setCenter(r.options.position),a=!1),p.add(r,n)}),p.endUpdate(),C(t,f)}else{var d=[];e.each(t.todo.values,function(e,i){var s,u,f=l(t,i);f.options.position=f.options.position?L(f.options.position):L(i),f.options.map=h,a&&(h.setCenter(f.options.position),a=!1),u=new n.classes.Marker(f.options),d.push(u),s=c.add({todo:f},"marker",u),o(r,{todo:f},u,s)}),C(t,u?d:d[0])}},this.getroute=function(e){e.opts.origin=L(e.opts.origin,!0),e.opts.destination=L(e.opts.destination,!0),E().route(e.opts,function(t,n){w(e,n==google.maps.DirectionsStatus.OK?t:!1,n),d.ack()})},this.directionsrenderer=function(t){t.opts.map=h;var n,r=new google.maps.DirectionsRenderer(t.opts);t.todo.divId?r.setPanel(document.getElementById(t.todo.divId)):t.todo.container&&r.setPanel(e(t.todo.container).get(0)),n=c.add(t,"directionrenderer",r),C(t,r,n)},this.getgeoloc=function(e){C(e,e.latLng)},this.styledmaptype=function(e){O();var t=new n.classes.StyledMapType(e.todo.styles,e.opts);h.mapTypes.set(e.todo.id,t),C(e,t)},this.imagemaptype=function(e){O();var t=new n.classes.ImageMapType(e.opts);h.mapTypes.set(e.todo.id,t),C(e,t)},this.autofit=function(t){var n=new google.maps.LatLngBounds;e.each(c.all(),function(e,t){t.getPosition?n.extend(t.getPosition()):t.getBounds?(n.extend(t.getBounds().getNorthEast()),n.extend(t.getBounds().getSouthWest())):t.getPaths?t.getPaths().forEach(function(e){e.forEach(function(e){n.extend(e)})}):t.getPath?t.getPath().forEach(function(e){n.extend(e),""}):t.getCenter&&n.extend(t.getCenter())}),!n.isEmpty()&&(!h.getBounds()||!h.getBounds().equals(n))&&("maxZoom"in t.todo&&google.maps.event.addListenerOnce(h,"bounds_changed",function(){this.getZoom()>t.todo.maxZoom&&this.setZoom(t.todo.maxZoom)}),h.fitBounds(n)),C(t,!0)},this.clear=function(t){if(typeof t.todo=="string"){if(c.clearById(t.todo)||c.objClearById(t.todo)){C(t,!0);return}t.todo={name:t.todo}}t.todo.id?e.each(k(t.todo.id),function(e,t){c.clearById(t)}):c.clear(k(t.todo.name),t.todo.last,t.todo.first,t.todo.tag),C(t,!0)},this.exec=function(t){var n=this;e.each(k(t.todo.func),function(i,s){e.each(n.get(t.todo,!0,t.todo.hasOwnProperty("full")?t.todo.full:!0),function(e,t){s.call(r,t)})}),C(t,!0)},this.get=function(n,r,i){var s,o,u=r?n:n.todo;r||(i=u.full),typeof u=="string"?(o=c.getById(u,!1,i)||c.objGetById(u),o===!1&&(s=u,u={})):s=u.name,s==="map"&&(o=h),o||(o=[],u.id?(e.each(k(u.id),function(e,t){o.push(c.getById(t,!1,i)||c.objGetById(t))}),e.isArray(u.id)||(o=o[0])):(e.each(s?k(s):[t],function(t,n){var r;u.first?(r=c.get(n,!1,u.tag,i),r&&o.push(r)):u.all?e.each(c.all(n,u.tag,i),function(e,t){o.push(t)}):(r=c.get(n,!0,u.tag,i),r&&o.push(r))}),!u.all&&!e.isArray(s)&&(o=o[0]))),o=e.isArray(o)||!u.all?o:[o];if(r)return o;C(n,o)},this.getdistance=function(e){var t;e.opts.origins=k(e.opts.origins);for(t=0;t<e.opts.origins.length;t++)e.opts.origins[t]=L(e.opts.origins[t],!0);e.opts.destinations=k(e.opts.destinations);for(t=0;t<e.opts.destinations.length;t++)e.opts.destinations[t]=L(e.opts.destinations[t],!0);T().getDistanceMatrix(e.opts,function(t,n){w(e,n===google.maps.DistanceMatrixStatus.OK?t:!1,n),d.ack()})},this.trigger=function(t){if(typeof t.todo=="string")google.maps.event.trigger(h,t.todo);else{var n=[h,t.todo.eventName];t.todo.var_args&&e.each(t.todo.var_args,function(e,t){n.push(t)}),google.maps.event.trigger.apply(google.maps.event,n)}w(t),d.ack()}}function P(e){var t;if(!typeof e==="object"||!e.hasOwnProperty("get"))return!1;for(t in e)if(t!=="get")return!1;return!e.get.hasOwnProperty("callback")}var n,r=0,y={},b=new h;e.fn.gmap3=function(){var t,n=[],r=!0,s=[];i();for(t=0;t<arguments.length;t++)arguments[t]&&n.push(arguments[t]);return n.length||n.push("map"),e.each(this,function(){var t=e(this),i=t.data("gmap3");r=!1,i||(i=new D(t),t.data("gmap3",i)),n.length!==1||n[0]!=="get"&&!P(n[0])?i._plan(n):s.push(i.get(n[0]==="get"?"map":n[0].get,!0))}),s.length?s.length===1?s[0]:s:this}})(jQuery);