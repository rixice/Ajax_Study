// express的基本使用
// 1. 引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response)=>{
    // 设置响应头, 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    // 设置响应
    response.send('Hello AJAX')
});

app.post('/server', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')

    response.send('Hello AJAX, you are post')
});

app.all('/json-server', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    // 响应一个数据
    const data = {
        msg: 'Hello World !'
    }
    // 对 对象 进行 字符串转换
    let str = JSON.stringify(data)
    // 设置响应
    // response.send('Hello AJAX')
    response.send(str)
});

app.get('/ie-server', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')

    response.send('Hello IE')
});

// 延时响应
app.get('/delay-server', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*')
    setTimeout(()=>{
        response.send('Hello delay')
    },4000)
});

// jQuery服务
app.all('/jq', (request, response)=>{
    const data = {name: 'Hello World'}
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    // response.send('Hello jQuery AJAX')
    response.send(JSON.stringify(data))
});

// axios服务
app.all('/axios', (request, response)=>{
    const data = {name: 'Hello World'}
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    // response.send('Hello jQuery AJAX')
    response.send(JSON.stringify(data))
});

// fetch服务
app.all('/fetch', (request, response)=>{
    const data = {name: 'Hello World'}
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    // response.send('Hello jQuery AJAX')
    response.send(JSON.stringify(data))
});

// jsonp服务
app.all('/jsonp', (request, response)=>{
    const data = {name: 'Hello World'}
    
    // 将数据转化为字符串
    let str = JSON.stringify(data)
    // 返回结果
    response.end(`handle(${str})`)
    // response.send("console.log('hello jsonp-server')")
});

// 检测用户名是否存在
app.all('/check', (request, response) => {
    const data = {
        exist: 1,
        msg: '用户已存在'
    }
    let str = JSON.stringify(data)
    response.end(`handle(${str})`)
})

// 4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log('服务已经启动，8000端口监听中。。。。')
})