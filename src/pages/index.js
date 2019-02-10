import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="HeroBlock">
      <div className="HeroLockup">
        <h1>GO ON.<br/>SAY SOMETHING!</h1>
        <p>We specialise in high quality custom printed tees that send a message. test</p>
        <button to="/page-2/">Contact</button>
      </div>
    </div>
    <div className="Contact">
      <h1>LETS TALK SH*RT</h1>
      <p>Contact us via email or phone to receive a quote.</p>
      <form>
        <label>
          Message
    <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>

  </Layout>
)

export default IndexPage
