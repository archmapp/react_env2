import React from 'react'

function SS1({ title, content, content2 }) {
	function CC({ __html }) {
		return <div dangerouslySetInnerHTML={{ __html }}></div>
	}

	return (
		<article className="message is-primary my-0 py-5 pl-3">
			<div className="box mr-3 pr-2 mt-2">
				<h2 className="is-size-6 has-background-white-ter mb-1 py-2 pl-4">
					{title}
				</h2>

				<blockquote className="is-size-6">
					<pre className="pre1">
						<CC __html={content}></CC>
						<br />
						　・・・・・
					</pre>
					<pre className="pre1">
						<CC __html={content2}></CC>
						{content2 && (
							<span>
								<br />
								　・・・・・
							</span>
						)}
					</pre>
				</blockquote>
			</div>
		</article>
	)
}

export default SS1