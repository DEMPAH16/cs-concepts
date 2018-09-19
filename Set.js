const arr = [ 1, 2, 1, 3, 1, 4 ];

const set = new Set(arr);

const arr2 = [];

for (const value of set.values()) {
    arr2.push(value);
}

arr2;

set;
set.add({});

for (var key of set.keys()) console.log(key);

set.forEach((value, value2, set) => console.log(value, value2, set));

set.delete(1);

set;
