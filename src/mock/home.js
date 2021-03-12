import Mock from 'mockjs'

// 图表数据
let List = []
export default {
  getStatisticalData: () => {
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          煎饺: Mock.Random.float(100, 8000, 0, 2),
          烤翅: Mock.Random.float(100, 8000, 0, 2),
          烤鸡腿: Mock.Random.float(100, 8000, 0, 2),
          炭烧茄子: Mock.Random.float(100, 8000, 0, 2),
          烤玉米: Mock.Random.float(100, 8000, 0, 2),
          烤鱼: Mock.Random.float(100, 8000, 0, 2)
        })
      )
    }
    return {
      code: 20000,
      data: {
        // 柱状图
        userData: [
          {
            date: '周一',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周二',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周三',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周四',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周五',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周六',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周日',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          }
        ],
        // 折线图
        orderData: {
          date: ['202001', '202002', '202003', '202004', '202005', '202006', '202007'],
          data: List
        }
      }
    }
  }
}
