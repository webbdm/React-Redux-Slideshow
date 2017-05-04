import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import counterApp from './reducer'
import Counter from './Counter'

let store = createStore(counterApp);
let images = [
    {
        "url": "http://dummy-images.com/abstract/dummy-480x270-Circus.jpg",
        "caption": "Pattern"
    }, {
        "url": "http://dummy-images.com/abstract/dummy-454x280-Menu.jpg",
        "caption": "Dunes"
    }, {
        "url": "http://dummy-images.com/abstract/dummy-600x370-Goemetry.jpg",
        "caption": "Spiral"
    }
];

render(
    <Provider store={store}>
    <Counter images={images}/>
</Provider>, document.getElementById('root'))
