import React, {Component} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    valueProvider = () => {
        this.inputRef.current.value = 'Hello World'
    }

    render() {
        return(
            <input type='text' ref={this.inputRef}/>
        )
    }
}

export default Input
