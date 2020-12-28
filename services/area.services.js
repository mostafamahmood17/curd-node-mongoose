const Area = require('../models/area.models');

module.exports.create = area => {
    return Area.create(area);
}

module.exports.getAll = () => {
    return Area.find();
}


module.exports.getById = (id) => {
    return Area.findById(id);
}

module.exports.updateById = (id, updateFromBody, runValidators) => {
    return Area.findOneAndUpdate(id, updateFromBody, runValidators);
}

module.exports.deleteById = (id) => {
    return Area.findOneAndDelete(id);
}