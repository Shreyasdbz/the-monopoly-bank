/** @format */
import { useContext } from "react";
import ThemeToggle from "../components/ThemeToggle";

import { ThemeContext } from "../context/ThemeContext";
import ColorBox from "../components/ColorBox";

const SiteColors = () => {
  const theme = useContext(ThemeContext).theme;
  return (
    <div
      className="page-container color-page"
      style={{
        backgroundColor: `${theme.background}`,
      }}
    >
      <ColorBox displayColor={theme.background} label={"Background"} />
      <ColorBox displayColor={theme.text} label={"Text"} />
      <ColorBox displayColor={theme.greyBackground} label={"Grey BG"} />
      <ColorBox displayColor={theme.greyText} label={"Grey Txt"} />
      <ColorBox displayColor={theme.primary} label={"Primary"} />
      <ColorBox displayColor={theme.secondary} label={"Secondary"} />
      <ColorBox displayColor={theme.tertiary} label={"Tertiary"} />
      <ColorBox displayColor={theme.accent} label={"Accent"} />
      <ColorBox displayColor={theme.danger} label={"Danger"} />
      <ColorBox displayColor={theme.warning} label={"Warning"} />
      <ColorBox displayColor={theme.success} label={"Success"} />
      <ColorBox displayColor={"#ff356f"} label={"vibrant-red"} />
      <ColorBox displayColor={"#DE4E11"} label={"rust"} />
      <ColorBox displayColor={"#ef7191"} label={"pink"} />
      <ColorBox displayColor={"#840F55"} label={"maroon"} />
      <ColorBox displayColor={"#A13CEE"} label={"purple"} />
      <ColorBox displayColor={"#D9C214"} label={"yellow"} />
      <ColorBox displayColor={"#127e58"} label={"green"} />
      <ColorBox displayColor={"#857D0F"} label={"olive"} />
      <ColorBox displayColor={"#08A8E3"} label={"blue"} />
      <ColorBox displayColor={"#0F4FB0"} label={"sapphire"} />
      <ThemeToggle />
    </div>
  );
};

export default SiteColors;
