const os = require('os');

//获取系统剩余内存
const freemem = os.freemem();
const totalmem = os.totalmem();
// byte, KB, MB, GB
console.log('系统剩余内存' + (freemem/1024/1024/1024).toFixed(2) + 'GB');
// 获取系统总内存
console.log('系统总内存' + (totalmem / 1024 / 1024 / 1024).toFixed(2) + 'GB');

console.log('系统内存使用率' + (1 - freemem / totalmem));

// 网络的信息
console.log('网络信息', os.networkInterfaces());

// 用户主目录
console.log('用户主目录', os.homedir());

// 用户临时文件目录
console.log('用户临时文件目录', os.tmpdir());


// 操作系统的主机名
console.log('操作系统的主机名', os.hostname());

console.log('操作系统名', os.type());
console.log('操作系统平台', os.platform());
console.log('操作系统架构', os.arch());
console.log('操作系统版本', os.release());
console.log('操作系统平均负载数组', os.loadavg());
console.log('操作系统的内核版本', os.version());
console.log('操作系统每个核的cpu信息', os.cpus());
console.log('操作系统的字节序', os.endianness());
console.log('操作系统的运行时间', os.uptime())//单位：秒

console.log('查看指定进程的优先级', os.getPriority(803));
console.log('设置进程的优先级', os.setPriority(803, 3));// 优先级的数字只能往大调
console.log('查看指定进程的优先级', os.getPriority(803));