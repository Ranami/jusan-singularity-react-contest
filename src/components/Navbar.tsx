import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const pages = ["Home", "Posts", "Page2"];

const CustomBox = styled(Box)`
  height: 70px;
  display: flex;
  align-items: center;
`;

const CustomNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: white;
  margin-left: 40px;
`;

export const Navbar = () => {
  return (
    <AppBar position="static">
      <CustomBox>
        {pages.map((page) => (
          <CustomNavLink to={`/${page.toLowerCase()}`} key={page}>
            {page}
          </CustomNavLink>
        ))}
      </CustomBox>
    </AppBar>
  );
};
