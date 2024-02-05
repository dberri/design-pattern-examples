// Concrete product
class SUV {
    // 
}

// Concrete product
class SportsCar {
    // 
}

// Concrete product
class ManualSportsCar extends SportsCar {
    // 
}

interface Builder {
    reset(): void
    setSeats(seats: number): void
    setEngine(engine: string): void
    setTripComputer(): void
    setGPS(): void
}

// Concrete builder
class SUVBuilder implements Builder {
    _product: SUV = new SUV()

    reset() {
        this._product = new SUV();
    }

    setSeats(seats: number) {

    }

    setEngine(engine: string) {

    }

    setTripComputer() {

    }

    setGPS(): void {
        
    }

    getResult(): SUV {
        return this._product
    }
}

// Concrete builder
class SportsCarBuilder implements Builder {
    _product = new SportsCar()

    reset() {
        this._product = new SportsCar()
    }

    setSeats(seats: number) {
        //
    }

    setEngine(engine: string) {
        // 
    }

    setTripComputer() {
        //
    }

    setGPS(): void {
        // 
    }

    getResult(): SportsCar | null {
        return this._product
    }
}

class Director {
    makeSUV(builder: Builder) {
        builder.reset()
        builder.setSeats(7)
        builder.setEngine('4-cilinder')
        builder.setTripComputer()
    }

    makeSportsCar(builder: Builder) {
        builder.reset()
        builder.setSeats(2)
        builder.setEngine('v6')
        builder.setGPS()
    }
}

class Client {
    makeCar() {
        const director = new Director()
        const builder = new SportsCarBuilder()
        director.makeSportsCar(builder)
        const sportsCar = builder.getResult();
        return sportsCar
    }
}
