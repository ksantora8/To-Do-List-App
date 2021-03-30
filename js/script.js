let list = $('#list');

//reorder list
list.sortable();

//Cross item off of list when double clicked
list.on('dblclick', (e)=>{
    $(e.target).toggleClass('strike');
});

//Delete item when cross out button is pushed
list.on('click', (e)=>{
  if($(e.target).is('crossOutButton')){
        let parent =   $(e.target).parent();
        parent.remove();
    }
});

//add cross out button to new list item
function addButton(){
 //get last list item
    let li = $('li:last');
    let crossOut = '<crossOutButton>X</crossOutButton>';
  //if last list item doesn't have X button then add one
    if($('li').find('crossout').length < 1){
        li.append(crossOut);
    }
}
//function to add new list item
function addLi(){
    let input = $('input');
    if(input.val() === ''){
        alert('You must input something');
    } else {
        let li = '<li>' +  input.val() + '</li>';
        list.append(li);
        addButton();
    }
}

$('#button').on('click',  addLi);
