import React, { useState } from "react";
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import InfoIcon from "@mui/icons-material/Info";
import InventoryIcon from "@mui/icons-material/Inventory";
import BiotechIcon from "@mui/icons-material/Biotech";
import BookIcon from "@mui/icons-material/Book";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { BsAlarmFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import { FaPhoneAlt } from "react-icons/fa";

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
      className={`${
        !path.split("/").includes("studio") && "fixed"
      } bg-white z-50 shadow-lg`}
    >
      <div>
        <marquee className="font-semibold bg-secondary text-white text-xs py-2">
          <div className="flex items-center space-x-20">
            <p>ICMR APPROVED NABL ACCREDITED LAB</p>
            <div className="flex items-center space-x-5">
              <div className="flex items-center space-x-1">
                <FaPhoneAlt />
                <p>Phone: +91-8612316078, 9030931931</p>
              </div>
              <div className="flex items-center space-x-1">
                <BsAlarmFill />
                <p>Mon-Sat(6.30am-9pm), Sun(6.30am-2pm)</p>
              </div>
              <div className="flex items-center space-x-1">
                <AiOutlineMail />
                <p>info@sundiagnosticslaboratory.in</p>
              </div>
            </div>
          </div>
        </marquee>
      </div>
      <div
        ref={ref}
        className="w-screen z-50 bg-white px-5 md:px-10 flex justify-between items-center"
      >
        <div className="bg-white">
          <Image
            src={require("../assets/images/sun-logo.png")}
            className="w-48 cursor-pointer md:hover:scale-110 md:active:scale-90 duration-150 ease-out"
            onClick={() => router.push("/")}
            loading="lazy"
            alt="logo"
          />
        </div>
        <div className="lg:hidden py-5">
          <IconButton onClick={() => setMenuState(true)}>
            <HiMenuAlt3 className="text-primary w-10 h-10 md:cursor-pointer" />
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
                    <ListItemButton
                      onClick={() => {
                        router.push(route.path);
                        setMenuState(false);
                      }}
                    >
                      <ListItemIcon>{route.icons}</ListItemIcon>
                      <ListItemText primary={route.name} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </SwipeableDrawer>
        </div>
        <div className="hidden lg:flex py-5 space-x-10 items-center text-secondary">
          {routes.map((route, index) => {
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
        </div>
      </div>
    </div>
  );
};

export default Header;
