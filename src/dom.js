window.dom = {
    cerate(crateSting) {
        const contanier = document.createElement('template')
        contanier.innerHTML = crateSting.trim()
        return contanier.content.firstChild
    },
    after(node, addNode) {
        node.parentNode.insertBefore(addNode, node.nextSibling)
    },
    before(node, addNode) {
        node.parentNode.insertBefore(addNode, node)
    },
    append(parent, child) {
        parent.appendChild(child)
    },
    wrap(node, parent) {
        dom.before(node, parent)
        dom.append(parent, node)
    },
    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },
    empty(node) {
        const array = []
        let x = node.firstChild
        while (x) {
            if (!(x.nodeType === 3)) {
                array.push(x)
            }
            dom.remove(x)
            x = node.firstChild
        }
        return array
    },
    attr(node, name, value) {
        if (arguments.length === 2) {
            return node.getAttribute(name)
        } else if (arguments.length === 3) {
            return node.setAttribute(name, value)
        }
    },
    text(node, textString) {
        if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else if ('textContent' in ndoe) {
                return node.textContent
            }
        } else if (arguments.length === 2) {
            if ('innerText' in node) {
                return node.innerText = textString
            } else if ('textContent' in node) {
                return node.textContent = textString
            }
        }
    },
    html(node, htmlString) {
        if (arguments.length === 1) {
            return node.innerHTML
        } else if (arguments.length === 2) {
            return node.innerHTML = htmlString
        }

    },
    style(node, nameOrObject, value) {
        if (arguments.length === 1) {
            // return node.style.cssText.split(';')
            return node.style.cssText.trim().split(';').filter((e) => {
                return (e !== "")
            })
        } else if (arguments.length === 2) {
            if (typeof nameOrObject === 'string') {
                //    style(div,'color')
                return node.style[nameOrObject]
            } else if (nameOrObject instanceof Object) {
                //style(div,{'color': 'red'})
                for (let key in nameOrObject) {
                    node.style[key] = nameOrObject[key]
                }
                return node
            }
        } else if (arguments.length === 3) {
            //    style(div,'color','red')
            node.style[nameOrObject] = value
            return node
        }
    },
    class: {
        add(node, className) {
            if (typeof className === 'string') {
                // class.add(div1,'class1')
                node.classList.add(className)
            } else if (className instanceof Array) {
                //    class.add(div1,['class1','class2'])
                for (let i in className) {
                    node.classList.add(className[i])
                }

            }
        },
        remove(node, className) {
            if (typeof className === 'string') {
                // class.add(div1,'class1')
                node.classList.remove(className)
            } else if (className instanceof Array) {
                //    class.add(div1,['class1','class2'])
                for (let i in className) {
                    node.classList.remove(className[i])
                }
            }
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn, captureOrBubble) {
        if (arguments.length === 3) {
            return node.addEventListener(eventName, fn)
        } else if (arguments.length === 4) {
            return node.addEventListener(eventName, fn, captureOrBubble)
        }
    },
    off(node, eventName, fn, captureOrBubble) {
        if (arguments.length === 3) {
            return node.removeEventListener(eventName, fn)
        } else if (arguments.length === 4) {
            return node.removeEventListener(eventName, fn, captureOrBubble)
        }
    },
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    parent(node) {
        return node.parentNode
    },
    children(node) {
        return node.children
    },
    siblings(node) {
        return Array.from(node.parentNode.children).filter(n => {
            return n !== node
        })
    },
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
    index(node) {
        const list = node.parentNode.children
        let indexNum
        for (indexNum = 0; indexNum < list.length; indexNum++) {
            if (list[indexNum] === node) {
                break
            }
        }
        return indexNum
    }

}