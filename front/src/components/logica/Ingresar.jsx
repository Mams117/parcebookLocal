import React, { Component, useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";

const Ingresar = () => {
  const { form, cambiar } = HelperForm({});
  const [guardado, setGuardado] = useState("no_enviado");

  const login = async (e) => {
    e.preventDefault();
    //llega el objeto generado por el helper
    let nuevoPerfil = form;

    //guardar en la api
    const request = await fetch(Global.url + "perfil/login", {
      method: "POST",
      body: JSON.stringify(nuevoPerfil),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    if (data.resultado == "success") {
      //console.log(data);
      setGuardado("Guardado");
    } else {
      //console.log(data);
      setGuardado("Error");
    }
  };
  return (
    <>
      <div className="col">
        <div className="card text-start">
          <div className="card-body">
            <h4 className="card-title ">Ingreso</h4>
            {guardado == "Guardado" ? (
              <div className="alert alert-success" role="alert">
                Exito
              </div>
            ) : (
              ""
            )}
            {guardado == "Error" ? (
              <div className="alert alert-danger" role="alert">
                Error
              </div>
            ) : (
              ""
            )}
            <form onSubmit={login}>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id=""
                  placeholder=""
                  onChange={cambiar}
                />
              </div>
              <div className="mb-3">
                <label for="" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id=""
                  placeholder=""
                  onChange={cambiar}
                />
              </div>
              <div className="d-flex justify-content-center p-3">
                <button type="reset" className="btn btn-secondary m-2">
                  Reset
                </button>
                <button type="submit" className="btn btn-success m-2">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="col">
        <img
          src="./images/people.jpg"
          className="img-fluid shadow-lg p-3 mb-5 bg-body rounded"
          alt=""
          sizes=""
        />
      </div>
    </>
  );
};

export default Ingresar;
