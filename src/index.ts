import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";

const numberCollection = new NumberCollection([8, 5, 9, 7]);
numberCollection.sort();
console.log(numberCollection.data);

const characterCollection = new CharacterCollection("zxyw");
characterCollection.sort();
console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(8);
linkedList.add(5);
linkedList.add(-5);
linkedList.add(3);
linkedList.sort();
linkedList.print();
