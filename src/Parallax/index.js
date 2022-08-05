import React,{useEffect} from "react";
import "./index.css";
import Styled from "styled-components";
import Parallax from "parallax-js";
import PropTypes from "prop-types";

import a from "./images/0.png";
import b from "./images/1.png";
import c from "./images/2.png";
import d from "./images/3.png";
import e from "./images/4.png";
import f from "./images/5.png";
import g from "./images/6.png";
import h from "./images/7.png";
import i from "./images/8.png";

const layers = [
    {
      name: "text",
      image: a,
      dataDepth: "0"
    },
    {
      name: "text",
      image: b,
      dataDepth: "0.56"
    },
    {
      name: "astronaut",
      image: c,
      dataDepth: "0.48"
    },
    {
      name: "planet1",
      image: d,
      dataDepth: "0.44"
    },
    {
      name: "planet2",
      image: e,
      dataDepth: "0.4"
    },
    {
      name: "planet2",
      image: f,
      dataDepth: "0.3"
    },
    {
      name: "planet2",
      image: g,
      dataDepth: "0.2"
    },
    {
      name: "planet2",
      image: h,
      dataDepth: "0.1"
    },
    {
      name: "rocket",
      image: i,
      dataDepth: "0"
    }
  ];

  const Container = Styled.div`
	width: 100%;
	height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
	overflow: hidden;
	background: url("./images/0.png");
  background-repeat: no-repeat;
  background-size: cover;
`;


const ParallaxImagesContainer = ({ backgroundImage, layers }) => {
    useEffect(() => {
      const scene = document.getElementById("scene");
      new Parallax(scene);
    });
  
    return (
      <Container backgroundImage={backgroundImage}>
        <div id="scene">
          {layers.map((l, index) => (
            <img
              key={index}
              data-depth={l.dataDepth}
              src={l.image}
              alt={l.name}
            />
          ))}
        </div>
      </Container>
    );
  };

  ParallaxImagesContainer.propTypes = {
    backgroundImage: PropTypes.string,
    layers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        dataDepth: PropTypes.string
      })
    )
  };
  
  ParallaxImagesContainer.defaultProps = {
    backgroundImage: a,
    layers: layers
  };

export default ParallaxImagesContainer;