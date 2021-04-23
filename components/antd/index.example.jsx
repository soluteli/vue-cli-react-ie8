import React from 'react'
import { Tag } from "antd";

export default {
  title: 'antd-demo'
}

export function TagBasic () {
  return <Tag>123</Tag>
}
export function TagRemove () {
  return <Tag closable>123</Tag>
}