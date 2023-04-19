const moment = require('moment');

const dateFormat = (date) => {
  return moment(date).format("MMM DD, YYYY [at] hh:mm a");
};

module.exports = dateFormat;
