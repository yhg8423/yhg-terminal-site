import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillMount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return(
            <div className="header">
                <span>Welcome to YHG Terminal!</span> <br/>
                <span>{this.state.date.toLocaleDateString('ko-KR')} {this.state.date.toLocaleTimeString('en-US')}</span>
                <br/><br/>
                <span>Documentation: type "help"</span>
            </div>
        );
    }
}

export default Header;