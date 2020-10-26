import React from "react"
import Layout from "../layout/layout"
import Container from "../layout/container"

import Button from "../components/controls/button"
import TextGroup from "../components/form-groups/text"
import SelectGroup from "../components/form-groups/select"

import Caption from "../components/typography/caption"
import Summary from "../components/typography/summary"

import Record from "../components/cards/record"

const offence = {
  theft: "Theft",
  manslaughter: "Manslaughter",
}

const Crimes = () => {
  return (
    <Layout>
      <Container>
        <Caption>Crimes Database</Caption>
        <Summary>See all crimes as reported by Nigerians nationwide...</Summary>
        <div className="flex flex-wrap flex-col sm:flex-row -mx-4 sm:-mx-8">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 sm:px-8 sm:py-4 xxl:py-8">
            <TextGroup id="name" name="Search Name" placeholder="Jimoh Isiaq" />
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 sm:px-8 sm:py-4 xxl:py-8">
            <SelectGroup id="crime" name="Crime Suffered" data={offence} />
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 sm:px-8 sm:py-4 xxl:py-8">
            <div className="w-full hidden lg:inline-block mt-3">&nbsp;</div>
            <Button id="search">Report Crime</Button>
          </div>

          <div className="w-full"></div>

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

          <Record victim="Maurice Agu" offender="CSP Sam Eyo" crime="Theft" />

          <Record
            victim="Ifedayo Akeem"
            offender="CSP Akeredolu Betty"
            crime="Manslaugther"
          />

          <Record
            victim="Calistus Okon"
            offender="CSP James Nwafor"
            crime="Manslaugther"
          />

          <Record
            victim="Bidemi Osunde"
            offender="CSP Davies Okon"
            crime="Theft"
          />

          <Record
            victim="Ibrahim Adisa"
            offender="CSP Adetunde Akiolu"
            crime="Theft"
          />

          <Record
            victim="Bolarinwa Oyegun"
            offender="CSP Abieyuwa Omoregie"
            crime="Manslaugther"
          />

          <Record
            victim="Ifeanyi Maduabuchi"
            offender="CSP Solomon Ikpi"
            crime="Theft"
          />

          <Record
            victim="Malik Okonofua"
            offender="CSP Gilbert Okon"
            crime="Manslaugther"
          />
        </div>
      </Container>
    </Layout>
  )
}

export default Crimes
