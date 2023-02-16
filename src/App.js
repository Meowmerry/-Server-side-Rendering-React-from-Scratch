function App(props) {
  const facts = props.facts.map((fact, i) => {
    console.log("facrt", fact);
    return <li key={i}>{fact.text}</li>;
  });

  return <ul>{facts}</ul>;
}
export default App;
