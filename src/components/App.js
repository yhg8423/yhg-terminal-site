import React from 'react';
import Header from './Header';
import Terminal from './Terminal';
//import Result from './Result';


class App extends React.Component {
    state = { command:'', number: 0 };

    onCommandSubmit = async (term) => {
        let command = term;

        this.setState({ command: command, number: this.state.number+1 });
    }

    render() {
        return (
            <div>
                <Header />
                <br/>
                <Terminal />
            </div>
        );
    }
}

export default App;