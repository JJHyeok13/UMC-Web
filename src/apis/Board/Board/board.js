import axiosInstance from 'apis/setting';

export const getBoardData = async (host, board, page) => {
  try {
    const res = await axiosInstance.get(`/boards`, {
      params: {
        host: host,
        board: board,
        page: page,
      },
    });
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

export const searchBoard = async (keyword, page) => {
  try {
    const res = await axiosInstance.get(`/boards/search`, {
      params: {
        keyword: keyword,
        page: page,
      },
    });
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};
