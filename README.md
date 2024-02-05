# Design Pattern Exercises

## Creational Patterns

### Factory Method
[Read more](https://refactoring.guru/design-patterns/factory-method)

#### ⚙️ When to use it
- Object creation is complex or involves complex steps
- When you want to decouple from concrete classes
- Allow framework extension points

#### ✅ Pros
- Decouples the object creation from the client code
- Centralized configuration of the object creation
- Improves code reusability
- Single Responsibility Principle: you separate object creation and object usage
- Open/Closed Principle: you can introduce new concrete products without breaking existing code that uses it

#### ❌ Cons
- If it's implemented with static methods, it will limit it's ability to extend behavior dynamically
- Adds more complexity to the codebase due to hierarchy of classes which might not be justified in simple scenarios

### Abstract Factory
[Read more](https://refactoring.guru/design-patterns/abstract-factory)

#### ⚙️ When to use it
- Similar to Factory Method
- Multiple variations or families of objects
- When consistency among the created objects from different families is crucial

#### ✅ Pros
- Similar to Factory Method
- Allows abstraction and polymorphism, so it's good for multiple variations or families of objects

#### ❌ Cons
- Similar to Factory Method
- Adds more complexity to the codebase with an increased number of classes


### Builder
[Read more](https://refactoring.guru/design-patterns/builder)

#### ⚙️ When to use it
- When the object construction is complex and involves a lot of steps and configurations and you want to avoid constructors with too many parameters
- When the construction can be broken down into a series of steps and you want to allow clients to configure each step
- When there are multiple variations/representations of a complex object and you want to encapsulate the construction details

#### ✅ Pros
- Separation of concerns by allowing more modular code as different components of the consutrction process are encapsulated in separate builder classes
- Step-by-step construction
- Reusability
- Flexibility in object creation and easier configuration
- Unlike other creational patterns, builder lets you construct products that don't follow the common interface.

#### ❌ Cons
- Introducing builders and directors can add complexity to the codebase, so for straight forward scenarios, the builder
pattern can be considered over-engineering
