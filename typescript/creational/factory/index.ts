// Product interface
interface Transport {
  deliver(): void;
}

// Concrete product
class Truck implements Transport {
  deliver(): void {
    console.log('Delivered by truck');
  }
}

// Concrete product
class Ship implements Transport {
  deliver(): void {
    console.log('Delivered by ship');
  }
}

// Creator class
abstract class Logistics {
  abstract createTransport(): Transport;

  planDelivery(): void {
    const transport = this.createTransport();
    transport.deliver();
  }
}

// Concrete creator
class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck();
  }
}

// Concrete creator
class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
}

// Application
class App {
  logistics: Logistics

  constructor(method: 'road' | 'sea') {
    if (method === 'road') {
      this.logistics = new RoadLogistics();
    }

    this.logistics = new SeaLogistics();
  }

  deliverProduct(): void {
    this.logistics.planDelivery();
  }
}
