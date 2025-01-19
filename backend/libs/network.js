import os from 'node:os'

function getIp(iface) {
    return (os.networkInterfaces()[iface])[0].address
}

export default getIp