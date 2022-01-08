// import * as $$ from '../js/shortJS'

import React, { useState, useEffect, useRef } from 'react'
import { useLocation, Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import SlideRoutes from 'react-slide-routes'

import Top from './B/Top'
import Overview from './B/Overview'
import Customize from './B/Customize'
import Concepts from './B/Concepts'
import Variables from './B/Variables'
import Columns from './B/Columns'
import Elements from './B/Elements'
import Components from './B/Components'
import Form from './B/Form'
import Layout from './B/Layout'
import Helpers from './B/Helpers'
import Extensions from './B/Extensions'
// Nav
import NshortJS from './N/NshortJS'
import Nreact from './N/Nreact'

function Main() {
	const location = useLocation()
	
	return (
		<>
			<main className="pt-0 is-flex-grow-1">
				<div className="container">
					<div className="columns is-centered">
						<div className="column is-size-6 pt-0">
							<SlideRoutes location={location} duration={500} className="mb-1">
								{/* <Switch> */}
									<Route
										path="/"
										exact
										component={Top}
										className="active mt-1"
									/>
									<Route path="/Overview" component={Overview} />
									<Route path="/Customize" component={Customize} />
									<Route path="/Concepts" component={Concepts} />
									<Route path="/Variables" component={Variables} />
									<Route path="/Columns" component={Columns} />
									<Route path="/Elements" component={Elements} />
									<Route path="/Components" component={Components} />
									<Route path="/Form" component={Form} />
									<Route path="/Layout" component={Layout} />
									<Route path="/Helpers" component={Helpers} />
									<Route path="/Extensions" component={Extensions} />
									
									<Route path="/NshortJS" component={NshortJS} />
									<Route path="/Nreact" component={Nreact} />
									<Route component={Top} className="" />
								{/* </Switch> */}
							</SlideRoutes>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default Main
