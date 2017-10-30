// SOLID principles

// Liskov substitution principle

interface PersistanceServiceInterface {
    save(entity: any): number;
}

class CookiePersitanceService implements PersistanceServiceInterface {
    save(entity: any): number {
        let id = Math.floor((Math.random() * 100) + 1);

        // do some stuff
        return id;
    }
}

class FavouritesController {
    private _persistanceService: PersistanceServiceInterface;

    constructor(persistanceService: PersistanceServiceInterface) {
        this._persistanceService = persistanceService;
    }

    public saveAsFavourite(articleId: number) {
        return this._persistanceService.save(articleId);
    }
}

let favController = new FavouritesController(new CookiePersitanceService());

// Interface Segregation Principle

interface VehicleInterface {

    getSpeed(): number;

    getVehicleType: string;

    isTaxPayed(): boolean;

}

interface LightsInterface {

    isLightsOn(): boolean;

    isLightsOff(): boolean;
}

interface RadioInterface {
    playCd: void;

    startRadio(): void;

    stopRadio(): void;
}

interface EngineInterface {

    acelerate(): number;

    startEngine(): void;

    stopEngine(): void;

}