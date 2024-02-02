import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {

  const [val, setval] = useState('');
  const [val1, setval1] = useState([]);
  const [data, setdata] = useState(false);
  const [up, setup] = useState();
  const [data2, setdata2] = useState();
  const [fval, setfval] = useState();

  const getdata = () => {

    if (val === '') {
      alert('enter the valu');
    }
    else {
      if (data) {
        var newarr = [...val1];
        newarr[up] = { task: val, checked: false }
        setval1(newarr)
        // setval(null)
        setdata(false)

      }
      else {
        setval1([...val1, { task: val, checked: false }]);
        setfval([...val1, { task: val, checked: false }]);


      }

    }

  }

  const Delete = (index) => {

    var data = val1.filter((ele, ind1) => {
      return (
        ind1 !== index
      )
    })
    setval1(data);

  }
  const Edit = (index) => {
    setdata(true)
    setup(index)
    setval(val1[index])

  }

  const serch = () => {

    const arr = fval.filter((ele) => {
      return (
        ele.task === data2
      )
    })
    // console.log(arr)
    setval1(arr);

  }

  const handler = (index) => {
    let c = [...val1];
    c[index].checked = !c[index].checked;
    setval1(c);
    setfval(c);
  }


  const com = () => {
    let c = fval.filter((ele, i) => {
      return ele.checked === true
    })
    setval1(c)
  }
  const nocom = () => {
    let c = fval.filter((ele, i) => {
      return ele.checked === false
    })
    setval1(c)
  }

  const allTask = () => {
    var fdata = [...fval]
    setval1(fdata)
  }



  return (
    <>
      <div className='mm'>
        <div className='main-class'>

        <h1>TODO LIST</h1>
          <div className='p-manu'>
            <input type='text' className='input' onChange={(e) => setval(e.target.value)} id="inpu" value={val}></input>
            <input type='button' className='button' value='Clike hear' onClick={getdata}></input>
          </div>
          <div className='p1-manu'>
            <input type='text' className='input' onChange={(e1) => { setdata2(e1.target.value) }}></input>
            <input type='button' className='button' value='serch' onClick={serch}></input><br></br>
          </div>
          <div className='p3-manu'>
            <input type='button' className='button' value='com' onClick={com}></input>
            <input type='button' className='button' value='allTask' onClick={allTask}></input>
            <input type='button'  className='button' value='nocom' onClick={nocom}></input>
          </div>
       

      <div>
        {
          val1.map((item, index) => {
            return (
              <>
                <input type='Checkbox'  checked={item.checked} onChange={() => { handler(index) }}></input>
                <input value={item.task} className='get ' style={{ textDecoration: item.checked ? "line-through" : "" }}></input>
                <input type='button'  onClick={() => Delete(index)} value='Delete'></input>
                <input type='button'  onClick={() => Edit(index)} value='Edit' ></input>
                <br></br>
              </>


            )

          })
        }

      </div>
      </div>
      </div>



    </>
  );
}

export default App;
