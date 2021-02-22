<template>
  <div class="container">
    <div class="top-nav">
      <a href="javascript:;" onclick="PTTSendClick('link','nav1','返回');">
        <span>
          <i class="top-nav-goback-normal"></i>
        </span>
      </a>
    </div>
    <router-view class="wrap" />
  </div>
</template>

<script>
export default {}
</script>

<style lang='scss'>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .top-nav {
    width: 100%;
    height: 0.62rem;
    // position: fixed;
    display: flex;
    background: rgba(50, 96, 149, 0.11);
    border-bottom: 1px solid rgb(29, 54, 82);
    z-index: 1;
    a:first-child {
      width: 1.42rem;
    }
    a {
      width: 1.36rem;
      height: 100%;
      display: block;
      position: relative;
      color: rgb(132, 176, 235);
      font-size: 0.24rem;
      z-index: 1;
      text-align: center;
      height: 0.69rem;
      span {
        line-height: 0.62rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .top-nav-goback-normal {
          margin-top: 0.1rem;
          width: 1.42rem;
          height: 0.5rem;
          background-image: url(../ossweb-img/btn-goback.png);
        }
      }
    }
  }
  .wrap {
    flex: 1;
  }
}
</style>
