<template>
    <div class="box">
        todo
        <input type="text" v-model="obj.text">
        <button @click="toAdd">add</button>
        <ul>
            <li v-for="item in obj.todoList" :key="item">{{item}}</li>
        </ul>
    </div>
</template>
<script>
import { reactive } from 'vue'
export default {
    setup(){
        //定义状态，相当于useState
        const obj = reactive({
            text:'',
            todoList:[]
        })
        //定义方法
        const toAdd = ()=>{
            obj.todoList.push(obj.text)
            obj.text = ''
        }
        return{
            obj,
            toAdd
        }
    }
}
</script>
<style lang="scss" scoped>
.box {
  font-size: 0.16rem;
}
</style>