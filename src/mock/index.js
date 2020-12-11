import Mock from 'mockjs'
import decision from './decision'
Mock.mock(/\/decision\/getName/,'get',decision.getName)