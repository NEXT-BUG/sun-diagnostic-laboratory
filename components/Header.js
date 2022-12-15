import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineDown } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import InfoIcon from "@mui/icons-material/Info";
import InventoryIcon from "@mui/icons-material/Inventory";
import BiotechIcon from "@mui/icons-material/Biotech";
import BookIcon from "@mui/icons-material/Book";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ListAltIcon from "@mui/icons-material/ListAlt";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";

const routes = [
  {
    path: "/",
    name: "Home",
    icons: <HomeIcon />,
  },

  {
    path: "/services",
    name: "Services",
    icons: <MedicalServicesIcon />,
  },
  {
    path: "/tests",
    name: "Tests",
    icons: <BiotechIcon />,
  },
  {
    path: "/packages",
    name: "Packages",
    icons: <InventoryIcon />,
  },
  {
    path: "/profiles",
    name: "Profiles",
    icons: <ListAltIcon />,
  },
  {
    path: "/about",
    name: "About US",
    icons: <InfoIcon />,
  },
  {
    path: "/blogs",
    name: "Blog",
    icons: <BookIcon />,
  },
  {
    path: "/contact",
    name: "Contact",
    icons: <ContactPageIcon />,
  },
];

const Header = ({ ref }) => {
  const router = useRouter();
  const path = router.pathname;

  const [menuState, setMenuState] = useState(false);

  if (!router.pathname) return null;

  return (
    <div
      ref={ref}
      className="w-screen z-50 bg-black px-5 md:px-10 flex justify-between items-center"
    >
      <div className="bg-black">
        <Image
          src={require("../assets/images/logo.png")}
          className="w-64 cursor-pointer md:hover:scale-110 md:active:scale-90 duration-150 ease-out"
          onClick={() => router.push("/")}
          loading="lazy"
          alt="logo"
        />
      </div>
      <div className="lg:hidden py-5">
        <IconButton onClick={() => setMenuState(true)}>
          <HiMenuAlt3 className="text-[#00DCC9] w-10 h-10 md:cursor-pointer" />
        </IconButton>
        <SwipeableDrawer
          anchor="left"
          open={menuState}
          onClose={() => setMenuState(false)}
          onOpen={() => setMenuState(true)}
        >
          <List>
            {routes.map((route, index) => {
              return (
                <ListItem key={index}>
                  <ListItemButton onClick={() => router.push(route.path)}>
                    <ListItemIcon>{route.icons}</ListItemIcon>
                    <ListItemText primary={route.name} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </SwipeableDrawer>
      </div>
      <div className="hidden lg:flex py-5 space-x-10 items-center text-white">
        {routes.map((route, index) => {
          if (route.name == "Home") return;
          return (
            <p
              key={index}
              onClick={() => router.push(route.path)}
              className={`text-md font-semibold lg:cursor-pointer ${
                path == route.path && "lg:border-b-2 lg:border-[#00DCC9]"
              }`}
            >
              {route.name}
            </p>
          );
        })}

        {/* <AiOutlineDown className="lg:cursor-pointer text-[#00DCC9]" />
        <BiSearch className="lg:cursor-pointer text-[#00DCC9]" /> */}
      </div>
    </div>
  );
};

export default Header;
