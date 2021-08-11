<template>
  <div class="hello">
    <el-button type="primary" @click="deleteFile">提示</el-button>
    <el-button @click="before">before</el-button>
    <el-button @click="after">after</el-button>
    <el-button @click="around">around</el-button>
    <el-button @click="time">time</el-button>
    <el-button @click="setTimeOut">setTimeOut</el-button>
    <el-button @click="debounce(1)">debounce</el-button>
    <el-button @click="on">on</el-button>
    <el-button @click="emit">emit</el-button>
    <el-button @click="off">off</el-button>
    <el-button @click="loadData">loadData</el-button>

    <el-table
            :data="tableData"
            style="width: 100%">
      <el-table-column
              prop="date"
              label="日期"
              width="180">
      </el-table-column>
      <el-table-column
              prop="name"
              label="姓名"
              width="180">
      </el-table-column>
      <el-table-column
              prop="address"
              label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {confirmation,before,after,around,time,setTimeOut,debounces,loading} from "./test"
  import {on,emit,off} from "./bus"
export default {
  name: 'HelloWorld',
    data(){
      return{
          tableData: [{
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }, {
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }],
      }
    },
  props: {
    msg: String
  },
    methods: {
       @loading(".el-table")
        loadData(){
              return  new Promise(resolve =>{
                    setTimeout(()=>{
                        resolve("loadData")
                    },1000)
           })
        },
        @confirmation("删除文件")
        deleteFile() {
            console.log(1);
        },
        @before("打印")
        before(){
            console.log("开始");
        },
        @after("打印")
        after(){
            console.log("开始");
        },
        @around("打印")
        around(){
            console.log("开始");
        },
        @time("打印")
        time(){
            console.log("开始");
        },
        @setTimeOut(3000)
        setTimeOut(){
            console.log("setTimeOut");
        },
        @debounces(1000)
        debounce(A){
            console.log(A);
            console.log("debounce");
        },
        @on("a")
        on(arg){
            console.log(arg);
        },
        @emit("a")
        emit(){
            return 2
        },
        @off("a")
        off(){
            console.log("off");
        },
        on1(){
            // this.$on('a', ()=>{
            //     console.log(arg);
            // })
        },
        emit1(){
            // this.$emit('a', 2)
        },
        off1(){
           // this.$off("a")
           //  console.log("off");
        }
    },
    created(){
      this.on()
    }
}
</script>

