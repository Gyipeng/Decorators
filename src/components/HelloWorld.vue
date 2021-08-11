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
  </div>
</template>

<script>
  import {confirmation,before,after,around,time,setTimeOut,debounces} from "./test"
  import {on,emit,off} from "./bus"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    methods: {
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
        }
    },
    created(){
      this.on()
    }
}
</script>

