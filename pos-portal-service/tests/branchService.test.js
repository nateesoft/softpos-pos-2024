const {
  getBranchByOne,
  getAllBranch
} = require('../services/BranchService');

jest.mock('../utils/ConvertThai', () => ({
  mappingResultData: jest.fn((data) => ({ ...data[0], mapped: true })),
  mappingResultDataList: jest.fn((data) => data.map(item => ({ ...item, mapped: true })))
}));

const { mappingResultData, mappingResultDataList } = require('../utils/ConvertThai');

describe('branchService', () => {
  describe('getBranchByOne', () => {
    it('should throw 404 if no branch found', async () => {
      const mockRepo = {
        getBranchByOne: jest.fn().mockResolvedValue([])
      };

      await expect(getBranchByOne({ repository: mockRepo }))
        .rejects.toThrow('Branch not found');
    });

    it('should return mapped branch data', async () => {
      const mockRepo = {
        getBranchByOne: jest.fn().mockResolvedValue([{ id: 1, name: 'Main' }])
      };

      const result = await getBranchByOne({ repository: mockRepo });

      expect(mappingResultData).toHaveBeenCalledWith([{ id: 1, name: 'Main' }]);
      expect(result).toEqual({
        id: 1,
        name: 'Main',
        mapped: true
      });
    });
  });

  describe('getAllBranch', () => {
    it('should return mapped list of branches', async () => {
      const mockRepo = {
        getAllBranch: jest.fn().mockResolvedValue([
          { id: 1, name: 'Main' },
          { id: 2, name: 'Branch2' }
        ])
      };

      const result = await getAllBranch({ repository: mockRepo });

      expect(mappingResultDataList).toHaveBeenCalledWith([
        { id: 1, name: 'Main' },
        { id: 2, name: 'Branch2' }
      ]);
      expect(result).toEqual([
        { id: 1, name: 'Main', mapped: true },
        { id: 2, name: 'Branch2', mapped: true }
      ]);
    });
  });
});
