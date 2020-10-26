import React from "react"
import Caption from "../components/typography/caption"
import Summary from "../components/typography/summary"
import Container from "../layout/container"
import Layout from "../layout/layout"

const ErrorPage = () => {
  return (
    <Layout>
      <Container>
        <Caption>Error!</Caption>
        <Summary>
          The page you're trying to view is unfortunately not available...
        </Summary>
      </Container>
    </Layout>
  )
}

export default ErrorPage
