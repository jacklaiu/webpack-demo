import React, {Component} from 'react'
import { createStore } from 'redux';
const store = createStore(() => {});

const Counter = ({ value }) => (
    <h1>{value}</h1>
);
class Counter extends Component {
    render = () => {
        React.render(
            <Counter value={store.getState()}/>,
            document.getElementById('root')
        );
    };

}
store.subscribe(render);

export default Counter
