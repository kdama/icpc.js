ace.define("ace/theme/solarized_light_passed",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-solarized-light_passed";
exports.cssText = ".ace-solarized-light_passed .ace_gutter {\
background: #d3fbdd;\
color: #333\
}\
.ace-solarized-light_passed .ace_print-margin {\
width: 1px;\
background: #e8e8e8\
}\
.ace-solarized-light_passed {\
background-color: #eafde3;\
color: #586E75\
}\
.ace-solarized-light_passed .ace_cursor {\
color: #000000\
}\
.ace-solarized-light_passed .ace_marker-layer .ace_selection {\
background: rgba(20, 7, 67, 0.09)\
}\
.ace-solarized-light.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #eafde3;\
border-radius: 2px\
}\
.ace-solarized-light_passed .ace_marker-layer .ace_step {\
background: rgb(0, 255, 0)\
}\
.ace-solarized-light_passed .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgba(147, 147, 161, 0.50)\
}\
.ace-solarized-light_passed .ace_marker-layer .ace_active-line {\
background: #dbeed5\
}\
.ace-solarized-light_passed .ace_gutter-active-line {\
background-color : #c9edc1\
}\
.ace-solarized-light_passed .ace_marker-layer .ace_selected-word {\
border: 1px solid #130742\
}\
.ace-solarized-light_passed .ace_invisible {\
color: rgba(147, 147, 161, 0.50)\
}\
.ace-solarized-light_passed .ace_keyword,\
.ace-solarized-light_passed .ace_meta,\
.ace-solarized-light_passed .ace_support.ace_class,\
.ace-solarized-light_passed .ace_support.ace_type {\
color: #859900\
}\
.ace-solarized-light_passed .ace_constant.ace_character,\
.ace-solarized-light_passed .ace_constant.ace_other {\
color: #CB4B16\
}\
.ace-solarized-light_passed .ace_constant.ace_language {\
color: #B58900\
}\
.ace-solarized-light_passed .ace_constant.ace_numeric {\
color: #D33682\
}\
.ace-solarized-light_passed .ace_fold {\
background-color: #268BD2;\
border-color: #586E75\
}\
.ace-solarized-light_passed .ace_entity.ace_name.ace_function,\
.ace-solarized-light_passed .ace_entity.ace_name.ace_tag,\
.ace-solarized-light_passed .ace_support.ace_function,\
.ace-solarized-light_passed .ace_variable,\
.ace-solarized-light_passed .ace_variable.ace_language {\
color: #268BD2\
}\
.ace-solarized-light_passed .ace_storage {\
color: #073642\
}\
.ace-solarized-light_passed .ace_string {\
color: #2AA198\
}\
.ace-solarized-light_passed .ace_string.ace_regexp {\
color: #D30102\
}\
.ace-solarized-light_passed .ace_comment,\
.ace-solarized-light_passed .ace_entity.ace_other.ace_attribute-name {\
color: #93A1A1\
}\
.ace-solarized-light_passed .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHjy8NJ/AAjgA5fzQUmBAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
