const User = ({
  id,
  _id,
  name,
  birthDate,
  phoneNumber,
  avatar,
}) => ({
  id: id || _id,
  name,
  birthDate,
  phoneNumber,
  avatar,
})

module.exports = User
