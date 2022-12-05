import actions from './actions';

const initState = {
  data: {
    id: 0,
    label: 'XXX股份有限公司',
    children: [
      {
        id: 1,
        label: '技术部',
        children: [
          {
            id: 4,
            label: '后端工程师'
          }, {
              id: 5,
              label: '前端工程师'
          }, {
              id: 6,
              label: '运维工程师'
          }
        ]
      },
      {
        id: 2,
        label: '人事部'
      },
      {
        id: 3,
        label: '销售部'
      }
    ]
  },
};

export default function UsersReducer(state = initState, action) {
    switch (action.type) {
        case actions.UsersGroup_SOURCE:
            return {
                ...state,
                data: action.payload.data
            };
        default:
            return state;
    }
}
