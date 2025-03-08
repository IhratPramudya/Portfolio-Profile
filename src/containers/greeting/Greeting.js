import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting, vision } from "../../portfolio";
import { Fade } from "react-reveal";
import { useState, useEffect } from "react";

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p>{displayText}</p>;
};

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main bg-gray-100" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div flex">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div h-screen">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
            <h2
              className="greeting-nickname"
              style={{ marginTop: "100px", textAlign: "match-parent" }}
            >
              (Visi)
            </h2>
            <div className="marquee-container">
              <p
                className="greeting-text-p subTitle marquee"
                style={{ color: theme.secondaryText }}
              >
                <TypingEffect text={vision.text} />
                <br />
              </p>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              style={{ height: "920px", borderRadius: "10px" }}
              alt="saad sitting on table"
              src={require("../../assets/images/Foto Ihrat.jpg")}
            ></img>
            {/* <FeelingProud theme={theme} /> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
