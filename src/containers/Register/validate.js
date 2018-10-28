const validate = values => {
  const errors = {}

  // El nombre debe ser un campo de tipo texto y debemos validar que no ingrese una sola palabra.
  if (!values.name) {
    errors.name = "Required"
  } else if (values.name.split(" ").length <= 1) {
    errors.name = "Ingrese Nombre y Apellido"
  }

  // El número de CUIL debe tener 11 dígitos.
  if (!values.cuil) {
    errors.cuil = "Required"
  } else if (values.cuil.length <= 11) {
    errors.cuil = "El número de CUIL debe tener 11 dígitos"
  }

  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }

  // (alfanumérica de al menos 8 caracteres y debe incluir al menos un número).
  if (!values.password) {
    errors.password = "Required"
  }

  // if (!values.favoriteColor) { errors.favoriteColor = "Required" }

  return errors
}

export default validate