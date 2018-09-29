def convertNewPhone(phone):
    if (len(phone) != 11):
        return False
    head = phone[:4]
    body = phone[4:]
    switcher = {
        '0120': {'telco'  : 'mobifone', 'new'    : '070' + body, 'current': phone},
        '0121': {'telco'  : 'mobifone', 'new'    : '079' + body, 'current': phone},
        '0122': {'telco'  : 'mobifone', 'new'    : '077' + body, 'current': phone},
        '0126': {'telco'  : 'mobifone', 'new'    : '076' + body, 'current': phone},
        '0128': {'telco'  : 'mobifone', 'new'    : '078' + body, 'current': phone},
        '0123': {'telco'  : 'vinaphone', 'new'    : '083' + body, 'current': phone},
        '0124': {'telco'  : 'vinaphone', 'new'    : '084' + body, 'current': phone},
        '0125': {'telco'  : 'vinaphone', 'new'    : '085' + body, 'current': phone},
        '0127': {'telco'  : 'vinaphone', 'new'    : '081' + body, 'current': phone},
        '0129': {'telco'  : 'vinaphone', 'new'    : '082' + body, 'current': phone},
        '0162': {'telco'  : 'viettel', 'new'    : '032' + body, 'current': phone},
        '0163': {'telco'  : 'viettel', 'new'    : '033' + body, 'current': phone},
        '0164': {'telco'  : 'viettel', 'new'    : '034' + body, 'current': phone},
        '0165': {'telco'  : 'viettel', 'new'    : '035' + body, 'current': phone},
        '0166': {'telco'  : 'viettel', 'new'    : '036' + body, 'current': phone},
        '0167': {'telco'  : 'viettel', 'new'    : '037' + body, 'current': phone},
        '0168': {'telco'  : 'viettel', 'new'    : '038' + body, 'current': phone},
        '0169': {'telco'  : 'viettel', 'new'    : '039' + body, 'current': phone},
        '0186': {'telco'  : 'vietnamobile', 'new'    : '056' + body, 'current': phone},
        '0188': {'telco'  : 'vietnamobile', 'new'    : '058' + body, 'current': phone},
        '0199': {'telco'  : 'gmobile', 'new'    : '059' + body, 'current': phone},
    }
    return switcher.get(head, False)
