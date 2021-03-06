"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = vanillaApp;
var _react = _interopRequireDefault(require("../react"));
var _reactDOM = _interopRequireDefault(require("../reactDOM"));
var _commentsList = _interopRequireDefault(require("./vanillaApp/commentsList"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function vanillaApp() {
    var commentsList = /*#__PURE__*/ _react.default.createElement(_commentsList.default, null), rootDOMElement = document.getElementById("root");
    _reactDOM.default.render(commentsList, rootDOMElement);
    setTimeout(function() {
        var messages = [
            "Hello world yet again!!!"
        ], state = {
            messages: messages
        };
        commentsList.setState(state);
    }, 1000); ///
}
;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZhbmlsbGFBcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwiLi4vcmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwiLi4vcmVhY3RET01cIjtcblxuaW1wb3J0IENvbW1lbnRzTGlzdCBmcm9tIFwiLi92YW5pbGxhQXBwL2NvbW1lbnRzTGlzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YW5pbGxhQXBwKCkge1xuICBjb25zdCBjb21tZW50c0xpc3QgPVxuXG4gICAgICAgICAgPENvbW1lbnRzTGlzdCAvPlxuXG4gICAgICAgICxcbiAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIGNvbW1lbnRzTGlzdCxcbiAgICByb290RE9NRWxlbWVudFxuICApO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgXCJIZWxsbyB3b3JsZCB5ZXQgYWdhaW4hISFcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICBtZXNzYWdlc1xuICAgICAgICAgIH07XG5cbiAgICBjb21tZW50c0xpc3Quc2V0U3RhdGUoc3RhdGUpO1xuICB9LCAxMDAwKTsgLy8vXG59O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7a0JBT1ksVUFBVTtJQUxoQixNQUFVO0lBQ1AsU0FBYTtJQUVULGFBQTJCOzs7Ozs7U0FFNUIsVUFBVTtRQUMxQixZQUFZLGlCQU5GLE1BQVUsdUJBR0gsYUFBMkIsaUJBUTVDLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxFQUFDLElBQU07SUFWbEMsU0FBYSxTQVl2QixNQUFNLENBQ2IsWUFBWSxFQUNaLGNBQWM7SUFHaEIsVUFBVTtZQUNGLFFBQVE7YUFDTix3QkFBMEI7V0FFNUIsS0FBSztZQUNILFFBQVEsRUFBUixRQUFROztRQUdoQixZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUs7T0FDMUIsSUFBSSxFQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRyJ9