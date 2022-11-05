export const createAdapterProdFromFirestore = (doc) => {

    const data = doc.data()

    const productAdapted = {
        id:doc.id,
        country: data.country,
        decade: data.decade,
        img: data.img,
        league:data.league,
        logoId: data.logoId,
        price:data.price,
        stock:data.stock,
        team:data.team,
        title:data.title
    }

    return productAdapted
}