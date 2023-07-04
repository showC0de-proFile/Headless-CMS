import { pageHOC } from "../../components/wrappers/pageHOC";
import { CMSSectionRender } from "../../infra/cms/CMSSectionRender";
import { cmsService } from "../../infra/cms/cmsService";
import { Image } from "../../theme/components";

export async function getStaticProps({ preview }) {
  const { data: cmsContent } = await cmsService({
    query: `
    query {
      pageFaq {
        pageContent {
          section {
            componentName: __typename
            ... on CommonSeoBlockRecord {
              id
              title
            }
            ... on CommonMenuRecord {
              id
            }
            ... on CommonFooterRecord {
              id
              visible
            }
            ... on PagefaqDisplayquestionSectionRecord {
              id
              categories {
                id
                title
                questions {
                  id
                  title
                }
              }
            }
          }
        }
      }
    }
    `,
    preview,
  });

  return {
    props: {
      cmsContent,
    },
  };
}

function FAQAllQuestionsScreen() {
  return (
    <>
      <CMSSectionRender pageName="pageFaq" />
    </>
  );
}

export default pageHOC(FAQAllQuestionsScreen);
