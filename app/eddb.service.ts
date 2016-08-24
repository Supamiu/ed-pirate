import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Station} from "./model/station";
import "rxjs/add/operator/toPromise";
/**
 * Created by flavien on 24/08/16.
 */
@Injectable()
export class EddbService {

    private _stations:Station[];

    private _systems_populated:any[];

    private _systems:any[];

    private _stationsPromise:Promise<any[]>;

    constructor(private http:Http){
        this.load();
    }

    private load(){
        this._stationsPromise = this.http.get("eddb/systems_populated.json").toPromise();
        this._stationsPromise.then((systems:any) => {this._systems = systems.json() });
        this.http.get("eddb/stations.json").toPromise().then( (stations:any) => {this._stations = stations.json() });
    }

    public getStations():Promise<Station[]>{
        if(this._stations === undefined){
            return this._stationsPromise;
        }
        else{
            return Promise.resolve(this._stations);
        }
    }
    
}