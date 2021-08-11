<template>
    <el-table
            v-loading="loading"
            :data="tableData"
            style="width: 100%">
        <el-table-column
                prop="date"
                label="日期"
                width="180">
        </el-table-column>
    </el-table>
</template>

<style>
    body {
        margin: 0;
    }
</style>

<script>
    export default {
        data() {
            return {
                tableData: [],
                loading: false
            };
        },
        methods: {
             getData() {
               this.loading = true
                loadData().then(()=>{
                    this.loading = false
                })
            },
            async getData() {
                this.loading = true
                const data = await loadData()
                this.loading = false
            }

        },
    };
</script>
