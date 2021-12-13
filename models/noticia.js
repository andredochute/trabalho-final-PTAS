const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoticiaSchema = new Schema({
  autor: { type: String },
  titulo: { type: String },
  descricao: { type: String },
  dataPublicacao: { type: Date },
  conteudo: { type: String }
 // subtitle: { type: String },
  //status: { type: Boolean, default: true }
});

const Noticia = mongoose.model("Noticias", NoticiaSchema);
module.exports = Noticia;