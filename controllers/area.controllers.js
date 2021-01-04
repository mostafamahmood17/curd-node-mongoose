const areaService = require('../services/area.services');

module.exports.create = async (req, res, next) => {
    try{
        const area = await areaService.create(req.body);
        return res.status(200).json(area);
    } catch(e){
        return res.status(500).json({message: 'Something went wrong!!!'});
    } 
}

module.exports.getAll = async (req, res, next) => {
    try{
        const area = await areaService.getAll();
        return res.status(200).json(area);
    } catch(e){
        return res.status(500).json({message: 'Something went wrong!!!'});
    }   
}

module.exports.getById = async (req, res, next) => {
    const id = req.params.id;
    console.log(id)
    try {
      const area = await areaService.getById({ _id: id });
      return res.status(200).send(area);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Something went wrong" });
    }
  };

  module.exports.updateById = async (req, res, next) => {
    const id = req.params.id;
    const updateFromBody = req.body;
   
    try {
      const area = await areaService.updateById({ _id: id }, updateFromBody, {
        new: true,
        runValidators: true,
      });
      console.log(area);
      return res.status(200).send(area);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Something went wrong" });
    }
  };

  
  module.exports.deleteById = async (req, res, next) => {
    const id = req.params.id;
    try {
      const area = await areaService.deleteById({ _id: id });
      return res.status(200).send({data : true});
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Something went wrong" });
    }
  };



