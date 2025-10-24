"use client";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

const items = Array.from({ length: 3 }).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

export default function DetailPage() {
  return (
    <Layout className="h-[1080px] min-h-dvh">
      <Header className="sticky top-0 z-1 flex w-full items-center">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          className="min-w-0 grow"
        />
      </Header>

      <Content className="px-12">
        <Breadcrumb
          className="py-4"
          items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
        />
        <div className="min-h-[380px] rounded-lg bg-white p-6">Content</div>
      </Content>

      <Footer className="text-center">
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}
