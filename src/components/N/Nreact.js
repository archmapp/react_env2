import React from 'react'

function Nreact() {
	return (
		<>
			<section className="section">
				<div className="container">
					<div>
						<div className="is-size-4 has-text-weight-medium">[React]</div>
						Nreact
					</div>
					<div className="is-flex is-justify-content-center is-align-items-center">
						準備中！ TEST
					</div>
					<button
						className="button has-background-grey has-text-white-ter is-pulled-right mr-5 mt-3"
						onClick={() => $$.scrTT('#top')}
					>
						<i className="fa fa-arrow-circle-o-up"></i>&nbsp;&nbsp;トップ
					</button>
				</div>
			</section>
		</>
	)
}

export default Nreact
