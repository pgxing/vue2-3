import { onMounted, reactive } from "vue";
import axios from "axios";
function getData1() {
    const obj1 = reactive({
        list1: [],
    });
    onMounted(() => {
        //获取list1数据
        axios.get("/list1.json").then((res) => {
            obj1.list1 = res.data.list;
        });
    });
    return obj1
}
function getData2() {
    const obj2 = reactive({
        list2: [],
    });
    onMounted(() => {
        //获取list2数据
        axios.get("/list2.json").then((res) => {
            obj2.list2 = res.data.list;
        });
    });
    return obj2
}
export { getData1, getData2 }