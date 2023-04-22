import Axios from 'axios'

export function request(config){

  const instance = Axios.create({
    baseURL: 'http://123.207.32.32:7888/api/hy66',
    timeout: 5000 
  })


  instance.interceptors.request.use(config => {
    console.log(config);
    return config
  }, err => {
    console.log(err); 
  })
 
  // 2.2.响应拦截 成功/失败
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, err => {
    console.log(err);
  })

  return instance(config)

}