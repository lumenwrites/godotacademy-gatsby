import React, { Component } from 'react'
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class index extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="cta">
          <h1>Create Your First Godot Game in 1 Hour</h1>
          <div className="tagline">
            This is the perfect place to start learing Godot. <br/>
            Enter your email below, and get instant access to this short introductory course!
          </div>

          <div class="video">
            <div class="video-container">
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/D5cd8DaCQ_4?controls=0&showinfo=0" allowfullscreen></iframe>
            </div>
          </div>
          
          <form className="cta-form" action="https://gumroad.com/follow_from_embed_form" method="post">
            <input name="seller_id" type="hidden" value="1188969138974" />
            <input name="email" placeholder="Enter your email..." type="email" />
            <button className="btn-cta" type="submit">Get Free Instant Access</button>
          </form>


          <div className="skills">
            <div className="wrapper">
              <a href="https://www.youtube.com/channel/UCBs-wocdR7QIzFWdATBNhPg" className="skill">
                <div className="icon">
                  <FontAwesomeIcon icon={["fab", "youtube"]} />
                </div>

                <h2>YouTube Tutorials</h2>
              </a>

              {/* <a href="https://www.instagram.com/learndigitalart/" className="skill">
                <div className="icon">
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </div>

                <h2>Instagram</h2>
              </a> */}

              <a href="https://discord.gg/Wbzuk2JP8Y" className="skill">
                <div className="icon">
                  <FontAwesomeIcon icon={["fab", "discord"]} style={{ fontSize: "57px" }} />
                </div>

                <h2>Discord Community</h2>

              </a>
            </div>
          </div>

        </div>

        <SEO title="Learn Digital Art" description="Learn Digital Art" />
      </>
    )
  }
}
