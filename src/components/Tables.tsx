import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  version: number;
  author: string;
  status: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Version',
    dataIndex: 'version',
    key: 'version',
    render: (version: number) => version.toFixed(1),
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
  }
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    version: 1.0,
    author: 'New York No. 1 Lake Park',
    status: 'Disabled',
  },
  {
    key: '2',
    name: 'Jim Green',
    version: 2.0,
    author: 'London No. 1 Lake Park',
    status: 'Stating',
  },
  {
    key: '3',
    name: 'Joe Black',
    version: 3.0,
    author: 'Sydney No. 1 Lake Park',
    status: 'Active',
  },
];

const Tablets: React.FC = () => <Table columns={columns} dataSource={data} />;

export default Tablets;
