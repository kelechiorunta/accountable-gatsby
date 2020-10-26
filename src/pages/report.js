import React from "react"
import Layout from "../layout/layout"
import Container from "../layout/container"

import Caption from "../components/typography/caption"
import Summary from "../components/typography/summary"

import ArrowIcon from "../components/icons/arrow-icon"

import TextGroup from "../components/form-groups/text"
import EmailGroup from "../components/form-groups/email"
import SelectGroup from "../components/form-groups/select"
import DateGroup from "../components/form-groups/date"
import MultiLineGroup from "../components/form-groups/multiline"
import NumberGroup from "../components/form-groups/number"
import FileGroup from "../components/form-groups/file"

import Button from "../components/controls/button"

const offence = {
  theft: "Theft",
  manslaughter: "Manslaughter",
}

const boolean = {
  no: "No",
  yes: "Yes",
}

const sex = {
  M: "M",
  F: "F",
}

const relationship = {
  brother: "Brother",
  sister: "Sister",
  son: "Son",
  daughter: "Daughter",
  father: "Father",
  mother: "Mother",
  colleague: "Colleague",
  concerned: "Concerned Citizen",
  son_in_law: "Son-In-Law",
  daughter_in_law: "Daughter-In-Law",
  father_in_law: "Father-In-Law",
  mother_in_law: "Mother-In-Law",
  brother_in_law: "Brother-In-Law",
  sister_in_law: "Sister-In-Law",
  uncle: "Uncle",
  aunt: "Aunty",
  nephew: "Nephew",
  niece: "Niece",
}

const states = {
  Lagos: "Lagos",
  Abuja: "Abuja",
  Abia: "Abia",
}

const ReportPage = () => {
  return (
    <Layout>
      <Container>
        <Caption>Report Crime</Caption>
        <Summary>
          Get justice for your family today, report the crime...
        </Summary>
        <div class="flex flex-wrap flex-col sm:flex-row -mx-4 sm:-mx-8">
          <div class="w-full sm:w-1/2 lg:w-1/3 p-4 sm:px-8 sm:py-4">
            <TextGroup id="name" name="Name" placeholder="Francis Adeboye" />
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/3 p-4 sm:px-8 sm:py-4">
            <TextGroup id="telephone" name="Telephone" placeholder="+234" />
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/3 p-4 sm:px-8 sm:py-4">
            <EmailGroup
              id="email"
              name="E-mail Address"
              placeholder="you@email.com"
            />
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/2 p-4 sm:px-8 sm:py-4">
            <TextGroup
              id="offender"
              name="Offender"
              placeholder="CSP James Nwafor"
            />
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/2 p-4 sm:px-8 sm:py-4">
            <SelectGroup
              id="offence"
              name="Crime(s) Committed by Offender"
              data={offence}
            />
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/3 p-4 sm:px-8 sm:py-4">
            <TextGroup
              id="offence-place"
              name="Where (Place of Incidence)"
              placeholder="CSP James Nwafor"
            />
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/3 p-4 sm:px-8 sm:py-4">
            <SelectGroup
              id="offence-state"
              name="State of Incidence"
              data={states}
            />
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/3 p-4 sm:px-8 sm:py-4">
            <DateGroup id="offence-date" name="When (Date of Incidence)" />
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/4 p-4 sm:px-8 sm:py-4">
            <TextGroup
              id="victim-name"
              name="Victim's Name"
              placeholder="Jimoh Isiaq"
            />
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/4 p-4 sm:px-8 sm:py-4">
            <FileGroup
              id="victim-photo"
              name="Victim's Photo"
              placeholder="Upload Photo"
            />
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/4 p-4 sm:px-8 sm:py-4">
            <SelectGroup id="victim-sex" name="Victim's Sex" data={sex} />
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/4 p-4 sm:px-8 sm:py-4">
            <NumberGroup id="victim-age" name="Victim's Age" placeholder="28" />
          </div>

          <div class="w-full p-4 sm:px-8 sm:py-4">
            <MultiLineGroup
              id="description"
              name="Describe Offence"
              placeholder="Please describe offence in detail"
            />
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/4 p-4 sm:px-8 sm:py-4">
            <SelectGroup
              id="reported"
              name="Was this offence reported?"
              data={boolean}
            />
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/4 p-4 sm:px-8 sm:py-4">
            <TextGroup
              id="reported-who"
              name="If Yes, who was it reported to?"
              placeholder="CSP Idris Abubakar"
            />
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/4 p-4 sm:px-8 sm:py-4">
            <DateGroup
              id="reported-date"
              name="If Yes, when was it reported?"
            />
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/4 p-4 sm:px-8 sm:py-4">
            <TextGroup
              id="reported-where"
              name="If Yes, where was it reported?"
              placeholder="Police Headquarters, Abuja"
            />
          </div>

          <div class="w-full flex flex-row">
            <div class="w-3/5 lg:w-1/4 p-4 sm:px-8 sm:py-4">
              <TextGroup
                id="evidence"
                name="Attach Evidence"
                placeholder="photo1.jpg"
              />
            </div>

            <div class="w-2/5 lg:w-1/4 p-4 sm:px-8 sm:py-4">
              <div class="font-medium">&nbsp;</div>
              <button
                id="attach"
                class="w-full bg-theme block rounded-lg mt-3 px-6 py-4 text-white text-left tracking-tighter font-medium"
              >
                <span class="hidden sm:inline">Add More Evidence</span>
                <span class="sm:hidden">Add</span>
                <div class="float-right">
                  <ArrowIcon />
                </div>
              </button>
            </div>
          </div>

          <div class="w-full"></div>

          <div class="w-full sm:w-1/2 lg:w-1/2 p-4 sm:px-8 sm:py-4">
            <SelectGroup
              id="certify"
              name="Do you certify that the information you have presented is correct?"
              data={boolean}
            />
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/2 p-4 sm:px-8 sm:py-4">
            <SelectGroup
              id="relationship"
              name="Victim's Relationship to you"
              data={relationship}
            />
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/4 p-4 sm:px-8 sm:py-4">
            <Button>Report Crime</Button>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default ReportPage
