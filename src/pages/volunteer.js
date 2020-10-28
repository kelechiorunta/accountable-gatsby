import React from "react"
import Layout from "../layout/layout"
import Container from "../layout/container"

import Caption from "../components/typography/caption"
import Summary from "../components/typography/summary"
import Divider from "../components/typography/divider"

import TextGroup from "../components/form-groups/text"
import EmailGroup from "../components/form-groups/email"
import SelectGroup from "../components/form-groups/select"
import Button from "../components/controls/button"

const profession = {
  lawyer: "Lawyer",
  doctor: "Medical Doctor",
  sponsor: "Financial Sponsor",
  designer: "Graphics Designer",
  event_planner: "Event Planner",
  therapist: "Therapist",
  pastor: "Pastor",
  cateerer: "Cateerer",
}

const Volunteer = () => {
  return (
    <Layout>
      <Container>
        <Caption>Join Us</Caption>
        <Summary>Lend your support in any way you can.</Summary>
        <div className="flex flex-wrap flex-col sm:flex-row -mx-4 sm:-mx-8">
          <Divider>Personal Details</Divider>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 sm:px-8 sm:py-4 xxl:py-6">
            <TextGroup
              id="volunteer-name"
              name="Name"
              placeholder="Chineye Hadiza Yetunde"
            />
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 sm:px-8 sm:py-4 xxl:py-6">
            <TextGroup
              id="volunteer-mobile"
              name="Telephone"
              placeholder="+234"
            />
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 sm:px-8 sm:py-4 xxl:py-6">
            <EmailGroup
              id="volunteer-email"
              name="E-mail Address"
              placeholder="you@email"
            />
          </div>

          <div className="w-full sm:w-1/2 p-4 sm:px-8 sm:py-4 xxl:py-4">
            <SelectGroup
              id="volunteer-profession"
              name="Volunteer As"
              data={profession}
            />
          </div>

          <div className="w-full"></div>

          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 sm:px-8 py-10">
            <Button>Volunteer Now</Button>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Volunteer
