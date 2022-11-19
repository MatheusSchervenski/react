import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";

export default function FormDialog(props) {
  const[editValues,setEditValues]=useState({
    id:props.id,
    nome:props.nome,
    Cpf_Cnpj:props.Cpf_Cnpj,
    NomeFan:props.NomeFan,
    InscricaoEstatudal:props.InscricaoEstatudal,
    Endereco:props.Endereco,
    Numeroen:props.Numeroen,
    Bairro:props.Bairro,
    Cidade:props.Cidade, 
    Estado:props.Estado,
    DataNascimento:props.DataNascimento,
  
  }  );
  const handleEditGame = () => {
    Axios.put("http://localhost:3001/edit",{
  id:editValues.id,
  nome:editValues.nome,
  Cpf_Cnpj:editValues.Cpf_Cnpj,
  NomeFan:editValues.NomeFan,
  InscricaoEstatudal:editValues.InscricaoEstatudal,
    Endereco:editValues.Endereco,
    Numeroen:editValues.Numeroen,
    Bairro:editValues.Bairro,
    Cidade:editValues.Cidade, 
    Estado:editValues.Estado,
    DataNascimento:editValues.DataNascimento,
});
handleClose();
  };
  const handleExcluirGame =()=>
  {
    Axios.delete(`http://localhost:3001/delete/${editValues.id}`);
    handleClose();
  };
 

const handleClose =()=>{
    props.setOpen(false);
};

const handlechangevalues = value =>{
  setEditValues(prevValues => ({
    ...prevValues,
    [value.target.id]:value.target.value,
  }));
};
return (
    
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="id"
            label="id"
            defaultValue={props.id}
              onChange={handlechangevalues}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="nome"
            label="nome"
            defaultValue={props.nome}
              onChange={handlechangevalues}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="Cpf_Cnpj"
            label="Cpf_Cnpj"
           defaultValue={props.Cpf_Cnpj}
           onChange={handlechangevalues}
            type="number"
           
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="NomeFan"
            label="NomeFan"
            defaultValue={props.NomeFan}
            onChange={handlechangevalues}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="InscricaoEstatudal"
            label="InscricaoEstatudal"
            defaultValue={props.InscricaoEstatudal}
              onChange={handlechangevalues}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="Endereco"
            label="Endereco"
            defaultValue={props.Endereco}
              onChange={handlechangevalues}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="Numeroen"
            label="Numeroen"
            defaultValue={props.Numeroen}
              onChange={handlechangevalues}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="Bairro"
            label="Bairro"
            defaultValue={props.Bairro}
              onChange={handlechangevalues}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="Cidade"
            label="Cidade"
            defaultValue={props.Cidade}
              onChange={handlechangevalues}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="Estado"
            label="Estado"
            defaultValue={props.Estado}
              onChange={handlechangevalues}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="DataNascimento"
            label="DataNascimento"
            defaultValue={props.DataNascimento}
              onChange={handlechangevalues}
            type="text"
            fullWidth
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleExcluirGame} color="primary">
            Excluir
          </Button>
          <Button onClick={handleEditGame} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    
  );
}