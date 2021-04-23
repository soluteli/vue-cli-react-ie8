import React from 'react'
import { Tag, Button } from "antd";

export default {
  title: 'antd-demo'
}

export function TagBasic () {
  return <Tag color="blue">123</Tag>
}
export function TagRemove () {
  return <Tag closable>123</Tag>
}
export function Button1 () {
  return <Button type="primary">1234</Button>
}