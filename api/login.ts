import request from '@/utils/request'

// 登錄
export const addressAuthLogin = (data: any) => {
  return request('POST', '/addressAuthLogin', data, false)
}
//修改用户信息
export const updateUserInfo = (data: any) => {
  return request('POST', '/ai/user/updateUserInfo', data, false)
}
