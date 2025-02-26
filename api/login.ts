import request from '@/utils/request'

// 登錄
export const addressAuthLogin = (data: any) => {
  return request('POST', '/addressAuthLogin', data, false)
}