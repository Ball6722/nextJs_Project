import Age from '@/components/calculate/Age'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
// import 'datatables.net-responsive-dt';

function Home({ users }) {
  const tableRef = useRef();

  useEffect(() => {
    // Initialize DataTables when the component mounts
    $(tableRef.current).DataTable();
    return () => {
      $(tableRef.current).DataTable().destroy();
    };
  }, []);

  return (
      <div className="card-body">
        <table  ref={tableRef}  className="table table-bordered table-striped nowrap">
          <thead>
            <tr>
              <th>#id</th>
              <th>ชื่อ</th>
              <th>นามสกุล</th>
              <th>เบอร์โทร</th>
              <th>วันเกิด</th>
              <th>อายุ</th>
              <th>เรียกดูข้อมูล</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) =>(
              <tr key={user.id_user}>
                <td>{user.id_user}</td>
                <td>{user.firtname}</td>
                <td>{user.lastname}</td>
                <td>{user.phone}</td>
                <td>{user.birthday}</td>
                <td><Age day={user.birthday} /></td>
                <td>
                <Link href={`user/add_treatment/${user.id_user}`} className="btn btn-sm btn-success">เข้ารักษา</Link>
                  <Link href={`user/${user.id_user}`} className="btn btn-sm btn-danger">ประวัติการรักษา</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://name1-directus.mnmlvk.easypanel.host/items/user')
  const data= await res.json()

  return {
    props: {
      users: data.data,
    },
  }
}

export default Home
