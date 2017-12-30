import React from "react";
import FaTwitter from "react-icons/lib/fa/twitter";
import FaFacebookSquare from "react-icons/lib/fa/facebook-square";
import styled from "styled-components";

const Button = styled.div`
  height: 28px;
  width: 125px;
  line-height: 28px;
  background-color: ${props =>
    props.type === "twitter" ? "#1b95e0" : "facebook" ? "#4267b2" : "gray"};
  border-radius: 3px;
  font-size: 13px;
  color: #fff;
  padding: 0px 8px;
  vertical-align: middle;
  &:hover {
    opacity: .66;
    transition: all .15s linear;
    cursor: pointer;
  }
`;

export const TwitterButton = () => {
  const url = "http://example.com/";
  const tweetText = "This is text."
  const hashtags = "tag1,tag2";
  
  return (
    <Button
      type="twitter"
      onClick={() => {
        window.open(
          `https://twitter.com/share?url=${url}&text=${tweetText}&hashtags=${hashtags}`
        );
      }}
    >
      <FaTwitter
        size="16px"
        style={{ marginBottom: "4px" }}
      />&nbsp;&nbsp;ツイートする
    </Button>
  );
};

export const FacebookButton = () => {
  const url = "http://example.com/";
  const encodedUrl = encodeURIComponent(url);

  return (
    <Button
      type="facebook"
      onClick={() => {
        window.open(
          `http://www.facebook.com/share.php?u=${encodedUrl}`
        );
      }}
    >
      <FaFacebookSquare
        size="16px"
        style={{ marginBottom: "4px" }}
      />&nbsp;&nbsp;シェアする
    </Button>
  );
};
