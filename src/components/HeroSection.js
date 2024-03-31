import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1 style={{ fontFamily: "cursive" }}>{name}</h1>
            <p style={{ fontFamily: "cursive" }}>
              Welcome to{" "}
              <span style={{ color: "purple", fontSize: "20px" }}>
                SOURAV STORE
              </span>
              ,a one-stop solution for all your shopping needs. We’ve built this
              platform with you in mind, leveraging the latest technologies to
              ensure a seamless and enjoyable shopping experience. From the
              latest gadgets to fashion trends, home essentials to personal care
              products, we’ve got it all. Shop with us and experience the
              difference! Happy shopping! 🛍️
            </p>
            <NavLink>
              <Button>Shop Now</Button>
            </NavLink>
          </div>
          {/* our homepage img */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/image3.jpg"
                alt="hero-section-image"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;
export default HeroSection;
