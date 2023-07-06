import { Box, Text, Link, Image, theme } from "../../../theme/components";
import AnimatedDeveloper from "../../../components/imagesAnimated/faqAnimated";

export function PageFAQDisplayQuestionsSection(props) {
  console.log(props.categories);
  const categories = props.categories;
  return (
    <>
      <Box
        tag="main"
        styleSheet={{
          flex: 1,
          backgroundColor: theme.colors.neutral.x050,
          paddingTop: theme.space.x20,
          paddingHorizontal: theme.space.x4,
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            gap: theme.space.x4,
            flexDirection: {
              xs: "column",
              md: "row",
            },
            width: "100%",
            maxWidth: theme.space.xcontainer_lg,
            marginHorizontal: "auto",
          }}
        >
          <Box
            styleSheet={{
              flex: 2,
              color: theme.colors.neutral.x900,
            }}
          >
            <Text tag="h1" variant="heading3">
              FAQ: Frequently Asked Questions
            </Text>
            <Text
              styleSheet={{
                color: theme.colors.neutral.x500,
              }}
            >
              Check out answers to the main questions from our students here.
            </Text>
            <Link
              href="/"
              styleSheet={{
                color: theme.colors.primary[400],
                fontWeight: "500",
                hover: {
                  color: theme.colors.primary[300],
                },
              }}
            >
              Back to Home
            </Link>

            <AnimatedDeveloper height={50} width={50} />
          </Box>

          <Box
            styleSheet={{
              flex: 3,
            }}
          >
            {categories.map(({ id, title, questions }) => {
              return (
                <Box key={id} tag="article">
                  <h1>{title}</h1>
                  <Box tag="ul">
                    {questions.map((question) => (
                      <Box key={question.id} tag="li">
                        <Box tag="article">
                          <Link href={`/faq/${question.id}`}>
                            <Text>{question.title}</Text>
                          </Link>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}
