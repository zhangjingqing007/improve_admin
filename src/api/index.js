import request from '@/utils/request'

var base = '/service/admin'

export function queryhomepageinfo(params) {
  return request({
    url: `${base}/user/queryhomepageinfo`,
    method: 'get',
    params
  })
}

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}

export function querytransfershistory(params) {
  return request({
    url: `${base}/index/querytransfershistory`,
    method: 'get',
    params
  })
}

export function queryusertopupmatch(params) {
  return request({
    url: `${base}/user/queryusertopupmatch`,
    method: 'get',
    params
  })
}

export function topuphistory(params) {
  return request({
    url: `${base}/user/topuphistory`,
    method: 'get',
    params
  })
}

export function dailytopuphistory(params) {
  return request({
    url: `${base}/user/dailytopuphistory`,
    method: 'get',
    params
  })
}


export function queryuserlist(params) {
    return request({
        url: `${base}/user/querylist`,
        method: 'get',
        params
    })
}

export function upuserstatus(params) {
    return request({
        url: `${base}/user/upstate`,
        method: 'get',
        params
    })
}

export function usertopupwithdrawal(params) {
    return request({
        url: `${base}/user/usertopupwithdrawal`,
        method: 'get',
        params
    })
}

export function transfershistorylist(params) {
    return request({
        url: `${base}/user/transfershistorylist`,
        method: 'get',
        params
    })
}

export function upusermark(params) {
    return request({
        url: `${base}/user/upusermark`,
        method: 'get',
        params
    })
}

export function upuserpassword(params) {
    return request({
        url: `${base}/user/upuserpassword`,
        method: 'get',
        params
    })
}

export function saveqrcode(params) {
    return request({
        url: `${base}/qrcode/saveqrcode`,
        method: 'get',
        params
    })
}

export function queryqrcodelist(params) {
    return request({
        url: `${base}/qrcode/querylist`,
        method: 'get',
        params
    })
}
export function upqrcodestatus(params) {
    return request({
        url: `${base}/qrcode/upstatus`,
        method: 'get',
        params
    })
}
export function delqrcode(params) {
    return request({
        url: `${base}/qrcode/delqrcode`,
        method: 'get',
        params
    })
}

//查询商户记录
export function querymerchantlist(params) {
    return request({
        url: `${base}/applist/querylist`,
        method: 'get',
        params
    })
}

//修改商户信息
export function savemerchant(params) {
    return request({
        url: `${base}/applist/savapplist`,
        method: 'get',
        params
    })
}

//修改商户状态
export function upmerchantstate(params) {
    return request({
        url: `${base}/applist/upstate`,
        method: 'get',
        params
    })
}

//删除商户
export function delmerchant(params) {
    return request({
        url: `${base}/applist/delapplist`,
        method: 'get',
        params
    })
}

//查询商户结算申请记录
export function queryclearinglist(params) {
    return request({
        url: `${base}/applist/queryclearinglist`,
        method: 'get',
        params
    })
}

//审核结算
export function auditclearing(params) {
    return request({
        url: `${base}/applist/auditclearing`,
        method: 'get',
        params
    })
}

//查询订单详情
export function querymerchantrecordlist(params) {
    return request({
        url: `${base}/applist/queryapplistrecordlist`,
        method: 'get',
        params
    })
}

//代理详情列表
export function queryuserrecordlist(params) {
    return request({
        url: `${base}/user/queryuserrecordlist`,
        method: 'get',
        params
    })
}

//查询积分列表
export function feeconfiglist(params) {
    return request({
        url: `${base}/feeconfig/querylist`,
        method: 'get',
        params
    })
}

//删除积分
export function delfee(params) {
    return request({
        url: `${base}/feeconfig/delfee`,
        method: 'get',
        params
    })
}

//修改积分
export function savefee(params) {
    return request({
        url: `${base}/feeconfig/savefee`,
        method: 'get',
        params
    })
}


//查询系统配置
export function querysystemlist(params) {
    return request({
        url: `${base}/system/querylist`,
        method: 'get',
        params
    })
}

//保存系统配置
export function savesystem(params) {
    return request({
        url: `${base}/system/saveconfig`,
        method: 'get',
        params
    })
}

//修改系统配置状态
export function upsystemstatus(params) {
    return request({
        url: `${base}/system/upstatus`,
        method: 'get',
        params
    })
}


//手动通知
export function jogNotify(params) {
    return request({
        url: `${base}/user/jogNotify`,
        method: 'get',
        params
    })
}

//查询二维码配置
export function queryqrcodeconfig(params) {
    return request({
        url: `${base}/qrcode/queryqrcodeconfig`,
        method: 'get',
        params
    })
  }

  //保存二维码配置
export function saveqrcodeconfig(params) {
    return request({
        url: `${base}/qrcode/saveqrcodeconfig`,
        method: 'get',
        params
    })
}

//修改二维码配置状态
export function upconfigstatus(params) {
    return request({
        url: `${base}/qrcode/upconfigstatus`,
        method: 'get',
        params
    })
}

//修改二维码配置状态
export function delqrcodeconfig(params) {
    return request({
        url: `${base}/qrcode/delqrcodeconfig`,
        method: 'get',
        params
    })
}

//查询所有积分
export function queryallfee(params) {
    return request({
        url: `${base}/qrcode/queryallfee`,
        method: 'get',
        params
    })
}



//查询所有收款备注码
export function queryallnum(params) {
    return request({
        url: `${base}/qrcode/queryallnum`,
        method: 'get',
        params
    })
}


//查询代理收益列表
export function queryincomelist(params) {
    return request({
        url: `${base}/user/queryincomelist`,
        method: 'get',
        params
    })
}

//查询通知列表
export function infrom(params) {
    return request({
        url: `${base}/notice/querylist`,
        method: 'get',
        params
    })
}


//用户重复充值
export function queryrepeattopuprecord(params) {
    return request({
        url: `${base}/user/queryrepeattopuprecord`,
        method: 'get',
        params
    })
}



//错误日志
export function errorlog(params) {
    return request({
        url: `${base}/errorlog/querylist`,
        method: 'get',
        params
    })
}


//超时补单接口
export function reporder(params) {
    return request({
        url: `${base}/user/reporder`,
        method: 'get',
        params
    })
}

//代理余额转移
export function userbalancetransfer(params) {
    return request({
        url: `${base}/user/userbalancetransfer`,
        method: 'get',
        params
    })
}


//查询重复二维码
export function inspectqrcode(params) {
    return request({
        url: `${base}/qrcode/inspectqrcode`,
        method: 'get',
        params
    })
}

//重复充值退回代理账户
export function repetitionsendbackagency(params) {
    return request({
        url: `${base}/user/repetitionsendbackagency`,
        method: 'get',
        params
    })
}


//二维码重复付款补单到商户
export function replenishmentapplist(params) {
    return request({
        url: `${base}/user/replenishmentapplist`,
        method: 'get',
        params
    })
}


//查询商户id
export function allapplist(params) {
    return request({
        url: `${base}/applist/allapplist`,
        method: 'get',
        params
    })
}


//补单记录
export function replenishmentrecordlist(params) {
    return request({
        url: `${base}/user/replenishmentrecordlist`,
        method: 'get',
        params
    })
}


//路由列表
export function permissionList(params) {
    return request({
        url: `${base}/permission/querylist`,
        method: 'get',
        params
    })
}

//修改路由配置
export function savepermission(params) {
    return request({
        url: `${base}/permission/savepermission`,
        method: 'get',
        params
    })
}

//删除路由配置
export function delpermission(params) {
    return request({
        url: `${base}/permission/delpermission`,
        method: 'get',
        params
    })
}


//查询角色列表
export function roleUser(params) {
    return request({
        url: `${base}/role/querylist`,
        method: 'get',
        params
    })
}


//新增角色信息
export function saverole(params) {
    return request({
        url: `${base}/role/saverole`,
        method: 'post',
        params
    })
}

//删除角色
export function delrole(params) {
    return request({
        url: `${base}/role/delrole`,
        method: 'get',
        params
    })
}

//查询所有权限信息
export function allpermission(params) {
    return request({
        url: `${base}/permission/allpermission`,
        method: 'get',
        params
    })
}

//管理员列表
export function queryadminlist(params) {
    return request({
        url: `${base}/index/queryadminlist`,
        method: 'get',
        params
    })
}


//新增,修改管理员
export function addadmin(params) {
    return request({
        url: `${base}/index/addadmin`,
        method: 'get',
        params
    })
}


//所有权限配置
export function allrole(params) {
    return request({
        url: `${base}/role/allrole`,
        method: 'get',
        params
    })
}


//二维码一键审核
export function rushthrough(params) {
    return request({
        url: `${base}/qrcode/rushthrough`,
        method: 'get',
        params
    })
}


//上传凭证
export function uploadcredentials(params) {
    return request({
        url: `${base}/user/uploadcredentials`,
        method: 'get',
        params
    })
}

//充值兑换记录
export function querytopupwithdrawal(params) {
    return request({
        url: `${base}/user/querytopupwithdrawal`,
        method: 'get',
        params
    })
}

//查询权限详情
export function queryselfpermission(params) {
    return request({
        url: `${base}/index/queryselfpermission`,
        method: 'get',
        params
    })
}


//查询管理员角色
export function queryselfrole(params) {
    return request({
        url: `${base}/index/queryselfrole`,
        method: 'post',
        params
    })
}


export function allstairpermission(params) {
    return request({
        url: `${base}/permission/allstairpermission`,
        method: 'post',
        params
    })
}

//平台收款帐号列表
export function platformreceipt(params) {
    return request({
        url: `${base}/platformreceipt/querylist`,
        method: 'post',
        params
    })
}

//平台支付宝二维码列表
export function queryplatformqrcode(params) {
    return request({
        url: `${base}/platformreceipt/queryplatformqrcode`,
        method: 'post',
        params
    })
}



export function platformreceiptSave(params) {
    return request({
        url: `${base}/platformreceipt/saveinfo`,
        method: 'post',
        params
    })
}


//平台充值审核
export function audittopup(params) {
    return request({
        url: `${base}/user/audittopup`,
        method: 'post',
        params
    })
}

//管理员操作记录
export function queryadminoperaterecord(params) {
    return request({
        url: `${base}/index/queryadminoperaterecord`,
        method: 'post',
        params
    })
}


//保存平台收款二维码
export function addplatformqrcode(params) {
    return request({
        url: `${base}/platformreceipt/addplatformqrcode`,
        method: 'post',
        params
    })
}


//平台收款二维码批量上传
export function batchupload(params) {
    return request({
        url: `${base}/platformreceipt/batchupload`,
        method: 'post',
        params
    })
}


//删除
export function delreceipt(params) {
    return request({
        url: `${base}/platformreceipt/delinfo`,
        method: 'post',
        params
    })
}

//删除二维码
export function delplatformqrcode(params) {
    return request({
        url: `${base}/platformreceipt/delplatformqrcode`,
        method: 'post',
        params
    })
}


//参数配置
export function queryconfiglist(params) {
    return request({
        url: `${base}/system/queryconfiglist`,
        method: 'post',
        params
    })
}

//保存,修改参数配置
export function saveconfiginfo(params) {
    return request({
        url: `${base}/system/saveconfiginfo`,
        method: 'post',
        params
    })
}

//修改平台收款类型
export function platformreceipt_upstatus(params) {
    return request({
        url: `${base}/platformreceipt/upstatus`,
        method: 'post',
        params
    })
}


//平台收款类型
export function platformreceipt_querystatus(params) {
    return request({
        url: `${base}/platformreceipt/querystatus`,
        method: 'post',
        params
    })
}


//查询上下班时间段
export function querytimeinfo(params) {
    return request({
        url: `${base}/platformreceipt/querytimeinfo`,
        method: 'post',
        params
    })
}


//平台收款通知操作员id
export function querypaymentnotice(params) {
    return request({
        url: `${base}/platformreceipt/querypaymentnotice`,
        method: 'post',
        params
    })
}

//新增-修改平台收款通知操作员id
export function addpaymentnotice(params) {
    return request({
        url: `${base}/platformreceipt/addpaymentnotice`,
        method: 'post',
        params
    })
}


//支付宝补单
export function zfbreporder(params) {
    return request({
        url: `${base}/user/zfbreporder`,
        method: 'post',
        params
    })
}

//扫码付款记录
export function transhistory(params) {
    return request({
        url: `${base}/transhistory/querylist`,
        method: 'post',
        params
    })
}

//付款记录
export function receive(params) {
    return request({
        url: `${base}/transhistory/queryreceivelist`,
        method: 'post',
        params
    })
}


//玩家信息
export function queryplayerlist(params) {
    return request({
        url: `${base}/transhistory/queryplayerlist`,
        method: 'post',
        params
    })
}

//微信错误信息
export function querywxerrormsg(params) {
    return request({
        url: `${base}/transhistory/querywxerrormsg`,
        method: 'post',
        params
    })
}

//添加代理组信息
export function saveusergroup(params) {
    return request({
        url: `${base}/user/saveusergroup`,
        method: 'post',
        params
    })
}

//查询代理组信息
export function queryusergroup(params) {
    return request({
        url: `${base}/user/queryusergroup`,
        method: 'post',
        params
    })
}

//删除代理组信息
export function delusergroup(params) {
    return request({
        url: `${base}/user/delusergroup`,
        method: 'post',
        params
    })
}


//查询所有代理组信息
export function queryusergrouping(params) {
    return request({
        url: `${base}/user/queryusergrouping`,
        method: 'post',
        params
    })
}


//代理绑定代理组
export function addusergrouping(params) {
    return request({
        url: `${base}/user/addusergrouping`,
        method: 'post',
        params
    })
}

//查询商户组信息
export function queryapplistgroup(params) {
    return request({
        url: `${base}/applist/queryapplistgroup`,
        method: 'post',
        params
    })
}

//添加商户分组信息
export function saveapplistgroup(params) {
    return request({
        url: `${base}/applist/saveapplistgroup`,
        method: 'post',
        params
    })
}

//删除商户组
export function delapplistgroup(params) {
    return request({
        url: `${base}/applist/delapplistgroup`,
        method: 'post',
        params
    })
}

//查询商户组信息
export function queryapplistgrouping(params) {
    return request({
        url: `${base}/applist/queryapplistgrouping`,
        method: 'post',
        params
    })
}


//商户设置分组信息
export function addmchidgrouping(params) {
    return request({
        url: `${base}/applist/addmchidgrouping`,
        method: 'post',
        params
    })
}


export function querymgugmplist(params) {
    return request({
        url: `${base}/applist/querymgugmplist`,
        method: 'post',
        params
    })
}

//添加商户组代理组关联信息
export function addmgugmp(params) {
    return request({
        url: `${base}/applist/addmgugmp`,
        method: 'post',
        params
    })
}


//查询当面付列表
export function queryf2fmerchantlist(params) {
    return request({
        url: `${base}/user/queryf2fmerchantlist`,
        method: 'post',
        params
    })
}

//新增,修改当面付列表
export function savef2fmerchantlist(params) {
    return request({
        url: `${base}/user/savef2fmerchantlist`,
        method: 'post',
        params
    })
}

//删除当面付列表
export function delf2fmerchantlist(params) {
    return request({
        url: `${base}/user/delf2fmerchantlist`,
        method: 'post',
        params
    })
}



