module.exports = {
  user: (app, req, res) => {
    req.assert("name", "O Nome é obrigatório").notEmpty(); //o expressValidator  no index adicionou um recurso de assert dentro do req
    req.assert("email", "O e-mail está inválido!").notEmpty().isEmail(); //o expressValidator  no index adicionou um recurso de assert dentro do req

    let errors = req.validationErrors();

    if (errors) {
      app.utils.error.send(errors, req, res);
      return false;
    }else{
      return true;
    }
  },
};
