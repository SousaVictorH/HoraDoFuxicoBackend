const User = ({
  id,
  _id,
  name,
  dateOfBirth,
  phoneNumber,
  avatar,
}) => {
  const defaultAvatar = 'https://www.seekpng.com/png/detail/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png';

  return {
    id: id || _id,
    name,
    dateOfBirth,
    phoneNumber,
    avatar: avatar || defaultAvatar,
  }
}

module.exports = User
