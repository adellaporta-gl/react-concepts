const appContext = React.createContext("light");

class ThemedBackground extends React.Component {
    render() {
        const themedBackgroundJsx = (
            <div className={"background-theme-" + this.context}>
                {this.props.children}
            </div>
        );
        return themedBackgroundJsx;
    }
}
ThemedBackground.contextType = appContext;

class ThemedButton extends React.Component {
    render() {
        const buttonJsx = (
            <div className={"button-theme-" + this.context}>
                <h2>Hello!</h2>
                <button>Click me!</button>
            </div>
        );
        return buttonJsx;
    }
}
ThemedButton.contextType = appContext;

class ThemedDialog extends React.Component {
    render() {
        const dialogJsx = (
            <div className={"dialog-theme-" + this.context}>
                <h3>Dialog title here</h3>
                <h1>Dialog message here</h1>
            </div>
        );
        return dialogJsx;
    }
}
ThemedDialog.contextType = appContext;
class App extends React.Component {
    render() {
        const appJsx = (
            <div>
                <appContext.Provider value="dark">
                    <ThemedBackground>
                        <ThemedButton />
                        <appContext.Provider value="light">
                            <ThemedDialog />
                        </appContext.Provider>
                    </ThemedBackground>
                </appContext.Provider>
            </div>
        );
        return appJsx;
    }
}
ReactDOM.render(<App />, document.getElementById("react-context"));