import React from "react"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </React.Fragment>
  )
}