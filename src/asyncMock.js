const products = [
    {
        id: '1',
        title: 'Barcelona Messi',
        team: "F.C. Barcelona",
        country: "Spain",
        price: 3500,
        league: 'La Liga',
        img: '/../assets/img/scarfs/bcn1/thumbnail.png',
        stock: 2,
        decade: "2010s",
    },
    { id: '2', name: 'samsung s21', price: 800, category: 'celular', img: 'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG', stock: 16, description: 'Descripcion de Samsung s21' },
    { id: '3', name: 'Ipad 8va generacion', price: 1200, category: 'tablet', img: 'https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw', stock: 10, description: 'Descripcion de Ipad' }
]

/**
 Funcion que simula retardo al llamar a Apis.
 */
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}
