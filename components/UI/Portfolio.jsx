import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";

import portfolioData from "../data/portfolio";

const Portfolio = () => {
  const [filter, setFilter] = useState("Web App");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "Web App") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "Back") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle=" My portfolio" />
            <h4 className="mt-4">Some of my distinguished works</h4>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={` ${
                  filter === "Web App" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Web App")}
              >
                Web App
              </button>
              <button
                className={`${
                  filter === "Back" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Back")}
              >
                Backend
              </button>
            </div>
          </Col>

          {data?.map((item) => (
            <Col lg="4" md="4" sm="6" key={item.id}>
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
