
// createElement returns ReactElement object
// accepts props :  {id:"heading"}, "Hello World!"
const heading = React.createElement("h1", { id: "heading" }, "Hello World!");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);