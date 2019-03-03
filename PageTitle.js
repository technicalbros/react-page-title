"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var TitleContext_1 = __importDefault(require("./TitleContext"));
var PageTitle = /** @class */ (function (_super) {
    __extends(PageTitle, _super);
    function PageTitle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            get untitledText() {
                return this.props.untitledText;
            }
        };
        return _this;
    }
    PageTitle.prototype.updateTitle = function () {
        this.context.set(this.props.children);
    };
    PageTitle.prototype.componentDidUpdate = function (props) {
        if (this.props.children !== props.children || this.props.untitledText !== props.untitledText)
            this.updateTitle();
    };
    PageTitle.prototype.componentDidMount = function () {
        if (!this.context)
            throw "Please wrap outermost component in TitleProvider";
        this.updateTitle();
    };
    PageTitle.prototype.componentWillUnmount = function () {
        this.context.set(this.props.untitledText || 'UntitledText');
    };
    PageTitle.prototype.render = function () {
        return null;
    };
    PageTitle.contextType = TitleContext_1.default;
    return PageTitle;
}(React.Component));
exports.default = PageTitle;
