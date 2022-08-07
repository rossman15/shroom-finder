import Layout from "../src/components/layout"
import prisma from '../lib/prisma';
import { GetStaticProps } from "next";

export default function IndexPage() {
  return (
    <Layout>
      <h1>Welcome to Shroom Finder</h1>
    </Layout>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
 
// };