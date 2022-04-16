const express = require('express')
const app = express()
const pug = require('pug')
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.send('OK')
})

app.set('view engine', 'pug')
app.set('views','./views')
app.get('pugDemo',(req,res)=>{
    res.render('/pugDemo/layout',{
        pageTitle :'Express Demo',
        pageHeader : 'Hello Express',
        isAuthenticated : true
    })
})

app.listen(3100,()=>{
    console.log('Server is running on 3100')
})