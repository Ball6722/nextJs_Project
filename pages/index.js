import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';

const Home = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    // Initialize DataTables when the component mounts
    $(tableRef.current).DataTable();
  }, []);

  return (
    <div>
      <table ref={tableRef}>
      <thead>
        <tr>
            <th>Subscriber ID</th>
            <th>Install Location</th>
            <th>Subscriber Name</th>
            <th>some data</th>
        </tr>
      </thead>
      </table>
    </div>
  );
};

export default Home;

