import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import SEO from '../components/SEO';

export default function Layout({ title, description, children }) {
  return (
    <React.Fragment>
      <SEO
        title = {title}
        description = {description}
      />
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </React.Fragment>
  )
}