import React, { useContext, useRef } from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';
import { Link, useHistory } from 'react-router-dom';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const history = useHistory();
  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment');
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              id=""
            />
            <input
              type="text"
              name="email"
              placeholder="Correo electronico"
              id=""
            />
            <input type="text" name="address" placeholder="Direccion" id="" />
            <input type="text" name="address2" placeholder="Apto" id="" />
            <input type="text" name="city" placeholder="Ciudad" id="" />
            <input type="text" name="country" placeholder="Pais" id="" />
            <input type="text" name="state" placeholder="Estado" id="" />
            <input type="text" name="cp" placeholder="Codigo postal" id="" />
            <input type="text" name="phone" placeholder="Telefono" id="" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <Link to="/checkout/payment">
            <div className="Information-next">
              <button type="button" onClick={handleSubmit}>
                Pagar
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="Information-Item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
