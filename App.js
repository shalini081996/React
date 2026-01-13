
// createElement returns ReactElement object
// accepts props :  {id:"heading"}, "Hello World!"
const heading = React.createElement("h1", { id: "heading" }, "Hello World!");

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);

/**
<div id="parent">
    <div id="child">
        <h1>I am a h1 tag.</h1>
        <h2>I am a h1 tag.</h2>
    </div>
</div>
*/

let child1 = React.createElement("div", {id: "child1"},
        [React.createElement("h1", {}, "I am a h1 tag."),React.createElement("h2", {}, "I am a h2 tag.")])
let child2 =React.createElement("div", {id: "child2"},
        [React.createElement("h1", {}, "I am a h1 tag."),React.createElement("h2", {}, "I am a h2 tag.")])

let parent = React.createElement("div", {id: "parent"}, 
        [child1,child2]
    )



root.render(parent);