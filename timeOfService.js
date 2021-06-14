const path = require('path');

const timeOfService = (req, res, next) => {

    let hour = new Date().getHours();
    let day = new Date().getDay();

    if ((hour < 9) || (hour > 17) || (day == 0) || (day == 6)) {
        res.sendFile(path.join(__dirname, 'public', 'closedServices.html'))

    } else {

        next()
    }
}

module.exports = timeOfService;