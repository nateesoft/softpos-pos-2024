const PosUserService = require("../services/PosUserService")
const PosUserRepository = require("../repositories/posuserRepository")

const validateLogin = async (req, res, next) => {
  try {
    const { username, password, macno } = req.body
    const userInfo = await PosUserService.checkLogin(
      username,
      password,
      macno,
      { repository: PosUserRepository }
    )
    res.json(userInfo)
  } catch (error) {
    next(error)
  }
}

const getLoginAuthen = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const userInfo = await PosUserService.getLoginAuthen(username, password, {
      repository: PosUserRepository
    })
    res.json(userInfo)
  } catch (error) {
    next(error)
  }
}

const getUserByOne = async (req, res, next) => {
  try {
    const userInfo = await PosUserService.getUserByOne({
      repository: PosUserRepository
    })
    res.json(userInfo)
  } catch (error) {
    next(error)
  }
}

const processLogout = async (req, res, next) => {
  try {
    const { username } = req.body
    const userInfo = await PosUserService.processLogout(username, {
      repository: PosUserRepository
    })
    res.json(userInfo)
  } catch (error) {
    next(error)
  }
}

const getDataByUserName = async (req, res, next) => {
  try {
    const { username } = req.body
    const userInfo = await PosUserService.getDataByUserName(username, {
      repository: PosUserRepository
    })
    res.json(userInfo)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  validateLogin,
  getLoginAuthen,
  getUserByOne,
  processLogout,
  getDataByUserName
}
