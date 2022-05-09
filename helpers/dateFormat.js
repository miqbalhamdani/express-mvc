const dayjs = require('dayjs');

module.exports = (date) => {
  if (!date) return '';
  return dayjs(date).format('DD MMM YYYY');
}
