// Monitor.js
import React, { Component } from 'react';
import {Table} from 'antd';
import axios from 'axios'
const url = ' https://www.easy-mock.com/mock/5a1a81c89840a812456659c6/example';
const columns = [
  {
    title: 'SKU',
    dataIndex:'ware_id',
    render: (ware_id) => <span >{ware_id}</span>,
  },
  {
    title: '标题',
    dataIndex: 'title',
    render: text => <a href="javascript:;">{text}</a>,
  }, 
  {
    title: '类目',
    dataIndex: 'cateName1',
    render: (cateName1) => <span >{cateName1}</span>,
  }, 
  {
    title: '库存',
    dataIndex: 'stockNum',
  },
  {
    title: '价格',
    dataIndex: 'jdPrice'
  }
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  // getCheckboxProps: record => ({
  //   disabled: record.name === 'Disabled User', // Column configuration not to be checked
  //   name: record.name,
  // })
}


class TableDemo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:'Table Demo',
      list:[]
    };
    this.getTableDate = this.getTableDate.bind(this);
  }


  componentWillMount(){
    this.getTableDate()
  }

  getTableDate(){
    
    axios.get(url+"/listSingleFlowWares")
        .then( (response)=> {
          this.setState({
            list:response.data.result.rows
          })
        })
        .catch(function (error) {
            console.log(error);
        })

  }

  render(){
    return(
      <Table  
      rowKey="ware_id" 
      rowSelection={rowSelection} 
      columns={columns} 
      dataSource={this.state.list}
      pagination={{ pageSize: 3 }}
       />
    )
  }
}



export default TableDemo;