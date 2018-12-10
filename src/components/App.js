import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    state = { images: [] }; //empty array before search of images

//async onSearchSubmit (term) { //as es5 function
//arrow func, define arrow function mark it async and assign to instance property. 
    onSearchSubmit = async (term) => { //asynchronous request
        const response = await unsplash.get('/search/photos', {
                params: { query: term}
            });
    /**instead of aysnce function below is promise based syntax with .then*/
        // .then((response) => {
        //     console.log(response.data.results);
        // })
        // .catch((error) => {
        //     console.log(error);
        // });

        this.setState({ images: response.data.results });
    }

    render() {
        return ( 
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} /> 
                <ImageList images={this.state.images}/>
            </div>
        )
    }
};

export default App;