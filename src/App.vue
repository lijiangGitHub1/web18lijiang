<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
.el-table .cell {
  text-align: center!important;
}
.el-table td, .el-table th.is-leaf {
  border-left: 1px solid rgba(211,217,223);
}
.el-table th.is-leaf {
  border-top: 1px solid rgba(211,217,223);
 }
.el-table:last-child{
  border-right: 1px solid rgba(211,217,223)!important;
}
</style>
