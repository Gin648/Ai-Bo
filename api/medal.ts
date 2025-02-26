import request from '@/utils/request'
// 我的勋章列表
export const userMedalPageList = () => {
  return request('GET', '/ai/Medal/userMedalPageList',)
}