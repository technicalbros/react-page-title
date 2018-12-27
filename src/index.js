"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Title = /** @class */ (function () {
    function Title(_a) {
        var appName = _a.appName;
        var _this = this;
        this.appName = "React App";
        this.formatTitle = function (title) { return title + " | " + _this.appName; };
        this.setAppName(appName);
    }
    Title.prototype.setAppName = function (name) {
        this.appName = name;
        return this;
    };
    Title.prototype.set = function (title) {
        document.title = this.formatTitle(title);
        return this;
    };
    Title.prototype.hookUiRouter = function (router) {
        var _this = this;
        router.transitionService.onSuccess({}, function (transition) {
            var state = transition.to();
            var title = _.get(state, "data.title", 'Untitled');
            _this.set(title);
        });
    };
    Title.prototype.get = function () {
        return document.title;
    };
    return Title;
}());
exports.Title = Title;
//# sourceMappingURL=index.js.map