import Mock from 'mockjs'
export default {
    login: () => ({
        code: 200,
        data: {
            'name': '@name',
            age: 99,
            sex:'男'
        }
    })
}