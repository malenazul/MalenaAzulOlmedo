import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { detail } = useParams();
  const [todos, setTodos] = useState();
  const [ciudad, setCiudad] = useState([]);

  const ciudades = [
    {
      id: "Q220",
      title: "Roma",
      continent: "Europa",
      description:
        "La capital de Italia, es una extensa ciudad cosmopolita que tiene a la vista casi 3,000 años de arte, arquitectura y cultura de influencia mundial.",
      price: 450,
      pictureUrl:
        "https://www.caracteristicas.co/wp-content/uploads/2017/02/imperio-romano-e1562350281661.jpg",
    },
    {
      id: "Q90",
      title: "Paris",
      continent: "Europa",
      description:
        "La capital de Francia, es una importante ciudad europea y un centro mundial del arte, la moda, la gastronomía y la cultura.",
      price: 415,
      pictureUrl:
        "https://www.diarioelnorte.com.ar/wp-content/uploads/2021/12/istockphoto-1145422105-612x612-1.jpg",
    },
    {
      id: "Q64",
      title: "Berlin",
      continent: "Europa",
      description:
        "La capital alemana, data del siglo XIII. Los elementos que recuerdan la turbulenta historia de la ciudad en el siglo XX incluyen el Monumento del Holocausto y los restos del Muro de Berlín con grafitis.",
      price: 380,
      pictureUrl:
        "https://cdn2.civitatis.com/alemania/berlin/free-tour-berlin-grid.jpg",
    },
    {
      id: "Q1492",
      title: "Barcelona",
      continent: "Europa",
      description:
        "La capital cosmopolita de la región de Cataluña en España, es conocida por su arte y arquitectura. La fantástica iglesia de la Sagrada Familia y otros hitos modernistas diseñados por Antoni Gaudí adornan la ciudad.",
      price: 480,
      pictureUrl:
        "https://fotos.hoteles.net/articulos/guia-barcelona-ciudad-2400-1.jpg",
    },
    {
      id: "Q1486",
      title: "Buenos Aires",
      continent: "America",
      description:
        "Buenos Aires es la gran capital cosmopolita de Argentina. Su centro es la Plaza de Mayo, rodeada de imponentes edificios del siglo XIX, incluida la Casa Rosada, el icónico palacio presidencial que tiene varios balcones.",
      price: 460,
      pictureUrl:
        "https://www.ipsa.org/sites/default/files/news-announcements/news/image-146716_1.jpg",
    },
    {
      id: "Q8678",
      title: "Rio de Janeiro",
      continent: "America",
      description:
        "Río de Janeiro es una enorme ciudad costera de Brasil, famosa por sus playas de Copacabana e Ipanema, la estatua del Cristo Redentor de 38 m de alto sobre el cerro del Corcovado y el morro Pan de Azúcar, una cima de granito con teleféricos que ascienden a su cima.",
      price: 475,
      pictureUrl:
        "https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744__480.jpg",
    },
    {
      id: "Q987",
      title: "Nueva Delhi",
      continent: "Asia",
      description:
        "Nueva Delhi​ es la capital de la República de la India y sede del poder ejecutivo, legislativo y judicial de su Gobierno. Está situada en la metrópolis de Delhi y es uno de sus nueve distritos.",
      price: 495,
      pictureUrl:
        "https://www.turismoviajar.com/wp-content/uploads/2019/09/Delhi-India.jpg",
    },
    {
      id: "Q1490",
      title: "Tokio",
      continent: "Asia",
      description:
        "Tokio, la ajetreada capital de Japón, mezcla lo ultramoderno y lo tradicional, desde los rascacielos iluminados con neones hasta los templos históricos. El opulento santuario Shinto Meiji es conocido por su puerta altísima y los bosques circundantes.",
      price: 500,
      pictureUrl:
        "https://ep01.epimg.net/elviajero/imagenes/2020/04/30/actualidad/1588237365_988791_1588237524_noticia_normal.jpg",
    },
  ];

  //const [idi,setIdi] = useState("");

  const options = {
    method: "GET",
    url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/` + detail,
    params: { languageCode: "es" },
    headers: {
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      "X-RapidAPI-Key": "b55ac38178msh39d55c0f09c4399p1b9677jsn8c13eb6a907a",
    },
  };

  const getItem = async () => {
    const response = await axios.request(options);
    const responseJSON = await response.data;

    setTodos(responseJSON);
  };
  //    const ciudi = ciudades.filter(val => val.id.includes(detail))
  function getCity() {
    const citi = ciudades.filter((c, i) =>
      detail.length > 0 ? detail.indexOf(c.id) === 0 : true
    );
    setCiudad(citi[0]);
  }

  //   }
  useEffect(() => {
    const pedido = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(getItem());
      }, 1000);
    });
    pedido
      .then(
        (res) => getCity(),
        (err) => {
          console.log("error", err);
        }
      )
      .catch((err) => console.log(err));

    return () => {};
  }, [detail]);

  return (
    <div className="card col-11 m-2">
      <>
        {!todos ? (
          <div className="row col-12">
            <h5 className="txt2l">Cargando...</h5>
          </div>
        ) : (
          <React.Fragment>
            <ItemDetail
              ciudad={ciudad["title"]}
              imagen={ciudad["pictureUrl"]}
              texto={ciudad["description"]}
              pais={todos.data["country"]}
              region={todos.data["region"]}
              population={todos.data["population"]}
              price={ciudad["price"]}
            ></ItemDetail>
          </React.Fragment>
        )}
      </>
    </div>
  );
};

export default ItemDetailContainer;
