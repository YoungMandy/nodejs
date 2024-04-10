process对象用于描述当前程序的状态，与console对象不同的是，process对象只在Node.js中存在，在Javascript中并不存在该对象。

利用`process.memoryUsage()`可以查看内存的使用情况。
```javascript
> process.memoryUsage()
{
  rss: 40828928,
  heapTotal: 7376896,
  heapUsed: 5863760,
  external: 1002561,
  arrayBuffers: 16627
}
```
rss 是resident set size的缩写，即进程的常驻内存部分。进程的内存总共有几部分，一部分是rss,其余部分在交换区(swap)或者文件系统(filesystem)中。

处理rss外，heapTotal和heapUsed对应的事V8的堆内存信息。heapTotal是堆中总共申请的内存，heapUsed表示目前堆中使用中的内存量。这3个值都是字节。
通过process.memoryUsage()的结果可以看到，堆中的内存用量总是小于进程的常驻内存用量，这意味着Node中的内存使用并非都是通过V8进行分配的。我们将那些不是通过V8分配的内存称为堆外内存。


与process.memoryUsage()不同的事，os模块中的totalmem()和freemem()这两个方法用于查看操作系统的内存使用情况，它们分别返回系统的总内存和闲置内存，以字节为单位。



Buffer对象不经过V8的内存分配机制，所以也不会有堆内存的大小限制。

