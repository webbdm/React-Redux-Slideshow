import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counterApp from './reducer'
import Counter from './Counter'

let store = createStore(counterApp);
let headers =["One","Two"];


render(
  <Provider store={store}>
    <Counter headers={headers}/>
  </Provider>,
  document.getElementById('root')
)
