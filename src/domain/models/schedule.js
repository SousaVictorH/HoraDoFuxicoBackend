const Schedule = ({
  id,
  _id,
  category,
  date,
  users
}) => {
  return {
    id: id || _id,
    category,
    date,
    users
  }
}

module.exports = Schedule
