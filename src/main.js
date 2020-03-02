// const div = dom.find('#test>.red')[0] // 获取对应的元素
// dom.style(div, 'color', 'red') // 设置 div.style.color
//
// const divList = dom.find('.red') // 获取多个 div.red 元素
// dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素

div1 = dom.cerate('<div id="test"> 爸爸<div class="red"> 老大</div><div>老二</div><div class="red">老三</div>    </div>')
dom.append(document.body,div1)



dom.style(div1,{'color':'red','background-color':'blue','border':'5px solid black'})
// a = dom.style(div1,'background-color','blue')
a = dom.style(div1,'color')
console.log(a)

b = dom.style(div1)
console.log(b)

dom.class.add(div1,['class1','class2','class3','class4'])
dom.class.remove(div1,'class1')
console.log(dom.class.has(div1,'class4'))

dom.on(div1,'click',()=>{console.log('别惦记我了！')})
fn = ()=>{console.log('好吧我走我走！')}
dom.on(div1,'click',fn,false)
dom.off(div1,'click',fn,false)

const div2 = dom.find('#test>.red',div1)[0] // 获取对应的元素
console.log(div2)
console.log(dom.parent(div1))
console.log(dom.children(div1))

console.log(dom.siblings(div1))

console.log(dom.next(div2))
console.log(dom.previous(div1))


const div3 = dom.find('#test>.red',div1) // 获取对应的元素
console.log('div3')
console.log(div3)

console.log(dom.index(div2))