const responseWithData = (res, statusCode, data) => {
  res.status(statusCode).json(data);
}

const responseHandler = {
  ok: (res, data) => responseWithData(res, 200, data),
  created: (res, data) => responseWithData(res, 201, data),
  badRequest: (res, msg) => responseWithData(res, 400, { msg }),
  unauthorized: (res) => responseWithData(res, 401, { msg: "Unauthorized!" }),
  notFound: (res) => responseWithData(res, 404, { msg: "Not Found!" }),
  error: (res) => responseWithData(res, 500, { msg: "Something wrong! :(" }),
};

export default responseHandler;
