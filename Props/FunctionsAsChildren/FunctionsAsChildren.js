const names = ["Andres", "Bruce", "Carlos", "Daniel"];

function NameChild(props) {
    const visibleNames = [];
    for (var childIndex = 0; childIndex <= props.upto; childIndex++) {
        visibleNames.push(props.children(childIndex, names));
    }
    console.log(visibleNames);
    return <div>{visibleNames}</div>;
}

function NameListParent(props) {
    return (
        <div>
            <header><h3>Hi, I'm parent {props.parentName}. These are my children:</h3></header>
            <NameChild upto={2}>
                {(childIndex, names) => <div key={childIndex}>{names[childIndex]}</div>}
            </NameChild>
        </div>
    );
}

ReactDOM.render(<NameListParent />, document.getElementById("react-functions-as-children"));

ReactDOM.render(<ParentComponent parentName="parentOne" />, document.getElementById("another-react-function-as-children"));