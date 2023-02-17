"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function App(props) {
  var facts = props.facts.map(function (fact, i) {
    console.log("facrt", fact);
    return React.createElement(
      "li",
      { key: i },
      fact.text
    );
  });

  return React.createElement(
    "ul",
    null,
    facts
  );
}
exports.default = App;