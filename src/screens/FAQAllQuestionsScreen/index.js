import { CMSProvider } from "../../infra/cms/CMSProvider";
import { pageHOC } from "../../components/wrappers/pageHOC";
import { CMSSectionRender } from "../../infra/cms/CMSSectionRender";
import { cmsService } from "../../infra/cms/CMSService";

export async function getStaticProps({ preview }) {
  try {
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
  } catch (error) {
    console.error("Error fetching CMS data:", error);
    return {
      props: {
        cmsContent: {},
      },
    };
  }
}

export default pageHOC(function FAQAllQuestionsScreen({ cmsContent }) {
  return (
    <CMSProvider cmsContent={cmsContent}>
      <CMSSectionRender pageName="pageFaq" />
    </CMSProvider>
  );
});
