import React, { useState, useEffect } from "react";
import { Form, Table ,Dropdown} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import { useForm } from "react-hook-form";
import "./Card1.css";

const Card1 = (props) => {
  const {
    id,
    name,
    starttime,
    outtime,
    endtime,
    loadtime,
    pid1,
    pid2,
    pid3,
    pid4,
  } = props.data;
  console.log(props, "aamma");
  console.log(pid1, "appa");
  //validATION
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm();

  // all state in one state
  const [state, setState] = useState({
    id: id || 0,
    name: name || 0,
    starttime: starttime || 0,
    outtime: outtime || 0,
    endtime: endtime || 0,
    loadtime: loadtime || 0,
    pid1: pid1 || 0,
    pid2: pid2 || 0,
    pid3: pid3 || 0,
    pid4: pid4 || 0,
  });
  // all tiredetail states
  // const [tiredetail1, setTiredetail1] = useState([]);
  // const [tiredetail2, setTiredetail2] = useState([]);
  // const [tiredetail3, setTiredetail3] = useState([]);
  // const [tiredetail4, setTiredetail4] = useState([]);

  // filter pid states
  // const [pid1, setPid1] = useState("");
  // const [pid2, setPid2] = useState("");
  // const [pid3, setPid3] = useState("");
  // const [pid4, setPid4] = useState("");

  // store pid1 details and mold no states
  const [piddetail1, setPiddetail1] = useState("");
  const [piddetail2, setPiddetail2] = useState("");
  const [piddetail3, setPiddetail3] = useState("");
  const [piddetail4, setPiddetail4] = useState();
  const [piddetail5, setPiddetail5] = useState([]);
  const [piddetail6, setPiddetail6] = useState([]);
  const [piddetail7, setPiddetail7] = useState([]);
  const [piddetail8, setPiddetail8] = useState([]);

  // store pid2 details and mold no states
  const [piddetail21, setPiddetail21] = useState([]);
  const [piddetail22, setPiddetail22] = useState([]);
  const [piddetail23, setPiddetail23] = useState([]);
  const [piddetail24, setPiddetail24] = useState([]);
  const [piddetail25, setPiddetail25] = useState([]);
  const [piddetail26, setPiddetail26] = useState([]);
  const [piddetail27, setPiddetail27] = useState([]);
  const [piddetail28, setPiddetail28] = useState([]);
  // store pid3 details and mold no states
  const [piddetail31, setPiddetail31] = useState([]);
  const [piddetail32, setPiddetail32] = useState([]);
  const [piddetail33, setPiddetail33] = useState([]);
  const [piddetail34, setPiddetail34] = useState([]);
  const [piddetail35, setPiddetail35] = useState([]);
  const [piddetail36, setPiddetail36] = useState([]);
  const [piddetail37, setPiddetail37] = useState([]);
  const [piddetail38, setPiddetail38] = useState([]);
  // store pid4 details and mold no states
  const [piddetail41, setPiddetail41] = useState([]);
  const [piddetail42, setPiddetail42] = useState([]);
  const [piddetail43, setPiddetail43] = useState([]);
  const [piddetail44, setPiddetail44] = useState([]);
  const [piddetail45, setPiddetail45] = useState([]);
  const [piddetail46, setPiddetail46] = useState([]);
  const [piddetail47, setPiddetail47] = useState([]);
  const [piddetail48, setPiddetail48] = useState([]);
  //
  const [selecb, setSelecb] = useState([]);
  const [showval, setShowval] = useState([]);
  const [count, set] = useState([]);
  const [moldstore, setMoldstore] = useState([]);

  const save = (e) => {
    e.preventDefault();
    setSelecb([...state.starttime, selecb]);
    console.log(selecb);
  };
  const show = (e) => {
    e.preventDefault();
    setShowval(selecb.starttime);
    console.log("123", setShowval(selecb.starttime));
    console.log("hi", showval);
  };

  // selection state
  const [select, setSelect] = useState(false);
  const [getmoldno1, setGetmoldno1] = useState(false);
  const [getmoldno2, setGetmoldno2] = useState(false);
  const [getmoldno3, setGetmoldno3] = useState(false);
  const [getmoldno4, setGetmoldno4] = useState(false);

  const [pid1moldno , setPid1moldno] = useState ("");
  const [pid2moldno , setPid2moldno] = useState ("");
  const [pid3moldno , setPid3moldno] = useState ("");
  const [pid4moldno , setPid4moldno] = useState ("");
  
  // check all selelction
  const handleBlur = () => {
    if (
      state.starttime !== 0 &&
      state.outtime !== 0 &&
      state.endtime !== 0 &&
      state.loadtime !== 0 &&
      state.pid1 !== 0 &&
      state.pid2 !== 0 &&
      state.pid3 !== 0 &&
      state.pid4 !== 0
    ) {
      console.log(
        "starttime, outtime,endtime, loadtime,pid1,pid2,pid3,pid4 is not selected"
      );
      console.log("all select");
      getpiddetail();

      setSelect(false);
    } else {
      console.log(
        "starttime, outtime,endtime, loadtime, pid1,pid2,pid3,pid4 is not selected"
      );
      setSelect(true);
    }
  };

  useEffect(() => {
    if (select === false) {
      getpiddetail();
    } else {
      console.log("no pid");
    }
  }, [select]);

  // useEffect(() => {
  //   getpiddetail();
  // }, [tiredetail4]);

  useEffect(() => {
    if (state) {
      handleBlur();
    }
  }, [state]);

  
  
  const getpiddetail = async () => {
    
    try {
      
      const pidinfo1 = await fetch(
        `http://localhost:5433/pid/pid-detail/${state.pid1}`
      );
     

      const pidinfo2 = await fetch(
        `http://localhost:5433/pid/pid-detail/${state.pid2}`
      );
      const pidinfo3 = await fetch(
        `http://localhost:5433/pid/pid-detail/${state.pid3}`
      );
      const pidinfo4 = await fetch(
        `http://localhost:5433/pid/pid-detail/${state.pid4}`
      );
      
      
      const fetchData1 = await pidinfo1.json();
      const fetchData2 = await pidinfo2.json();
      const fetchData3 = await pidinfo3.json();
      const fetchData4 = await pidinfo4.json();
      
      setPiddetail1(fetchData1.pid_detail.tiresizebasic);
      setPiddetail2(fetchData1.pid_detail.lugtype);
      setPiddetail3(fetchData1.pid_detail.tiretype);
      setPiddetail4(fetchData1.pid_detail.config);
      setPiddetail5(fetchData1.pid_detail.rimsize);
      setPiddetail6(fetchData1.pid_detail.swmsg);
      setPiddetail7(fetchData1.pid_detail.brand);
      setPiddetail8(fetchData1.pid_detail.moldno);
      // pid 2
      setPiddetail21(fetchData2.pid_detail.tiresizebasic);
      setPiddetail22(fetchData2.pid_detail.lugtype);
      setPiddetail23(fetchData2.pid_detail.tiretype);
      setPiddetail24(fetchData2.pid_detail.config);
      setPiddetail25(fetchData2.pid_detail.rimsize);
      setPiddetail26(fetchData2.pid_detail.swmsg);
      setPiddetail27(fetchData2.pid_detail.brand);
      setPiddetail28(fetchData2.pid_detail.moldno);
      // // pid 3
      setPiddetail31(fetchData3.pid_detail.tiresizebasic);
      setPiddetail32(fetchData3.pid_detail.lugtype);
      setPiddetail33(fetchData3.pid_detail.tiretype);
      setPiddetail34(fetchData3.pid_detail.config);
      setPiddetail35(fetchData3.pid_detail.rimsize);
      setPiddetail36(fetchData3.pid_detail.swmsg);
      setPiddetail37(fetchData3.pid_detail.brand);
      setPiddetail38(fetchData3.pid_detail.moldno);
      // pid 4
      setPiddetail41(fetchData4.pid_detail.tiresizebasic);
      setPiddetail42(fetchData4.pid_detail.lugtype);
      setPiddetail43(fetchData4.pid_detail.tiretype);
      setPiddetail44(fetchData4.pid_detail.config);
      setPiddetail45(fetchData4.pid_detail.rimsize);
      setPiddetail46(fetchData4.pid_detail.swmsg);
      setPiddetail47(fetchData4.pid_detail.brand);
      setPiddetail48(fetchData4.pid_detail.moldno);
      
      // console.log(piddetail1);
    } catch (err) {
      console.error(err.message);
    }

    getmoldnumbers();
  };

  const getmoldnumbers = async () => {
    
    try {
      
      const moldinfo1 = await fetch(
        `http://localhost:5433/pid/moldpiddetail/${state.pid1}`
      );
     
      const moldinfo2 = await fetch(
        `http://localhost:5433/pid/moldpiddetail/${state.pid2}`
      );
      const moldinfo3 = await fetch(
        `http://localhost:5433/pid/moldpiddetail/${state.pid3}`
      );
      const moldinfo4 = await fetch(
        `http://localhost:5433/pid/moldpiddetail/${state.pid4}`
      );
      
      
      const fetchData5 = await moldinfo1.json();
      const fetchData6 = await moldinfo2.json();
      const fetchData7 = await moldinfo3.json();
      const fetchData8 = await moldinfo4.json();
      
      setGetmoldno1(fetchData5);
      
      // pid 2
      setGetmoldno2(fetchData6);
      
      // // pid 3
      setGetmoldno3(fetchData7);
     
      // pid 4
      setGetmoldno4(fetchData8);
      
    } catch (err) {
      console.error(err.message);
    }
  };

console.log("helo  getmoldno1" , getmoldno1 )

  return (
    <div>
      <table onSubmit={handleBlur}>
        <div className="head">
          <Table striped bordered hover variant="primary">
            <thead>
              <tr>
                <td colSpan={3}>PRESS</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>START TIME</td>
                <td>
                  <input
                    type="number"
                    value={state.starttime}
                    name="starttime"
                    onChange={(e) => {
                      console.log(e.target.value);
                      setState({ ...state, [e.target.name]: e.target.value });
                    }}

                    //onBlur={handleBlur}
                  />
                </td>
                <td>Input starttime</td>
                
              </tr>
              <tr>
                <td>OUT TIME</td>
                <td>
                  <input
                    type="number"
                    value={state.outtime}
                    name="outtime"
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.value })
                    }
                    //onBlur={handleBlur}
                  />
                </td>
                <td>Input outtime</td>
              </tr>
              <tr>
                <td>END TIME</td>
                <td>
                  <input
                    type="number"
                    value={state.endtime}
                    name="endtime"
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.value })
                    }
                    // onBlur={handleBlur}
                  />
                </td>
                <td>Input endtime</td>
              </tr>
              <tr>
                <td>NEXT LOADING TIME</td>
                <td>
                  <input
                    type="number"
                    value={state.loadtime}
                    name="loadtime"
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.value })
                    }
                    // onBlur={handleBlur}
                  />
                </td>
                <td>Input nextloadttime</td>
              </tr>
              <tr>
                <td>PID 1</td>
                <td>
                  <input
                    type="number"
                    value={state.pid1}
                    name="pid1"
                    onChange={(e) => {
                      if (e.target.value.length <= 6) {
                        setState({ ...state, [e.target.name]: e.target.value });
                      }
                    }}

                    // onBlur={handleBlur}
                  />
                   {piddetail1 && 
                   <div>  {piddetail2} , {piddetail3} , {piddetail4} ,{piddetail5},{piddetail6},{piddetail7},{piddetail8}</div>
                   } 
                </td>
                <td>
                {/* <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Mold Number1
                  </Dropdown.Toggle>

                <Dropdown.Menu>
                  {
                    ["1","2","3"].map(moldno =>{
                      return  <Dropdown.Item href="#/action-1">{moldno}</Dropdown.Item>
                    })
                  }
                  
                   
                 </Dropdown.Menu>
               </Dropdown> */}
               <Form.Select aria-label="Default select example"value={pid1moldno} onChange= {(e) => setPid1moldno (e.target.value)}>
               {
                   getmoldno1?.rows?.length>0 ? getmoldno1.rows.map(moldno =>{
                      return  <option value={moldno.moldno}>{moldno.moldno}</option>
                    })
                    :<option>no option</option>

                  }       
               </Form.Select>
                </td>
              </tr>
              <tr>
                <td>PID 2</td>
                <td>
                  <input
                    type="number"
                    value={state.pid2}
                    name="pid2"
                    onChange={(e) => {
                      if (e.target.value.length <= 6) {
                        setState({ ...state, [e.target.name]: e.target.value });
                      }
                    }}
                    // onBlur={handleBlur}
                  />
                   {piddetail21 && 
                   <div>  {piddetail22} , {piddetail23} , {piddetail24} ,{piddetail25},{piddetail26},{piddetail27},{piddetail28}</div>
                   } 
                   
                </td>
                <td>
                {/* <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Mold Number1
                  </Dropdown.Toggle>

                <Dropdown.Menu>
                   <Dropdown.Item href="#/action-1">{getmoldno2}</Dropdown.Item>
                   
                 </Dropdown.Menu>
               </Dropdown> */}
               <Form.Select aria-label="Default select example"value={pid2moldno} onChange= {(e) => setPid2moldno (e.target.value)}>
               {
                   getmoldno2?.rows?.length>0 ? getmoldno2.rows.map(moldno =>{
                      return  <option value={moldno.moldno}>{moldno.moldno}</option>
                    })
                    :<option>no option</option>

                  }       
               </Form.Select>

                </td>
              </tr>
              <tr>
                <td>PID 3</td>
                <td>
                  <input
                    type="number"
                    value={state.pid3}
                    name="pid3"
                    onChange={(e) => {
                      if (e.target.value.length <= 6) {
                        setState({ ...state, [e.target.name]: e.target.value });
                      }
                    }}
                    //  onBlur={handleBlur}
                  />
                   {piddetail31 && 
                   <div>  {piddetail32} , {piddetail33} , {piddetail34} ,{piddetail35},{piddetail36},{piddetail37},{piddetail38}</div>
                   } 
                </td>
                <td>
                {/* <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Mold Number1
                  </Dropdown.Toggle>

                <Dropdown.Menu>
                   <Dropdown.Item href="#/action-1">{getmoldno3}</Dropdown.Item>
                   
                 </Dropdown.Menu>
               </Dropdown> */}
               <Form.Select aria-label="Default select example"value={pid3moldno} onChange= {(e) => setPid3moldno (e.target.value)}>
               {
                   getmoldno3?.rows?.length>0 ? getmoldno3.rows.map(moldno =>{
                      return  <option value={moldno.moldno}>{moldno.moldno}</option>
                    })
                    :<option>no option</option>

                  }       
               </Form.Select>
                </td>
              </tr>
              <tr>
                <td>PID 4</td>
                <td>
                  <input
                    type="number"
                    value={state.pid4}
                    name="pid4"
                    onChange={(e) => {
                      if (e.target.value.length <= 6) {
                        setState({ ...state, [e.target.name]: e.target.value });
                      }
                    }}
                    // onBlur={handleBlur}
                  />
                    {piddetail41 && 
                   <div>{piddetail42} , {piddetail43} , {piddetail44} ,{piddetail45},{piddetail46},{piddetail47},{piddetail48}</div>
                   } 
                </td>
                <td>
                {/* <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Mold Number1
                  </Dropdown.Toggle>

                <Dropdown.Menu>
                   <Dropdown.Item href="#/action-1">{getmoldno4}</Dropdown.Item>
                   
                 </Dropdown.Menu>
               </Dropdown> */}
               <Form.Select aria-label="Default select example"value={pid4moldno} onChange= {(e) => setPid4moldno (e.target.value)}>
               {
                   getmoldno4?.rows?.length>0 ? getmoldno4.rows.map(moldno =>{
                      return  <option value={moldno.moldno}>{moldno.moldno}</option>
                    })
                    :<option>no option</option>

                  }       
               </Form.Select>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="save">
          <button
            variant="primary"
            onClick={() => props.handleupdateclose(state, name)}
          >
            {" "}
            Save Changes
          </button>{" "}
        </div>

        
        {/* <div>
          {piddetail1} {piddetail21} {piddetail31} {piddetail41}
          <br />
          {piddetail2} {piddetail22} {piddetail32} {piddetail42}
          <br />
          {piddetail3} {piddetail23} {piddetail33} {piddetail43}
          <br />
          {piddetail4} {piddetail24} {piddetail34} {piddetail44}
          <br />
          {piddetail5} {piddetail25} {piddetail35} {piddetail45}
          <br />
          {piddetail6} {piddetail26} {piddetail36} {piddetail46}
          <br />
          {piddetail7} {piddetail27} {piddetail37} {piddetail47}
          <br />
          {piddetail8} {piddetail28} {piddetail38} {piddetail48}
        </div> */}
        {/* {selecb.starttime} */}
      </table>
    </div>
  );
};

export default Card1;
