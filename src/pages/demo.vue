<template>
  <div id="demo">
    <md-tabs md-fixed>
      <md-tab id="movies" md-label="卡片">
        <md-card>
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">这是一张小卡片</div>
              <div class="md-subhead">这是卡片的子标题</div>
            </md-card-header-text>
            <!-- <md-menu md-size="4" md-direction="bottom left">
              <md-button class="md-icon-button" md-menu-trigger>
                <md-icon>more_vert</md-icon>
              </md-button>
              <md-menu-content>
                <md-menu-item>
                  <span>Call</span>
                  <md-icon>phone</md-icon>
                </md-menu-item>

                <md-menu-item>
                  <span>Send a message</span>
                  <md-icon>message</md-icon>
                </md-menu-item>
              </md-menu-content>
            </md-menu> -->
          </md-card-header>
          <md-card-media>
            <img src="../assets/img/card-image-1.jpg" alt="People">
            <md-ink-ripple ></md-ink-ripple>
          </md-card-media>
          <md-card-content>
            <p>略略略略略略略略略略略略略略略略略略略略略略略略略！</p>
          </md-card-content>
          <md-card-actions>
            <md-button id="action1" @click.native="openDialog('dialog1')">点我点我</md-button>
            <!-- <md-button>Action</md-button> -->
          </md-card-actions>
        </md-card>
      </md-tab>

      <md-tab id="music" md-label="文件上传">
        <md-input-container>
          <label>单个文件上传</label>
          <md-file v-model="single"></md-file>
        </md-input-container>
      </md-tab>

      <md-tab id="books" md-label="1号店">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
      </md-tab>

      <md-tab id="pictures" md-label="狗屎" md-tooltip="This is the pictures tab!">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
      </md-tab>
    </md-tabs>

    <md-dialog md-open-from="#action1" md-close-to="#action1" ref="dialog1">
      <md-dialog-title>嘿嘿嘿嘿</md-dialog-title>

      <md-dialog-content>喜欢这个女孩吗？</md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="closeDialog('dialog1')">喜欢</md-button>
        <md-button class="md-primary" @click.native="closeDialog('dialog1')">喜欢</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>
<script>
  export default {
    name: 'demo',
    data: () => ({
      single: null
    }),
    methods: {
      openDialog (ref) {
        this.$refs[ref].open()
      },
      closeDialog (ref) {
        this.$refs[ref].close()
      }
    }
  }
</script>
<style scoped>
  .main-content {
      padding: 16px;
  }
</style>
