import Head from "next/head";

export function SEOBlock(props) {
  console.log("SEOblock", props);
  return (
    <Head>
      <title>{props.title}</title>
    </Head>
  );
}
