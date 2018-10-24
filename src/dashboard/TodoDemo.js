
import React from 'react';
import { Input,Button,Checkbox} from 'antd';
const Search = Input.Search;

class TodoDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'Todo Demo',
      originalArray:this.randomNumber(),
      list:[]
    };
    this.addItem = this.addItem.bind(this);
    this.delItem = this.delItem.bind(this);
    this.onChange = this.onChange.bind(this);
    this.changeStatus=this.changeStatus.bind(this);
  }
  componentWillMount(){
    
  }
  randomNumber(){
    var count=10000; 
    var originalArray = [];
    for (var i=0;i<count;i++){
      if(originalArray.length<100){
        originalArray[i]=i+1000;
      }
    }
    originalArray.sort(function(){ return 0.5 - Math.random(); });
    return originalArray;
  }
  addItem(value){
    document.getElementById('addItem').value = "";
    this.setState((stateValue)=>{
      let list = stateValue.list;
      let originalArray = stateValue.originalArray;

      list.push( {
        id:originalArray.splice(0,1),
        value:value,
        status:false
      })

      return {
        list,
        originalArray
      };
    })
  }
  delItem(item){
    this.setState((stateValue)=>{
      for (let index = 0; index < stateValue.list.length; index++) {
        const element = stateValue.list[index];
        if(element.id==item.id){
          return stateValue.list.splice(index,1);
        }
      }
    })
  }
  onChange(e,item) {
    if(e.target.checked){
      this.setState((stateValue)=>{
        return this.changeStatus(item,stateValue)
      })
    }else{
      this.setState((stateValue)=>{
        return this.changeStatus(item,stateValue)
      })
    }
    
  }
  changeStatus(item,stateValue){
    for (let index = 0; index < stateValue.list.length; index++) {
      let element = stateValue.list[index];
      if(element.id==item.id){
        item.status=!item.status;
      }
    }
    return stateValue.list;
  }
  render() {

    return (
      <div className="shopping-list">
        <h1>{this.state.name}</h1>
        <ul>
          {
            this.state.list.map((item)=>{
              return (
                <li key={item.id}>
                  <Checkbox onChange={(e)=>this.onChange(e,item)}></Checkbox>
                  <span style={{display:'inline-block',width:160,height:'36px',lineHeight:'36px'}}>{item.value}</span> 
                  <Button  shape="circle" size="small" icon="close"   onClick={()=>this.delItem(item)}/>
                  {/* <Icon type="close" theme="outlined" /> */}
                </li>
              )
            })
          }
        </ul>

          <Search
          id="addItem"
          style={{ width: 300 }}
          placeholder="input search text"
          enterButton="增加"
          size="large"
          onSearch={(value) => {this.addItem(value)}}
        />
        <div>
          <p>已选择</p>
          <ul>
            {
              
              this.state.list.map((item)=>{
                if(item.status){
                  return (
                    <li key={item.id}>
                      <span style={{display:'inline-block',width:160,height:'36px',lineHeight:'36px'}}>{item.value}</span> 
                      <Button  shape="circle" size="small" icon="close"  dataid ={item.id}  onClick={()=>this.delItem(item)}/>
                      {/* <Icon type="close" theme="outlined" /> */}
                    </li>
                  )
                }
              })
            }
          </ul>
      </div>
      <div>
        <p>未选择</p>
          <ul>
            {
              
              this.state.list.map((item)=>{
                if(!item.status){
                  return (
                    <li key={item.id}>
                      <span style={{display:'inline-block',width:160,height:'36px',lineHeight:'36px'}}>{item.value}</span> 
                      <Button  shape="circle" size="small" icon="close"  dataid ={item.id}  onClick={()=>this.delItem(item)}/>
                      {/* <Icon type="close" theme="outlined" /> */}
                    </li>
                  )
                }
                
              })
            }
          </ul>
        </div>

      </div>
    );
  }
}

export default TodoDemo;
