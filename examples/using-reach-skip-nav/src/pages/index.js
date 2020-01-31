import React from "react"
import { Router, Link, Location } from "@reach/router"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

import "./main.css"

const App = () => (
  <div className="app">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Gatsby @reach Skip Nav Example Site</title>
      <html lang="en" />
    </Helmet>
    <Layout>
      <FadeTransitionRouter>
        <Page path="/" page="1" />
        <Page path="page/:page" />
      </FadeTransitionRouter>
    </Layout>
  </div>
)

const FadeTransitionRouter = props => (
  <Location>
    {({ location }) => (
      <Router location={location} className="router">
        {props.children}
      </Router>
    )}
  </Location>
)

const Page = props => (
  <div
    className="page"
    style={{ background: `hsl(${props.page * 75}, 60%, 60%)` }}
  >
    <h1>Welcome to Page {props.page}!</h1>
    <span>
      This <Link to="/">link to page 1</Link> is the next in tab order if you
      click the skip nav link.
    </span>
  </div>
)

export default App