const { getDataCompanyByOne } = require('../services/CompanyService');

jest.mock('../utils/ConvertThai', () => ({
  mappingResultData: jest.fn((data) => ({ ...data[0], mapped: true }))
}));

const { mappingResultData } = require('../utils/ConvertThai');

describe('companyService', () => {
  describe('getDataCompanyByOne', () => {
    it('should throw 404 if no company found', async () => {
      const mockRepo = {
        getDataCompanyByOne: jest.fn().mockResolvedValue([])
      };

      await expect(
        getDataCompanyByOne({ repository: mockRepo })
      ).rejects.toThrow('Company not found');

      expect(mockRepo.getDataCompanyByOne).toHaveBeenCalled();
    });

    it('should return mapped company data', async () => {
      const mockRepo = {
        getDataCompanyByOne: jest.fn().mockResolvedValue([{ id: 1, name: 'ABC' }])
      };

      const result = await getDataCompanyByOne({ repository: mockRepo });

      expect(mockRepo.getDataCompanyByOne).toHaveBeenCalled();
      expect(mappingResultData).toHaveBeenCalledWith([{ id: 1, name: 'ABC' }]);
      expect(result).toEqual({
        id: 1,
        name: 'ABC',
        mapped: true
      });
    });
  });
});
