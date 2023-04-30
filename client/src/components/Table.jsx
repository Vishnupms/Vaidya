import { Button, Space, Table, Tag } from 'antd';

function DoctorTable({data,admin})
{

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
        title: 'Designation',
        dataIndex: 'designation',
        key: 'designation',
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
      }
  ];
  


return <Table columns={columns} dataSource={data} />
}
export default DoctorTable