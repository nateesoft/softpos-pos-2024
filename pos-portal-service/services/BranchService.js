const {
  mappingResultData,
  mappingResultDataList
} = require("../utils/ConvertThai")

const getBranchByOne = async ({ repository }) => {
  const results = await repository.getBranchByOne()
  if (results.length === 0) {
    const err = new Error("Branch not found")
    err.statusCode = 404
    throw err
  }

  return mappingResultData(results)
}

const getAllBranch = async ({ repository }) => {
  const results = await repository.getAllBranch()
  return mappingResultDataList(results)
}

module.exports = {
  getBranchByOne,
  getAllBranch
}
