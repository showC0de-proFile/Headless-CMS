import Head from "next/head";
import { Menu } from "@components/commons/Menu";
import { Footer } from "@components/commons/Footer";
import { theme, Box, Button, Text, Image } from "@theme/components";
import { pageHOC } from "@components/wrappers/pageHOC";
import { cmsService } from "@infra/cms/cmsService";
import { CMSSectionRender } from "@infra/cms/CMSSectionRender";

export async function getStaticProps({ preview }) {
  try {
    const { data: cmsContent } = await cmsService({
      query: `
      query {
        pageHome {
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
              ... on PagehomeHerosectionRecord {
                id
                title
                description
                ctalink
                ctatext
              }
            }
          }
        }
      }
    `,
      preview,
    });

    if (!cmsContent || !cmsContent.pageHome) {
      throw new Error("CMS data is missing or in the wrong format");
    }

    return {
      props: {
        cmsContent,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching data from CMS:", error.message);

    return {
      notFound: true,
    };
  }
}

function HomeScreen({ cmsContent }) {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Menu />
      <main>{cmsContent && <CMSSectionRender pageName="pageHome" />}</main>
      <Footer />
    </div>
  );
}

export default pageHOC(HomeScreen);
