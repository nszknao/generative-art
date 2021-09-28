import { List, ListItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";

import { Layout } from "src/components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <List spacing={3}>
        <ListItem>
          <Link href="/structure">
            <a>Structure</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/three-dim">
            <a>3D</a>
          </Link>
        </ListItem>
      </List>
    </Layout>
  );
};

export default Home;
