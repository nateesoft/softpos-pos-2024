const CompanyService = require("../services/CompanyService")
const CompanyRepository = require("../repositories/companyRepository")

const getCompanyByOne = async (req, res, next) => {
  try {
    const conpanyInfo = await CompanyService.getDataCompanyByOne({
      repository: CompanyRepository
    })
    res.json(conpanyInfo)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getCompanyByOne
}
