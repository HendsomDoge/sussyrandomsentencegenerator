import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
    state = { sussyBaka: '' };

    componentDidMount() {
        this.whenTheImpostorIsSus();
    }

    whenTheImpostorIsSus = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((res) => {
                const { advice } = res.data.slip

                this.setState({ sussyBaka: advice })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const { sussyBaka } = this.state;

        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{sussyBaka}</h1>
                    <button className="button" onClick={this.whenTheImpostorIsSus}>
                        <span>Generate Sussy Sentence</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default App;
