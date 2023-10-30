const CustomTextInColor = (props) => {
    const inputColor = {
        color: props.color
    };
    const someTextJsx = (
        <div className="parent" style={inputColor}>
            {props.children}
        </div>
    );
    return someTextJsx;
}

ReactDOM.render(<CustomTextInColor color="red">'props.children' is a property that is passed in automatically to all components, like this text for example. Isn't it awesome?</CustomTextInColor>, document.getElementById("outer1"))
ReactDOM.render(<CustomTextInColor color="green">
    <hr />
    <div>
        <h2>This is one of the props.children</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quas explicabo earum, dolorum necessitatibus consequatur expedita exercitationem commodi, pariatur maxime quidem voluptatum eveniet, excepturi aperiam eaque. Voluptates ducimus similique eum!</p>
    </div>
    <hr />
</CustomTextInColor>, document.getElementById("outer2"))
ReactDOM.render(<CustomTextInColor color="blue">Hello React dev!</CustomTextInColor>, document.getElementById("outer3"))