"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var Title = /** @class */ (function () {
    function Title(_a) {
        var _b = _a === void 0 ? {} : _a, appName = _b.appName, onChange = _b.onChange, formatter = _b.formatter;
        this.appName = "React App";
        this._onChange = [];
        this.setAppName(appName);
        this.onChange(onChange);
        this.setFormatter(formatter);
    }
    Title.prototype.setAppName = function (name) {
        this.appName = name;
        return this;
    };
    Title.prototype.setFormatter = function (formatter) {
        var _this = this;
        if (formatter === void 0) { formatter = function (title) { return title + " | " + _this.appName; }; }
        this._formatTitle = formatter;
        return this;
    };
    Title.prototype.getAppName = function () {
        return this.appName;
    };
    Title.prototype.onChange = function (onChange) {
        var _this = this;
        if (onChange === void 0) { onChange = function () { return null; }; }
        this._onChange.push(onChange);
        return function () {
            _.pull(_this._onChange, onChange);
        };
    };
    Title.prototype.set = function (title) {
        document.title = this._formatTitle(title);
        this._onChange.forEach(function (callback) { return callback(title); });
        return this;
    };
    Title.prototype.hookUiRouter = function (router) {
        var _this = this;
        router.transitionService.onSuccess({}, function (transition) {
            var state = transition.to();
            var title = _.get(state, "data.title", 'Untitled');
            if (title !== false)
                _this.set(title || '');
        });
        return this;
    };
    Title.prototype.get = function () {
        return document.title;
    };
    return Title;
}());
exports.default = Title;
