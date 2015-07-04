"no use strict";

var ViewModel = function (source, stdin, answer) {
  var main;
  this.aceSource = ko.observable(source).extend({rateLimit: 1000});
  this.aceStdin = ko.observable(stdin).extend({rateLimit: 1000});
  this.aceStdout = ko.pureComputed(function () {
    try {
      eval(this.aceSource());
      var result = main(this.aceStdin());
    } catch (e) {
      if (e instanceof Error) {
        var result = e.message;
      }
    }
    return (result);
  }, this);
  this.aceAnswer = ko.observable(answer);
  this.passed = ko.pureComputed(function() {
    ace.edit("divStdout").setTheme(String(this.aceStdout()) === String(this.aceAnswer()) ? "ace/theme/solarized_light_passed" : "");
    ace.edit("divAnswer").setTheme(String(this.aceStdout()) === String(this.aceAnswer()) ? "ace/theme/solarized_light_passed" : "");
    return String(this.aceStdout()) === String(this.aceAnswer());
  }, this);
};

ko.applyBindings(new ViewModel("main = function (stdin) {\n\tvar input = stdin.split(/[\\n ]/);\n\n\tvar sum = 0;\n\tfor (var n of input) sum += Number(n);\n\n\treturn String(sum);\n};", "1\n2\n3", "10"));
