let shoppingItemsList: shoppingItem[] = [];
const itemBox = document.querySelector<HTMLInputElement>("#text-box")!;
const listOfItems = document.querySelector<HTMLUListElement>("#item-list")!;
const itemsCount = document.querySelector<HTMLSpanElement>("#itemsCount")!;
const hideMarked = document.querySelector<HTMLInputElement>("#hideMarked")!;

//const uniqueItems = new Set<string>();

let isHide : boolean = false;

class shoppingItem {
    private description: string;
    private done: boolean;
    private deleted: boolean;

    constructor(name: string) {
        this.description = name;
        this.done = false;
        this.deleted = false;
    }

    getName(): string {
        return this.description;
    }

    setDonestatus(): void {
        this.done = !this.done;
    }

    setDeleted(): void {
        this.deleted = true;
    }

    getDeleteStatus(): boolean {
        return this.deleted;
    }

    getDoneStatus(): boolean {
        return this.done;
    }
}

function renderList(): void {
    listOfItems.textContent = "";
    let markedCount = 0;
    let unmarkedCount = 0;

    shoppingItemsList.forEach((item, index) => {
        if (!item.getDeleteStatus()) {
            const li = document.createElement("li");
            const deletButton = document.createElement("span");
            const shopItem = document.createElement("span");
            shopItem.textContent = item.getName();
            shopItem.classList.add("shop-item");
            deletButton.textContent = "X";
            deletButton.classList.add("dlt-button");

            li.classList.add("list-item");

            li.addEventListener("click", function() {
                toggleCompleted(index);
            });

            if (item.getDoneStatus()) {
                li.classList.add("done");
                shopItem.classList.remove("shop-item");
                shopItem.classList.add("shop-item-selected");
                markedCount++;
            } else {
                unmarkedCount++;
            }

            deletButton.addEventListener("click", function(event) {
                event.stopPropagation();
                deleteItem(index);
            });

            li.appendChild(shopItem);
            li.appendChild(deletButton);

            if (!isHide) {
                listOfItems.appendChild(li);
            } else {
                if (!item.getDoneStatus()) {
                    listOfItems.appendChild(li);
                }
            }
        }
    });

    itemsCount.textContent = `Total Items: ${markedCount + unmarkedCount} || Marked Items: ${markedCount} || Unmarked Items: ${unmarkedCount}`;
}

function addItem(): void {
    let val = itemBox.value.trim();
    console.log(val);
    if (val !== '') {
            shoppingItemsList.push(new shoppingItem(val));
            renderList();
            itemBox.value = "";
    } else {
        alert("Please enter an item !!!");
    }
    console.log(shoppingItemsList);
}

function toggleCompleted(index: number): void {
    shoppingItemsList[index].setDonestatus();
    renderList();
}

function deleteItem(index: number): void {
    shoppingItemsList[index].setDeleted();
    renderList();
}

itemBox.addEventListener("keydown", function(event: KeyboardEvent) {
    if (event.key === "Enter") {
        addItem();
        return;
    }
});

hideMarked.addEventListener("change", function() {
    isHide = !isHide;
    renderList();
});
