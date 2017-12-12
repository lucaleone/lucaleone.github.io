webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root {\n  --margin-layout: 16px;\n  --half-margin-layout: 8px;\n  --double-margin-layout: 32px;\n  --negative-margin-layout: -16px;\n  --ilClub-red: #B30000;\n  --ilClub-darkGray : rgb(78, 78, 78);\n  --ilClub-lightGray: rgb(241, 241, 241);\n}\n* {\n  box-sizing: border-box;\n}\nimg, embed, object, video{\n  max-width: 100%;\n}\nbutton, input {\n  min-width: 48px;\n  min-height: 48px;\n}\nbutton,\ninput[type=button]{\n  transition: all 0.3s ease-out;\n}\nbutton:hover,\ninput[type=button]:hover {\n  font-size: 0.8rem;\n}\nbutton.disabled,\nbutton[disabled],\ninput.disabled,\ninput[disabled]{\n  cursor: not-allowed;\n  opacity: .4;\n}\n\nbody, html {\n  margin: 0;\n  padding: 0;\n  font-size: 14px;\n  font-family: 'EB Garamond', serif;\n  background: rgb(241, 241, 241);\n  background: rgb(241, 241, 241);\n  background: var(--ilClub-lightGray, rgb(241, 241, 241));\n}\nh1, h2, h3, p, ul{\n  margin: 0px;\n  padding: 0px;\n}\nul{\n  list-style-type: none;\n}\nh3{\n  font-size: 14px;\n}\np, h3, h4 {\n  color: rgb(78, 78, 78);\n}\na{\n  text-decoration: none; color:white;\n}\nlabel, input, button, select, textarea {\n  display: block;\n  width: 100%;\n}\ninput, button, select{\n  cursor: pointer;\n  height: 2.7rem;\n  padding: 8px;\n  padding: 8px;\n  padding: var(--half-margin-layout, 8px);\n}\nlabel {\n  font-size: 1.15rem;\n  padding-top: 0.6rem;\n}\ntextarea {\n  resize: none;\n}\nheader {\n  width: 100%;\n  height: 3.4rem;\n  background-color: #B30000;\n  background-color: #B30000;\n  background-color: var(--ilClub-red, #B30000);\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  z-index:10;\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);\n}\n.page{\n  height: 100vh;\n}\n.pageContent {\n  padding-top: 3.4rem;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\nmain{\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n/*IlClub UI elements*/\n.squareButton{\n  background-color: rgb(241, 241, 241);\n  background-color: rgb(241, 241, 241);\n  background-color: var(--ilClub-lightGray, rgb(241, 241, 241));;\n  border: 0;\n  font-weight: bold;\n}\n.pageButtonsContainer{\n  position: fixed;\n  right: 16px;\n  right: 16px;\n  right: var(--margin-layout, 16px);\n  bottom: 16px;\n  bottom: 16px;\n  bottom: var(--margin-layout, 16px);\n  z-index: 2;\n}\n\n.pageButtonsContainer>button{\n  width: 2.9rem;\n  height: 2.9rem;\n  margin-top: 1rem;\n  border-radius: 50%;\n  border:0;\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);\n  background-color: white;\n  fill: black;\n}\n.pageButtonsContainer>button:last-child{\n  width: 3.3rem;\n  height: 3.3rem;\n  background-color: #B30000;\n  background-color: #B30000;\n  background-color: var(--ilClub-red, #B30000);\n  color: white;\n}\n.pageButtonsContainer>button:hover{\n  box-shadow: none;\n}\n\n.calendarIcon{\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 19.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Capa_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 60 60%22 style%3D%22enable-background%3Anew 0 0 60 60%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cg%3E%0D%09%3Cpath d%3D%22M57%2C4h-7V1c0-0.553-0.447-1-1-1h-7c-0.553%2C0-1%2C0.447-1%2C1v3H19V1c0-0.553-0.447-1-1-1h-7c-0.553%2C0-1%2C0.447-1%2C1v3H3%0D%09%09C2.447%2C4%2C2%2C4.447%2C2%2C5v11v43c0%2C0.553%2C0.447%2C1%2C1%2C1h54c0.553%2C0%2C1-0.447%2C1-1V16V5C58%2C4.447%2C57.553%2C4%2C57%2C4z M43%2C2h5v3v3h-5V5V2z M12%2C2h5%0D%09%09v3v3h-5V5V2z M4%2C6h6v3c0%2C0.553%2C0.447%2C1%2C1%2C1h7c0.553%2C0%2C1-0.447%2C1-1V6h22v3c0%2C0.553%2C0.447%2C1%2C1%2C1h7c0.553%2C0%2C1-0.447%2C1-1V6h6v9H4V6z%0D%09%09 M4%2C58V17h52v41H4z%22%2F%3E%0D%09%3Cpath d%3D%22M38%2C23h-7h-2h-7h-2h-9v9v2v7v2v9h9h2h7h2h7h2h9v-9v-2v-7v-2v-9h-9H38z M31%2C25h7v7h-7V25z M38%2C41h-7v-7h7V41z M22%2C34h7v7h-7%0D%09%09V34z M22%2C25h7v7h-7V25z M13%2C25h7v7h-7V25z M13%2C34h7v7h-7V34z M20%2C50h-7v-7h7V50z M29%2C50h-7v-7h7V50z M38%2C50h-7v-7h7V50z M47%2C50h-7%0D%09%09v-7h7V50z M47%2C41h-7v-7h7V41z M47%2C25v7h-7v-7H47z%22%2F%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 50%;\n}\n.newIcon{\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 viewBox%3D%220 0 24 24%22 enable-background%3D%22new 0 0 24 24%22 width%3D%22512px%22 height%3D%22512px%22%3E  %3Cpath d%3D%22m23%2C10h-8.5c-0.3%2C0-0.5-0.2-0.5-0.5v-8.5c0-0.6-0.4-1-1-1h-2c-0.6%2C0-1%2C0.4-1%2C1v8.5c0%2C0.3-0.2%2C0.5-0.5%2C0.5h-8.5c-0.6%2C0-1%2C0.4-1%2C1v2c0%2C0.6 0.4%2C1 1%2C1h8.5c0.3%2C0 0.5%2C0.2 0.5%2C0.5v8.5c0%2C0.6 0.4%2C1 1%2C1h2c0.6%2C0 1-0.4 1-1v-8.5c0-0.3 0.2-0.5 0.5-0.5h8.5c0.6%2C0 1-0.4 1-1v-2c0-0.6-0.4-1-1-1z%22 fill%3D%22%23FFFFFF%22%2F%3E%3C%2Fsvg%3E\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 50%;\n}\n/*Mobile event element*/\n.cardForm{\n  position: relative;\n  padding: 16px;\n  padding: 16px;\n  padding: var(--margin-layout, 16px);\n  padding-top: 8px;\n  padding-top: 8px;\n  padding-top: var(--half-margin-layout, 8px);\n  margin: 16px;\n  margin: 16px;\n  margin: var(--margin-layout, 16px);\n  margin-top: -16px;\n  margin-top: -16px;\n  margin-top: var(--negative-margin-layout, -16px);\n  background: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.13), 0 6px 20px 0 rgba(0, 0, 0, 0.12);\n  transition: margin 0.2s ease-in;\n}\n.card{\n  width: 100%;\n  margin-bottom: 16px;\n  margin-bottom: 16px;\n  margin-bottom: var(--margin-layout, 16px);\n}\n.cardImg {\n  height: 8rem;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n.cardDetail{\n  position: relative;\n  height: 12rem;\n  padding: 16px;\n  padding: 16px;\n  padding: var(--margin-layout, 16px);\n  padding-top: 8px;\n  padding-top: 8px;\n  padding-top: var(--half-margin-layout, 8px);\n  margin-left: 16px;\n  margin-left: 16px;\n  margin-left: var(--margin-layout, 16px);\n  margin-right: 16px;\n  margin-right: 16px;\n  margin-right: var(--margin-layout, 16px);\n  margin-top: -16px;\n  margin-top: -16px;\n  margin-top: var(--negative-margin-layout, -16px);\n  background: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.13), 0 6px 20px 0 rgba(0, 0, 0, 0.12);\n  transition: margin 0.2s ease-in;\n}\n.cardRoundButtonContainer{\n  position: absolute;\n  height: 3rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: revert;\n          flex-direction: revert;\n  right: 16px;\n  right: 16px;\n  right: var(--margin-layout, 16px);\n  top: -1.65rem;\n  margin-left: auto;\n}\n.cardRoundButtonContainer>button{\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  border:0;\n  background-size: 40%;\n  margin-left: 1rem;\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);\n}\n.cardRoundButtonContainer>button:hover{\n  box-shadow: none;\n}\n.cRBdelete{\n  background: #B30000 url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 16.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 id%3D%22Capa_1%22 x%3D%220px%22 y%3D%220px%22 width%3D%22512px%22 height%3D%22512px%22 viewBox%3D%220 0 774.266 774.266%22 style%3D%22enable-background%3Anew 0 0 774.266 774.266%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%09%3Cg%3E%09%09%3Cpath d%3D%22M640.35%2C91.169H536.971V23.991C536.971%2C10.469%2C526.064%2C0%2C512.543%2C0c-1.312%2C0-2.187%2C0.438-2.614%2C0.875    C509.491%2C0.438%2C508.616%2C0%2C508.179%2C0H265.212h-1.74h-1.75c-13.521%2C0-23.99%2C10.469-23.99%2C23.991v67.179H133.916    c-29.667%2C0-52.783%2C23.116-52.783%2C52.783v38.387v47.981h45.803v491.6c0%2C29.668%2C22.679%2C52.346%2C52.346%2C52.346h415.703    c29.667%2C0%2C52.782-22.678%2C52.782-52.346v-491.6h45.366v-47.981v-38.387C693.133%2C114.286%2C670.008%2C91.169%2C640.35%2C91.169z     M285.713%2C47.981h202.84v43.188h-202.84V47.981z M599.349%2C721.922c0%2C3.061-1.312%2C4.363-4.364%2C4.363H179.282    c-3.052%2C0-4.364-1.303-4.364-4.363V230.32h424.431V721.922z M644.715%2C182.339H129.551v-38.387c0-3.053%2C1.312-4.802%2C4.364-4.802    H640.35c3.053%2C0%2C4.365%2C1.749%2C4.365%2C4.802V182.339z%22 fill%3D%22%23FFFFFF%22%2F%3E%09%09%3Crect x%3D%22475.031%22 y%3D%22286.593%22 width%3D%2248.418%22 height%3D%22396.942%22 fill%3D%22%23FFFFFF%22%2F%3E%09%09%3Crect x%3D%22363.361%22 y%3D%22286.593%22 width%3D%2248.418%22 height%3D%22396.942%22 fill%3D%22%23FFFFFF%22%2F%3E%09%09%3Crect x%3D%22251.69%22 y%3D%22286.593%22 width%3D%2248.418%22 height%3D%22396.942%22 fill%3D%22%23FFFFFF%22%2F%3E%09%3C%2Fg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E\") no-repeat center;\n  background: #B30000 url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 16.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 id%3D%22Capa_1%22 x%3D%220px%22 y%3D%220px%22 width%3D%22512px%22 height%3D%22512px%22 viewBox%3D%220 0 774.266 774.266%22 style%3D%22enable-background%3Anew 0 0 774.266 774.266%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%09%3Cg%3E%09%09%3Cpath d%3D%22M640.35%2C91.169H536.971V23.991C536.971%2C10.469%2C526.064%2C0%2C512.543%2C0c-1.312%2C0-2.187%2C0.438-2.614%2C0.875    C509.491%2C0.438%2C508.616%2C0%2C508.179%2C0H265.212h-1.74h-1.75c-13.521%2C0-23.99%2C10.469-23.99%2C23.991v67.179H133.916    c-29.667%2C0-52.783%2C23.116-52.783%2C52.783v38.387v47.981h45.803v491.6c0%2C29.668%2C22.679%2C52.346%2C52.346%2C52.346h415.703    c29.667%2C0%2C52.782-22.678%2C52.782-52.346v-491.6h45.366v-47.981v-38.387C693.133%2C114.286%2C670.008%2C91.169%2C640.35%2C91.169z     M285.713%2C47.981h202.84v43.188h-202.84V47.981z M599.349%2C721.922c0%2C3.061-1.312%2C4.363-4.364%2C4.363H179.282    c-3.052%2C0-4.364-1.303-4.364-4.363V230.32h424.431V721.922z M644.715%2C182.339H129.551v-38.387c0-3.053%2C1.312-4.802%2C4.364-4.802    H640.35c3.053%2C0%2C4.365%2C1.749%2C4.365%2C4.802V182.339z%22 fill%3D%22%23FFFFFF%22%2F%3E%09%09%3Crect x%3D%22475.031%22 y%3D%22286.593%22 width%3D%2248.418%22 height%3D%22396.942%22 fill%3D%22%23FFFFFF%22%2F%3E%09%09%3Crect x%3D%22363.361%22 y%3D%22286.593%22 width%3D%2248.418%22 height%3D%22396.942%22 fill%3D%22%23FFFFFF%22%2F%3E%09%09%3Crect x%3D%22251.69%22 y%3D%22286.593%22 width%3D%2248.418%22 height%3D%22396.942%22 fill%3D%22%23FFFFFF%22%2F%3E%09%3C%2Fg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E\") no-repeat center;\n  background: var(--ilClub-red, #B30000) url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 16.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 id%3D%22Capa_1%22 x%3D%220px%22 y%3D%220px%22 width%3D%22512px%22 height%3D%22512px%22 viewBox%3D%220 0 774.266 774.266%22 style%3D%22enable-background%3Anew 0 0 774.266 774.266%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%09%3Cg%3E%09%09%3Cpath d%3D%22M640.35%2C91.169H536.971V23.991C536.971%2C10.469%2C526.064%2C0%2C512.543%2C0c-1.312%2C0-2.187%2C0.438-2.614%2C0.875    C509.491%2C0.438%2C508.616%2C0%2C508.179%2C0H265.212h-1.74h-1.75c-13.521%2C0-23.99%2C10.469-23.99%2C23.991v67.179H133.916    c-29.667%2C0-52.783%2C23.116-52.783%2C52.783v38.387v47.981h45.803v491.6c0%2C29.668%2C22.679%2C52.346%2C52.346%2C52.346h415.703    c29.667%2C0%2C52.782-22.678%2C52.782-52.346v-491.6h45.366v-47.981v-38.387C693.133%2C114.286%2C670.008%2C91.169%2C640.35%2C91.169z     M285.713%2C47.981h202.84v43.188h-202.84V47.981z M599.349%2C721.922c0%2C3.061-1.312%2C4.363-4.364%2C4.363H179.282    c-3.052%2C0-4.364-1.303-4.364-4.363V230.32h424.431V721.922z M644.715%2C182.339H129.551v-38.387c0-3.053%2C1.312-4.802%2C4.364-4.802    H640.35c3.053%2C0%2C4.365%2C1.749%2C4.365%2C4.802V182.339z%22 fill%3D%22%23FFFFFF%22%2F%3E%09%09%3Crect x%3D%22475.031%22 y%3D%22286.593%22 width%3D%2248.418%22 height%3D%22396.942%22 fill%3D%22%23FFFFFF%22%2F%3E%09%09%3Crect x%3D%22363.361%22 y%3D%22286.593%22 width%3D%2248.418%22 height%3D%22396.942%22 fill%3D%22%23FFFFFF%22%2F%3E%09%09%3Crect x%3D%22251.69%22 y%3D%22286.593%22 width%3D%2248.418%22 height%3D%22396.942%22 fill%3D%22%23FFFFFF%22%2F%3E%09%3C%2Fg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E\") no-repeat center;\n}\n.cRBedit{\n  background: #B30000 url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 16.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 id%3D%22Capa_1%22 x%3D%220px%22 y%3D%220px%22 width%3D%22512px%22 height%3D%22512px%22 viewBox%3D%220 0 528.899 528.899%22 style%3D%22enable-background%3Anew 0 0 528.899 528.899%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%09%3Cpath d%3D%22M328.883%2C89.125l107.59%2C107.589l-272.34%2C272.34L56.604%2C361.465L328.883%2C89.125z M518.113%2C63.177l-47.981-47.981   c-18.543-18.543-48.653-18.543-67.259%2C0l-45.961%2C45.961l107.59%2C107.59l53.611-53.611   C532.495%2C100.753%2C532.495%2C77.559%2C518.113%2C63.177z M0.3%2C512.69c-1.958%2C8.812%2C5.998%2C16.708%2C14.811%2C14.565l119.891-29.069   L27.473%2C390.597L0.3%2C512.69z%22 fill%3D%22%23FFFFFF%22%2F%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E\") no-repeat center;\n  background: #B30000 url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 16.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 id%3D%22Capa_1%22 x%3D%220px%22 y%3D%220px%22 width%3D%22512px%22 height%3D%22512px%22 viewBox%3D%220 0 528.899 528.899%22 style%3D%22enable-background%3Anew 0 0 528.899 528.899%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%09%3Cpath d%3D%22M328.883%2C89.125l107.59%2C107.589l-272.34%2C272.34L56.604%2C361.465L328.883%2C89.125z M518.113%2C63.177l-47.981-47.981   c-18.543-18.543-48.653-18.543-67.259%2C0l-45.961%2C45.961l107.59%2C107.59l53.611-53.611   C532.495%2C100.753%2C532.495%2C77.559%2C518.113%2C63.177z M0.3%2C512.69c-1.958%2C8.812%2C5.998%2C16.708%2C14.811%2C14.565l119.891-29.069   L27.473%2C390.597L0.3%2C512.69z%22 fill%3D%22%23FFFFFF%22%2F%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E\") no-repeat center;\n  background: var(--ilClub-red, #B30000) url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 16.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 id%3D%22Capa_1%22 x%3D%220px%22 y%3D%220px%22 width%3D%22512px%22 height%3D%22512px%22 viewBox%3D%220 0 528.899 528.899%22 style%3D%22enable-background%3Anew 0 0 528.899 528.899%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%09%3Cpath d%3D%22M328.883%2C89.125l107.59%2C107.589l-272.34%2C272.34L56.604%2C361.465L328.883%2C89.125z M518.113%2C63.177l-47.981-47.981   c-18.543-18.543-48.653-18.543-67.259%2C0l-45.961%2C45.961l107.59%2C107.59l53.611-53.611   C532.495%2C100.753%2C532.495%2C77.559%2C518.113%2C63.177z M0.3%2C512.69c-1.958%2C8.812%2C5.998%2C16.708%2C14.811%2C14.565l119.891-29.069   L27.473%2C390.597L0.3%2C512.69z%22 fill%3D%22%23FFFFFF%22%2F%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fsvg%3E\") no-repeat center;\n}\n.cRBnoPartecipa{\n  background: #B30000 url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath fill%3D%22white%22 d%3D%22M17%2C3H7A2%2C2 0 0%2C0 5%2C5V21L12%2C18L19%2C21V5C19%2C3.89 18.1%2C3 17%2C3Z%22 %2F%3E%3C%2Fsvg%3E\") no-repeat center;\n  background: #B30000 url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath fill%3D%22white%22 d%3D%22M17%2C3H7A2%2C2 0 0%2C0 5%2C5V21L12%2C18L19%2C21V5C19%2C3.89 18.1%2C3 17%2C3Z%22 %2F%3E%3C%2Fsvg%3E\") no-repeat center;\n  background: var(--ilClub-red, #B30000) url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath fill%3D%22white%22 d%3D%22M17%2C3H7A2%2C2 0 0%2C0 5%2C5V21L12%2C18L19%2C21V5C19%2C3.89 18.1%2C3 17%2C3Z%22 %2F%3E%3C%2Fsvg%3E\") no-repeat center;\n}\n.cRBpartecipa{\n  background: rgb(78, 78, 78) url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath fill%3D%22white%22 d%3D%22M17%2C3H7A2%2C2 0 0%2C0 5%2C5V21L12%2C18L19%2C21V5C19%2C3.89 18.1%2C3 17%2C3Z%22 %2F%3E%3C%2Fsvg%3E\") no-repeat center;\n  background: rgb(78, 78, 78) url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath fill%3D%22white%22 d%3D%22M17%2C3H7A2%2C2 0 0%2C0 5%2C5V21L12%2C18L19%2C21V5C19%2C3.89 18.1%2C3 17%2C3Z%22 %2F%3E%3C%2Fsvg%3E\") no-repeat center;\n  background: var(--ilClub-darkGray, rgb(78, 78, 78)) url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath fill%3D%22white%22 d%3D%22M17%2C3H7A2%2C2 0 0%2C0 5%2C5V21L12%2C18L19%2C21V5C19%2C3.89 18.1%2C3 17%2C3Z%22 %2F%3E%3C%2Fsvg%3E\") no-repeat center;\n  /*vuoto*/\n}\n\n\n\n\n.pageTitle {\n  padding: 16px;\n  padding: 16px;\n  padding: var(--margin-layout, 16px);\n  height: 10rem;\n  width: 100%;\n  color: white;\n  text-align: left;\n  background-color: rgb(78, 78, 78) no-repeat;\n  background-color: var(--ilClub-darkGray) no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n.pageTitle * {\n  margin: auto auto auto 0;\n}\n.accentButton{\n  background-color: #B30000;\n  background-color: #B30000;\n  background-color: var(--ilClub-red, #B30000);\n  color: white;\n  border-color: #B30000;\n  border-color: #B30000;\n  border-color: var(--ilClub-red, #B30000);\n}\n/*End ---- Mobile event element*/\n/*End ---- IlClub UI elements*/\n\n/*Utility*/\n.flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.flexGrow {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.flexWrap {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.widthLayoutRoule{\n  width: 16px;\n  width: 16px;\n  width: var(--margin-layout, 16px);\n}\n.width10{\n  width: 10%;\n}\n.width20{\n  width: 20%;\n}\n.width35{\n  width: 35%;\n}\n.width60{\n  width: 60%;\n}\n.width50{\n  width: 50%;\n}\n.width100{\n  width: 100%;\n}\n.space{\n  height: 9rem;\n}\n.texCenter{\n  text-align: center;\n}\n.contentCenter {\n  margin: 0 auto 0 auto;\n}\n.contentVerticalCenter {\n  margin: auto 0;\n}\n.textJustified{\n  text-align: justify;\n  text-justify: inter-word;\n}\n.lineMargin{\n  margin-top: 8px;\n}\n.halfLineMargin{\n  margin-top: 4px;\n}\n.lineIcon{\n  height: 1rem;\n}\n.overflow{\n  overflow: hidden;\n}\n.floatLeft{\n  float:left;\n}\n.floatRight{\n  float: right;\n}\n.paddingLayoutRoule {\n  padding: 16px;\n  padding: 16px;\n  padding: var(--margin-layout, 16px);\n}\n.marginLayoutRoule {\n  margin: 16px;\n  margin: 16px;\n  margin: var(--margin-layout, 16px);\n}\n.paddingHalfLayoutRoule {\n  padding: 8px;\n  padding: 8px;\n  padding: var(--half-margin-layout, 8px);\n}\n.whiteFont{\n  color: white;\n}\n.lightGrayBackground{\n  background: rgb(241, 241, 241);\n  background: rgb(241, 241, 241);\n  background: var(--ilClub-lightGray, rgb(241, 241, 241));\n}\n.hide{\n  visibility: hidden !important;\n}\n.show{\n  visibility: visible !important;\n}\n.boxShadow{\n  box-shadow: 0 0 10px #888888;\n}\n.blurable{\n  -webkit-filter: none;\n          filter: none;\n  transition: -webkit-filter 0.3s linear;\n  transition: filter 0.3s linear;\n  transition: filter 0.3s linear, -webkit-filter 0.3s linear;\n}\n.blur {\n  -webkit-filter: blur(2.5px);\n          filter: blur(2.5px);\n/*brightness(70%);*/\n}\n.focus {\n  -webkit-filter: none !important;\n          filter: none !important;\n}\n.mobile{\n  display: block;\n}\n.desktop{\n  display: none;\n}\n#menuButton{\n  padding: 0.8rem 16px;\n  padding: 0.8rem 16px;\n  padding: 0.8rem var(--margin-layout, 16px);\n}\n\n\n@media only screen and (min-width: 500px) {\n\n}\n@media only screen and (orientation: landscape)\n{\n  .mobile{\n    display: none;\n  }\n  .desktop{\n    display: block;\n  }\n}\n@media only screen and (min-width: 700px) {\n  #menuButton{\n    display: none;\n  }\n  .mobile{\n    display: none;\n  }\n  .desktop{\n    display: block;\n  }\n\n /* :root {\n    --margin-layout: 32px;\n    --double-margin-layout: 64px;\n    --negative-margin-layout: -32px;\n  }*/\n\n  .card{\n    width: 50%;\n    padding-left: 8px;\n    padding-left: 8px;\n    padding-left: var(--half-margin-layout, 8px);\n    padding-right: 8px;\n    padding-right: 8px;\n    padding-right: var(--half-margin-layout, 8px);\n    margin: 0;\n    margin-top: 16px;\n    margin-top: 16px;\n    margin-top: var(--margin-layout, 16px);\n  }\n  .cardImg{\n    height: 9rem;\n    margin: 0;\n  }\n  .cardDetail{\n    margin: 0;\n  }\n}\n\n\n\n/*Desktop*/\n@media only screen and (min-width: 1000px) {\n\n}\n\n@media only screen and (min-width: 1200px) {\n /* :root {\n    --margin-layout: 48px;\n    --double-margin-layout: 96px;\n    --negative-margin-layout: -48px;\n  }*/\n  #menuButton{\n    display: none;\n  }\n  .card{\n    width: 33.3%;\n  }\n}\n/*2K TV*/\n@media only screen and (min-width: 2100px) {\n  body, html {\n    font-size: 26px;\n  }\n  /*\n  :root {\n    --margin-layout: 64px;\n    --double-margin-layout: 128px;\n    --negative-margin-layout: -64px;\n  }*/\n  .card{\n    width: 25%;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map