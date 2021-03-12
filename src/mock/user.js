import Mock from 'mockjs'

// get请求从config.url获取参数，post从config.body中获取参数
function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  )
}

let List = []
const count = 10

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      num: Mock.Random.guid(),
      name: Mock.Random.pick(['煎饺', '烤翅', '烤鸡腿', '炭烧茄子', '烤玉米', '烤鱼', '蛋糕', '面包', '炸鸡', '火锅', 'pizza', '奶茶']),
      'price|18-60': 1,
      simple: Mock.Random.pick(['好吃', '超好吃', '非常好吃', '无敌好吃', '巨好吃'])
    })
  )
}

export default {
  getUserList: config => {
    const { name, page = 1, limit = 10 } = param2Obj(config.url)
    console.log('name:' + name, 'page:' + page, '分页大小limit:' + limit)
    const mockList = List.filter(user => {
      if (name && user.name.indexOf(name) === -1 && user.addr.indexOf(name) === -1) return false
      return true
    })
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      code: 20000,
      count: mockList.length,
      list: pageList
    }
  },
  /**
   * 删除用户
   * @param id
   * @return {*}
   */
  deleteUser: config => {
    const { id } = param2Obj(config.url)
    if (!id) {
      return {
        code: -999,
        message: '参数不正确'
      }
    } else {
      List = List.filter(u => u.id !== id)
      return {
        code: 20000,
        message: '删除成功'
      }
    }
  },
  /**
   * 批量删除
   * @param config
   * @return {{code: number, data: {message: string}}}
   */
  batchremove: config => {
    let { ids } = param2Obj(config.url)
    ids = ids.split(',')
    List = List.filter(u => !ids.includes(u.id))
    return {
      code: 20000,
      data: {
        message: '批量删除成功'
      }
    }
  }
}
