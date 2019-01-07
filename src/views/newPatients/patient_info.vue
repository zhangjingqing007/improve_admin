<template>
    <div class="addpatient">
        <div class="group">
            <div class="title">
                <span></span>基础信息
                
                <svg-icon icon-class="more" />
            </div>
            <div class="p10">
                <div class="input">
                    <svg-icon icon-class="huanzhe" /><mt-field class="box" placeholder="患者姓名（必填）" type="text"></mt-field>
                </div>
                <div class="input">
                    <svg-icon icon-class="xingbie" />
                    <div class="select">
                        <select><option>性别</option></select>
                    </div>
                </div>
                <div class="input">
                    <svg-icon icon-class="shengri" /><mt-field class="box" placeholder="患者年龄（必填）" type="text"></mt-field>
                </div>
                <div class="input">
                    <svg-icon icon-class="shouji" /><mt-field class="box" placeholder="患者手机号" type="tel"></mt-field>
                </div>
            </div>
        </div>
        <div class="group">
            <div class="title">
                <span></span>情况说明
                <svg-icon icon-class="more" />
            </div>
            <div class="p10">
                <div class="textarea mb10">
                    <h3>患者主诉：</h3>
                    <textarea rows="3"></textarea>
                </div>
                <div class="textarea mb10">
                    <h3>矫治目标：</h3>
                    <textarea rows="3"></textarea>
                </div>           
                <div class="textarea">
                    <h3>其他：</h3>
                    <textarea rows="3"></textarea>
                </div>       
            </div>
        </div>
        <div class="group">
            <div class="title">
                <span></span>口内像
                <svg-icon icon-class="more" />
            </div>
            <ul>
                <li>
                    <img src="123" alt="">
                    <span>正面咬合</span>
                </li>
                <li>
                    <img src="123" alt="">
                    <span>正面咬合</span>
                </li>
                <li>
                    <img src="123" alt="">
                    <span>正面咬合</span>
                </li>
            </ul>
        </div>
        <div class="group">
            <div class="title">
                <span></span>面像
                <svg-icon icon-class="more" />
            </div>
            <ul>
                <li>
                    <img src="123" alt="">
                    <span>正面咬合</span>
                </li>
                <li>
                    <img src="123" alt="">
                    <span>正面咬合</span>
                </li>
                <li>
                    <img src="123" alt="">
                    <span>正面咬合</span>
                </li>
            </ul>
        </div>
        <div class="group">
            <div class="title">
                <span></span>X光照片
                <svg-icon icon-class="more" />
            </div>
            <ul>
                <li>
                    <img src="123" alt="">
                    <span>正面咬合</span>
                </li>
                <li>
                    <img src="123" alt="">
                    <span>正面咬合</span>
                </li>
            </ul>
        </div>        
        <div class="group">
            <div class="title">
                <span></span>专家建议：<strong></strong>
                <svg-icon icon-class="more" />
            </div>
            <div class="p10">
                <div class="textarea">
                    <div class="textbox">的哈哈哈哈</div>
                </div>  
            </div>
        </div>
        <div class="address">
            <h4>请邮寄硅胶模型和<span>患者纸质委托加工单</span>至</h4>
            <ul>
                <li>地址：上海市</li>
                <li>联系人：上海市</li>
                <li>手机：13755555555</li>
            </ul>
        </div>
        <div class="group">
            <div class="title">
                <span></span>粲美医生正畸方案<strong></strong>
                <svg-icon icon-class="more" />
            </div>
            <div class="p10">
                <ul class="project">
                    <li></li>
                </ul>
            </div>
        </div>        
        <div><mt-button type="primary" @click="sub" size="large">提交</mt-button></div>
        <div class="submitSuccess" v-if="submitSuccess">
            <div><svg-icon icon-class="success" /></div>
            <div class="title">提交成功</div>
            <div class="number">
                <div>已生成委托单号：<span>305156</span></div>
                <div>请把委托单号填写到纸质委托加工单上</div>
                <img src="./img/img.png" alt=""  width="100%" srcset="">
            </div>
            <mt-button type="primary" @click="$router.push({name:'nav'})">返回首页</mt-button>
        </div>
    </div>
</template>

<script>
import { Button, Field } from 'mint-ui';

export default {
    data () {
        return {
            submitSuccess:false
        }
    },
    components: {
      'mt-button':Button,
      'mt-field':Field  
    },
    methods: {
        uplicense(){
            this.$refs.license.click();
        },
        sub(){
            this.submitSuccess = true;
        }
    }
}
</script>

<style lang="stylus" scoped>
.submitSuccess{
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background-color #ffffff
    display flex
    flex-direction column
    justify-content center
    align-items center
    svg{
        font-size 100px
        color #26a2ff
        margin-bottom 10px
    }
    .title{
        margin 10px auto
        font-size 20px
        color #333
    }
    .number{
        background-color #eeeeee
        border-radius 10px
        border 1px solid #999
        padding 10px
        margin 20px
        font-size 16px
        text-align left 
        >div{
            margin-bottom 10px
            >span{
                color red
                font-size 35px
            }
        }
    }
}
.addpatient{
    padding 20px
    .group{
        border 1px solid #999
        margin 20px 0
        border-radius 5px
        overflow hidden
        .title{
            text-align left 
            padding 10px
            background-color #eee
            position relative
            padding-left 20px
            display flex
            justify-content space-between
            span{
                position absolute
                top 10px
                left 10px
                width 2px
                height 15px
                background-color #26a2ff
            }
        }
        ul{
            overflow hidden
            display flex
            flex-wrap wrap
            li{
                width calc(100% / 3)
                height 80px
                background-color #999
            }
        }
    }
}

.input{
    display flex
    align-items center
    margin-bottom 10px
    svg{
        width 35px
        height 35px
        margin-right 10px
    }
    .box{
        border-bottom 1px solid #eeeeee
        width 100%
    }
    .select{
        display flex
        width 100%
        select{
            margin 0 5px
            border-radius 5px
            border 1px solid #999
            flex 1
            height 40px
            font-size 16px
        }
    }
}

.textarea{
    text-align left 
    h3{  
        margin-bottom 10px
    }
    textarea,.textbox{
        width 100%
        border 1px solid #999
        border-radius 5px
        padding 10px
        box-sizing border-box
        font-size 16px
        min-height 76px
    }
}
.mb10{
    margin-bottom 10px
}

.address{
    text-align left 
    span {
        color #e84d4d
    }
    ul{
        margin-top 20px
        li{
            margin-bottom 20px
        }
    }
}
</style>

