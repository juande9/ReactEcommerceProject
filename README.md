# Bufandas Futboleras
## _Ecommerce de memorabilia futbolera_

## Instalación

```sh
$ git clone https://github.com/juande9/bufandasfutboleras.git
$ cd bufandasfutboleras
$ npm install
$ crear proyecto en Firebase
```

## Firebase

En caso de querer modificar la base de datos, la misma utiliza la plataforma Firebase: Firestore Database. Las colecciones configuradas para los productos se llaman **products** y para las ordenes, **orders** y se estructuran de la siguiente manera:

*products*
```sh
{country:"italia",
decade:"1990s",
img:"/../assets/img/scarfs/fio1/thumbnail.png",
league:"Serie A",
logoId:"99.svg",
price:3500,
stock:12,
team:"ACF Fiorentina",
title:"Fiorentina",
}
```

*orders*

```sh
buyer: {
          name: { "name" },
          email: { "email" },
          number: { "number" },
       },
items: "cart",
"totalPriceOrder",
```

Las imagenes deben guardarse en la ruta */../assets/img/scarfs/* generando por cada pieza una nueva carpeta. El *id* del equipo para el logo se obtiene de la web https://native-stats.org/

## Configuración del .env
Crear archivo .env con las credenciales de Firebase propias.

```sh
REACT_APP_apiKey=
REACT_APP_authDomain=
REACT_APP_projectId=
REACT_APP_storageBucket=
REACT_APP_messagingSenderId=
REACT_APP_appId=
```

## npm start
Una vez configuado todo lo anterior, un npm start bastará para empezar la aplicación.