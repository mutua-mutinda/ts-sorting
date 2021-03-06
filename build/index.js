"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = require("./NumberCollection");
var CharacterCollection_1 = require("./CharacterCollection");
var LinkedList_1 = require("./LinkedList");
var numberCollection = new NumberCollection_1.NumberCollection([8, 5, 9, 7]);
numberCollection.sort();
console.log(numberCollection.data);
var characterCollection = new CharacterCollection_1.CharacterCollection("zxyw");
characterCollection.sort();
console.log(characterCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(8);
linkedList.add(5);
linkedList.add(-5);
linkedList.add(3);
linkedList.sort();
linkedList.print();
