import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"

import perk1Img from "../images/speed.svg"
import perk2Img from "../images/piggy-bank.svg"
import perk3Img from "../images/friendly-staff.svg"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

export default () => (
  <>
    <Layout>
      <Banner />
      <TextBlock
        id="about"
        title="Developing a business is never easy, but Smålandia Web Technologies is here to help"
        paragraph="We build modern web solutions that scale so you can focus on your business while we focus on your tech."
      >
        <Link to="perks" smooth={true} duration={500}>
          <Button cta="Tell Me More!" />
        </Link>
      </TextBlock>
      <TextBlockImg
        id="perks"
        title="We have the tools to help you suceed"
        subtitle="Smålandia web technologies has the expertise and know how to guide you in the digital landscape. Our solutions will help you stand out on the playing field."
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk1Img}
            alt="Super fast speed increases"
            title="Speedy"
            content="Super-fast response times ensure your business is not affected"
          />
          <Perk
            img={perk2Img}
            alt="Great savings to be made"
            title="Affordable"
            content="A choice of packages to suit every business type and size"
          />
          <Perk
            img={perk3Img}
            alt="Great service"
            title="Friendly"
            content="We don't just deliver a product, we deliver a service"
          />
        </div>
      </TextBlockImg>
      <Packages
        title="Our Packages"
        para="Once the project is completed we stick around and help you grow your online presence. Choose the perfect solution for you. With benefits to suit all budgets Smålandia can offer amazing value and expert advice"
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="Standard Retainer">
            <ul>
              <li>
                <MdDone />
                Advice
              </li>
              <li>
                <MdDone />
                Consultations
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Support
              </li>
              <li className="linethrough">
                <MdClear color="red" />
                Development
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button cta="I want this!" />
            </Link>
          </Package>
          <Package title="Hyper" active={true}>
            <p>All from Standard +</p>
            <ul>
              <li>
                <MdDone />
                Support
              </li>
              <li>
                <MdDone />
                Planning
              </li>
              <li>
                <MdDone />
                Code Reviews
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button cta="I want this!" />
            </Link>
          </Package>
          <Package title="Super">
            <p>All from Hyper +</p>
            <ul>
              <li>
                <MdDone />
                Technical Direction
              </li>
              <li>
                <MdDone />
                Dedicated Consultation
              </li>
            </ul>
            <Link to="contact" smooth={true} duration={500}>
              <Button cta="I want this!" />
            </Link>
          </Package>
        </IconContext.Provider>
      </Packages>
      <Contact
        id="contact"
        title="Contact Smålandia today and see how we can help your business grow online"
        subtitle="Every second counts when you're looking to grow your online presence. Drop Smålandia a message and we'll get back to you as soon as possible"
      />
    </Layout>
  </>
)
