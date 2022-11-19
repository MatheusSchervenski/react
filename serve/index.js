const express = require("express");
const app =express();
const mysql = require("mysql2");
const cors= require("cors");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '2806',
    database: 'crudgames',
  });

app.use(cors());
app.use(express.json());

app.post("/register",(req,res)=>{
    const nome=req.body.nome;
    const Cpf_Cnpj=req.body.Cpf_Cnpj;
    const NomeFan=req.body.NomeFan;
    const InscricaoEstatudal=req.body.InscricaoEstatudal;
    const Endereco=req.body.Endereco;
    const Numeroen=req.body.Numeroen;
    const Bairro=req.body.Bairro;
    const  Cidade=req.body.Cidade; 
    const Estado=req.body.Estado;
    const  DataNascimento=req.body.DataNascimento;
    const id=req.body.id;
    db.query("Select * from  clientes  where Cpf_Cnpj = ? ",[Cpf_Cnpj] ,(err,result)=>{
      if (err) {
        console.log(err);
      }
      db.query("Select * from  clientes  where InscricaoEstatudal = ? ",[InscricaoEstatudal] ,(err,result)=>{
        if (err) {
          console.log(err);
        }
      if (result.length == 0) {
        let SQL="INSERT INTO clientes(nome,Cpf_Cnpj,NomeFan,InscricaoEstatudal,Endereco,Numeroen,Bairro,Cidade,Estado,DataNascimento,id) VALUES (?,?,?,?,?,?,?,?,?,?,?)";

        db.query(SQL,[nome,Cpf_Cnpj,NomeFan,InscricaoEstatudal,Endereco,Numeroen,Bairro,Cidade,Estado,DataNascimento,id],(err,result)=>{
           if (err) {
            console.log(err);
           }
           res.send({msg:"sucesso"});
        });
    }
  });
});
});

app.get("/getCards",(req,res)=>{
    let SQL = "SELECT * from clientes";
    db.query(SQL,(err,result)=>{
        if (err) {
            console.log(err);
        }
        else res.send(result);
    });
});
app.put("/edit", (req, res) => {
  const nome=req.body.nome;
  const Cpf_Cnpj=req.body.Cpf_Cnpj;
  const NomeFan=req.body.NomeFan;
  const InscricaoEstatudal=req.body.InscricaoEstatudal;
  const Endereco=req.body.Endereco;
  const Numeroen=req.body.Numeroen;
  const Bairro=req.body.Bairro;
  const  Cidade=req.body.Cidade; 
  const Estado=req.body.Estado;
  const  DataNascimento=req.body.DataNascimento;
  const id=req.body.id;
  
    let SQL = "UPDATE clientes SET nome = ?, Cpf_Cnpj = ?, NomeFan = ? ,InscricaoEstatudal=?, Endereco=?, Numeroen=?, Bairro=?, Cidade =?, Estado=?, DataNascimento=? WHERE id = ?";
    db.query(SQL, [nome,Cpf_Cnpj,NomeFan,InscricaoEstatudal,Endereco,Numeroen,Bairro,Cidade,Estado,DataNascimento,id], (err, result) => {
      if (err) {
       console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  
  app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    let SQL = "DELETE FROM clientes WHERE id = ?";
    db.query(SQL, id, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });
app.listen(3001,()=>{
    console.log("Rodando servidor");
});