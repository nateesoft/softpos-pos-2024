const { decryptData } = require("../utils/StringUtil")
const { mappingResultData } = require("../utils/ConvertThai")

const checkLogin = async (username, password, macno, { repository }) => {
  const results = await repository.findUsernameAndPassword(
    username,
    decryptData(password)
  )
  if (results.length === 0) {
    const err = new Error("User or Password invalid !")
    err.statusCode = 404
    throw err
  }

  await repository.updateUserLogin(username, macno)

  const newResult = mappingResultData(results)
  return { ...newResult, Password: "" }
}

const getLoginAuthen = async (username, password, { repository }) => {
  const results = await repository.findUsernameAndPassword(
    username,
    decryptData(password)
  )
  if (results.length === 0) {
    const err = new Error("User not found")
    err.statusCode = 404
    throw err
  }
  
  const newResult = mappingResultData(results)
  return { ...newResult, Password: "" }
}

const processLogout = async (username, { repository }) => {
  const result = await repository.updateUserLogout(username)
  return result.affectedRows > 0
}

const getAllData = async ({ repository }) => {
  const results = await repository.findAllData()
  return mappingResultData(results)
}

const getUserByOne = async ({ repository }) => {
  const results = await repository.findOneData()
  return mappingResultData(results)
}

const getDataByUserName = async (username, { repository }) => {
  const results = await repository.findUsername(username)
  if (results.length === 0) {
    const err = new Error("User not found")
    err.statusCode = 404
    throw err
  }

  const newResult = mappingResultData(results)
  return { ...newResult, Password: "" }
}

module.exports = {
  getAllData,
  getDataByUserName,
  checkLogin,
  processLogout,
  getLoginAuthen,
  getUserByOne
}
