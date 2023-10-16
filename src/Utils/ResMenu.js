import { useEffect, useState } from "react";
import { RES_MENU_API } from "../Config";

function UseRestuarantMenu(id) {
  const [resturant, setRestuarant] = useState(null);

  useEffect(() => {
    Restuarantmenu();
  }, []);

  // const menulist = ["panner","bindi","chawal"]
  async function Restuarantmenu() {
    const data = await fetch(RES_MENU_API + id);
    const json = await data.json();
    console.log(json.data);
    setRestuarant(json?.data.cards[0].card.card.info);
    // setRestuarant(menulist)
  }

  return resturant;
}

export default UseRestuarantMenu;
