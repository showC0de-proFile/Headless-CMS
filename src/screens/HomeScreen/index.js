import Head from "next/head";
import { Menu } from "../../components/commons/Menu";
import { Footer } from "../../components/commons/Footer";
import { theme, Box, Button, Text, Image } from "../../theme/components";
import { pageHOC } from "../../components/wrappers/pageHOC";
import { cmsService } from "../../infra/cms/cmsService";
import { CMSSectionRender } from "../../infra/cms/CMSSections";

export async function getStaticProps({ preview }) {
  console.log("WIII", getStaticProps);

  const { data: cmsContent } = await cmsService({
    query: `
    query{
      pageHome{
        pageContent{
          section{
            componentName: __typename
            ... on CommonSeoBlockRecord {
              id  
              title
            }  
            ... on CommomMenuRecord {
              id          
            }
            ... on CommomFooterRecord {
              id
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

  return {
    props: {
      cmsContent,
    },
  };
}

function HomeScreen() {
  return <CMSSectionRender pageName="pageHome" />;
}

export default pageHOC(HomeScreen);
