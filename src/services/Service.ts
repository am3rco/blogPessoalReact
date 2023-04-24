import axios from "axios";

export const api = axios.create({
  // Cria uma instância do Axios com configurações padrão
  // A URL base especificada será utilizada para todas as requisições feitas a partir desse objeto
  baseURL: "https://blogpessoal-hvyz.onrender.com",
});

export const login = async (url: any, dados: any, setDado: any) => {
  // Faz a requisição e aguarda a resposta
  const resposta = await api.post(url, dados);
  setDado(resposta.data); // Busca na resposta o token que tá dentro da data
  // So restorna o token se o usuario existir, senão dará erro
};