import { useState } from 'react';
import axios from 'axios';
export default function AddTreatment({ diseases, users }) {
  const [formData, setFormData] = useState({
    // Initialize form data
    day: '',
    treatment: '',
    id_user_fk: '',
    id_disease_fk: '',
    // Add other keys as needed
  });
  const [countDiseaseData, setCountDiseaseData] = useState(0);

  const  handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData(prevformData => ({
      ...prevformData,
      [name]: value,
    }));
  };

const handleFormSubmit = async (e) => {
  e.preventDefault()
  try {
    // Make a POST request to your Next.js API route
    const response = await axios.post('/api/createTreatment', formData);
    if(name == 'id_disease_fk'){
      const response_getDisease = await axios.get(`/api/getDisease/${formData.id_disease_fk}`);
      setCountDiseaseData(response_getDisease.data.data.count + 1);
    }
    console.log(countDiseaseData)
    // Handle the response as needed
    console.log('Treatment created:', response.data.data);
  } catch (error) {
    // Handle errors
    console.error('Error creating treatment:', error);
  }
};
  return (
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          {/* left column */}
          <div className="col-md-8 mt-4">
            {/* general form elements */}
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">เก็บข้อมูลประวัติการรักษา</h3>
              </div>
              {/* /.card-header */}
              {/* form start */}
              <form onSubmit={handleFormSubmit}>
                <div className="card-body">
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">ผู้ป่วย</label>
                    <select
                      name="id_user_fk"
                      className="form-control"
                      aria-label="Default select example"
                      onChange={handleInputChange}
                      required
                    >
                      <option selected>--กรุณาเลือกผู้ป่วย--</option>
                      {users.map((user) => (
                        <option  value={`${user.id_user}`}>{user.firtname} {user.lastname}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      วันที่เข้ารักการรักษา
                    </label>
                    <input
                      name="day"
                      type="date"
                      className="form-control"
                      id="exampleInputEmail1"
                      onChange={handleInputChange}
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">อาการ</label>
                    <textarea
                      name="treatment"
                      className="form-control"
                      id="exampleInputPassword1"
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">วินิจฉัยโรค</label>
                    <select
                      name="id_disease_fk"
                      className="form-control"
                      aria-label="Default select example"
                      onChange={handleInputChange}
                      required
                    >
                      <option selected>--กรุณาเลือกโรค--</option>
                      {diseases.map((disease) => (
                        <option value={`${disease.id_disease}`}>{disease.disease}</option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    บันทึก
                  </button>
                </div>
              </form>
            </div>
            {/* /.card */}
            {/* general form elements */}
          </div>
          {/*/.col (left) */}
          {/* right column */}
          {/*/.col (right) */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container-fluid */}
    </section>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://name1-directus.mnmlvk.easypanel.host/items/user?filter[id_user]=${params.slug}`
  );
  const data = await res.json();

  const res_disease = await fetch(
    `https://name1-directus.mnmlvk.easypanel.host/items/disease`
  );
  const data_disease = await res_disease.json();

  return {
    props: {
      users: data.data,
      diseases: data_disease.data,
    },
  };
}
