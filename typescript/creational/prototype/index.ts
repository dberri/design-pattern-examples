interface Prototype {
    clone(): Prototype
}

class ConcreteProto implements Prototype {
    name = ''
    description = ''
    features: string[] = []

    constructor(name: string, description: string, features: string[]) {
        this.name = name
        this.description = description
        this.features = features
    }

    clone(): ConcreteProto {
        // copy the original object’s data to the clone
        // handle edge cases of the cloning process: clone linked objects, untangle recursive dependencies, etc.
        return new ConcreteProto(
            this.name,
            this.description,
            [...this.features]
        )
    }
}

class Client {
    constructor() {
        const original = new ConcreteProto(
            'Original',
            'Object in its original form',
            ['Feature 1', 'Feature 2']
        )
        const clonedObject = original.clone()
    }
}
