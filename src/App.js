
import React, { useState } from 'react';



function App() {
  // const ketqua = [];

  const arr_wether = [
    {
      type: "Clear",
      img: "https://cdn-icons-png.flaticon.com/512/6974/6974833.png",
    },
    {
      type: "Rain",
      img: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png",
    },
    {
      type: "Snow",
      img: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
    },
    {
      type: "Clouds",
      img: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
    },
    {
      type: "Haze",
      img: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
    },
    {
      type: "Smoke",
      img: "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
    },
    {
      type: "Mist",
      img: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
    },
    {
      type: "Drizzle",
      img: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
    },
  ];

  //console.log("bb/" + arr_wether.type)
  const [iscall, setiscall] = useState(false);

  

  const [ketqua, setketqua] = useState([]);

  const [is_ketqua, setis_ketqua] = useState(false);

  const [tp_input, settp_input] = useState("");

  const handleInputChange = (event) => {
    // console.log(tp_input)
    settp_input(event.target.value)
    setiscall(false)

  }


  //data.main.temp
  //data.weather[0].main

  const handleclick = (event) => {
    event.preventDefault()
    setiscall(true);
    // call API  
    // let adress = "London";
    // console.log("/k: "+tp_input);
    let adress = tp_input;
    const fetchPokemon = async () => {
      const response = fetch("http://api.openweathermap.org/data/2.5/weather?q=" + adress + "&units=metric&APPID=80d4d7091327174eeafa40b0e62e740e");
      response.then((response) => response.json()).then((data) => {
        setis_ketqua(!!data.name);
        console.log("data fetch", !!data.name);

        arr_wether.forEach((item, index) => {
          if (data.weather[0].main == item.type) {

            // console.log(item.type); 

            ketqua[0] = data.name;
            ketqua[1] = item.img;
            ketqua[2] = item.type;
            ketqua[3] = data.main.temp + " Độ C";

            // ketqua.push(data.name)
            // ketqua.push(item.img)
            // ketqua.push(item.type)
            // ketqua.push(data.main.temp + " Độ C")
            //data.name)
            //item.img
            console.log(ketqua);
            setketqua([...ketqua])
            //item.type
            //data.main.temp

          }

        });


      });;
    };

    fetchPokemon();


  }

  return (
    <div>


      {/* justifyContent: "center"; */}
      {/* flexDirection: "column"; */}

      <div className="" style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", height: "1200px", backgroundColor: "#ebe9eb" }}>
        <div style={{color: "blue" ,fontSize: "60px"}}>
          Nhập Tên Thành Phố :
        </div>
        <div>
          <form onSubmit={handleclick}>
            <input style={{ paddingLeft: "10px", width: "400px", height: "60px" }}
              required
              type="text"
              // className="form-control"
              // id="floatingInput"
              placeholder="city"
              name="firstname"
              value={tp_input}
              onChange={handleInputChange}
            />
          </form>
        </div>

        {is_ketqua && (<div style={{ textAlign: "center", backgroundColor: "gray", width: "400px", height: "700px" }} >
          <div style={{color: "blue" ,fontSize: "60px"}}>
            {ketqua[0]}
          </div>

          <div className="">
            <img className="" style={{ width: "400px", height: "auto" }} alt="" src={ketqua[1]} />
          </div>

           <div style={{color: "blue" ,fontSize: "60px"}}>
            {ketqua[2]}
          </div>

          <div style={{color: "red" ,fontSize: "80px"}}>
            {ketqua[3]}
          </div>

        </div>)}

        { iscall && !is_ketqua  && (<div style={{color: "blue" ,fontSize: "60px"}}>page not found</div>)}
        


      </div>





    </div >


  );
}

export default App;
