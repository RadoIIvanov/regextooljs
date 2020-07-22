import React from 'react';
import {draw} from './drawings';

class Draw extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        draw(this.props.canvasId);
    }

    render () {
        return (<div>
            <button id='retToPreConst' onClick={(event) => {this.props.butCb(this.props.retPage)}}>&#8592; Return Back</button>
            <canvas id={this.props.canvasId}></canvas>
        </div>)
    }
}

export default Draw;

