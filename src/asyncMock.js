const products = [
    {
        id: '1',
        title: 'Barcelona',
        logoId: "81.svg",
        team: "F.C. Barcelona",
        country: "españa",
        price: 3500,
        league: 'La Liga',
        img: '/../assets/img/scarfs/bcn1/thumbnail.png',
        stock: 2,
        decade: "2010s",
    },
    {
        id: '2',
        title: 'Celta',
        logoId: "558.svg",
        team: "RC Celta",
        country: "españa",
        price: 3500,
        league: 'La Liga',
        img: '/../assets/img/scarfs/cel1/thumbnail.png',
        stock: 1,
        decade: "1990s",
    },
    {
        id: '3',
        title: 'Fiorentina',
        logoId: "99.svg",
        team: "ACF Fiorentina",
        country: "italia",
        price: 3500,
        league: 'Serie A',
        img: '/../assets/img/scarfs/fio1/thumbnail.png',
        stock: 2,
        decade: "1990s",
    },
    {
        id: '4',
        title: 'Inter',
        logoId: "108.png",
        team: "F.C. Inter de Milan",
        country: "italia",
        price: 3500,
        league: 'Serie A',
        img: '/../assets/img/scarfs/int1/thumbnail.png',
        stock: 2,
        decade: "1990s",
    },
    {
        id: '5',
        title: 'Juventus',
        logoId: "109.svg",
        team: "Juventus Football Club",
        country: "italia",
        price: 3500,
        league: 'Serie A',
        img: '/../assets/img/scarfs/juv1/thumbnail.png',
        stock: 2,
        decade: "1990s",
    },
    {
        id: '6',
        title: 'Manchester United',
        logoId: "66.png",
        team: "Manchester United",
        country: "inglaterra",
        price: 3500,
        league: 'Premier League',
        img: '/../assets/img/scarfs/man1/thumbnail.png',
        stock: 2,
        decade: "2000s",
    },
    {
        id: '7',
        title: 'A. S. Mónaco',
        logoId: "548.png",
        team: "A. S. Mónaco",
        country: "francia",
        price: 3500,
        league: 'Ligue 1',
        img: '/../assets/img/scarfs/mco1/thumbnail.png',
        stock: 1,
        decade: "1990s",
    },
    {
        id: '8',
        title: 'Real Madrid F.C.',
        logoId: "86.png",
        team: "Real Madrid F.C.",
        country: "españa",
        price: 3500,
        league: 'La Liga',
        img: '/../assets/img/scarfs/rma1/thumbnail.png',
        stock: 2,
        decade: "1990s",
    },

]

/**
 Funcion que simula retardo al llamar a Apis.
 */
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

/**
 Funcion que simula retardo al llamar a Apis.
 */
export const getProductbyId = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 250)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.country === categoryId))
        }, 250)
    })
}