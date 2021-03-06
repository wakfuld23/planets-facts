import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
import theme from "./theme";
import { Button, Container, FactsContainer, Wrapper } from "./App.styles";
import NavBar from "./Components/NavBar/index";
import Img from "./Components/Img/Img";
import Menu from "./Components/Menu/Menu";
import Content from "./Components/Content/Content";
import Facts from "./Components/Facts/Facts";
import earth from "./assets/images/planet-earth.svg";
import { useState, useEffect } from "react";
import data from "./assets/data";
import Hamburger from "./Components/Hamburger/Hamburger";
import Orbit from "./Components/Orbit/Orbit";
import Orbit2d from "./Components/Orbit2d/Orbit2d";

const App = () => {
  const [planetName, setPlanetName] = useState();
  const [planetDetails, setPlanetDetails] = useState(
    data[planetName ? planetName : "earth"]
  );
  const [menuPosition, setMenuPosition] = useState("overview");
  const [solarSystem, setSolarSystem] = useState("3d");
  function handleChangePlanet(x) {
    setPlanetName(x.toLocaleLowerCase());
    setMenuPosition("overview");
  }
  function handleChangePosition(x) {
    setMenuPosition(x.toLocaleLowerCase());
  }

  function changeSolarSystem() {
    if (solarSystem === "2d") setSolarSystem("3d");
    else setSolarSystem("2d");
  }

  function setHome(){
    console.log(1)
    setPlanetName(undefined);
  }

  useEffect(() => {
    setPlanetDetails(data[planetName]);
  }, [planetName]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Container>
          {!planetName && (
            <Button onClick={changeSolarSystem}>{solarSystem}</Button>
          )}

          <NavBar
            handleChangePlanet={handleChangePlanet}
            planetDetails={planetDetails}
            planet={planetName}
            data={data}
            setHome={setHome}
          />
          {planetName && planetDetails && (
            <>
              <Menu
                handleChangePosition={handleChangePosition}
                menuPosition={menuPosition}
                color={planetDetails.sectionColor}
              />
              <Img menuPosition={menuPosition} planetDetails={planetDetails} />
              <Content
                planetDetails={planetDetails}
                menuPosition={menuPosition}
              />
              <FactsContainer>
                <Facts title={"ROTATION TIME"} value={planetDetails.rotation} />
                <Facts
                  title={"REVOLUTION TIME"}
                  value={planetDetails.revolution}
                />
                <Facts title={"RADIUS"} value={planetDetails.radius} />
                <Facts
                  title={"AVERAGE TEMP."}
                  value={planetDetails.temperature}
                />
              </FactsContainer>
            </>
          )}

          {!planetName && solarSystem === "3d" && (
            <Orbit2d handleChangePlanet={handleChangePlanet} />
          )}
          {!planetName && solarSystem !== "3d" && (
            <Orbit handleChangePlanet={handleChangePlanet} />
          )}
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
