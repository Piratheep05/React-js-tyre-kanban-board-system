import React, { useState, useEffect } from "react";
import { Form, Table, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import { useForm } from "react-hook-form";
import "./Card1.css";


const Card1 = (props) => {
  const {
    pressid,
    name,
    pid1,
    pid2,
    pid3,
    pid4,
    starttime,
    
  } = props.data;
  console.log(props, "vvvvvv5");
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
    pressid: pressid || 0,
    starttime: starttime || 0,
    pid1: pid1 || 0,
    pid2: pid2 || 0,
    pid3: pid3 || 0,
    pid4: pid4 || 0,
    name: name || 0,
  });

  const [endtime, setEndtime] = useState("");

  // store pid1 details and mold no states
  const [piddetail1, setPiddetail1] = useState("");
  const [piddetail2, setPiddetail2] = useState("");
  const [piddetail3, setPiddetail3] = useState("");
  const [piddetail4, setPiddetail4] = useState("");
  const [piddetail5, setPiddetail5] = useState("");
  const [piddetail6, setPiddetail6] = useState("");
  const [piddetail7, setPiddetail7] = useState("");
  const [piddetail8, setPiddetail8] = useState("");

  // store pid2 details and mold no states
  const [piddetail21, setPiddetail21] = useState("");
  const [piddetail22, setPiddetail22] = useState("");
  const [piddetail23, setPiddetail23] = useState("");
  const [piddetail24, setPiddetail24] = useState("");
  const [piddetail25, setPiddetail25] = useState("");
  const [piddetail26, setPiddetail26] = useState("");
  const [piddetail27, setPiddetail27] = useState("");
  const [piddetail28, setPiddetail28] = useState("");
  // store pid3 details and mold no states
  const [piddetail31, setPiddetail31] = useState("");
  const [piddetail32, setPiddetail32] = useState("");
  const [piddetail33, setPiddetail33] = useState("");
  const [piddetail34, setPiddetail34] = useState("");
  const [piddetail35, setPiddetail35] = useState("");
  const [piddetail36, setPiddetail36] = useState("");
  const [piddetail37, setPiddetail37] = useState("");
  const [piddetail38, setPiddetail38] = useState("");
  // store pid4 details and mold no states
  const [piddetail41, setPiddetail41] = useState("");
  const [piddetail42, setPiddetail42] = useState("");
  const [piddetail43, setPiddetail43] = useState("");
  const [piddetail44, setPiddetail44] = useState("");
  const [piddetail45, setPiddetail45] = useState("");
  const [piddetail46, setPiddetail46] = useState("");
  const [piddetail47, setPiddetail47] = useState("");
  const [piddetail48, setPiddetail48] = useState("");
  //
  const [selecb, setSelecb] = useState([]);
  const [showval, setShowval] = useState([]);
  const [count, set] = useState([]);
  const [moldstore, setMoldstore] = useState([]);

  // post tirecode usestates

  // const [posttirecode1,setPosttirecode1] = useState("")
  // const [posttirecode2,setPosttirecode2] = useState("")
  // const [posttirecode3,setPosttirecode3] = useState("")
  // const [posttirecode4,setPosttirecode4] = useState("")

  // get curringtime states
  const [getcurringtime11, setGetcurringtime11] = useState("");
  const [getcurringtime12, setGetcurringtime12] = useState("");
  const [getcurringtime13, setGetcurringtime13] = useState("");
  const [getcurringtime14, setGetcurringtime14] = useState("");

  const [getcurringtime21, setGetcurringtime21] = useState("");
  const [getcurringtime22, setGetcurringtime22] = useState("");
  const [getcurringtime23, setGetcurringtime23] = useState("");
  const [getcurringtime31, setGetcurringtime31] = useState("");
  const [getcurringtime32, setGetcurringtime32] = useState("");
  const [getcurringtime33, setGetcurringtime33] = useState("");
  const [getcurringtime41, setGetcurringtime41] = useState("");
  const [getcurringtime42, setGetcurringtime42] = useState("");
  const [getcurringtime43, setGetcurringtime43] = useState("");

  // curring insidetime state
  const [insidetime1, setInsidetime1] = useState("");
  const [insidetime2, setInsidetime2] = useState("");
  const [insidetime3, setInsidetime3] = useState("");
  const [insidetime4, setInsidetime4] = useState("");

  // curring outtime state
  const [outtime1, setOuttime1] = useState("");
  const [outtime2, setOuttime2] = useState("");
  const [outtime3, setOuttime3] = useState("");
  const [outtime4, setOuttime4] = useState("");
  
  // maxtotaltime state
  const[finaltime1,setFinaltime1] = useState("");
  const[finaltime2,setFinaltime2] = useState("");
  const[finaltime3,setFinaltime3] = useState("");
  const[finaltime4,setFinaltime4] = useState("");



  //total curring time
  // const[out1,setOut1]=useState("");
  // const[out2,setOut1]=useState("");
  // const[out3,setOut1]=useState("");
  // const[out4,setOut1]=useState("");

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

  const [pid1moldno, setPid1moldno] = useState("");
  const [pid2moldno, setPid2moldno] = useState("");
  const [pid3moldno, setPid3moldno] = useState("");
  const [pid4moldno, setPid4moldno] = useState("");

  // check all selelction
  const handleBlur = () => {
    if (
      state.starttime !== 0 &&
     
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

  // get pid detail function call useeffect
  useEffect(() => {
    if (select === false) {
      getpiddetail();
     
    } else {
      console.log("no pid");
    }
  }, [select]);

  // get curing detail sizeid tcat lugtype get function call useeffect

  useEffect(() => {
    if (state.pid1 , state.pid2 ,state.pid3,state.pid4) {
      getcurringtimeid();
    }
  }, [state.pid1 , state.pid2,state.pid3,state.pid4]);

  
  useEffect(() => {
    if (state) {
      handleBlur();
    }
  }, [state]);

  // get pid details api call
  const getpiddetail = async () => {
    try {
      console.log(pid1);
      console.log("hhhhhhhhhhh", state.pid1.toString());
      console.log("hhhhhhhhhhh", state.pid1.toString().length == 6);
      if (state.pid1.toString().length == 6) {
        console.log("hhhhhhhhhhh",state.pid1.toString().length);
        const pidinfo1 = await fetch(
          `http://localhost:5433/pid/pid-detail/${state.pid1}`
        );

        const fetchData1 = await pidinfo1.json();

        setPiddetail1(fetchData1.pid_detail.tiresizebasic);
        setPiddetail3(fetchData1.pid_detail.tiretype);
        // setPiddetail4(fetchData1.pid_detail.config);
        setPiddetail5(fetchData1.pid_detail.rimsize);
        setPiddetail6(fetchData1.pid_detail.swmsg);
        setPiddetail7(fetchData1.pid_detail.brand);
        // setPiddetail8(fetchData1.pid_detail.moldno);
      } else {
        setPiddetail1("");
        setPiddetail3("");
        setPiddetail5("");
        setPiddetail6("");
        setPiddetail6("");
      }
           // pid 2
      if (state.pid2.toString().length == 6) {
         const pidinfo2 = await fetch(
        `http://localhost:5433/pid/pid-detail/${state.pid2}`
      );
         const fetchData2 = await pidinfo2.json(); 
      setPiddetail21(fetchData2.pid_detail.tiresizebasic);
      // setPiddetail22(fetchData2.pid_detail.lugtype);
      setPiddetail23(fetchData2.pid_detail.tiretype);
      // setPiddetail24(fetchData2.pid_detail.config);
      setPiddetail25(fetchData2.pid_detail.rimsize);
      setPiddetail26(fetchData2.pid_detail.swmsg);
      setPiddetail27(fetchData2.pid_detail.brand);
      setPiddetail28(fetchData2.pid_detail.moldno);
      }

      // pid3 things
      
      if (state.pid3.toString().length == 6) { 
         const pidinfo3 = await fetch(
        `http://localhost:5433/pid/pid-detail/${state.pid3}`
      );
        const fetchData3 = await pidinfo3.json();
        
        setPiddetail31(fetchData3.pid_detail.tiresizebasic);
      // setPiddetail32(fetchData3.pid_detail.lugtype);
      setPiddetail33(fetchData3.pid_detail.tiretype);
      // setPiddetail34(fetchData3.pid_detail.config);
      setPiddetail35(fetchData3.pid_detail.rimsize);
      setPiddetail36(fetchData3.pid_detail.swmsg);
      setPiddetail37(fetchData3.pid_detail.brand);
      // setPiddetail38(fetchData3.pid_detail.moldno);
      }
       // pid 4 things
       if (state.pid4.toString().length == 6) {  
        const pidinfo4 = await fetch(
          `http://localhost:5433/pid/pid-detail/${state.pid4}`
        );
        const fetchData4 = await pidinfo4.json();
        
        setPiddetail41(fetchData4.pid_detail.tiresizebasic);
        // setPiddetail42(fetchData4.pid_detail.lugtype);
        setPiddetail43(fetchData4.pid_detail.tiretype);
        // setPiddetail44(fetchData4.pid_detail.config);
        setPiddetail45(fetchData4.pid_detail.rimsize);
        setPiddetail46(fetchData4.pid_detail.swmsg);
        setPiddetail47(fetchData4.pid_detail.brand);
        // setPiddetail48(fetchData4.pid_detail.moldno);
  
       }
     
      // console.log(piddetail1);
    } catch (err) {
      console.error(err.message);
    }

    getmoldnumbers();
  };

  // get moldnumber api call
  const getmoldnumbers = async () => {
    try {
      // pid1 moldnuber
      if (state.pid1.toString().length > 5) {
        const moldinfo1 = await fetch(
          `http://localhost:5433/pid/moldpiddetail/${state.pid1}`
        );
        const fetchData5 = await moldinfo1.json();

        setGetmoldno1(fetchData5);
      }
      // pid2 moldnuber2

      if (state.pid2.toString().length === 6) {
        
          const moldinfo2 = await fetch(
        `http://localhost:5433/pid/moldpiddetail/${state.pid2}`
      );

        const fetchData6 = await moldinfo2.json();

           setGetmoldno2(fetchData6);
      }
       // pid3 moldnuber2
        if (state.pid3.toString().length === 6) {
           const moldinfo3 = await fetch(
        `http://localhost:5433/pid/moldpiddetail/${state.pid3}`
      );
          
         const fetchData7 = await moldinfo3.json();
         setGetmoldno3(fetchData7);
        }

        // pid4 moldnuber2
     if (state.pid4.toString().length === 6) {
        
      const moldinfo4 = await fetch(
        `http://localhost:5433/pid/moldpiddetail/${state.pid4}`
      );
      const fetchData8 = await moldinfo4.json();
      setGetmoldno4(fetchData8);

     }
      
    } catch (err) {
      console.error(err.message);
    }
  };

  // get sizebasicid lugtypeid tcat  input pid
  const getcurringtimeid = async () => {
    console.log("hhhhhhhgetcurringtimeid");
    try {

      // pid1 things
      if (state.pid1.toString().length == 6) {
        const curringinfo1 = await fetch(
          `http://localhost:5433/pressAlldetailRouter/pid-curring/${state.pid1}`
        );

        const fetchData5 = await curringinfo1.json();
        const getcurringtime11 = fetchData5.data.data[0].sizebasicid
        const getcurringtime12 = fetchData5.data.data[0].lugtypeid
        const getcurringtime13 = fetchData5.data.data[0].tcat
        const getcurringtime14 = fetchData5.data.data[0].tiretypeid

       
        console.log("kkk1", fetchData5.data.data[0].sizebasicid);
        // setGetcurringtime12(fetchData5.data.data[0].lugtypeid);
        console.log("kkk2", fetchData5.data.data[0].lugtypeid);
        // setGetcurringtime13(fetchData5.data.data[0].tcat);
        console.log("kkk3", fetchData5.data.data[0].tcat);
        console.log("kkk4", fetchData5.data.data[0].tiretypeid);

        if (getcurringtime11 && getcurringtime12 && getcurringtime13 && state.pid1) {
          const curringinfo1 = await fetch(
            `http://localhost:5433/pressAlldetailRouter/getcurringfinaltime/${state.pid1}/${getcurringtime12}/${getcurringtime13}/${getcurringtime11}`
          );
          const fetchData21 = await curringinfo1.json();

          // const insidetime1 = fetchData21.data.data[0].insidetime;
          // const outtime1 = fetchData21.data.data[0].outsidetime;

  
          setInsidetime1(fetchData21.data.data[0].insidetime);
          setOuttime1(fetchData21.data.data[0].outsidetime);
          console.log("xxx1", insidetime1);
          console.log("xxx2", outtime1);
          // const totaltime1 = insidetime1 + outtime1;
          // console.log(insidetime1 + outtime1, "hhhhhhh totaltime1");
         
        }
      }
     
       
      // pid2 things
       if (state.pid2.toString().length == 6) {

        const curringinfo2 = await fetch(
        `http://localhost:5433/pressAlldetailRouter/pid-curring/${state.pid2}`
      );
          const fetchData6 = await curringinfo2.json();

          const getcurringtime21 = fetchData6.data.data[0].sizebasicid;
          const getcurringtime22 = fetchData6.data.data[0].lugtypeid;
          const getcurringtime23 = fetchData6.data.data[0].tcat;

     
      // setGetcurringtime21(fetchData6.data.data[0].sizebasicid);
      console.log("vvv1", fetchData6.data.data[0].sizebasicid);
      // setGetcurringtime22(fetchData6.data.data[0].lugtypeid);
      console.log("vvv2" ,fetchData6.data.data[0].lugtypeid);
      // setGetcurringtime23(fetchData6.data.data[0].tcat);
      console.log("vvv3" ,fetchData6.data.data[0].tcat);
      

      if ( state.pid2 && getcurringtime21 && getcurringtime22 && getcurringtime23  ) {
        const curringinfo2 = await fetch(
     `http://localhost:5433/pressAlldetailRouter/getcurringfinaltime/${state.pid2}/${getcurringtime21}/${getcurringtime22}/${getcurringtime23}`
   );
        
      const fetchData22 = await curringinfo2.json();

      // const insidetime2 = fetchData22.data.data[0].insidetime;
      // const outtime2 = fetchData22.data.data[0].outsidetime;

   setInsidetime2(fetchData22.data.data[0].insidetime);
   setOuttime2(fetchData22.data.data[0].outsidetime);
   console.log("hhhhhhhh insidetime",fetchData22.data.data[0].insidetime);
   console.log("hhhhhhhh outsidetime",fetchData22.data.data[0].outsidetime);

    }
       }
      // pid3 things
       if (state.pid3.toString().length == 6) {
          const curringinfo3 = await fetch(
        `http://localhost:5433/pressAlldetailRouter/pid-curring/${state.pid3}`
      );
          const fetchData7 = await curringinfo3.json();

          const getcurringtime31 = fetchData7.data.data[0].sizebasicid;
          const getcurringtime32= fetchData7.data.data[0].lugtypeid;
          const getcurringtime33 = fetchData7.data.data[0].tcat;



        // setGetcurringtime31(fetchData7.data.data[0].sizebasicid);
      console.log("hhhhhh setGetcurringtime31" ,fetchData7.data.data[0].sizebasicid);
      // setGetcurringtime32(fetchData7.data.data[0].lugtypeid);
      console.log("hhhhh setGetcurringtime32" ,fetchData7.data.data[0].lugtypeid);
      // setGetcurringtime33(fetchData7.data.data[0].tcat);
      console.log("hhhhh setGetcurringtime33" ,fetchData7.data.data[0].tcat);
      
      if ( state.pid3 && getcurringtime31 && getcurringtime32 && getcurringtime33  ) {

        const curringinfo3 = await fetch(
      `http://localhost:5433/pressAlldetailRouter/getcurringfinaltime/${state.pid3}/${getcurringtime31}/${getcurringtime32}/${getcurringtime33}`
    );

        const fetchData23= await curringinfo3.json();

        // const insidetime3 = fetchData23.data.data[0].insidetime;
        // const outtime3 = fetchData23.data.data[0].outsidetime;
     setInsidetime3(fetchData23.data.data[0].insidetime);
    setOuttime3(fetchData23.data.data[0].outsidetime);
    console.log("hhhhhh setInsidetime3",fetchData23.data.data[0].insidetime);
    console.log("hhhhh setOuttime3",fetchData23.data.data[0].outsidetime);

     }

       }
      // pid 4 things
      if (state.pid4.toString().length == 6) {
         const curringinfo4 = await fetch(
        `http://localhost:5433/pressAlldetailRouter/pid-curring/${state.pid4}`
      );

      const fetchData8 = await curringinfo4.json();

      const getcurringtime41 = fetchData8.data.data[0].sizebasicid;
      const getcurringtime42 = fetchData8.data.data[0].lugtypeid;
      const getcurringtime43 = fetchData8.data.data[0].lugtypeid;
      
      // setGetcurringtime41(fetchData8.data.data[0].sizebasicid);
      console.log("varahi91" ,fetchData8.data.data[0].sizebasicid);
      // setGetcurringtime42(fetchData8.data.data[0].lugtypeid);
      console.log("varahi92" ,fetchData8.data.data[0].lugtypeid);
      // setGetcurringtime43(fetchData8.data.data[0].tcat);
      console.log("varahi93" ,fetchData8.data.data[0].lugtypeid);

      if ( state.pid4 && getcurringtime41 && getcurringtime42 && getcurringtime43  ) {
        const curringinfo4 = await fetch(
        `http://localhost:5433/pressAlldetailRouter/getcurringfinaltime/${state.pid4}/${getcurringtime41}/${getcurringtime42}/${getcurringtime43}`
      );
  
      const fetchData24= await curringinfo4.json();

      // const insidetime4 = fetchData24.data.data[0].insidetime;
      // const outtime4 = fetchData24.data.data[0].outsidetime;
      
      setInsidetime4(fetchData24.data.data[0].insidetime);
      setOuttime4(fetchData24.data.data[0].outsidetime);
      console.log("varahi21",fetchData24.data.data[0].insidetime);
      console.log("varahi22",fetchData24.data.data[0].outsidetime);

      }

      }
     
     
    } catch (err) {
      console.error(err.message);
    }

    currtime();
    
  };
  setEndtime(state.starttime + finaltime1 + finaltime2 + finaltime3 + finaltime4) ;
  // get final curringtime
  // const getcurringtime = async () => {
  //   console.log("hhhhhh currtime id", getcurringtime11, getcurringtime12, getcurringtime13);

  //   // pid1 things
  //   try {
    
  //      // pid2 things
      
  //      // pid 3 things
  //     // pid 4 things 
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // const[pressnameid,setPressnameid]=useState("");
  // setPressnameid(props.data1)

  // put press detail- starttime,pressid,pid1,pid2,pid3,pid4,pid5
  const Putpressdetail = async (e) => {
    try {
      const body = {

        pid1:state.pid1,
        pid2:state.pid2,
        pid3:state.pid3,
        pid4:state.pid4,
        starttime:state.starttime,
        pressid :state.pressid
      }

        const add6 = await fetch(`http://localhost:5433/pressAlldetailRouter/updatecarddetail`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify( body),

        }).then((response) => {
          response.json().then((res) => {
            console.log(res,"pramoth")

          })
        })

        props.trigerdragcard()

    } catch (err) {
      console.log(err)
    }
    
  }
 
  const totaltime1 = insidetime1 + outtime1 + 30 ;
      console.log(totaltime1, "hhhhhhh totaltime1");

  console.log(insidetime2, outtime2);
  const totaltime2 = insidetime2 + outtime2 + 30;
  console.log(totaltime2, "hhhhhhh totaltime2");

  const totaltime3 = insidetime3 + outtime3 + 30;
  console.log(totaltime3,"hhhhh totaltime3")

  const totaltime4 = insidetime4 + outtime4 + 30;
  console.log(totaltime4,"hhhhh totaltime4")

   
  const maxtotalhour1 = totaltime1/60
  console.log(maxtotalhour1,"hhhhhhh maxtotal ");
  
  const maxtotalhour2= (totaltime2/60)
  console.log(maxtotalhour2,"hhhhhhh maxtotal ");

  const maxtotalhour3 = (totaltime3/60)
  console.log(maxtotalhour3,"hhhhhhh maxtotal ");

  const maxtotalhour4 = (totaltime4/60)
  console.log(maxtotalhour4,"hhhhhhh maxtotal ");

  const currtime =()=>{
    if(maxtotalhour1 > maxtotalhour2 && maxtotalhour1 > maxtotalhour3 && maxtotalhour1 > maxtotalhour4){
      setFinaltime1(maxtotalhour1)
    }
    else if(maxtotalhour2 > maxtotalhour1 && maxtotalhour2 > maxtotalhour3 && maxtotalhour2 > maxtotalhour4){
      setFinaltime2(maxtotalhour2)
    }
    else if(maxtotalhour3 > maxtotalhour1 && maxtotalhour3 > maxtotalhour2 && maxtotalhour3 > maxtotalhour4){
      setFinaltime3(maxtotalhour3)
    }
    else{
      setFinaltime4(maxtotalhour4)
    }
    
  }

  

  console.log("helo  getmoldno1", getmoldno1);
  console.log("endtime" ,endtime)

  return (
    <div>
      <table onSubmit={handleBlur}>
        <div className="head">
          <Table striped bordered hover variant="primary">
            <thead>
              <tr>
                <td colSpan={3}>
                  PRESS
                  {/* <input 
                                       type="number"
                                       value={state.press_name}
                                       name = "press_name"
                                       onChange={(e) => {
                                        console.log(e.target.value);
                                        setState({ ...state, [e.target.name]: e.target.value });
                                      }}
                                        /> */}
                </td>
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
                      setState({ ...state, pid1: e.target.value });
                      }
                    }}

                    // onBlur={handleBlur}
                  />
                  {piddetail1 && (
                    <div>
                      {" "}
                      {piddetail1}, {piddetail3} ,{piddetail5},{piddetail6},
                      {piddetail7}
                    </div>
                  )}

                  {/* <p>{total} </p> */}
                </td>
                
                <td>
                 
                  <Form.Select
                    aria-label="Default select example"
                    value={pid1moldno}
                    onChange={(e) => setPid1moldno(e.target.value)}
                  >
                    {getmoldno1?.rows?.length > 0 ? (
                      getmoldno1.rows.map((moldno) => {
                        return (
                          <option value={moldno.moldno}>{moldno.moldno}</option>
                        );
                      })
                    ) : (
                      <option>no option</option>
                    )}
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
                        setState({ ...state, pid2: e.target.value });
                      }
                    }}
                    // onBlur={handleBlur}
                  />
                  {piddetail21 && (
                    <div>
                      {" "}
                      {piddetail21},{piddetail23},{piddetail25},{piddetail26},
                      {piddetail27}
                    </div>
                  )}
                </td>
                <td>
                 
                  <Form.Select
                    aria-label="Default select example"
                    value={pid2moldno}
                    onChange={(e) => setPid2moldno(e.target.value)}
                  >
                    {getmoldno2?.rows?.length > 0 ? (
                      getmoldno2.rows.map((moldno) => {
                        return (
                          <option value={moldno.moldno}>{moldno.moldno}</option>
                        );
                      })
                    ) : (
                      <option>no option</option>
                    )}
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
                        setState({ ...state, pid3: e.target.value });
                      }
                    }}
                    //  onBlur={handleBlur}
                  />
                  {piddetail31 && (
                    <div>
                      {" "}
                      {piddetail31},{piddetail33},{piddetail35},{piddetail36},
                      {piddetail37}
                    </div>
                  )}
                </td>
                <td>
                  
                  <Form.Select
                    aria-label="Default select example"
                    value={pid3moldno}
                    onChange={(e) => setPid3moldno(e.target.value)}
                  >
                    {getmoldno3?.rows?.length > 0 ? (
                      getmoldno3.rows.map((moldno) => {
                        return (
                          <option value={moldno.moldno}>{moldno.moldno}</option>
                        );
                      })
                    ) : (
                      <option>no option</option>
                    )}
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
                      setState({ ...state,pid4: e.target.value });
                        }
                    }}
                    // onBlur={handleBlur}
                  />
                  {piddetail41 && (
                    <div>
                      {" "}
                      {piddetail41},{piddetail43},{piddetail45},{piddetail46},
                      {piddetail47}
                    </div>
                  )}
                </td>
                <td>
                  
                  <Form.Select
                    aria-label="Default select example"
                    value={pid4moldno}
                    onChange={(e) => setPid4moldno(e.target.value)}
                  >
                    {getmoldno4?.rows?.length > 0 ? (
                      getmoldno4.rows.map((moldno) => {
                        return (
                          <option value={moldno.moldno}>{moldno.moldno}</option>
                        );
                      })
                    ) : (
                      <option>no option</option>
                    )}
                  </Form.Select>
                </td>
              </tr>
              <tr>
                <td> Maximum curringtime</td>
                <td> {finaltime1}  {finaltime2}  {finaltime3} {finaltime4} </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="save">
          <button
            variant="primary"
            onClick={() => props.handleupdateclose(state, name)} 
            // onClick={() => postpressdetail() }
          >
            {" "}
            Save Changes
          </button>{" "}
          <button onClick={() => Putpressdetail() }>
            Update-database
            </button>
        </div>
      </table>
    </div>
    
  );
};

export default Card1;
