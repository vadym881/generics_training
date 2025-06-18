import { handleResult } from "./models/discriminant-union";
import { Queue } from "./models/queue";
import { Product, Repository, User } from "./models/repository";

// Task1
console.log(
  handleResult({ status: "success", data: "Data loaded successfully!" })
);
console.log(handleResult({ status: "error", error: "Failed to load data." }));

// Task2
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.size());

// Task3
function sortArray<T>(arr: T[], compareFn: (a: T, b: T) => number): T[] {
  return [...arr].sort(compareFn);
}

console.log(sortArray([3, 1, 2], (a, b) => a - b));

// Task4
function extractProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(extractProperty({ name: "Vadym", age: 15 }, "name"));

// Task5
const userRepo = new Repository<User, string>();
userRepo.add({ id: "u1", name: "John", email: "john@example.com" });
userRepo.add({ id: "u2", name: "Jane", email: "jane@example.com" });

console.log(userRepo.getAll());
console.log(userRepo.getById("u1"));
userRepo.removeById("u2");
console.log(userRepo.getAll());

const productRepo = new Repository<Product, string>();
productRepo.add({ id: "p1", title: "Laptop", price: 1200 });
productRepo.add({ id: "p2", title: "Phone", price: 800 });

console.log(productRepo.getAll());
console.log(productRepo.getById("p2"));
productRepo.removeById("p1");
console.log(productRepo.getAll());
