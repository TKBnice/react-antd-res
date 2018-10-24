
import React from 'react';
import { Card, Col, Row,List ,Icon,Button,Modal} from 'antd';

import EchartsBar from '../component/echarts-bar';


const url = ' https://www.easy-mock.com/mock/5a1a81c89840a812456659c6/example';

const data = (()=>{
    let arr = [];
    for(let i = 0; i<6;i++){
      arr[i]='<span>'+i+'</span><span style="padding:0 100px 0 36px">京东'+i+'店</span><span style="float:right;">1561</span>';
    }
  return arr;
})()

const echartsDate = {
  tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
  },
  legend: {
      data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
  },
  grid: {
      top:"4%",
      left: '3%',
      bottom: '3%',
      containLabel: true
  },
  xAxis : [
      {
          type : 'category',
          data : ['周一','周二','周三','周四','周五','周六','周日']
      }
  ],
  yAxis : [
      {
          type : 'value'
      }
  ],
  series : [
      {
          name:'直接访问',
          type:'bar',
          data:[320, 332, 301, 334, 390, 330, 320]
      },
      {
          name:'邮件营销',
          type:'bar',
          stack: '广告',
          data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
          name:'联盟广告',
          type:'bar',
          stack: '广告',
          data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
          name:'视频广告',
          type:'bar',
          stack: '广告',
          data:[150, 232, 201, 154, 190, 330, 410]
      },
      {
          name:'搜索引擎',
          type:'bar',
          data:[862, 1018, 964, 1026, 1679, 1600, 1570],
          markLine : {
              lineStyle: {
                  normal: {
                      type: 'dashed'
                  }
              },
              data : [
                  [{type : 'min'}, {type : 'max'}]
              ]
          }
      },
      {
          name:'百度',
          type:'bar',
          barWidth : 5,
          stack: '搜索引擎',
          data:[620, 732, 701, 734, 1090, 1130, 1120]
      },
      {
          name:'谷歌',
          type:'bar',
          stack: '搜索引擎',
          data:[120, 132, 101, 134, 290, 230, 220]
      },
      {
          name:'必应',
          type:'bar',
          stack: '搜索引擎',
          data:[60, 72, 71, 74, 190, 130, 110]
      },
      {
          name:'其他',
          type:'bar',
          stack: '搜索引擎',
          data:[62, 82, 91, 84, 109, 110, 120]
      }
  ]
}
const echartsDate3 = {
  title: {
      text: '折线图堆叠'
  },
  tooltip: {
      trigger: 'axis'
  },
  legend: {
      data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
  },
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  toolbox: {
      feature: {
          saveAsImage: {}
      }
  },
  xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一','周二','周三','周四','周五','周六','周日']
  },
  yAxis: {
      type: 'value'
  },
  series: [
      {
          name:'邮件营销',
          type:'line',
          stack: '总量',
          data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
          name:'联盟广告',
          type:'line',
          stack: '总量',
          data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
          name:'视频广告',
          type:'line',
          stack: '总量',
          data:[150, 232, 201, 154, 190, 330, 410]
      },
      {
          name:'直接访问',
          type:'line',
          stack: '总量',
          data:[320, 332, 301, 334, 390, 330, 320]
      },
      {
          name:'搜索引擎',
          type:'line',
          stack: '总量',
          data:[820, 932, 901, 934, 1290, 1330, 1320]
      }
  ]
}
const echartsDate4 = {
  title : {
      text: '站点用户访问来源',
      subtext: '纯属虚构',
      x:'center'
  },
  tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
      orient: 'vertical',
      left: 'left',
      data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
  },
  series : [
      {
          name: '访问来源',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data:[
              {value:335, name:'直接访问'},
              {value:310, name:'邮件营销'},
              {value:234, name:'联盟广告'},
              {value:135, name:'视频广告'},
              {value:1548, name:'搜索引擎'}
          ],
          itemStyle: {
              emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
          }
      }
  ]
};
const echartsDate5  = {
  title:{
      text: '折线图堆叠'
  },
  tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
  },
  legend: {
      data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
  },
  grid: {
      left: '1%',
      right: '1%',
      bottom: '1%',
      containLabel: true
  },
  xAxis:  {
      type: 'value'
  },
  yAxis: {
      type: 'category',
      data: ['周一','周二','周三','周四','周五','周六','周日']
  },
  series: [
      {
          name: '直接访问',
          type: 'bar',
          stack: '总量',
          label: {
              normal: {
                  show: true,
                  position: 'insideRight'
              }
          },
          data: [320, 302, 301, 334, 390, 330, 320]
      },
      {
          name: '邮件营销',
          type: 'bar',
          stack: '总量',
          label: {
              normal: {
                  show: true,
                  position: 'insideRight'
              }
          },
          data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
          name: '联盟广告',
          type: 'bar',
          stack: '总量',
          label: {
              normal: {
                  show: true,
                  position: 'insideRight'
              }
          },
          data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
          name: '视频广告',
          type: 'bar',
          stack: '总量',
          label: {
              normal: {
                  show: true,
                  position: 'insideRight'
              }
          },
          data: [150, 212, 201, 154, 190, 330, 410]
      },
      {
          name: '搜索引擎',
          type: 'bar',
          stack: '总量',
          label: {
              normal: {
                  show: true,
                  position: 'insideRight'
              }
          },
          data: [820, 832, 901, 934, 1290, 1330, 1320]
      }
  ]
};
class TableDemo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:'Home',
      list:[],
      visible: false,
      echartsDate:null,
      echartsDate3,
      echartsDate4,
      echartsDate5
    };
    this.updatedDateCard = this.updatedDateCard.bind(this);
  }

  componentWillMount(){
    // this.setState({echartsDate3});
  }

  updatedDateCard() {
    this.setState({
      echartsDate
    });
  }

  showModal = () => {

    this.setState({
      visible: true,
      echartsDate
    });
   console.log(this.state.echartsDate)
  }

  hideModal = () => {
    this.setState({
      visible: false,
    });
  }
  render(){
    return(
      <div style={{ background: '#ECECEC'}}>  
        <Row gutter={16}>
          <Col className="" span={6} >
            <div className="gutter-box hover-box" style={{background:"#967ADC",color:"#fff"}}>
                <p style={{fontSize:"18px",fontWeight:"bold"}}>256</p>
                <p>QQ</p>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
          <div className="gutter-box hover-box" style={{background:"#70CA63",color:"#fff"}}>
                <p style={{fontSize:"18px",fontWeight:"bold"}}>126</p>
                <p>微信</p>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
          <div className="gutter-box hover-box" style={{background:"#E9573F",color:"#fff"}}>
                <p style={{fontSize:"18px",fontWeight:"bold"}}>556</p>
                <p>PC</p>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
          <div className="gutter-box hover-box" style={{background:"#3BAFDA",color:"#fff"}}>
                <p style={{fontSize:"18px",fontWeight:"bold"}}>668</p>
                <p>APP</p>
            </div>
          </Col>
        </Row>
        <div style={{ marginTop: '10px' }}>
            <Card
            title="数据面板"
            bordered="true"
            extra={ 
                <p style={{display:"flex",height: "100%",width:60,justifyContent: "space-between",alignItems:"center"}}>
                <Icon type="redo" theme="outlined" style={{ fontSize: '20px', cursor: "pointer"}}  onClick={this.updatedDateCard}/>
                <Icon type="arrows-alt" theme="outlined" style={{ fontSize: '20px',cursor: "pointer"}} onClick={this.showModal}/> 
                </p> 
            }
            >
            <div>
                <div style={{ float:'left',width:'70%' }}>
                <h3>商品流量周流量</h3>
            <EchartsBar echartsDate={this.state.echartsDate} styleDate={{width: "80%", height: 300}} index="1"/>
                </div>
                <div style={{ float:'left',width:'30%' }}>
                <h3>销售额排行</h3>
                <List
                    size="small"
                    split={false}
                    dataSource={data}
                    renderItem={item => (<List.Item > <p style={{width:'100%'}} dangerouslySetInnerHTML={{__html:item}}></p></List.Item>)}
                />
                </div>
            </div>
            </Card>
        </div>
        

        <div style={{ marginTop: '10px' }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card bordered={false}>
              <EchartsBar echartsDate={this.state.echartsDate3} styleDate={{width: 480, height: 300}} index="2"/>
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false} >
              <EchartsBar echartsDate={this.state.echartsDate4} styleDate={{width: 480, height: 300}} index="4"/>
              </Card>
            </Col>
            <Col span={8}>
              <Card  bordered={false}>
              <EchartsBar echartsDate={this.state.echartsDate5} styleDate={{width: 480, height: 300}} index="5"/>
              </Card>
            </Col>
          </Row>
        </div>

        <Modal
          title="Modal"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          destroyOnClose={true}
          footer={null}
          width="100%"
          style={{top:0,left:0,width:"100%",height:"100%"}}
          bodyStyle={{overflow:"hidden",height:"calc(100vh - 55px)"}}
          closable
        >
          <div style={{ width:'100%' }}>
            <h3>商品流量周流量</h3>
            <EchartsBar echartsDate={this.state.echartsDate} styleDate={{width: "100%", height: 500}} index="3"/>
          </div>
          <div style={{ width:'100%' }}>
            <h3>销售额排行</h3>
            <List
              size="small"
              split={false}
              dataSource={data}
              renderItem={item => (<List.Item > <p style={{width:'100%'}} dangerouslySetInnerHTML={{__html:item}}></p></List.Item>)}
            />
          </div>
        </Modal>

      </div>

    )
  }
}



export default TableDemo;