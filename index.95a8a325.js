!function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function n(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=new(function(){var r,a;function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,i),e(this,"emptyCells",[]),e(this,"score",0),e(this,"gameStatus","idle"),this.INITIAL_STATE=t,this.state=JSON.parse(JSON.stringify(this.INITIAL_STATE))}return r=[{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.state}},{key:"getStatus",value:function(){return this.gameStatus}},{key:"start",value:function(){this.setEmptyCells(),this.addNumber(),this.addNumber(),this.gameStatus="playing"}},{key:"restart",value:function(){this.score=0,this.emptyCells=[],this.state=JSON.parse(JSON.stringify(this.INITIAL_STATE)),this.gameStatus="idle"}},{key:"moveLeft",value:function(){var t=this;if("playing"===this.gameStatus){var e=!1,r=this.state.map(function(r){var n=t.mergeLine(r);return n!==r&&(e=!0),n});e&&this.endMove(r)}}},{key:"moveRight",value:function(){var t=this;if("playing"===this.gameStatus){var e=!1,r=this.state.map(function(r){var a=n(r).reverse(),i=t.mergeLine(a);return i!==a&&(e=!0),i.reverse()});e&&this.endMove(r)}}},{key:"moveUp",value:function(){var t=this;if("playing"===this.gameStatus){var e=!1,r=this.rotateMatrixCounterclockwise(this.state).map(function(r){var n=t.mergeLine(r);return n!==r&&(e=!0),n});e&&this.endMove(this.rotateMatrixClockwise(r))}}},{key:"moveDown",value:function(){var t=this;if("playing"===this.gameStatus){var e=!1,r=this.rotateMatrixClockwise(this.state).map(function(r){var n=t.mergeLine(r);return n!==r&&(e=!0),n});e&&this.endMove(this.rotateMatrixCounterclockwise(r))}}},{key:"endMove",value:function(t){this.state=t,this.setEmptyCells(),this.addNumber(),0===this.emptyCells.length&&this.checkIfGameOver()}},{key:"mergeLine",value:function(t){var e=this,r=t.filter(function(t){return 0!==t}),a=0,i=r.reduce(function(t,r){if(r===t[t.length-1]){var i=2*r;return t.splice(t.length-1,1,i,0),a+=i,2048===i&&(e.gameStatus="win"),t}return n(t).concat([r])},[]).filter(function(t){return 0!==t}),o=Array(t.length-i.length).fill(0),s=n(i).concat(n(o));return a>0?(this.score+=a,s):s.toString()===t.toString()?t:s}},{key:"setEmptyCells",value:function(){var t=[];this.state.forEach(function(e,r){e.forEach(function(e,n){0===e&&t.push([r,n])})}),this.emptyCells=t}},{key:"addNumber",value:function(){var t=this.emptyCells.length;if(0!==t){var e=Math.floor(Math.random()*t),r=this.emptyCells[e][0],n=this.emptyCells[e][1];this.state[r][n]=Math.floor(10*Math.random())?2:4,this.emptyCells.splice(e,1)}}},{key:"checkIfGameOver",value:function(){for(var t=this.state,e=0;e<t.length;e+=2)for(var r=t[e],n=0;n<r.length;n++)if(t[e][n]===t[e+1][n])return;for(var a=0;a<t.length;a++)for(var i=t[a],o=0;o<i.length;o+=2)if(t[a][o]===t[a][o+1])return;this.gameStatus="lose"}},{key:"rotateMatrixClockwise",value:function(t){var e=t.map(function(){return[]});return t.forEach(function(r,n){r.forEach(function(r,a){e[a][t.length-n-1]=r})}),e}},{key:"rotateMatrixCounterclockwise",value:function(t){var e=t.map(function(){return[]});return t.forEach(function(r,n){r.forEach(function(r,a){e[t.length-a-1][n]=r})}),e}}],t(i.prototype,r),a&&t(i,a),i}()),i={up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight"},o=document.querySelectorAll(".field-cell "),s=document.querySelector(".game-score"),u=document.querySelector(".button"),l=document.querySelectorAll(".message"),c=document.querySelector(".message-start"),f=document.querySelector(".message-win"),h=document.querySelector(".message-lose"),m=function(){var t=!0,e=!1,r=void 0;try{for(var n,a=l[Symbol.iterator]();!(t=(n=a.next()).done);t=!0)n.value.classList.add("hidden")}catch(t){e=!0,r=t}finally{try{t||null==a.return||a.return()}finally{if(e)throw r}}};function v(){for(var t=a.state.flat(1),e=0;e<o.length;e++)o[e].innerHTML=t[e]+"",o[e].className="field-cell field-cell--".concat(t[e]);s.innerHTML=a.score}u.addEventListener("click",function(){if("idle"===a.gameStatus){a.start(),u.className="button restart",u.innerHTML="Restart",c.classList.add("hidden"),v();return}a.restart(),m(),u.className="button start",u.innerHTML="Start",c.classList.remove("hidden"),v()}),document.addEventListener("keydown",function(t){var e=t.key;if("idle"!==a.gameStatus){switch(e){case i.up:a.moveUp();break;case i.down:a.moveDown();break;case i.left:a.moveLeft();break;case i.right:a.moveRight()}"win"===a.gameStatus&&f.classList.remove("hidden"),"lose"===a.gameStatus&&(m(),h.classList.remove("hidden")),v()}})}();
//# sourceMappingURL=index.95a8a325.js.map