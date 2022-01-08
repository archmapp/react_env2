/* eslint-disable no-undef */
import React from 'react'
import { NavLink } from 'react-router-dom'

// import './Aside.css'
// import './Aside.scss'
import styles from './Aside.module.scss'

function Aside() {
	const aStyle = { color: 'Blue', fontWeight: 'bold' }

	const pageLoading = () => {
		$$.qcL_T('#selAside', 500)
	}

	return (
		<>
			{/* <aside id="aside1" className="sidebarLeft"> */}
			<aside id="aside1" className={styles.sidebarLeft}>
				<article
					className="panel is-info mb-6"
					style={{ borderRadius: '0px', width: '100%', height: '100vh' }}
				>
					<p
						className="panel-heading has-text-centered has-background-info-dark is-size-6"
						style={{ borderBottom: 'solid 1px' }}
					>
						メニュー
					</p>

					<nav className="is-flex is-flex-direction-column has-text-centered has-background-info-light has-text-white py-3 mb-4">
						<NavLink
							exact
							to="/"
							className="py-1"
							activeStyle={aStyle}
							onClick={pageLoading}
						>
							トップ
						</NavLink>
						<NavLink
							to="/Elements"
							className="pt-1"
							activeStyle={aStyle}
							onClick={pageLoading}
						>
							Elements
						</NavLink>
						<NavLink
							to="/Components"
							className="pt-1"
							activeStyle={aStyle}
							onClick={pageLoading}
						>
							Components
						</NavLink>
						<NavLink
							to="/Form"
							className="pt-1"
							activeStyle={aStyle}
							onClick={pageLoading}
						>
							Form
						</NavLink>
						<NavLink
							to="/Layout"
							className="pt-1"
							activeStyle={aStyle}
							onClick={pageLoading}
						>
							Layout
						</NavLink>

						{/* <NavLink
							to="/About"
							className="has-text-black-bis py-1 has-tooltip-right has-tooltip-warning"
							data-tooltip="情報・サンプル集"
							onClick={pageLoading}
						>
							About
						</NavLink> */}
						<div style={{ textAlign: 'center' }} className="my-2">
							<button
								className="button is-info is-outlined has-tooltip-right has-tooltip-warning"
								data-tooltip="活動・紹介へ"
								onClick={() =>
									window.open('https://archmapp.github.io/about2/')
								}
							>
								About2
							</button>
						</div>
					</nav>

					{/* bulma-pageloader/ in bulma-extensions.min.css */}
					<div
						id="selAside"
						className="pageloader is-left-to-right is-info"
						style={{ opacity: 0.5 }}
					>
						<span className="title has-text-black has-text-weight-bold is-size-5">
							ナビゲーティング ...
						</span>
					</div>
				</article>
			</aside>
		</>
	)
}

export default Aside
