import { useSession } from "next-auth/react";
import * as React from "react";
import Layout from "../src/components/layout/layout";

export default function MePage() {
  const { data } = useSession();

  return (
    <Layout>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  );
}
