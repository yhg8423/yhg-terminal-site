import React from 'react';
import Command from './Command';

class Terminal extends React.Component {
    //state = { command: '', result: '', periods: 1};
    constructor(props) {
        super(props);

        this.state = {
            command: '',
            result: '',
            periods: 1
        };
        this.addCommandHandler = this.addCommandHandler.bind(this)
    };

    addCommandHandler = () => {
        this.setState(previousState => {
            return { periods: previousState.periods + 1 };
        });
    };

    render() {
        return(
            <div className="main">
                {Array.from({ length: this.state.periods }, (_, index) => (
                    <Command key={index} id={index} onChange={this.addCommandHandler} />
                ))}
            </div>
        );
    };
}

export default Terminal;