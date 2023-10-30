function Circle(props) {
    const circleStyle = {
        "background-color": props.color,
        "border": "20px solid " + props.borderColor
    };
    const circleJsx = (
        <div className="circle" style={circleStyle}>
        </div>
    );
    return circleJsx;
}

function RedCircle(props) {
    return <Circle color="red" borderColor="darkred" />
}
function GreenCircle(props) {
    return <Circle color="green" borderColor="darkgreen" />
}
function YellowCircle(props) {
    return <Circle color="yellow" borderColor="darkgoldenrod" />
}
function RandomCircle(props) {
    const CircleComponentsArr = [RedCircle, GreenCircle, YellowCircle];
    const randomIndex = Math.floor(Math.random() * CircleComponentsArr.length);
    const RandomCircleComponent = CircleComponentsArr[randomIndex];
    return <RandomCircleComponent />;
}

ReactDOM.render(<Circle color="black" borderColor="blue" />, document.getElementById("react-dynamic-types-with-prop"));
ReactDOM.render(<RandomCircle />, document.getElementById("react-dynamic-types-with-prop-random"));
ReactDOM.render(<RedCircle />, document.getElementById("react-dynamic-types-with-prop-red"));
ReactDOM.render(<GreenCircle/>, document.getElementById("react-dynamic-types-with-prop-green"));
ReactDOM.render(<YellowCircle />, document.getElementById("react-dynamic-types-with-prop-yellow"));