import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import Card from "./components/card";
import imgagemEscolhida from "./imagens/coroa2.png"
function App() {
  const[values,setvalues]=useState();
  const[listGames,setListGames]=useState();
  const handlechangevalues=(value)=>{
    setvalues(prevValue=>({
      ...prevValue,
        [value.target.name]:value.target.value,
    }));
    
  };
 
  const handelClickButton = () =>{
    Axios.post("http://localhost:3001/register",{
      nome: values.nome,
      Cpf_Cnpj: values.Cpf_Cnpj,
      NomeFan:values.NomeFan,
      InscricaoEstatudal:values.InscricaoEstatudal,
      Endereco:values.Endereco,
      Numeroen:values.Numeroen,
      Bairro:values.Bairro,
      Cidade:values.Cidade, 
      Estado:values.Estado,
      DataNascimento:values.DataNascimento,
      id:values.id,
    }).then((response)=>{
              console.log(response);
    });
  };
  useEffect(()=>{
Axios.get("http://localhost:3001/getCards").then((response)=>{
  setListGames(response.data)
});
  },[]);
  return <div className="app--container"> 
  <div className="register--container">
    
    <h1 className="register--title">Yammy Shop</h1>
    


    <img src={imgagemEscolhida}width="60" height="40"/>
    
   
   <input type="text"
   name="nome"
   placeholder="Nome"
   className="register--input"
   onChange={handlechangevalues}
   />
    <input type="text"
   name="Cpf_Cnpj"
   placeholder="Cpf/Cnpj"
   className="register--input"
   onChange={handlechangevalues}
   />
    <input type="text"
   name="NomeFan"
   placeholder="Nome Fantasia"
   className="register--input"
   onChange={handlechangevalues}
   />
    <input type="text"
   name="InscricaoEstatudal"
   placeholder="Inscrição Estatudal"
   className="register--input"
   onChange={handlechangevalues}
   />
    <input type="text"
   name="Endereco"
   placeholder="Endereço"
   className="register--input"
   onChange={handlechangevalues}
   />
    <input type="text"
   name="Numeroen"
   placeholder="Numero Endereço"
   className="register--input"
   onChange={handlechangevalues}
   />
    <input type="text"
   name="Bairro"
   placeholder="Bairro"
   className="register--input"
   onChange={handlechangevalues}
   />
  
  
   <label for="Cidade">Cidade:</label>
   <select name="Cidade" id="Cidade" form="Cidadeform" placeholder="Cidade"
   className="register--input"
   onChange={handlechangevalues}>
    <option value="Select">Selecione a Cidade</option>
    <option value="Vitoria">Vitoria</option>
    <option value="Rio Branco">Rio Branco</option>
  <option value="Rio verde">Rio verde</option>
  <option value="Goiania">Goiania</option>
  <option value="Sao paulo">Sao paulo</option>
  <option value="Maceió">Maceió</option>
  <option value="Macapá">Macapá</option>
  <option value="Manaus">Manaus</option>
  <option value="Salvador">Salvador</option>
  <option value="Fortaleza">Fortaleza</option>
  <option value="São Luís">São Luís</option>
  <option value="Cuiabá">Cuiabá</option>
  <option value="Campo Grande">Campo Grande</option>
  <option value="Belo Horizonte">Belo Horizonte</option>
  <option value="João Pessoa">João Pessoa</option>
  <option value="Curitiba">Curitiba</option>
  <option value="Recife">Recife</option>
  <option value="Teresina">Teresina</option>
  <option value="Natal">Natal</option>
  <option value="Porto Alegre">Porto Alegre</option>
  <option value="Porto Velho">Porto Velho</option>
  <option value="Boa Vista">Boa Vista</option>
  <option value="Florianópolis">Florianópolis</option>
  <option value="São Paulo">São Paulo</option>
  <option value="Aracaju">Aracaju</option>
  <option value="Palmas">Palmas</option>
  <option value="Brasília">Brasília</option>

</select>
     
<label for="Estado">Estado:</label>
   <select name="Estado" id="Estado" form="EstadoForm" placeholder="Estado"
   className="register--input"
   onChange={handlechangevalues}>
    <option value="Select">Selecione o Estado</option>
    <option value="Goias">Goias</option>
    <option value="Acre">Acre</option>
  <option value="Sao Paulo">Sao Paulo</option>
  <option value="Rio Grande do sul">Rio Grande do sul</option>
  <option value="Alagoas">Alagoas</option>
  <option value="Amapá">Amapá</option>
  <option value="Amazonaso">Amazonas</option>
  <option value="Bahia">Bahia</option>
  <option value="Ceará">Ceará</option>
  <option value="Espírito Santo">Espírito Santo</option>
  <option value="Maranhão">Maranhão</option>
  <option value="Mato Grosso">Mato Grosso</option>
  <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
  <option value="Minas Gerais">Minas Gerais</option>
  <option value="Pará">Pará</option>
  <option value="Paraíba">Paraíba</option>
  <option value="Paraná">Paraná</option>
  <option value="Piauí">Piauí</option>
  <option value="Rio Grande do Norte">Rio Grande do Norte</option>
  <option value="Rondônia">Rondônia</option>
  <option value="Rondônia">Rondônia</option>
  <option value="Santa Catarina">Santa Catarina</option>
  <option value="Sergipe">Sergipe</option>
  <option value="Tocantins">Tocantins</option>
  <option value="Distrito Federal">Distrito Federal</option>
</select>
    <input type="text"
   name="DataNascimento"
   placeholder="Data"
   className="register--input"
   onChange={handlechangevalues}
   />
    

   <button className="register--button" onClick={()=>handelClickButton()}>Cadastrar</button>
  </div>
 
  {console.log(listGames)}
  {typeof listGames !== "undefined" && listGames.map((value)=>{
   return( <Card 
    key={value.id} 
    listCard={listGames}
    setListCard={setListGames}
    id={value.id}
    nome= {value.nome}
    Cpf_Cnpj= {value.Cpf_Cnpj}
    NomeFan={value.NomeFan}
    InscricaoEstatudal={value.InscricaoEstatudal}
    Endereco={value.Endereco}
    Numeroen={value.Numeroen}
    Bairro={value.Bairro}
    Cidade={value.Cidade }
    Estado={value.Estado}
    DataNascimento={value.DataNascimento}
   ></Card>
   );
  })};
  
  </div>

}

export default App;
