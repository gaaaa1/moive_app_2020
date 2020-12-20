import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("hello");
    }
    state = {
        count: 0
    };
    add = () => {
        this.setState(current => ({ count: current.count + 1 }));
    };
    minus = () => {
        this.setState(current => ({ count: current.count - 1 }));
    };
    componentDidMount() {
        console.log("component render");
    };
    componentDidUpdate() {
        console.log("i just update");
    }
    componentWillUnmount() {
        console.log("Goodbye");
    }
    render() {
        console.log("i'm render");
        return <div>
            <h1>im a class is {this.state.count}</h1>
            <button onClick={this.add}>add</button>
            <button onClick={this.minus}>minus</button>
        </div>
    }
}

export default App;
