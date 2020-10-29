import React from "react"
import Layout from "../layout/layout"
import Container from "../layout/container"

import Caption from "../components/typography/caption"
import Summary from "../components/typography/summary"

import TextGroup from "../components/form-groups/text"
import MultiLineGroup from "../components/form-groups/multiline"

const CrimeDetails = () => {
  return (
    <Layout>
      <Container>
        <Caption>Jimoh Isiaq</Caption>
        <Summary>See all crimes as reported by Nigerians nationwide...</Summary>
        <div className="w-full flex flex-wrap flex-col sm:flex-row">
          <div className="w-full xl:w-3/5 xxl:w-4/5">
            <div className="flex flex-wrap flex-col sm:flex-row -mx-4 sm:-mx-8">
              <div className="w-full sm:w-1/2 p-4 sm:px-8 sm:py-4 xxl:py-6">
                <TextGroup
                  id="name"
                  name="Offender"
                  placeholder="CSP James Nwafor"
                />
              </div>

              <div className="w-full sm:w-1/2 p-4 sm:px-8 sm:py-4 xxl:py-6">
                <TextGroup
                  id="crime"
                  name="Crime Committed"
                  placeholder="Manslaughter"
                />
              </div>

              <div className="w-full sm:w-1/2 p-4 sm:px-8 sm:py-4 xxl:py-6">
                <TextGroup
                  id="reporter"
                  name="Reported by"
                  placeholder="Enoch Adeboye"
                />
              </div>

              <div className="w-full sm:w-1/2 p-4 sm:px-8 sm:py-4 xxl:py-6">
                <TextGroup
                  id="relationship"
                  name="Relationship to Reporter"
                  placeholder="Brother-In-Law"
                />
              </div>

              <div className="w-full sm:w-1/2 p-4 sm:px-8 sm:py-4 xxl:py-6">
                <TextGroup
                  id="offence-where"
                  name="Where (Place of Incidence)"
                  placeholder="No.1 Surulere, Lagos"
                />
              </div>

              <div className="w-full sm:w-1/2 p-4 sm:px-8 sm:py-4 xxl:py-6">
                <TextGroup
                  id="offence-when"
                  name="When (Date of Incidence)"
                  placeholder="20 October 2020"
                />
              </div>

              <div className="w-full p-4 sm:px-8 sm:py-4 xxl:py-6">
                <MultiLineGroup
                  id="description"
                  name="Where (Place of Incidence)"
                  placeholder="No.1 Surulere, Lagos"
                />
              </div>
            </div>
          </div>
          <div className="w-full xl:w-2/5 xxl:w-1/5">Ok</div>
        </div>
      </Container>
    </Layout>
  )
}

export default CrimeDetails
