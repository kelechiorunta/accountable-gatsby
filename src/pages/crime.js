import React from "react"
import Layout from "../layout/layout"
import Container from "../layout/container"

import Caption from "../components/typography/caption"
import Summary from "../components/typography/summary"
import Divider from "../components/typography/divider"

import TextGroup from "../components/form-groups/text"
import MultiLineGroup from "../components/form-groups/multiline"
import Record from "../components/cards"
import Label from "../components/controls/label"

const CrimeDetails = () => {
  return (
    <Layout>
      <Container animation="theme-animate">
        <Caption>Jimoh Isiaq</Caption>
        <Summary>See all crimes as reported by Nigerians nationwide...</Summary>
        <div className="w-full flex flex-col-reverse lg:flex-row">
          <div className="w-full xl:w-3/4 xxl:w-3/4">
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

              <div className="w-full sm:w-1/2 p-4 sm:px-8 sm:py-4 xxl:py-6">
                <TextGroup
                  id="report-where"
                  name="Place, report was made"
                  placeholder="No. 1 Obalande Street, Lagos."
                />
              </div>

              <div className="w-full sm:w-1/2 p-4 sm:px-8 sm:py-4 xxl:py-6">
                <TextGroup
                  id="report-when"
                  name="Date, report was made"
                  placeholder="20 October, 2020"
                />
              </div>

              <div className="w-full sm:w-1/2 p-4 sm:px-8 sm:py-4 xxl:py-6">
                <TextGroup
                  id="evidence"
                  name="Evidence (Attachments)"
                  placeholder="evidence-gunshot-1.jpg"
                />
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/4 xxl:w-1/4 lg:pl-8">
            <Label>Photo</Label>
            <div className="bg-primary h-64 rounded-xl mt-3"></div>
          </div>
        </div>

        <div className="flex flex-wrap flex-col sm:flex-row -mx-4 sm:-mx-8">
          <Divider>Other Related Crimes</Divider>
          <Record
            victim="Jimoh Isiaq"
            offender="CSP James Nwafor"
            crime="Manslaugther"
          />

          <Record
            victim="Chinyere Okafor"
            offender="Inspector Akpan Kufre"
            crime="Theft"
          />

          <Record
            victim="Adebayo Emmanuel"
            offender="CSP Akeredolu Akinlabi"
            crime="Manslaugther"
          />

          <Record
            victim="Felix Akande"
            offender="CSP Caroline Afegbai"
            crime="Manslaugther"
          />
        </div>
      </Container>
    </Layout>
  )
}

export default CrimeDetails
