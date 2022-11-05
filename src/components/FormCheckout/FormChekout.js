const FormCheckout = ({ createOrder, setName, setEmail, setEmail2, setNumber }) => {

    return (
        <div>
            <div className="form-floating mb-3">
                <input type="text" name="name" className="form-control" onChange={(e) => setName(e.target.value)} required ></input>
                <label htmlFor="floatingName">Nombre Completo</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} required></input>
                <label htmlFor="floatingEmail">E-mail</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" name="email2" className="form-control" onChange={(e) => setEmail2(e.target.value)} required></input>
                <label htmlFor="floatingEmail">Repetir E-mail</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" name="number" className="form-control" onChange={(e) => setNumber(e.target.value)} required></input>
                <label htmlFor="floatingNumber">Número Telefonico</label>
            </div>
             <button className="btn btn-warning" type="submit" onClick={createOrder}>Completar orden</button>
        </div>
    )
}

export default FormCheckout