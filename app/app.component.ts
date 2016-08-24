import {Component, OnInit} from "@angular/core";
import {EddbService} from "./eddb.service";

@Component({
    selector: 'my-app',
    template: '{{data | json}}'
})
export class AppComponent implements OnInit{

    data:any;

    constructor(private eddb:EddbService){
    }

    ngOnInit():void {
        this.eddb.getStations().then(data => this.data = data);
    }
}
