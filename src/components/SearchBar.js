import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''};
   
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term) //this.props in class component rather then just props in funciton componente
    }

    
    render() {
        return ( //onInputChange in onChange prop is callback function so dont need() or else ran when rendered
            <div className="ui segment"> 
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input  
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value})}    
                        /> 
                    </div>
                </form> 
            </div>
        )
    }
};

export default SearchBar;