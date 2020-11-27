import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Header = () => {
	return (<StaticQuery
		query={graphql`
	      query {
					logo: file(relativePath: { eq: "images/logo3.png" }) {
						name
						childImageSharp {
							fixed(width: 40) {
								...GatsbyImageSharpFixed_withWebp
							}
						}
					}
	      }
	    `}
		render={data => (
			<header>
				<div className="wrapper">
					<Link to="/" className="logo">
						{/* <img src={logoImage} />  */}
						<Img className="logo-image"
							alt={data.logo.name}
							fixed={data.logo.childImageSharp.fixed} />
						<span className="godot">godot</span>academy
		      </Link>
					<div className="right">
						{/* <Link to="/tutorials" className="btn">
							Tutorials
			  		</Link> */}
						{/* 
						<div className="dropdown">
							<div className="menu-handle btn">Jobs</div>
							<div className="menu left">
								<Link to="/hiring" className="item btn">
									Hiring
				  			</Link>
							</div>
						</div> */}


					</div>
					{/* End right */}
					<div className="clearfix" />
				</div>
				{/* End main wrapper */}
			</header>
		)}
	/>
	)
}

export default Header

