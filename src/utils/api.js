import service from './request'

export function getConfigsByProductId(productId) {
  return Service({
    url: '',
    params: { productId: productId }
  })
}
export function getAllAndroidPlugins() {
  return Service({
    url: ' ',
    method: 'get'
  })
}
export function addNewAndroidPlugin(data) {
  return Service({
    url: '',
    data: JSON.stringify(data)
  })
}