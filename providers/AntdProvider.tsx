"use client";

import "@ant-design/v5-patch-for-react-19";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import React from "react";

export default function AntdProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyleProvider layer>
      <ConfigProvider>{children}</ConfigProvider>
    </StyleProvider>
  );
}
