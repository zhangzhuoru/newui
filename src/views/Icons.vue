<template>
  <v-container
    fill-height
    fluid
    style="flex-wrap: wrap;"
  >
    <material-card color="green">
      <div
        slot="header"
      >
        <div class="title font-weight-light mb-2">Material Design Icons</div>
        <div class="category font-weight-thin">
          See all available
          <a
            class="white--text"
            href="https://materialdesignicons.com/"
            target="_blank"
          >
            Icons
          </a>
        </div>
      </div>

      <v-layout
        align-center
        justify-center
        wrap
      >
        <v-flex
          v-for="icon in icons"
          :key="icon"
          ma-2
        >
          <v-tooltip
            top
            content-class="top">
            <v-icon slot="activator">
              {{ icon }}
            </v-icon>
            <span>{{ icon }}</span>
          </v-tooltip>
        </v-flex>
      </v-layout>
    </material-card>

    <div class="mx-auto">
      <v-btn
        large
        class="mx-0 font-weight-light"
        color="success"
        href="https://materialdesignicons.com/"
        target="_blank"
        round
      >
        <v-icon left>mdi-material-design</v-icon>
        <span>See all icons</span>
      </v-btn>
    </div>
    <v-flex
        md12
        sm12
        xs12
        lg12
      >
        <material-card
          color="green"
          title="Echars"
        >
          <el-tabs type="border-card">
            <el-tab-pane>
              <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
              <el-table
                :data="tableData"
                style="width: 100%"
                :default-sort = "{prop: 'date', order: 'descending'}"
                >
                <el-table-column
                  prop="date"
                  label="日期"
                  sortable
                  width="100"
                  align='center'>
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  sortable
                  align='center'
                  >
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                      <p>姓名: {{ scope.row.name }}</p>
                      <p>住址: {{ scope.row.address }}</p>
                      <div slot="reference" class="name-wrapper">
                        <span>{{ scope.row.name }}</span>
                      </div>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址"
                  :formatter="formatter"
                  align='center'>
                </el-table-column>
                <el-table-column label="操作" width="180" align='center'>
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="消息中心">消息中心</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        </material-card>
      </v-flex>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tableData: [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }],
    icons: [
      'mdi-access-point',
      'mdi-access-point-network',
      'mdi-account',
      'mdi-account-alert',
      'mdi-account-box',
      'mdi-account-box-multiple',
      'mdi-account-box-outline',
      'mdi-account-card-details',
      'mdi-account-check',
      'mdi-account-circle',
      'mdi-account-convert',
      'mdi-account-edit',
      'mdi-account-group',
      'mdi-account-heart',
      'mdi-account-key',
      'mdi-account-location',
      'mdi-account-minus',
      'mdi-account-multiple',
      'mdi-account-multiple-check',
      'mdi-account-multiple-minus',
      'mdi-account-multiple-outline',
      'mdi-account-multiple-plus',
      'mdi-account-multiple-plus-outline',
      'mdi-account-network',
      'mdi-account-off',
      'mdi-account-outline',
      'mdi-account-plus',
      'mdi-account-plus-outline',
      'mdi-account-remove',
      'mdi-account-search',
      'mdi-account-search-outline',
      'mdi-account-settings',
      'mdi-account-settings-variant',
      'mdi-account-star',
      'mdi-account-switch',
      'mdi-accusoft',
      'mdi-adjust',
      'mdi-adobe',
      'mdi-air-conditioner',
      'mdi-airballoon',
      'mdi-airplane',
      'mdi-airplane-landing',
      'mdi-airplane-off',
      'mdi-airplane-takeoff',
      'mdi-airplay',
      'mdi-airport',
      'mdi-alarm',
      'mdi-alarm-bell',
      'mdi-alarm-check',
      'mdi-alarm-light',
      'mdi-alarm-multiple',
      'mdi-alarm-off',
      'mdi-alarm-plus',
      'mdi-alarm-snooze',
      'mdi-album',
      'mdi-alert',
      'mdi-alert-box',
      'mdi-alert-circle',
      'mdi-alert-circle-outline',
      'mdi-alert-decagram',
      'mdi-alert-octagon',
      'mdi-alert-octagram',
      'mdi-alert-outline',
      'mdi-alien',
      'mdi-all-inclusive',
      'mdi-alpha',
      'mdi-alphabetical',
      'mdi-altimeter',
      'mdi-amazon',
      'mdi-amazon-alexa',
      'mdi-amazon-drive',
      'mdi-ambulance',
      'mdi-amplifier',
      'mdi-anchor',
      'mdi-android',
      'mdi-android-debug-bridge',
      'mdi-android-head',
      'mdi-android-studio',
      'mdi-angle-acute',
      'mdi-angle-obtuse',
      'mdi-angle-right',
      'mdi-angular',
      'mdi-angularjs',
      'mdi-animation',
      'mdi-animation-play',
      'mdi-anvil',
      'mdi-apple',
      'mdi-apple-finder',
      'mdi-apple-icloud',
      'mdi-apple-ios',
      'mdi-apple-keyboard-caps',
      'mdi-apple-keyboard-command',
      'mdi-apple-keyboard-control',
      'mdi-apple-keyboard-option',
      'mdi-apple-keyboard-shift',
      'mdi-apple-safari',
      'mdi-application',
      'mdi-approval',
      'mdi-apps',
      'mdi-arch',
      'mdi-archive',
      'mdi-arrange-bring-forward',
      'mdi-arrange-bring-to-front',
      'mdi-arrange-send-backward',
      'mdi-arrange-send-to-back',
      'mdi-arrow-all',
      'mdi-arrow-bottom-left',
      'mdi-arrow-bottom-left-bold-outline',
      'mdi-arrow-bottom-left-thick',
      'mdi-arrow-bottom-right',
      'mdi-arrow-bottom-right-bold-outline',
      'mdi-arrow-bottom-right-thick',
      'mdi-arrow-collapse',
      'mdi-arrow-collapse-all',
      'mdi-arrow-collapse-down',
      'mdi-arrow-collapse-horizontal',
      'mdi-arrow-collapse-left',
      'mdi-arrow-collapse-right',
      'mdi-arrow-collapse-up',
      'mdi-arrow-collapse-vertical',
      'mdi-arrow-decision',
      'mdi-arrow-decision-auto',
      'mdi-arrow-decision-auto-outline',
      'mdi-arrow-decision-outline',
      'mdi-arrow-down',
      'mdi-arrow-down-bold',
      'mdi-arrow-down-bold-box',
      'mdi-arrow-down-bold-box-outline',
      'mdi-arrow-down-bold-circle',
      'mdi-arrow-down-bold-circle-outline',
      'mdi-arrow-down-bold-hexagon-outline',
      'mdi-arrow-down-bold-outline',
      'mdi-arrow-down-box',
      'mdi-arrow-down-drop-circle',
      'mdi-arrow-down-drop-circle-outline',
      'mdi-arrow-down-thick',
      'mdi-arrow-expand',
      'mdi-arrow-expand-all',
      'mdi-arrow-expand-down',
      'mdi-arrow-expand-horizontal',
      'mdi-arrow-expand-left',
      'mdi-arrow-expand-right',
      'mdi-arrow-expand-up',
      'mdi-arrow-expand-vertical',
      'mdi-arrow-left',
      'mdi-arrow-left-bold',
      'mdi-arrow-left-bold-box',
      'mdi-arrow-left-bold-box-outline',
      'mdi-arrow-left-bold-circle',
      'mdi-arrow-left-bold-circle-outline',
      'mdi-arrow-left-bold-hexagon-outline',
      'mdi-arrow-left-bold-outline',
      'mdi-arrow-left-box',
      'mdi-arrow-left-drop-circle',
      'mdi-arrow-left-drop-circle-outline',
      'mdi-arrow-left-right-bold-outline',
      'mdi-arrow-left-thick',
      'mdi-arrow-right',
      'mdi-arrow-right-bold',
      'mdi-arrow-right-bold-box',
      'mdi-arrow-right-bold-box-outline',
      'mdi-arrow-right-bold-circle',
      'mdi-arrow-right-bold-circle-outline',
      'mdi-arrow-right-bold-hexagon-outline',
      'mdi-arrow-right-bold-outline',
      'mdi-arrow-right-box',
      'mdi-arrow-right-drop-circle',
      'mdi-arrow-right-drop-circle-outline',
      'mdi-arrow-right-thick',
      'mdi-arrow-split-horizontal',
      'mdi-arrow-split-vertical',
      'mdi-arrow-top-left',
      'mdi-arrow-top-left-bold-outline',
      'mdi-arrow-top-left-thick',
      'mdi-arrow-top-right',
      'mdi-arrow-top-right-bold-outline',
      'mdi-arrow-top-right-thick',
      'mdi-arrow-up',
      'mdi-arrow-up-bold',
      'mdi-arrow-up-bold-box',
      'mdi-arrow-up-bold-box-outline',
      'mdi-arrow-up-bold-circle',
      'mdi-arrow-up-bold-circle-outline',
      'mdi-arrow-up-bold-hexagon-outline',
      'mdi-arrow-up-bold-outline',
      'mdi-arrow-up-box',
      'mdi-arrow-up-down-bold-outline',
      'mdi-arrow-up-drop-circle',
      'mdi-arrow-up-drop-circle-outline',
      'mdi-arrow-up-thick',
      'mdi-artist',
      'mdi-assistant',
      'mdi-asterisk',
      'mdi-at',
      'mdi-atlassian',
      'mdi-atom',
      'mdi-attachment',
      'mdi-audio-video',
      'mdi-audiobook',
      'mdi-augmented-reality',
      'mdi-auto-fix',
      'mdi-auto-upload',
      'mdi-autorenew',
      'mdi-av-timer',
      'mdi-axe',
      'mdi-azure',
      'mdi-baby',
      'mdi-baby-buggy',
      'mdi-backburger',
      'mdi-backspace',
      'mdi-backup-restore',
      'mdi-badminton'
    ]
  }),
    methods: {
      formatter(row, column) {
        return row.address;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
}
</script>
