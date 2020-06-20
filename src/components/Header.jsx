import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import HeroCover from "components/HeroCover";
import ScrollingNavbar from "components/ScrollingNav";

import { Grid, Container } from "@material-ui/core";
import Logo from "components/Logo";
import Slogan from "./Slogan";

// const useStyles = makeStyles((theme) => ({
//   ...theme.customProperties,
//   heroContainer: {
//     // display: "block",
//     // minHeight: "100vh",
//     // width: "100%",
//     // repeat: "no-repeat",
//     // //backgroundColor: "coral",
//     // display: "flex",
//     // flexDirection: "column",
//     // justifyContent: "flex-end",
//     // backgroundImage: "url(nasa-cover-compressed.jpg)",
//     // backgroundRepeat: "no-repeat",
//     // backgroundAttachment: "fixed",
//     // backgroundPosition: "bottom",
//     // backgroundSize: "cover",
//     // alignItems: "center",
//     //padding: 0,
//     // margin: 0,
//   },
//   slogan: {
//     fontSize: "3rem",
//     minHeight: 120,
//   },
// }));

export default function Header({
  children,
  minHeight,
  picture,
  headerProps,
  cover,
}) {
  // const classes = useStyles();

  const { options = {} } = headerProps;

  // const HeaderProps = (headerProps) => {
  //   return (
  //     <Helmet>
  //       <title>{title}</title>
  //       <meta name={name} />
  //       <meta content={description} />
  //     </Helmet>
  //   );
  // };

  return (
    <>
      <HeroCover minHeight={minHeight || null}>
        <ScrollingNavbar />
        {/* {console.log(options)} */}

        {options.logo ? null : <Logo />}
        <Slogan />
        {children}
      </HeroCover>
    </>
  );
}
