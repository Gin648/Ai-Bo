import axios, { AxiosRequestHeaders } from 'axios'
import  config  from '@/config/index'
import { ApiResponse } from '@/types/request'

axios.defaults.timeout = 50000

const request = <T>(
  method: string,
  url: string,
  params: any,
  needToken: boolean = true,
  headerContentType: string = 'application/json',
  baseURL: string = config.baseUrl,
  showError: boolean = true
): Promise<ApiResponse<T>> => {
  const headers: AxiosRequestHeaders = {
    'Content-type': headerContentType
  }
 if(localStorage.getItem('satoken')){
	 headers['satoken'] = localStorage.getItem('satoken')
 }

  return new Promise((resolve, reject) => {
    axios({
      method,
      headers,
      baseURL: baseURL,
      url,
      // timeout: 15000,
      params: method === 'GET' || method === 'DELETE' ? params : null, // 是即将与请求一起发送的 URL 参数
      data: method === 'POST' || method === 'PUT' ? params : null // 是作为请求主体被发送的数据
    })
      .then((res) => {
        if (res.data.code === 200) {
          res.data.success = true
          resolve(res.data)
        } else if (+res.data.code === 401) {
          // token失效
          resolve({
            code: -1,
            success: false,
            data: null,
            message: 'Network exception'
          })
        } else {
			showToast( res.data.message)
          resolve({
            code: 0,
            success: false,
            data: null,
            message: res.data.message
          })
        }
      })
      .catch((error) => {
        let messageText = ''
        if (error.response && error.response.data && error.response.data.message) {
          messageText = error.response.data.message
        } else {
          messageText = 'Network exception'
        }
		showToast( messageText)
        // reject(error)
        resolve({
          code: 500,
          success: false,
          data: null,
          message: 'Network exception'
        })
      })
  })
}

export default request
