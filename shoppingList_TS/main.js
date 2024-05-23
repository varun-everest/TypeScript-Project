var shoppingItemsList = [];
var itemBox = document.querySelector("#text-box");
var listOfItems = document.querySelector("#item-list");
var itemsCount = document.querySelector("#itemsCount");
var hideMarked = document.querySelector("#hideMarked");
//const uniqueItems = new Set<string>();
var isHide = false;
var shoppingItem = /** @class */ (function () {
    function shoppingItem(name) {
        this.description = name;
        this.done = false;
        this.deleted = false;
    }
    shoppingItem.prototype.getName = function () {
        return this.description;
    };
    shoppingItem.prototype.setDonestatus = function () {
        this.done = !this.done;
    };
    shoppingItem.prototype.setDeleted = function () {
        this.deleted = true;
    };
    shoppingItem.prototype.getDeleteStatus = function () {
        return this.deleted;
    };
    shoppingItem.prototype.getDoneStatus = function () {
        return this.done;
    };
    return shoppingItem;
}());
function renderList() {
    listOfItems.textContent = "";
    var markedCount = 0;
    var unmarkedCount = 0;
    shoppingItemsList.forEach(function (item, index) {
        if (!item.getDeleteStatus()) {
            var li = document.createElement("li");
            var deletButton = document.createElement("span");
            var shopItem = document.createElement("span");
            shopItem.textContent = item.getName();
            shopItem.classList.add("shop-item");
            deletButton.textContent = "X";
            deletButton.classList.add("dlt-button");
            li.classList.add("list-item");
            li.addEventListener("click", function () {
                toggleCompleted(index);
            });
            if (item.getDoneStatus()) {
                li.classList.add("done");
                shopItem.classList.remove("shop-item");
                shopItem.classList.add("shop-item-selected");
                markedCount++;
            }
            else {
                unmarkedCount++;
            }
            deletButton.addEventListener("click", function (event) {
                event.stopPropagation();
                deleteItem(index);
            });
            li.appendChild(shopItem);
            li.appendChild(deletButton);
            if (!isHide) {
                listOfItems.appendChild(li);
            }
            else {
                if (!item.getDoneStatus()) {
                    listOfItems.appendChild(li);
                }
            }
        }
    });
    itemsCount.textContent = "Total Items: ".concat(markedCount + unmarkedCount, " || Marked Items: ").concat(markedCount, " || Unmarked Items: ").concat(unmarkedCount);
}
function addItem() {
    var val = itemBox.value.trim();
    console.log(val);
    if (val !== '') {
        shoppingItemsList.push(new shoppingItem(val));
        renderList();
        itemBox.value = "";
    }
    else {
        alert("Please enter an item !!!");
    }
    console.log(shoppingItemsList);
}
function toggleCompleted(index) {
    shoppingItemsList[index].setDonestatus();
    renderList();
}
function deleteItem(index) {
    shoppingItemsList[index].setDeleted();
    renderList();
}
itemBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addItem();
        return;
    }
});
hideMarked.addEventListener("change", function () {
    isHide = !isHide;
    renderList();
});
