import {createAction, handleActions} from 'redux-actions';

const RECEIVE = 'counter/RECEIVE';

export const receive = createAction(RECEIVE);

const initialState = {
  HomeArticles: [
    {
      id: 1,
      nickname: '닉네임',
      title: '제목starPageHomeArticles',
      content: '내용',
      likesCnt: 1,
      commentsCnt: 0,
      starName: '스타이름',
    },
    {
      id: 2,
      nickname: '닉네임',
      title: '제목',
      content: '내용',
      likesCnt: 1,
      commentsCnt: 0,
      starName: '스타이름',
    },
    {
      id: 3,
      nickname: '닉네임',
      title: '제목',
      content: '내용',
      likesCnt: 1,
      commentsCnt: 0,
      starName: '스타이름',
    },
  ],
};

const StarPageInit = handleActions(
  {
    [RECEIVE]: (state, action) => ({
      HomeArticles: state.HomeArticles,
    }),
  },
  initialState,
);

export default StarPageInit;
