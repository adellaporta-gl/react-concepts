class MyComponent extends React.Component {
    render() {
        return (<div>Hello world React component</div>);
    }
}
ReactDOM.render(<MyComponent/>, document.getElementById("my-component"));

var counter = 0;
class MyFruitListComponent extends React.Component {
    render() {
        const fruitsImg = <img className="fruits-img" src="images/Fruits.jpg"></img> 
        const fruits = ["apple", "banana", "grapes", "orange"];
        const otherFruits = ["pineapple", "cherry", "pear", "peach"];
        const fruitIndex = Math.floor(Math.random() * otherFruits.length);
        const fruitListJsxToCompile = (
            <div>
                <ul>
                    <li key="my-fruit-key-1">{fruits[0]}</li>
                    <li key="my-fruit-key-2">{fruits[1]}</li>
                    <li key="my-fruit-key-3">{fruits[2]}</li>
                    <li key="my-fruit-key-4" id="random-fruit">{otherFruits[fruitIndex]}</li>
                </ul>
                <h2 id="counter">counter: {++counter}</h2>
                {fruitsImg}
            </div>
        );
        return fruitListJsxToCompile;
    }
}
function onTick() {
    ReactDOM.render(<MyFruitListComponent/>, document.getElementById("my-fruit-list-component"));
}
setInterval(onTick, 1000);