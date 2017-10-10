module.exports = printList = (list) => {
	if(list.length > 0){
  	console.log(list.splice(0, 1));
    printList(list);
  }
};