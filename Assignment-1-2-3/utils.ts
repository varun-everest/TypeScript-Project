export function getLastItem<Type> (allItems : Type[]) : Type {
    return allItems[allItems.length - 1];
}

export type myType<T1, T2> = {
    value1 : T1;
    value2 : T2
}
