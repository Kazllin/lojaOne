import React, { useState } from "react";
import "./cadastroProduto.css";

const Produto = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("price", price);

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Produto cadastrado com sucesso!");
        setImage(null);
        setName("");
        setPrice("");
      } else {
        alert("Erro ao cadastrar o produto.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao cadastrar o produto.");
    }
  };

  return (
    <div className="container1">
      <div className="forms-container1">
        <div className="signin-signup1">
          <form className="sign-in-form1" onSubmit={handleSubmit}>
            <div className="input-field1">
              <input
                type="number"
                value={price}
                onChange={handlePriceChange}
                placeholder="Valor"
                required
              />
              <i className="fa fa-dollar-sign"></i>
            </div>

            <div className="input-field1">
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Nome"
                required
              />
            </div>

              <input
                type="file"
                onChange={handleImageChange}
                required
              />

            <button type="submit" className="btn1">
              Cadastrar Produto
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Produto;