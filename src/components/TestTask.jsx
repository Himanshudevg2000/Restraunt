import React, { useState } from "react";

const TestTask = () => {


    // -------------------------------------------move tasks to left to right -----------------------------------------------//


  //   const [tasks, setTasks] = useState([

  //     {
  //       id: 1,
  //       name: "task1",
  //       complete: false,
  //     },
  //     {
  //       id: 2,
  //       name: "task2",
  //       complete: false,
  //     },
  //     {
  //       id: 3,
  //       name: "task3",
  //       complete: false,
  //     },
  //     {
  //       id: 4,
  //       name: "task4",
  //       complete: false,
  //     },
  //   ]);

  //   let [list, setList] = useState([]);

  //   const handleChangeRight = (name) => {
  //     // const updatedTasks = tasks.map((task) =>
  //     //   task.name === name ? { ...task, complete: true } : task
  //     // );
  //     // setTasks(updatedTasks);

  //     const previousTasks = tasks.filter((item) => item.id !== name.id);
  //     // console.log('previousTasks: ', previousTasks);
  //     const updatedTaskfilter = tasks.filter((item) => item.id === name.id);
  //     console.log('updatedTaskfilter: ', updatedTaskfilter);

  //     setList((prevList) => [...prevList, ...updatedTaskfilter]);
  //     setTasks(previousTasks);
  //   };

  //   const handleChangeLeft = (name) => {
  //     const previousTasks = list.filter((item) => item.id !== name.id);
  //     // console.log('previousTasks: ', previousTasks);
  //     const updatedTaskfilter = list.filter((item) => item.id === name.id);
  //     // console.log('updatedTaskfilter: ', updatedTaskfilter);

  //     setTasks((prevList) => [...prevList, ...updatedTaskfilter]);
  //     setList(previousTasks);
  //   };

  //   return (
  //     <div className="flex flex-wrap">
  //       <h1>Test</h1>

  //       <div className="border border-black m-5 p-5">
  //         {tasks.map((item) =>
  //             <li key={item.id}>
  //               <input type="checkbox" onChange={() => handleChangeRight(item)} />
  //               {item.name}
  //             </li>
  //         )}
  //       </div>

  //       <div className="border border-black m-5 p-5">
  //         {list.map((item) => (
  //           <li key={item.id}>
  //             <input type="checkbox" onChange={()=> handleChangeLeft(item)} /> {item.name}
  //           </li>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };


//-----------------------------------------dropdown task-------------------------------------------//

  const countries = [
    {
      name: "India",
      value: "IN",
      cities: ["Delhi", "Mumbai"],
    },
    {
      name: "United States",
      value: "US",
      cities: ["California", "Washington"],
    },
    {
      name: "Bangladesh",
      value: "BN",
      cities: ["dhaka", "bangla"],
    },
  ];

  const [country, setCountry] = useState({name:"", value: "", cities:[]});

  return (
    <div>
      <h1>Selector</h1>



      <select
        value={country.value}
        onChange={(e) => {
          const selectedCountry = countries.filter(
            (item) => item.value === e.target.value
          );

          if (selectedCountry.length > 0) {
            setCountry(selectedCountry[0]);
          }
        }}
        className="border border-black"
      >
        {countries.map((item, index) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>

      <select
        value ={country.cities}
        className="border border-black"
      >
        {country.cities.map((item, index) => {
          return <option value={index}> {item}</option>;
        })}
      </select>
    </div>
  );
};

export default TestTask;
