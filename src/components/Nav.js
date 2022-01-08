import faviconBulma from '../assets/img/faviconBulma.png'

import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Nav.module.scss'

function Nav() {
	useEffect(() => {
		$$.bulmaMenu('#burger', '#nav-links')
		$$.qAe('.dd2m a', (e) => {
			e.preventDefault()
			$$.q('.sel2').innerText = e.target.innerText
		})
	}, [])

	const pageLoading = () => {
		$$.qcL_T('#selTop')
	}

	return (
		<>
			<nav
				className={`navbar is-primary has-text-grey-light has-text-weight-medium is-radiusless pb-2 ${styles.nav}`}
				role="navigation"
				aria-label="Main navigation"
				id="nav"
			>
				<div className="container">
					<div className="navbar-brand ml-2">
						<NavLink
							exact
							to="/"
							className="navbar-item has-tooltip-bottom mt-2 mr-5 pb-3"
							data-tooltip="Top page"
						>
							BulmaProject
						</NavLink>
						<div id="burger" className="navbar-burger" data-target="navbarMenu">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>

					<div
						className="navbar-menu is-primary mr-3"
						style={{ position: 'absolute', right: '5px' }}
						id="nav-links"
					>
						<div className="navbar-start navbar-item">
							<a
								href="https://bulma.io/documentation/"
								target="_blank"
								rel="noopener noreferrer"
								className="button navbar-item is-primary is-fullwidth has-tooltip-bottom mt-1"
								data-tooltip="Bulmaドキュメントへ"
							>
								<span className="icon">
									{/* // src="./assets/img/bulma32.ico" */}
									<img src={faviconBulma} title="Bulma home!" alt="bulma" />
								</span>
								<span>Bulma</span>
							</a>
						</div>
						<div className="navbar-end has-text-dark px-4 is-flex is-align-items-center">
							<NavLink
								to="/NshortJS"
								className="navbar-item"
								onClick={pageLoading}
							>
								shortJS.js
							</NavLink>
							<NavLink
								to="/Nreact"
								className="navbar-item"
								onClick={pageLoading}
							>
								React
							</NavLink>
								<NavLink
								to="/About"
								className="navbar-item has-tooltip-bottom has-tooltip-warning"
								data-tooltip="情報・サンプル集"
								onClick={pageLoading}
							>
								About
							</NavLink>

							<button
								className="button is-info is-outlined has-tooltip-bottom has-tooltip-warning ml-2"
								data-tooltip="活動・紹介へ"
								onClick={() =>
									window.open('https://archmapp.github.io/about2/')
								}
							>
								About2
							</button>
						</div>
						{/* bulma-pageloader/ in bulma-extensions.min.css */}
						<div id="selTop" className="pageloader" style={{ opacity: 0.4 }}>
							<span className="title has-text-black has-text-weight-bold is-size-5">
								ナビゲーティング ...
							</span>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Nav
