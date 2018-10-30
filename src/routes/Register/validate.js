const validate = values => {
  const errors = {};

  // El nombre debe ser un campo de tipo texto y debemos validar que no ingrese una sola palabra.
  if (!values.name) {
    errors.name = "ingrese su nombre";
  } else if (values.name.split(" ").length <= 1) {
    errors.name = "Ingrese Nombre y Apellido";
  }

  // El número de CUIL debe tener 11 dígitos.
  if (!values.cuil) errors.cuil = "ingrese su CUIL";
  else {
    let vcuil = values.cuil;
    vcuil = vcuil
      .replace(/-/gi,"")
      .replace(/_/gi, "");
    if (vcuil.length !== 11) {
      errors.cuil = "El número de CUIL debe tener 11 dígitos";
    }
  }

  if (!values.email) {
    errors.email = "ingrese su email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "email invalido";
  }

  // (alfanumérica de al menos 8 caracteres y debe incluir al menos un número).
  if (!values.password) errors.password = "ingrese una contraseña";
  else if (values.password.length < 8) errors.password = "la contraseña debe contener al menos 8 caracteres";
  else if (values.password.match(/\d+/g) === null) errors.password = "la contraseña debe incluir al menos un número";

  if (!values.street) errors.street = "ingrese una calle";
  if (!values.streetNumber) errors.streetNumber = "ingrese altura";

  if (!values.locality || values.locality == -1) errors.locality = "seleccione localidad";
  if (!values.province || values.province == -1) errors.province = "seleccione provicia";

  return errors;
};

export default validate;