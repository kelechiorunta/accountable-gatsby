import React from "react"
import Layout from "../layout/layout"
import Container from "../layout/container"

import Caption from "../components/typography/caption"
import Summary from "../components/typography/summary"
import LogoIcon from "../components/icons/logo"
import Anchor from "../components/anchors"

const Laws = () => {
  return (
    <Layout>
      <Container animation="theme-animate">
        <Caption>Download PDF</Caption>
        <Summary>Get access to all our laws. Download now!</Summary>
        <div className="flex flex-wrap flex-col sm:flex-row -mx-4 sm:-mx-8">
          <div className="w-full lg:w-1/2 p-4 sm:px-8 sm:py-4 xxl:py-8">
            <div className="flex flex-col sm:flex-row text-center sm:text-left">
              <div class="mb-5 sm:mb-0">
                <LogoIcon />
              </div>
              <div className="sm:ml-8">
                <h1 className="text-theme text-3xl font-bold tracking-tightest mb-3">
                  The Nigerian Constitution
                </h1>
                <div className="text-secondary">
                  <p className="mt-3">1963 constitution (First Republic)</p>
                  <p className="mt-3">1979 constitution (Second Republic)</p>
                  <p className="mt-3">1993 constitution (Third Republic)</p>
                  <p className="mt-3">1999 constitution (Fourth Republic)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-4 sm:px-8 sm:py-4 xxl:py-8">
            <div className="flex flex-col sm:flex-row text-center sm:text-left">
              <div class="mb-5 sm:mb-0">
                <LogoIcon />
              </div>
              <div className="sm:ml-8">
                <h1 className="text-theme text-3xl font-bold tracking-tightest mb-3">
                  Police Act 2020
                </h1>
                <div className="text-secondary">
                  <p className="mt-3">Revised Police Act of Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full"></div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 sm:px-8 py-16 xxl:py-8">
            <Anchor url="/crimes">Download Now</Anchor>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Laws
