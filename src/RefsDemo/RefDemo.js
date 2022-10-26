import React, {Component} from 'react';
import Input from './input';

class RefDemo extends Component {
    constructor(props) {
        super(props);
        //returns a reference object to componentRef with one key value pair as current and reference to dom tag it is applied to
        this.componentRef = React.createRef();
    }

    onClickHandler = () => {
        //takes reference of Input object and calls its function
        this.componentRef.current.valueProvider();
    }

    render() {
        return(
            <div>
                {/*ref is applied to the input element*/}
                <Input ref={this.componentRef} />
                <button onClick={() => this.onClickHandler()}>Provide Value</button>
            </div>
        )
    }
}

export default RefDemo
