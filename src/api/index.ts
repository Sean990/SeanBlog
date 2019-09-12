const ACCOUNT = 'account' // 账号系统
const ORDER = 'order' // 订单系统
let SPA = 'spa'// spa-manager系统
let OPS = 'ops'// 运维管理系统

class Api {
    LOGIN = `${ACCOUNT}/api/v1/manager/account/login`
    LOGOUT = `${ACCOUNT}/api/v1/manager/account/logout`
    USER_NODE = `${ACCOUNT}/api/v1/manager/user/node/{userId}`
    TECH_INFO = `${ACCOUNT}/api/v1/fuiou/user/account/techInfo`
    INTERFACE_LIST = `${ACCOUNT}/api/v1/manager/interface`

    BUSINESS_CLUB_LIST = `${ACCOUNT}/api/v1/manager/club`
    BUSINESS_POS_LIST = `${ACCOUNT}/api/v1/manager/club/pos`
    BUSINESS_POS_OPERATION = `${ACCOUNT}/api/v1/manager/club/pos`

    ALLOCATE_CLUB_LIST_PREVIEW = `${ACCOUNT}/api/v1/fuiou/club/account/total`
    ALLOCATE_CLUB_LIST = `${ACCOUNT}/api/v1/fuiou/club/account/list`
    ALLOCATE_CLUB = `${ACCOUNT}/api/v1/spa/club/search/list`
    ALLOCATE_CLUB_REGISTER = `${ACCOUNT}/api/v1/fuiou/club/account/isopen`
    ALLOCATE_CLUB_UPLOAD = `${ACCOUNT}/api/v1/fuiou/club/account/open`
    ALLOCATE_CLUB_ARTIFICIALOPEN = `${ACCOUNT}/api/v1/fuiou/club/account/artificialOpen`

    ALLOCATE_CLUB_MANAGER_PREVIEW = `${ACCOUNT}/api/v1/fuiou/club/account/tech/total`
    ALLOCATE_CLUB_MANAGER_LIST = `${ACCOUNT}/api/v1/fuiou/club/account/tech/list`
    ALLOCATE_ROLE_LIST = `${ACCOUNT}/api/v1/fuiou/club/account/role/list`

    ALLOCATE_AUDIT_LIST = `${ACCOUNT}/api/v1/fuiou/user/account/list`
    ALLOCATE_AUDIT_LIST_PREVIEW = `${ACCOUNT}/api/v1/fuiou/user/account/total`
    ALLOCATE_AUDIT_INFO = `${ACCOUNT}/api/v1/fuiou/user/account/info`
    ALLOCATE_AUDIT_PASS = `${ACCOUNT}/api/v1/fuiou/user/account/save`
    ALLOCATE_AUDIT_OPERATION = `${ACCOUNT}/api/v1/fuiou/user/account/open`
    ALLOCATE_AUDIT_REOPEN = `${ACCOUNT}/api/v1/fuiou/user/account/reopening`
    ALLOCATE_AUDIT_DELETE = `${ACCOUNT}/api/v1/fuiou/user/account/delete`

    QINIU_TOKEN = `${ACCOUNT}/api/v1/oss/image/upload/token`
    OCR_IDCARD = `${ACCOUNT}/api/v1/ocr/image/idcard`
    OCR_BANKCARD = `${ACCOUNT}/api/v1/ocr/image/bankcard`
    BANK_CITY = `${ACCOUNT}/api/v1/fuiou/user/account/bank/city/search`
    BANK_BRANCH = `${ACCOUNT}/api/v1/fuiou/user/account/branch/search`
    BANK_LIST = `${ACCOUNT}/api/v1/fuiou/user/account/bank/list`

    EXPORT_ACCOUNT_TECH = `${ACCOUNT}/api/v1/fuiou/club/account/tech/export`

    ALLOCATE_RULES_LIST = `${ORDER}/api/manage/v2/allocate/list`
    ALLOCATE_RULES_ADD = `${ORDER}/api/manage/v2/allocate/new`
    ALLOCATE_RULES_RELATION_GET = `${ORDER}/api/manage/v2/allocate/relation/club/get`
    ALLOCATE_RULES_RELATION_BIND = `${ORDER}/api/manage/v2/allocate/relation/club/save`

    ALLOCATE_TEMPLATE_LIST = `${SPA}/api/v2/manager/package/coupon/template/list`
    ALLOCATE_TEMPLATE_SAVE = `${SPA}/api/v2/manager/package/coupon/template/save`

    ACCOUNT_USER = `${ACCOUNT}/api/v1/manager/user/{userId}`
    ACCOUNT_USER_ROLE = `${ACCOUNT}/api/v1/manager/user/role/{userId}`
    ACCOUNT_NODE = `${ACCOUNT}/api/v1/manager/node/{nodeId}`
    ACCOUNT_MENU = `${ACCOUNT}/api/v1/manager/menu/{menuId}`
    ACCOUNT_ROLE = `${ACCOUNT}/api/v1/manager/role/{roleId}`
    ACCOUNT_ROLE_NODE = `${ACCOUNT}/api/v1/manager/role/node/{roleId}`
    ACCOUNT_DEPT = `${ACCOUNT}/api/v1/manager/dept/{id}`

    OPERATION_HEARTBEAT_LIST = `${OPS}/heart/data/club/list`
    OPERATION_HEARTBEAT_GET_LOG = `${OPS}/heart/data/get/Log`
    OPERATION_POS_PUSH_LOG = `${OPS}/heart/data/push/message`
    OPERATION_POS_GET_STATUS = `${OPS}/heart/data/get/pos/status`

    OPERATION_SLOW_LIST = `${OPS}/slow/log/interface/list`
    OPERATION_SLOW_LOGIN = `${OPS}/sys/login`
    OPERATION_SLOW_OUTLOGIN = `${OPS}/sys/logout`
    OPERATION_SLOW_DETAIL = `${OPS}/slow/log/interface/detail`
}

export default Api
