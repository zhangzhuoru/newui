<template>
  <v-app>


    <core-toolbar />

    <core-drawer />

    <core-view />
  </v-app>
</template>

<style lang="scss">
@import '@/styles/index.scss';

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
.logoout{
  position: fixed;
  z-index: 90;
  bottom: 17vh;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #579fe9;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 5px #666;
}
</style>
