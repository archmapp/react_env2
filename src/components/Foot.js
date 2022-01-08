import React from 'react'

function Foot() {
  return (
		<nav id="orderB">
			<div className="is-flex is-justify-content-space-around is-align-items-center has-background-grey mt-0 py-2 ">
				<span className="is-flex is-justify-content-space-around is-align-items-center">
					<button
						className="button is-primary has-tooltip-top has-tooltip-warning"
						data-tooltip="トグル: [Escape]キーも可"
						id="quick"
					>
						ゲーム一覧
					</button>
					<span className="has-text-white ml-5">React ゲームアプリ</span>
				</span>
				<button
					className="button has-background-grey has-text-white-ter is-pulled-right "
					onClick={() => $$.scrTT('.heroBottom')}
				>
					<i className="fa fa-arrow-circle-o-up"></i>&nbsp;&nbsp;トップ
				</button>
			</div>
		</nav>
	)
}

export default Foot
