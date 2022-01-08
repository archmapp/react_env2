import React from 'react'

function About() {

		return (
			<>
				<section className="section">
					<div className="container">
						<div>
							<div className="is-size-4 has-text-weight-medium">
								情報　[<span className="is-size-5">提供： </span>
								archmapp@i.softbank.jp]
							</div>
							<span>About</span>
							<div className="box mt-2 mb-6 py-4">
								<h1 className="notification title has-background-info-dark has-text-white">
									WEBアプリで楽しく　💕
								</h1>

								<ul className="panel">
									<li>
										<h1 className="panel-block subtitle has-background-info-light">
											team:&nbsp;&nbsp;
											<span
												className="t-s has-text-weight-bold has-text-black-ter"
												style={{ transform: 'skewX(-15deg)' }}
											>
												アーキエムアップ
											</span>
										</h1>
									</li>
									<li className="my-0 ml-5 pt-2">所在地：北九州市</li>
									<li className="ml-5 py-2">
										メール：
										<a href="mailto:archmapp@i.softbank.jp">
											mailto: archmapp@i.softbank.jp
										</a>
									</li>
								</ul>

								<ul className="panel">
									<li>
										<h1 className="panel-block subtitle has-background-info-light">
											サービス
										</h1>
									</li>
									<li className="wf-notosansjapanese has-text-weight-bold has-text-primary-dark is-size-4 my-0 ml-5 pt-2">
										ソフトウェア
										<span className="is-size-5 has-text-black"> ・ </span>
										WEBアプリ{' '}
										<span className="is-size-5 has-text-black ml-4">
											開発<span className="is-size-6 has-text-black"> & </span>
											教育
										</span>
									</li>
								</ul>
							</div>
							<div className="box py-4">
								<h1 className="notification title has-background-warning-dark has-text-white">
									最近公開したWEBアプリ　💕
								</h1>

								<ul className="panel">
									<li>
										<h1 className="panel-block subtitle has-background-warning-light">
											入札アプリ （建築編）
										</h1>
									</li>
									<li className="my-0 ml-5 pt-2">
										<span className="iken is-size-4 has-text-weight-bold has-text-primary-dark">
											i建築
										</span>
										<span className="is-size-6 ml-6">
											予定価格とモデルから、素早く一般工事費を推定するWEBアプリ
										</span>
									</li>
									<li className="ml-5 py-2">
										<a
											href="https://safe-peak-55766.herokuapp.com/api"
											className="ml-3"
										>
											URL：https://safe-peak-55766.herokuapp.com/api
										</a>
									</li>
								</ul>

								{/* C:\Users\Owner\Desktop\Nodejs\mean\BradWebpack\BRAD_react-sass-webpack\2 route slide\app\ */}
								<ul className="panel">
									<li>
										<h1 className="panel-block subtitle has-background-warning-light">
											さんすう入門
										</h1>
									</li>
									<li className="my-0 ml-5 pt-2">
										<span className="iken is-size-4 has-text-weight-bold has-text-danger-dark">
											初めての【 けいさん 】
										</span>
										<span className="is-size-6 ml-6">
											小学一年生　　~~ たし算・ひき算・かけ算 ~~
										</span>
									</li>
									<li className="ml-5 py-2">
										<a
											href="https://affectionate-wozniak-de01a2.netlify.app/"
											className="ml-3"
										>
											URL：https://affectionate-wozniak-de01a2.netlify.app/
										</a>
									</li>
								</ul>

								<ul className="panel">
									<li>
										<h1 className="panel-block subtitle has-background-warning-light">
											しんけいすいじゃく
										</h1>
									</li>
									<li className="my-0 ml-5 pt-2">
										<span className="iken is-size-4 has-text-weight-bold has-text-danger-dark">
											忍者トランプ
										</span>
										<span className="is-size-6 ml-6">Shaun　~~ 忍者 ~~</span>
									</li>
									<li className="ml-5 py-2">
										<a
											href="https://jolly-lamport-67e201.netlify.app"
											className="ml-3"
										>
											URL：https://jolly-lamport-67e201.netlify.app
										</a>
									</li>
									<li className="ml-5 py-2">
										<a
											href="https://www.youtube.com/watch?v=ZCKohZwGZMw&list=PL4cUxeGkcC9iQ7g2eoNXHCJBBBz40S_Lm&index=1"
											className="ml-3"
										>
											ShaunのYouTube講座：ww.youtube.com
										</a>
									</li>
								</ul>

								<ul className="panel">
									<li>
										<h1 className="panel-block subtitle has-background-warning-light">
											ランダムカード<span className="is-size-6">と</span>
											パレットカード&nbsp;
											<span style={{ color: 'red' }}>❣</span>
										</h1>
									</li>
									<li className="my-0 ml-5 pt-2">
										<span className="iken is-size-4 has-text-weight-bold has-text-danger-dark">
											一発勝負
										</span>
										<span className="is-size-6 ml-6">
											記憶ゲーム　　~~ ８枚のカードを記憶 ~~
										</span>
									</li>
									<li className="ml-5 py-2">
										<a href="https://flashcard2.netlify.app">
											URL：https://flashcard2.netlify.app
										</a>
									</li>
								</ul>

								<ul className="panel">
									<li>
										<h1 className="panel-block subtitle has-background-warning-light">
											いん石を狙え&nbsp;<span style={{ color: 'red' }}>❣</span>　{' '}
											<span className="is-size-6">タブレット以上</span>
										</h1>
									</li>
									<li className="my-0 ml-5 pt-2">
										<span className="iken is-size-4 has-text-weight-bold has-text-danger-dark">
											宇宙の旅
										</span>
										<span className="is-size-6 ml-6">
											矢印キー(← →)&nbsp;と&nbsp;[スペース]キーだけを使って
										</span>
									</li>
									<li className="ml-6 py-2">
										　　　　　　　　　~~ シューティングゲーム ~~
									</li>
									<li className="ml-5 py-2">
										<a href="https://space-game2.netlify.app">
											URL：https://space-game2.netlify.app
										</a>
									</li>
								</ul>

								<ul className="panel">
									<li>
										<h1 className="panel-block subtitle has-background-warning-light">
											FLEXBOX を体験
										</h1>
									</li>
									<li className="my-0 ml-5 pt-2">
										<span className="wf-notosansjapanese is-size-4 has-text-weight-bold has-text-warning-dark">
											FLEXBOX 練習帳
										</span>
										<span className="is-size-6 ml-6">
											FLEXBOXの基本機能を確認します
										</span>
									</li>
									<li className="ml-5 py-2">
										<a
											href="https://archmapp2.github.io/bulmaJS/src/sub/flex/Diagram.html"
											className="ml-3"
										>
											URL：https://archmapp2.github.io/bulmaJS/src/sub/flex/Diagram.html
										</a>
									</li>
								</ul>

								<ul className="panel">
									<li>
										<h1 className="panel-block subtitle has-background-warning-light">
											Bluma Tiles の自動生成
										</h1>
									</li>
									<li className="my-0 ml-5 pt-2">
										<span className="wf-notosansjapanese is-size-4 has-text-weight-bold has-text-info-dark">
											Tilesの自動生成
										</span>
										<span className="is-size-6 ml-6">
											Bluma Tiles をランダムに作成します。
										</span>
									</li>
									<li className="ml-5 py-2">
										<a
											href="https://archmapp2.github.io/bulmaJS/src/sub/js/tilesLayout$$.html"
											className="ml-3"
										>
											URL：https://archmapp2.github.io/bulmaJS/src/sub/js/tilesLayout$$.html
										</a>
									</li>
								</ul>
							</div>
							<div className="box my-6">
								<h1 className="notification title has-background-success-dark has-text-white">
									WEBアプリで楽しく　💕
								</h1>

								<ul className="panel is-flex is-justify-content-center is-align-content-center">
									<li>
										<h1 className="panel-block subtitle has-background-info-light mt-2">
											team:&nbsp;&nbsp;
											<span
												className="t-s has-text-weight-bold has-text-black-ter"
												style={{ transform: 'skewX(-15deg)' }}
											>
												アーキエムアップ
											</span>
										</h1>
									</li>
									<li>
										<h1 className="wf-notosansjapanese is-size-6 panel-block subtitle has-background-success-light ml-6 my-3">
											全てに感謝！　💞💕
										</h1>
									</li>
								</ul>
							</div>
							<button
								className="button has-background-grey has-text-white-ter is-pulled-right mr-5 mt-3"
								onClick={() => $$.scrTT('#top')}
							>
								<i className="fa fa-arrow-circle-o-up"></i>&nbsp;&nbsp;トップ
							</button>
						</div>
					</div>
				</section>
			</>
		)
}

export default About
