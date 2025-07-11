const BranchService = require("../services/BranchService")
const BranchRepository = require("../repositories/branchRepository")

const getBranchByOne = async (req, res, next) => {
  try {
    const branchInfo = await BranchService.getBranchByOne({
      repository: BranchRepository
    })
    res.json(branchInfo)
  } catch (error) {
    next(error)
  }
}

const getAllBranch = async (req, res, next) => {
  try {
    const branchInfo = await BranchService.getAllBranch({
      repository: BranchRepository
    })
    res.json(branchInfo)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getBranchByOne,
  getAllBranch
}
