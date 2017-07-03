const myList = [
  {
    name: 'Don',
  },
  {
    name: 'Ann',
  },
  {
    name: 'Sally',
  },
  {
    name: 'John'
  }
]

const printNames = list => {
	for(let i=0;i<list.length;i++) {
		const person = list[i]
		console.log(person.name)
	}
}

printNames(myList)