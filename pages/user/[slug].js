
import Age from "@/components/calculate/Age";
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
export default function HistoryUser({ users,historys }) {
  const tableRef = useRef();

  useEffect(() => {
    // Initialize DataTables when the component mounts
    $(tableRef.current).DataTable();
    return () => {
      $(tableRef.current).DataTable().destroy();
    };
  }, []);

  return (
    <div>
      <div className="card card-primary mt-4">
        <div className="card-header">
          <h3 className="card-title">ข้อมูลของผู้ป่วย</h3>
        </div>
        {/* /.card-header */}
        <div className="card-body">
          <strong>
            <i className="fas fa-book mr-1" />
            ข้อมูลทั่วไป
          </strong>
          <p className="text-muted">
            <b>ชื่อ-สกุล</b> {users[0].firtname} {users[0].lastname}{" "}
            &nbsp;&nbsp; <b>วันเกิด</b> {users[0].birthday}&nbsp;&nbsp;{" "}
            <b>อายุ</b> <Age day={users[0].birthday} />
          </p>
          <hr />
          <strong>
            <i className="fas fa-map-marker-alt mr-1" />
            ที่อยู่
          </strong>
          <p className="text-muted">
            {users[0].number_address}&nbsp;&nbsp;ต.{users[0].tumbon}
            &nbsp;&nbsp;อ.{users[0].amphor}&nbsp;&nbsp;จ.{users[0].province}
            &nbsp;&nbsp;{users[0].postcode}
          </p>
          <hr />
          <strong>
            <i className="far fa-file-alt mr-1" />
            ข้อมูลติดต่อ
          </strong>
          <p className="text-muted">
            <b>เบอร์โทร</b> {users[0].phone}&nbsp;&nbsp; <b>อีเมลล์</b>{" "}
            {users[0].email}
          </p>
        </div>
        {/* /.card-body */}
      </div>
      
      <div className="card-body">
      <h3>ประวัติของผู้ป่วย</h3>
        <table ref={tableRef} className="table table-bordered table-striped nowrap">
          <thead>
            <tr>
              <th>วันที่เข้ารับการรักษา</th>
              <th>อาการ</th>
            </tr>
          </thead>
          <tbody>
            {historys.map((history) =>(
              <tr key={history.id_treatment}>
                <td>{history.day}</td>
                <td>{history.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://name1-directus.mnmlvk.easypanel.host/items/user?filter[id_user]=${params.slug}`
  );
  const data = await res.json();
  const res_history = await fetch(
    `https://name1-directus.mnmlvk.easypanel.host/items/treatment?filter[id_user_fk]=${params.slug}`
  );
  const data_history = await res_history.json();

  return {
    props: {
      users: data.data,
      historys: data_history.data
    },
  };
}
