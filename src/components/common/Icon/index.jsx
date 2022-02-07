import React from "react";
import Proptypes from "prop-types";

// assets
import { Logo, Home, FillHome, Heart, FillHeart, Comment, FillComment, Avatar } from "@src/assets";

// styled-component
import { Wrapper } from "./style";

const Icon = props => {
  switch (props.shape) {
    case "logo":
      return (
        <Wrapper hoverfill={props.hoverfill} animation={props.animation}>
          <Logo {...props} />
        </Wrapper>
      );
    case "home":
      return (
        <Wrapper hoverfill={props.hoverfill} animation={props.animation}>
          <Home {...props} />
        </Wrapper>
      );
    case "fillHome":
      return (
        <Wrapper hoverfill={props.hoverfill} animation={props.animation}>
          <FillHome {...props} />
        </Wrapper>
      );
    case "heart":
      return (
        <Wrapper hoverfill={props.hoverfill} animation={props.animation}>
          <Heart {...props} />
        </Wrapper>
      );
    case "fillHeart":
      return (
        <Wrapper hoverfill={props.hoverfill} animation={props.animation}>
          <FillHeart {...props} />
        </Wrapper>
      );
    case "comment":
      return (
        <Wrapper hoverfill={props.hoverfill} animation={props.animation}>
          <Comment {...props} />
        </Wrapper>
      );
    case "fillComment":
      return (
        <Wrapper hoverfill={props.hoverfill} animation={props.animation}>
          <FillComment {...props} />
        </Wrapper>
      );
    case "avatar":
      return (
        <Wrapper hoverfill={props.hoverfill} animation={props.animation}>
          <Avatar {...props} />
        </Wrapper>
      );

    default:
      return (
        <Wrapper>
          <Avatar />
        </Wrapper>
      );
  }
};

Icon.propTypes = {
  shape: Proptypes.string,
  width: Proptypes.number,
  height: Proptypes.number,
  fill: Proptypes.string,
  onClick: Proptypes.func,
  hoverfill: Proptypes.string,
  animation: Proptypes.string,
};

Icon.defaultProps = {
  shape: "avatar",
  width: 24,
  height: 24,
  color: "black",
  onClick: null,
  hoverfill: null,
  animation: null,
};

export default Icon;
