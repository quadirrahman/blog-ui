// want to use react and react dom libraries
// In html file we could have used <script src=""></script?

// here we use es6 module loader -- to load front end-- react, angular, js
// For back-end we use a different module loader

// import varName from 'packageName'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
