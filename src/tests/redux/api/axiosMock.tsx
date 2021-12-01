import dummyData from '../../dummyData.json';

export default {
  get: jest.fn().mockResolvedValue(dummyData),
};
