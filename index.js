var convertNewPhone = function(phone)
{
    if (phone.length !=11) {
        return false;
    }
    head = phone.substr(0, 4);
    body = phone.substr(4, 11);
    switch (head) {
        case '0120':
            return {
                'telco'  : 'mobifone',
                'new'    : '070' + body,
                'current': phone
            };
            break;
        case '0121':
            return {
                'telco'  : 'mobifone',
                'new'    : '079' + body,
                'current': phone
            };
            break;
        case '0122':
            return {
                'telco'  : 'mobifone',
                'new'    : '077' + body,
                'current': phone
            };
            break;
        case '0126':
            return {
                'telco'  : 'mobifone',
                'new'    : '076' + body,
                'current': phone
            };
            break;
        case '0128':
            return {
                'telco'  : 'mobifone',
                'new'    : '078' + body,
                'current': phone
            };
            break;
        case '0123':
            return {
                'telco'  : 'vinaphone',
                'new'    : '083' + body,
                'current': phone
            };
            break;
        case '0124':
            return {
                'telco'  : 'vinaphone',
                'new'    : '084' + body,
                'current': phone
            };
            break;
        case '0125':
            return {
                'telco'  : 'vinaphone',
                'new'    : '085' + body,
                'current': phone
            };
            break;
        case '0127':
            return {
                'telco'  : 'vinaphone',
                'new'    : '081' + body,
                'current': phone
            };
            break;
        case '0129':
            return {
                'telco'  : 'vinaphone',
                'new'    : '082' + body,
                'current': phone
            };
            break;
        case '0162':
            return {
                'telco'  : 'viettel',
                'new'    : '032' + body,
                'current': phone
            };
            break;
        case '0163':
            return {
                'telco'  : 'viettel',
                'new'    : '033' + body,
                'current': phone
            };
            break;
        case '0164':
            return {
                'telco'  : 'viettel',
                'new'    : '034' + body,
                'current': phone
            };
            break;
        case '0165':
            return {
                'telco'  : 'viettel',
                'new'    : '035' + body,
                'current': phone
            };
            break;
        case '0166':
            return {
                'telco'  : 'viettel',
                'new'    : '036' + body,
                'current': phone
            };
            break;
        case '0167':
            return {
                'telco'  : 'viettel',
                'new'    : '037' + body,
                'current': phone
            };
            break;
        case '0168':
            return {
                'telco'  : 'viettel',
                'new'    : '038' + body,
                'current': phone
            };
            break;
        case '0169':
            return {
                'telco'  : 'viettel',
                'new'    : '039' + body,
                'current': phone
            };
            break;
        case '0186':
            return {
                'telco'  : 'vietnamobile',
                'new'    : '056' + body,
                'current': phone
            };
            break;
        case '0188':
            return {
                'telco'  : 'vietnamobile',
                'new'    : '058' + body,
                'current': phone
            };
            break;
        case '0199':
            return {
                'telco'  : 'gmobile',
                'new'    : '059' + body,
                'current': phone
            };
            break;
        default:
            return false;
            break;
    }
}
