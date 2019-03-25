import React from 'react';

class ResultShow extends React.Component {
    state = { term: ''}

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return(
            <div className="Terminal">
                <span id="dollar">$> </span>
                <input 
                    type="text" 
                    value={this.state.term} 
                    onChange={e => this.setState({ term:e.target.value })} 
                />
            </div>
        );
    }
}

export default ResultShow;