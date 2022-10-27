const animals = {
  camel: "🐫",
  cow: "🐄",
  lama: "🦙",
};

const animalsMap = new Map(Object.entries(animals));

for (const animal of animalsMap.values()) {
  console.log(animal);
}
