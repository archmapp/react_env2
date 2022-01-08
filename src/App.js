// /* eslint-disable no-undef */
// import React, { useState, useEffect, useRef, useCallback } from 'react'
import './scss/ripple.scss'
import QuickView from './utils/QuickView'

import Nav from './components/Nav'
import Main from './components/Main'
import Foot from './components/Foot'

// import $$ from './js/shortJS'

function App() {
	return (
		<>
			<Nav />
			<Main />
			<Foot />

			<QuickView />
		</>
	)
}

export default App
