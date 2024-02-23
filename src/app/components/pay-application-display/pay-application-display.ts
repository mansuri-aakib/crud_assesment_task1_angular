import { Component, OnInit, inject } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { ApplicationModal } from "../../models/application.modal";
import { DatePipe, NgFor, NgIf } from "@angular/common";
import { Console } from "console";
import { map, tap } from "rxjs";

@Component({
    standalone: true,
    selector:'application-display',
    templateUrl:'./pay-application-display.html',
    styleUrl:'./pay-application-display.css',
    imports:[NgIf,NgFor,DatePipe]
})
export class PayApplicationDisplayComponent implements OnInit{
    readonly apiService:ApiService = inject(ApiService);
    applicationList!:ApplicationModal[];
    isDataAvailable:boolean = false;

    ngOnInit(): void {
        this.fetch();
    }

    private fetch(){
        this.apiService.get('')
        .pipe(
            map((data:any) => data.payApplicationList)
        )
        .subscribe(body=>{
            let tempList:ApplicationModal[] = [];
            body.forEach((element:any) => {
                tempList.push(new ApplicationModal(
                                                        element.applicationNumber,
                                                        element.applicationDate,
                                                        element.projectId,
                                                        element.periodFrom,
                                                        element.periodTo,
                                                        element.certificate,
                                                        element.retainage,
                                                        element.changeOrderSummary
                                                    ));
            });
            this.applicationList = tempList;
            this.isDataAvailable = true;
        });
    }

    onEditApplication(application:ApplicationModal){
        console.log(application)
    }
}