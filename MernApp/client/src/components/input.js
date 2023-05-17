import React, { useEffect, useState, useLayoutEffect } from "react";
import axios from "axios";
import "./style.css";
var a = [];

export default function Input() {
  // useEffect(() => {
  //   console.log(formData);
  // });
  ////////////////////////////////////////////////////////////////////

  const [data, setData] = useState(["Wait"]);
  const [del, setDel] = useState(0);

  ////enables to load table the first time
  useEffect(() => {
    var h = [];

    let isMounted = true;
    const fetchdata1 = async () => {
      await fetch("http://localhost:5000/table")
        .then((response) => response.json())
        .then((response) => {
          if (isMounted) {
            for (let i = 0; i < response.count; i++) {
              h.push(response.name[i]);
              h.push(response.food[i]);
              h.push(response.calories[i]);
              h.push(response.tags[i]);
              h.push(i);
            }
            var hhh = [];
            for (let k = 0; k < h.length / 5; k++) {
              var hh = [];
              hh.push(h[5 * k]);
              hh.push(h[5 * k + 1]);
              hh.push(h[5 * k + 2]);
              hh.push(h[5 * k + 3]);
              hh.push(h[5 * k + 4]);
              hhh.push(hh);
            }
            setData(hhh);
            //console.log(data1);
          }
        })
        .finally(function () {
          // console.log(data1);
        });
    };
    fetchdata1();
    return () => {
      isMounted = true;
    };
  }, []);

  useLayoutEffect(() => {
    var h = [];
    let isMounted = true;
    const fetchdata1 = async () => {
      await fetch("http://localhost:5000/table")
        .then((response) => response.json())
        .then((response) => {
          if (isMounted) {
            for (let i = 0; i < response.count; i++) {
              h.push(response.name[i]);
              h.push(response.food[i]);
              h.push(response.calories[i]);
              h.push(response.tags[i]);
              h.push(i);
            }
            var hhh = [];
            for (let k = 0; k < h.length / 5; k++) {
              var hh = [];
              hh.push(h[5 * k]);
              hh.push(h[5 * k + 1]);
              hh.push(h[5 * k + 2]);
              hh.push(h[5 * k + 3]);
              hh.push(h[5 * k + 4]);
              hhh.push(hh);
            }
            setData(hhh);
            //console.log(setData1);
          }
        })
        .finally(function () {
          // console.log(data1);
        });
    };
    fetchdata1();
    return () => {
      isMounted = true;
    };
  }, []);
  ////////////////////////////////////////////////////////////////////

  const [formData, setFormData] = useState({});

  async function ff() {
    var h = [];
    await fetch("http://localhost:5000/table")
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < response.count; i++) {
          h.push(response.name[i]);
          h.push(response.food[i]);
          h.push(response.calories[i]);
          h.push(response.tags[i]);
          h.push(i);
        }
        var hhh = [];

        for (let k = 0; k < h.length / 5; k++) {
          var hh = [];
          hh.push(h[5 * k]);
          hh.push(h[5 * k + 1]);
          hh.push(h[5 * k + 2]);
          hh.push(h[5 * k + 3]);
          hh.push(h[5 * k + 4]);
          hhh.push(hh);
        }

        // console.log(h);
        setData(hhh);
      })
      .finally(function () {
        // console.log(data1);
      });
  }

  async function handleSubmit(event) {
    var count = 0;
    event.preventDefault(); // prevent default form submission behavior
    axios
      .post("http://localhost:5000/input", formData) // submit form data with axios to the server
      .then((response) => {
        console.log(response.data); // handle successful response
      })
      .catch((error) => {
        console.error(error); // handle error
      });
    var h = [];
    await fetch("http://localhost:5000/table")
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < response.count; i++) {
          h.push(response.name[i]);
          h.push(response.food[i]);
          h.push(response.calories[i]);
          h.push(response.tags[i]);
          h.push(i);
        }
        var hhh = [];

        for (let k = 0; k < h.length / 5; k++) {
          var hh = [];
          hh.push(h[5 * k]);
          hh.push(h[5 * k + 1]);
          hh.push(h[5 * k + 2]);
          hh.push(h[5 * k + 3]);
          hh.push(h[5 * k + 4]);
          hhh.push(hh);
        }

        setData(hhh);
      })
      .finally(function () {
        ff();
        // console.log(data1);
        //regular intervals update

        // const intervalId = setInterval(() => {
        //   ff();

        //   if (count == 1) {
        //     clearInterval(intervalId);
        //   }
        //   count++;
        //   // console.log(count);
        // }, 2);
      });

    // await fetch("http://localhost:5000/dt")
    //   .then((response) => response.json())
    //   .then((e) => {
    //     a = e.data;
    //     //console.log(a);
    //   });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function rmv(event) {
    var count1 = 0;
    event.preventDefault();
    axios
      .post("http://localhost:5000/delRow", del)
      .then(function (response) {
        ff();
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        ff();
        // const intervalId1 = setInterval(() => {
        //   ff();

        //   if (count1 == 1) {
        //     clearInterval(intervalId1);
        //   }
        //   count1++;
        //   // console.log(count);
        // }, 2);
      });

    // const intervalId1 = setInterval(() => {
    //   console.log(count1);
    //   ff();

    //   if (count1 == 1) {
    //     clearInterval(intervalId1);
    //   }
    //   count1++;
    // }, 1);
  }

  async function handleRow(event) {
    const { name, value } = event.target;
    setDel({ ...del, [name]: value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter fullname"
          onChange={handleInputChange}
        />
        <p></p>
        <input
          type="text"
          name="food"
          placeholder="Enter Age"
          onChange={handleInputChange}
        />
        <p></p>
        <input
          type="text"
          name="calories"
          placeholder="Enter City"
          onChange={handleInputChange}
        />
        <p></p>
        <input
          type="text"
          name="tags"
          placeholder="Enter University name"
          onChange={handleInputChange}
        />
        <p></p>
        <button className="Button" type="submit" name="submit">
          insert in Person collection
        </button>
      </form>

      <>
        <table className="table">
          <thead>
            <tr>
              <td>foto</td>
              <th>Fullname</th>
              <th>Age</th>
              <th>City</th>
              <th>University</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <>
                <tr key={item[4]}>
                  <td>
                    <img
                      height="50px"
                      width="50px"
                      src="/Untitled.png"
                      alt="Description of the image"
                    />
                  </td>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
                  <td>{item[3]}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>

        <form onSubmit={rmv}>
          <input
            type="text"
            name="name"
            placeholder="Enter value to delete"
            onChange={handleRow}
          />
          <p></p>
          <button className="Button" type="submit" name="submit">
            Delete
          </button>
        </form>
      </>
    </>
  );
}
