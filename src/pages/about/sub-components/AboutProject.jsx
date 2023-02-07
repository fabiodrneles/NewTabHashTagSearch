import React, { useEffect,useState } from "react";


//import Ilustração
import ilustração from "../../../assets/svg/about-ilustration.svg";

const AboutProject = () => {
  const [info, setInfo] = useState(null)

  // Acesso api Airtable para listar as informações do projeto
  useEffect(() => {
      let myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer keykXHtsEPprqdSBF");
      myHeaders.append("Cookie", "");
      
      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/Projeto?fields%5B%5D=Squad&fields%5B%5D=Sobre", requestOptions)
        .then(response => response.json())
        .then(result => {
            const filtered = result.records.filter((item)  => item.id === "recjVTOqAve5YDzhk")
            setInfo(filtered[0].fields.Sobre)
          })
        .catch(error => console.log('error', error));    
      }, [])
  return (
    <div className='about-project'>
      <main>
        <h1 className='about-tittle'>Sobre o projeto</h1>
        <p className='about-text'>
        {info}
        </p>
      </main>
      <img className='about-image'
      src={ilustração} alt="Ilustração"></img>
    </div>
  );
};

export default AboutProject;