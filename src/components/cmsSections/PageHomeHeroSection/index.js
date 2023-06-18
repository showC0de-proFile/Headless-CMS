import { Box, Text, Button, Image, theme } from "../../../theme/components";

export function PageHomeHeroSection(props) {
  return (
    <Box
      tag="main"
      styleSheet={{
        flex: 1,
        paddingTop: theme.space.x20,
        paddingHorizontal: theme.space.x4,
        background: `linear-gradient(${theme.colors.primary.x900}, ${theme.colors.primary.x700})`,
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
        <Button href="/faq" colorVariant="neutral">
          {props.ctatext}
        </Button>
      </Box>
    </Box>
  );
}
