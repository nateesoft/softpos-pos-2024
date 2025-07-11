const {
  checkLogin,
  getLoginAuthen,
  processLogout,
  getAllData,
  getDataByUserName,
  getUserByOne
} = require('../services/PosUserService');

jest.mock('../utils/StringUtil.js', () => ({
  decryptData: jest.fn((val) => `decrypted-${val}`)
}));

jest.mock('../utils/ConvertThai.js', () => ({
  mappingResultData: jest.fn((data) => ({ ...data[0], mapped: true }))
}));

describe('userService', () => {

  describe('checkLogin', () => {
    it('should throw 404 if user not found', async () => {
      const mockRepo = {
        findUsernameAndPassword: jest.fn().mockResolvedValue([]),
        updateUserLogin: jest.fn()
      };

      await expect(
        checkLogin('john', 'secret', '001', { repository: mockRepo })
      ).rejects.toThrow('User or Password invalid !');
    });

    it('should return mapped data and call updateUserLogin', async () => {
      const mockRepo = {
        findUsernameAndPassword: jest.fn().mockResolvedValue([{ User: 'john' }]),
        updateUserLogin: jest.fn()
      };

      const result = await checkLogin('john', 'secret', '001', { repository: mockRepo });

      expect(result).toEqual(expect.objectContaining({
        User: 'john',
        mapped: true,
        Password: ""
      }));
      expect(mockRepo.updateUserLogin).toHaveBeenCalledWith('john', '001');
    });
  });

  describe('getLoginAuthen', () => {
    it('should throw if not found', async () => {
      const mockRepo = {
        findUsernameAndPassword: jest.fn().mockResolvedValue([])
      };

      await expect(
        getLoginAuthen('john', 'pass', { repository: mockRepo })
      ).rejects.toThrow('User not found');
    });

    it('should return mapped data', async () => {
      const mockRepo = {
        findUsernameAndPassword: jest.fn().mockResolvedValue([{ User: 'john' }])
      };

      const result = await getLoginAuthen('john', 'pass', { repository: mockRepo });

      expect(result).toEqual(expect.objectContaining({
        User: 'john',
        mapped: true,
        Password: ""
      }));
    });
  });

  describe('processLogout', () => {
    it('should return true if affectedRows > 0', async () => {
      const mockRepo = {
        updateUserLogout: jest.fn().mockResolvedValue({ affectedRows: 1 })
      };
      const result = await processLogout('john', { repository: mockRepo });
      expect(result).toBe(true);
    });

    it('should return false if affectedRows = 0', async () => {
      const mockRepo = {
        updateUserLogout: jest.fn().mockResolvedValue({ affectedRows: 0 })
      };
      const result = await processLogout('john', { repository: mockRepo });
      expect(result).toBe(false);
    });
  });

  describe('getAllData', () => {
    it('should return mapped data', async () => {
      const mockRepo = {
        findAllData: jest.fn().mockResolvedValue([{ id: 1 }])
      };
      const result = await getAllData({ repository: mockRepo });
      expect(result).toEqual(expect.objectContaining({
        id: 1,
        mapped: true
      }));
    });
  });

  describe('getUserByOne', () => {
    it('should return mapped data', async () => {
      const mockRepo = {
        findOneData: jest.fn().mockResolvedValue([{ id: 1 }])
      };
      const result = await getUserByOne({ repository: mockRepo });
      expect(result).toEqual(expect.objectContaining({
        id: 1,
        mapped: true
      }));
    });
  });

  describe('getDataByUserName', () => {
    it('should throw if user not found', async () => {
      const mockRepo = {
        findUsername: jest.fn().mockResolvedValue([])
      };

      await expect(
        getDataByUserName('john', { repository: mockRepo })
      ).rejects.toThrow('User not found');
    });

    it('should return mapped data', async () => {
      const mockRepo = {
        findUsername: jest.fn().mockResolvedValue([{ User: 'john' }])
      };

      const result = await getDataByUserName('john', { repository: mockRepo });
      expect(result).toEqual(expect.objectContaining({
        User: 'john',
        mapped: true,
        Password: ""
      }));
    });
  });

});
