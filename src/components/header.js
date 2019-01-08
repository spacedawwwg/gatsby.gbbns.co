import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

const Header = () => (
	<StaticQuery
		query={graphql`
			query siteInfo {
				site {
					siteMetadata {
						author
						siteTitleTag
						siteDescription
						introTitle
						tagline
						url
					}
				}
			}
		`}

		render={data => (
			<header>
				<Link to="/"
							activeClassName="is-active">
					<span>{data.site.siteMetadata.url}</span>
					<span>{data.site.siteMetadata.author}</span>
					<span>{data.site.siteMetadata.siteTitleTag}/</span>
				</Link>

				<nav>
					<ul>
						<li><a href="/">About</a></li>
						<li><a href="/">Writing</a></li>
						<li><a href="/">Speaking</a></li>
						<li><a href="/">Contact</a></li>
					</ul>
				</nav>

				<aside>
					<h3>Colophon</h3>
					<ul>
						<li>Built using: Visual Studio Code</li>
						<li>Generated with: gatsby</li>
						<li>Hosted on: Github</li>
						<li>Published on: Netlify</li>
						<li>Background colour: #000000 </li>
						<li>Typeface: Space Mono</li>
						<li>H1 colour: #272727</li>
						<li>H2 colour: #FFFFFF</li>
						<li>Bodycopy colour: #A3A3A3</li>
						<li>Background image: On / Off</li>
					</ul>
				</aside>

			</header>
		)}
	/>
)

export default Header
