"use strict";

function addClickEventListener(elem, func) {
    elem.addEventListener('click', func);
}

function deleteItem() {
    let itemToRemove = this.parentNode;
    itemToRemove.parentNode.removeChild(itemToRemove);
}

function crossOffItem() {
    this.parentNode.classList.toggle('done');
}

function addNewItem() {
    let inputText = document.getElementById('newItem');
    let textToAdd = inputText.value

    if (textToAdd === '') {
        console.log('No item to add')
    }
    else {
        let newListItem = document.createElement('li');

        let checkBox = document.createElement('div');
        checkBox.classList.add('checkbox');
        addClickEventListener(checkBox, crossOffItem);
        
        newListItem.appendChild(checkBox);

        let newItem = document.createElement('span');
        newItem.textContent = textToAdd;
        newItem.classList.add('item');

        newListItem.appendChild(newItem);

        
        let deleteLink = document.createElement('span');
        deleteLink.textContent = 'X';
        deleteLink.classList.add('delete');
        addClickEventListener(deleteLink, deleteItem);

        newListItem.appendChild(deleteLink);

        document.getElementById('list').appendChild(newListItem);
        
        inputText.value = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    addClickEventListener(document.getElementById('addItem'), addNewItem);
    
    document.getElementById('newItem').addEventListener('keypress', function(e) {
        if (e.keyCode == 13) {
            addNewItem();
        }
    });

    document.querySelectorAll('ul#list span.delete').forEach(function(elem){
        addClickEventListener(elem, deleteItem);
    });

    document.querySelectorAll('ul#list div.checkbox').forEach(function(elem){
        addClickEventListener(elem, crossOffItem);
    });
})