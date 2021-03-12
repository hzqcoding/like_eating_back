<template>
  <el-row class="home" :gutter="20">
    <el-col :span="5">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name">TOM</p>
            <p class="access">管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：</p>
          <p><span>2020.6.30</span></p>
          <p>上次登录地点：</p>
          <p><span>广州</span></p>
        </div>
      </el-card>
    </el-col>
    <el-col :span="19">
      <div class="total-layout">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="total-frame">
              <img :src="homeOrder" class="total-icon" />
              <div class="total-title">今日订单总数</div>
              <div class="total-value">200</div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="total-frame">
              <img :src="homeToday" class="total-icon" />
              <div class="total-title">今日销售总额</div>
              <div class="total-value">￥5000.00</div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="total-frame">
              <img :src="homeYesterday" class="total-icon" />
              <div class="total-title">昨日销售总额</div>
              <div class="total-value">￥5000.00</div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="un-handle-layout">
        <div class="layout-title">待处理事务</div>
        <div class="un-handle-content">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">待付款订单</span>
                <span style="float: right" class="color-danger">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">已完成订单</span>
                <span style="float: right" class="color-danger">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">待确认收货订单</span>
                <span style="float: right" class="color-danger">(10)</span>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">待发货订单</span>
                <span style="float: right" class="color-danger">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">新缺货登记</span>
                <span style="float: right" class="color-danger">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">待处理退款申请</span>
                <span style="float: right" class="color-danger">(10)</span>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">已发货订单</span>
                <span style="float: right" class="color-danger">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">待处理退货订单</span>
                <span style="float: right" class="color-danger">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">广告位即将到期</span>
                <span style="float: right" class="color-danger">(10)</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="overview-layout">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="out-border">
              <div class="layout-title">商品总览</div>
              <div style="padding: 40px">
                <el-row>
                  <el-col :span="6" class="color-danger overview-item-value">5</el-col>
                  <el-col :span="6" class="color-danger overview-item-value">40</el-col>
                  <el-col :span="6" class="color-danger overview-item-value">50</el-col>
                  <el-col :span="6" class="color-danger overview-item-value">50</el-col>
                </el-row>
                <el-row class="font-medium">
                  <el-col :span="6" class="overview-item-title">已下架</el-col>
                  <el-col :span="6" class="overview-item-title">已上架</el-col>
                  <el-col :span="6" class="overview-item-title">库存紧张</el-col>
                  <el-col :span="6" class="overview-item-title">全部商品</el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="out-border">
              <div class="layout-title">用户总览</div>
              <div style="padding: 40px">
                <el-row>
                  <el-col :span="6" class="color-danger overview-item-value">100</el-col>
                  <el-col :span="6" class="color-danger overview-item-value">200</el-col>
                  <el-col :span="6" class="color-danger overview-item-value">1000</el-col>
                  <el-col :span="6" class="color-danger overview-item-value">5000</el-col>
                </el-row>
                <el-row class="font-medium">
                  <el-col :span="6" class="overview-item-title">今日新增</el-col>
                  <el-col :span="6" class="overview-item-title">昨日新增</el-col>
                  <el-col :span="6" class="overview-item-title">本月新增</el-col>
                  <el-col :span="6" class="overview-item-title">会员总数</el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="graph">
        <el-card shadow="hover">
          <div class="chart-title">最热门商品销售情况</div>
          <echart style="height: 280px" :chartData="echartData.order"></echart>
        </el-card>
        <el-card shadow="hover">
          <div class="chart-title">近一周客户数据</div>
          <echart :chartData="echartData.user" style="height: 260px"></echart>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Echart from '../../components/EChart'
export default {
  components: {
    Echart
  },
  data() {
    return {
      userImg: require('../../assets/images/user.png'),
      homeOrder: require('../../assets/images/home_order.png'),
      homeToday: require('../../assets/images/home_today_amount.png'),
      homeYesterday: require('../../assets/images/home_yesterday_amount.png'),
      echartData: {
        order: {
          xData: [],
          series: []
        },
        user: {
          xData: [],
          series: []
        },
        video: {
          series: []
        }
      }
    }
  },
  methods: {
    getTableData() {
      this.$http.get('/home/getData').then(res => {
        res = res.data
        this.tableData = res.data.tableData
        // 订单折线图
        const order = res.data.orderData
        this.echartData.order.xData = order.date
        // 第一步取出series中的name部分——键名
        let keyArray = Object.keys(order.data[0])
        // 第二步，循环添加数据
        keyArray.forEach(key => {
          this.echartData.order.series.push({
            name: key === '煎饺' ? '烤翅' : key,
            data: order.data.map(item => item[key]),
            type: 'line'
          })
        })
        // 用户柱状图
        this.echartData.user.xData = res.data.userData.map(item => item.date)
        this.echartData.user.series.push({
          name: '新增用户',
          data: res.data.userData.map(item => item.new),
          type: 'bar'
        })
        this.echartData.user.series.push({
          name: '活跃用户',
          data: res.data.userData.map(item => item.active),
          type: 'bar',
          barGap: 0
        })
      })
    }
  },
  created() {
    this.getTableData()
  }
}
</script>

<style lang="scss" scoped>
   @import '../../assets/scss/home';
</style>
