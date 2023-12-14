import React from "react";

export default function dashboad({ valAverage }) {
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-info">
            <div className="inner">
              <h3>150</h3>
              <p>New Orders</p>
            </div>
            <div className="icon">
              <i className="ion ion-bag" />
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-success">
            <div className="inner">
              <h3>
                53<sup style={{ fontSize: 20 }}>%</sup>
              </h3>
              <p>Bounce Rate</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars" />
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>{valAverage}</h3>
              <p>ลูกค้าเฉลี่ยอายุเท่าไหร่?</p>
            </div>
            <div className="icon">
              <i className="ion ion-person-add" />
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-danger">
            <div className="inner">
              <h3>65</h3>
              <p>Unique Visitors</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph" />
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </a>
          </div>
        </div>
        {/* ./col */}
      </div>
    </div>
  ); 
}
export async function getStaticProps() {
    const res = await fetch('https://name1-directus.mnmlvk.easypanel.host/items/user')
    const data= await res.json()
    let sumAge = 0
    let valAverage = 0
    for (let index = 0; index < data.data.length; index++) {
      const today = new Date();
      const birthDateObject = new Date(data.data[index].birthday);
      const ageDifference = today.getFullYear() - birthDateObject.getFullYear();
      sumAge += ageDifference;
    }
    valAverage = sumAge / data.data.length
    return {
      props: {
        valAverage: valAverage,
      },
    }
  }
