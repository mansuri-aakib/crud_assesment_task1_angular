import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { TokenGenerator } from "./token.service";
import { ApplicationModal } from "../models/application.modal";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private tokenGenerator: TokenGenerator = inject(TokenGenerator);
    private http: HttpClient = inject(HttpClient);
    private prefixUrl: string = 'https://cmi-ofm.azurewebsites.net/api/'

    get(projectId: string) {
        projectId = '9229a3af-13de-4b67-9820-fb808b21efa4';
        const url: string = 'GetAllPayApplication/';
        return this.http.get(this.prefixUrl + url + projectId, { headers: { 'Authorization': this.tokenGenerator.token } });
    }

    post(application:ApplicationModal) {
        const url: string = 'CreatePayApplication';
        return this.http.post(
            this.prefixUrl + url,
            application,
            { headers: { "Authorization": this.tokenGenerator.token } }
        );
    }
}