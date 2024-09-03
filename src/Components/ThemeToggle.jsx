import Theme from "./Theme";

const ThemeToggle = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleMode = (e) => {
    if(e.target.checked) {
        setDarkMode();
    }else {
        setLightMode();
    }
  }
  return (
    /* From Uiverse.io by Galahhad */
    <Theme  toggle={ toggleMode }/>
  );
};

export default ThemeToggle;
