import React from "react";
import { Typography, CssBaseline } from "@material-ui/core";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <CssBaseline />
      <Typography variant="body1" align="center" gutterBottom>
        Copyright © 2022 thomasjuhoonkim&nbsp;
        <a
          href="https://github.com/thomasjuhoonkim/e-commerce"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub style={{ marginBottom: -2, color: "black" }} />
        </a>
      </Typography>
    </>
  );
};

export default Footer;
