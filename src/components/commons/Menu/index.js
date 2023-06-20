import { Box, Image, Link, theme } from "../../../theme/components";

export function Menu() {
  return (
    <Box
      tag="header"
      styleSheet={{
        position: "fixed",
        width: "100%",
        padding: theme.space.x4,
        backgroundImage:
          "linear-gradient(180deg,rgb(0 0 0 / 60%) 0%,rgba(0,212,255,0) 100%)",
        backdropFilter: "blur(5px)",
      }}
    >
      <Box
        styleSheet={{
          maxWidth: theme.space.xcontainer_xl,
          marginHorizontal: "auto",
        }}
      >
        <Link href="/">
          <Image
            src="https://raw.githubusercontent.com/showC0de-proFile/logos/70737b0e1bcc409e7beaf3a7d3c4d5fd33a0481b/logo.svg"
            alt="Logo"
            width="100"
          />
        </Link>
      </Box>
    </Box>
  );
}
