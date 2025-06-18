interface Identifiable<U> {
  id: U;
}

export class Repository<T extends Identifiable<U>, U> {
  private items: Map<U, T> = new Map();

  add(item: T): void {
    if (this.items.has(item.id)) {
      throw new Error(`Item with id ${item.id} already exists.`);
    }
    this.items.set(item.id, item);
  }

  getById(id: U): T | undefined {
    return this.items.get(id);
  }

  removeById(id: U): boolean {
    return this.items.delete(id);
  }

  getAll(): T[] {
    return Array.from(this.items.values());
  }
}

export interface User extends Identifiable<string> {
    name: string;
    email: string;
}

export interface Product extends Identifiable<string> {
    title: string;
    price: number;
}
