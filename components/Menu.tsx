import React from "react";

interface Props {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  menu: boolean;
}

const Menu = ({ setMenu, menu }: Props) => {
  if (menu) {
    return <div className="w-screen h-screen absolute">Menu</div>;
  }
};

export default Menu;
