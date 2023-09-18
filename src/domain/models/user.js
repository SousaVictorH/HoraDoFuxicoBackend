const User = ({
  id,
  _id,
  socialId,
  name,
  birthDate,
  phoneNumber,
  avatar,
}) => ({
  id: id || _id,
  socialId,
  name,
  birthDate,
  phoneNumber,
  avatar
})

module.exports = User
