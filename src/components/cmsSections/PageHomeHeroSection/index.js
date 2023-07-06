import { Box, Text, Button, Image, theme } from "../../../theme/components";
import AnimatedRobotic from "../../../components/imagesAnimated/homeAnimated";

export function PageHomeHeroSection(props) {
  return (
    <Box
      tag="main"
      styleSheet={{
        flex: 1,
        paddingTop: theme.space.x20,
        paddingHorizontal: theme.space.x4,
        background: `linear-gradient(${theme.colors.secundary.x900}, ${theme.colors.secundary.x300})`,
        color: theme.colors.neutral.x000,
        display: "flex",
        alignItems: "center",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
      }}
    >
      <Box
        styleSheet={{
          maxWidth: "450px",
        }}
      >
        <Text tag="h1" variant="display1">
          {props.title}
        </Text>
        <Text tag="p" variant="body1">
          {props.description}
        </Text>
        <Button href={props.ctalink} colorVariant="neutral">
          {props.ctatext}
        </Button>
      </Box>
      <AnimatedRobotic height={50} width={50} />{" "}
    </Box>
  );
}
