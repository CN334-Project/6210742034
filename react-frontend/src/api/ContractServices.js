import portfolioApi from "./portfolioApi";

const getAll = () => {
    return portfolioApi.get("/contracts");
  };
  
  const get = (id) => {
    return portfolioApi.get(`/contracts/${id}`);
  };
  
  const create = (data) => {
    return portfolioApi.post("/contracts", data);
  };
  
  const update = (id, data) => {
    return portfolioApi.put(`/contracts/${id}`, data);
  };
  
  const remove = (id) => {
    return portfolioApi.delete(`/contracts/${id}`);
  };
  
  const ContractService = {
    getAll,
    get,
    create,
    update,
    remove
  };
  
  export default ContractService;
  