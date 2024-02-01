// Abstract product
interface Chair {
    legs(): number
}

// Concrete product
class VictorianChair implements Chair {
    legs() {
        return 4
    }
}

// Concrete product
class ModernChair implements Chair {
    legs() {
        return 0
    }
}

// Abstract product
interface Sofa {
    seats(): number
}

// Concrete product
class VictorianSofa implements Sofa {
    seats() {
        return 3
    }
}

// Concrete product
class ModernSofa implements Sofa {
    seats() {
        return 1
    }
}

// Abstract factory
interface FurnitureFactory {
    createChair(): Chair
    createSofa(): Sofa
}

// Concrete factory
class VictorianFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new VictorianChair()
    }

    createSofa(): Sofa {
        return new VictorianSofa()
    }
}

// Concrete factory
class ModernFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new ModernChair()
    }

    createSofa(): Sofa {
        return new ModernSofa()
    }
}

// Client
class Application {
    protected factory: FurnitureFactory

    constructor(style: 'victorian' | 'modern') {
        if (style === 'victorian') {
            this.factory = new VictorianFurnitureFactory()
            return;
        }
        this.factory = new ModernFurnitureFactory();
    }

    createFurniture() {
        this.factory.createChair()
        this.factory.createSofa()
    }
}
