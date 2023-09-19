import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { ADDRECORD, DELETE_RECORD, EDIT_RECORD, UPDATE } from './action/action';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const record = useSelector(state => state.crud.users);
  const single = useSelector(state => state.crud.user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [edit,setEdit] = useState("");
  const [isTableToggle, setisTableToggle] = useState(false);


  const TableToggle = () => {
    setisTableToggle(!isTableToggle);
  };

  const submitdata = () => {
    if (edit) {
      let obj = {
        id: edit,
        name: name,
        email: email,
        password: password,
        city: city
      }
      dispatch(UPDATE(obj))
    } else {
      let obj = {
        id: Math.floor(Math.random() * 10000),
        name: name,
        email: email,
        password: password,
        city: city
      }
      dispatch(ADDRECORD(obj))
    }
    setName("");
    setEmail("");
    setPassword("");
    setCity("");
  }

  useEffect(() => {
    setName(single.name);
    setEmail(single.email);
    setPassword(single.password);
    setCity(single.city);
    setEdit(single.id);
  }, [single])
  return (
    <>
      <center>
        <div>
          <table style={{ background: "#282c3499", padding: "60px 50px", margin: "50px 0", borderRadius: "15px" }} id="formtable ">
            <tbody>
              <tr>
                <td style={{ fontSize: "20px", color: "white" }}>Name:-</td>
                <td><input style={{ width: "300px", height: "40px", borderRadius: "10px", border: "0", fontSize: "20px", outline: "none",paddingLeft:"20px" }} type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} /></td>
              </tr>
              <tr>
                <td style={{ fontSize: "20px", color: "white" }}>Email:-</td>
                <td><input style={{ width: "300px", height: "40px", margin: "10px 0", borderRadius: "10px", border: "0", fontSize: "20px", outline: "none",paddingLeft:"20px"  }} type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email} /></td>
              </tr>
              <tr>
                <td style={{ fontSize: "20px", color: "white" }}>Password:-</td>
                <td><input style={{ width: "300px", height: "40px", borderRadius: "10px", border: "0", fontSize: "20px", outline: "none",paddingLeft:"20px"  }} type="text" name="password" onChange={(e) => setPassword(e.target.value)} value={password} /></td>
              </tr>
              <tr>
                <td style={{ fontSize: "20px", color: "white" }}>City:-</td>
                <td><input style={{ width: "300px", height: "40px", margin: "10px 0", borderRadius: "10px", border: "0", fontSize: "20px", outline: "none",paddingLeft:"20px"  }} type="text" name="city" onChange={(e) => setCity(e.target.value)} value={city} /></td>
              </tr>
              <tr>
                <td>
                  <button style={{ background: "#282c3499", color: "white", width: "125px", height: "40px", borderRadius: "10px", border: "0", margin: "10px 0 0 0" }} onClick={() => TableToggle()}>Show Table</button>
                </td>
                <td>
                  {
                    (edit) ? (<button style={{ width: "300px", height: "40px", borderRadius: "10px", border: "0", margin: "10px 0 0 0 " }} type='button' onClick={() => submitdata()}>Edit</button>)
                      : (<button style={{ width: "300px", height: "40px", borderRadius: "10px", border: "0", margin: "10px 0 0 0" }} type='button' onClick={() => submitdata()}>Submit</button>)

                  }
                </td>
              </tr>
            </tbody>
          </table>


        </div>
        <div>
          {isTableToggle ?
            (
              <table border={1} >
                <thead>
                  <tr style={{ backgroundColor: "#282c3499", border: "0" }}>
                    <th style={{ width: "50px", height: "50px" }}>#</th>
                    <th style={{ width: "" }}>ID</th>
                    <th style={{ width: "" }}>STUDENT</th>
                    <th style={{ width: "" }}>Email</th>
                    <th style={{ width: "" }}>Password</th>
                    <th style={{ width: "" }}>City</th>
                    <th style={{ width: "" }}>Actiev</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    record.map((item, index) => {
                      const { id, name, email, password, city } = item;
                      if (index % 2 == 0) {
                        return (
                          <tr key={id} style={{ backgroundColor: "#282c3421", textAlign: "center" }}>
                            <td style={{ width: "100px", border: "0", height: "45px", fontSize: "18px" }}>{index + 1}</td>
                            <td style={{ width: "100px", border: "0", height: "40px", fontSize: "18px" }}>{id}</td>
                            <td style={{ width: "200px", border: "0", height: "40px", fontSize: "18px" }}>{name}</td>
                            <td style={{ width: "300px", border: "0", height: "40px", fontSize: "18px" }}>{email}</td>
                            <td style={{ width: "200px", border: "0", height: "40px", fontSize: "18px" }}>{password}</td>
                            <td style={{ width: "200px", border: "0", height: "40px", fontSize: "18px" }}>{city}</td>
                            <td style={{ border: "0" }}>
                              <button style={{ backgroundColor: "#282c3499", color: "white", width: "40px", border: "1", height: "35px", fontSize: "20px", margin: "0 10px 0 15px" }} onClick={() => dispatch(DELETE_RECORD(id))}><i className="bi bi-x"></i></button>
                              <button style={{ backgroundColor: "#282c3499", color: "white", width: "40px", border: "1", height: "35px", fontSize: "20px", margin: "0 15px 0 10px" }} onClick={() => dispatch(EDIT_RECORD(id))}><i className="bi bi-pencil"></i></button>
                            </td>
                          </tr>
                        )
                      } else {
                        return (
                          <tr key={id} style={{ backgroundColor: "#00000030", textAlign: "center" }}>
                            <td style={{ width: "100px", border: "0", height: "45px", fontSize: "18px" }}>{index + 1}</td>
                            <td style={{ width: "100px", border: "0", height: "40px", fontSize: "18px" }}>{id}</td>
                            <td style={{ width: "200px", border: "0", height: "40px", fontSize: "18px" }}>{name}</td>
                            <td style={{ width: "300px", border: "0", height: "40px", fontSize: "18px" }}>{email}</td>
                            <td style={{ width: "200px", border: "0", height: "40px", fontSize: "18px" }}>{password}</td>
                            <td style={{ width: "200px", border: "0", height: "40px", fontSize: "18px" }}>{city}</td>
                            <td style={{ border: "0" }}>
                              <button style={{ backgroundColor: "#282c3499", color: "white", width: "40px", border: "1", height: "35px", fontSize: "20px", margin: "0 10px 0 15px" }} onClick={() => dispatch(DELETE_RECORD(id))}><i className="bi bi-x"></i></button>
                              <button style={{ backgroundColor: "#282c3499", color: "white", width: "40px", border: "1", height: "35px", fontSize: "20px", margin: "0 15px 0 10px" }} onClick={() => dispatch(EDIT_RECORD(id))}><i className="bi bi-pencil"></i></button>
                            </td>
                          </tr>
                        )
                      }
                    })
                  }
                </tbody>
              </table>
            )
            :
            ("")
          }
        </div>
      </center>

    </>
  );
}

export default App;
