const queue = {
    entries: [],
    add(...args) {
        args.forEach(arg => this.entries.push(arg));
    },
    async run() {
        while (this.entries.length) {
            const currentEntry = this.entries[0];
            
            console.log(this.entries.length);
            
            await '';
            
            console.log(currentEntry);
            
            this.entries.shift();
        }
    },
    next() {
        return this.entries.shift();
    },
};

queue.add(1, 2, 3, 4, 5);

queue.next();//?
queue.next();//?
queue.next();//?


// queue.run();

queue.add(6, 7, 8, 9, 10);


queue.next();//?
queue.next();//?
queue.next();//?
queue.next();//?
queue.next();//?
queue.next();//?
queue.next();//?
queue.next();//?
