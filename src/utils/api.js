import {
  request
} from './request'
// 列表查询接口
export const getList = (parmas) => {
  return request({
    url: '',
    method: 'post',
    data: parmas
  })
}