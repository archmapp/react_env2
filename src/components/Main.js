import React from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Top from './B/Top'

import Aside from './Aside'
// import Components from './B/Components'

function Main() {
	return (
		<>
			<main className="main">
				<div className="container">
					<div className="columns is-mobile is-gapless is-vcentered">
						<div className="column is-2 has-background-primary-light">
							<Aside />
						</div>
						<div className="column is-10">
							<Switch>
								{/* <Route path="/Components" component={Components} /> */}
								<Route component={Top} className="" />
							</Switch>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default Main
