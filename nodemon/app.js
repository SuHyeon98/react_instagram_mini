// window 한정 import 

// http[request-response] - [get(가져옴), post(수정)]

// 
// get -> url 쿼리 스트링 : /dog?age>5&gender=female

const express = require("express") 
const pokemon = require("pokemon")
const app = express()


app.get('/dog', (req, res)=>{
    res.json({name:"흰둥이", bread:"진돗개"})
})

app.get('/cat', (req, res)=>{
    res.json([{name:"검둥이", bread:"길냥이"}, {name:"삼색이", bread:"길냥이"}, {name:"나비", bread:"길냥이"}])
})

app.get('/icecream', (req, res)=>{
    res.json([{name:"호두", price:"2000"}, {name:"녹차", price:"2000"}, {name:"초콜렛", price:"2000"}])
})

app.get("/students", (req, res)=>{
    const { query } = req
    const { gender } = query
    console.log({gender})
})

// bread size = s:1000,m:1500,l:2000 & count
// total : 

app.get("/bread", (req, res)=>{
    const { query } = req
    const { size, count } = query
    const sizeMap = {
        s:1000,
        m:1500,
        l:2500,
    }
    const total = sizeMap[size] * Number(count)
    res.json({total})
})

// cafe
// coffee : 가격, 수량 
// cookie : 가격, 수량
// total 총 가격

app.get("/cafe", (req, res)=>{
    const { query } = req
    const { coffee, cookie, coffeeCount, cookieCount } = query
    const coffeeMap = {
        americano: 2500,
        latte: 3000,
        iceTea: 2000,
    }
    const cookieMap = {
        normal:2000,
        choco:1500,
        white:2500,
    }
    const coffeeTotal = coffeeMap[coffee] * Number(coffeeCount)
    const cookieTotal = cookieMap[cookie] * Number(cookieCount)
    const total = coffeeTotal + cookieTotal
    res.json({커피값 : coffeeTotal, 쿠키값 : cookieTotal, 총합:total})
})

// 환율 : exchange?won=15000&nation=
// jp = 9.27 , usa = 1335.28 , euro = 1,485.26

app.get("/exchange", (req, res) => {
    const { query } = req
    const { won , nation } = query
    const nationMap = {
        jp : 0.11,
        usa : 0.00075,
        euro : 0.00067
    }
    const result = Number(won) * nationMap[nation]
    res.json({result})
})

app.get("/pokemon", (req, res) => {
    const { query } = req
    const { count } = query
    const pokemonList = Array(Number(count)).fill().map((v) => pokemon.random('ko'))

    res.json({pokemon:pokemonList})
})

const { villagers, npcs } = require('animal-crossing');

app.get("/animal-crossing", (req, res) => {
    const npcResult = npcs.map(({name, gender, iconImage, photoImage}) => {
        return {name, gender, iconImage, photoImage}
    })
    res.json({npcResult})
})


app.listen(3000, ()=>{
    console.log("server start")
})

