import React from "react";
import "./card.css";
import FormDialog from "./dialog/dialog";
export default function Card(props){
    const [open, setOpen] = React.useState(false);

    const handleClickCard=()=>{
      setOpen(true);
    };
  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        nome={props.nome}
        Cpf_Cnpj={props.Cpf_Cnpj}
        NomeFan={props.NomeFan}
        listcard={props.listcard}
        setlistcard={props.setlistcard}
        id={props.id}
        InscricaoEstatudal={props.InscricaoEstatudal}
        Endereco={props.Endereco}
        Numeroen={props.Numeroen}
        Bairro={props.Bairro}
        Cidade={props.Cidade}
        Estado={props.Estado}
        DataNascimento={props.DataNascimento}
      />
        <div className="card--container" onClick={()=>
        handleClickCard()
        }>
        <h1 className="card--title">{props.nome}</h1>
        <p className="card--id">{props.id}</p>
        <p className="card--Cpf_Cnpj">{props.Cpf_Cnpj}</p>
        <p className="card--NomeFan">{props.NomeFan}</p>
        <p className="card--InscricaoEstatudal">{props.InscricaoEstatudal}</p>
        <p className="card--Endereco">{props.Endereco}</p>
        <p className="card--Numeroen">{props.Numeroen}</p>
        <p className="card-- Bairro">{props.Bairro}</p>
        <p className="card-- Cidade">{props.Cidade}</p>
        <p className="card--Estado">{props.Estado}</p>
        <p className="card--DataNascimento">{props.DataNascimento}</p>
        
    </div>
    </>
    );
}