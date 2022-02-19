import portfolioApi from "./portfolioApi";

const getAll = () => {
  return portfolioApi.get("/educations");
};

const get = (id) => {
  return portfolioApi.get(`/educations/${id}`);
};

const create = (data) => {
  return portfolioApi.post("/educations", data);
};

const update = (id, data) => {
  return portfolioApi.put(`/educations/${id}`, data);
};

const remove = (id) => {
  return portfolioApi.delete(`/educations/${id}`);
};

const PortfolioService = {
  getAll,
  get,
  create,
  update,
  remove
};

export default PortfolioService;
