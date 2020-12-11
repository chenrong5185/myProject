import Service from './request'

export function getConfigsByProductId(productId) {
  return Service({
    url: '',
    params: { productId: productId }
  })
}
export function getName() {
  return Service({
    url: '/decision/getName',
    method: 'get'
  })
}
export function addNewAndroidPlugin(data) {
  return Service({
    url: '',
    data: JSON.stringify(data)
  })
}