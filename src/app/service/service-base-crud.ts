import { Observable } from 'rxjs';
import { ConfigService } from '../config/config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


export abstract class ServiceBaseCrud<T> {

    constructor(protected baseUrl: string, protected http: HttpClient, protected configService: ConfigService, protected router: Router) { }

    protected getHeaders(): HttpHeaders {
        let headers = new HttpHeaders();

        const token = window.localStorage.getItem(this.configService.config.user.token);
        if (token === null) {
            this.router.navigate(['/']);
            return headers;
        }
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set('authenticationToken', token);
        return headers;
    }

    GetWithId(ent: T): Observable<T> {
        let headers = this.getHeaders()
        return this.http.post<T>(`${this.baseUrl}/GetWithId`, ent, { headers });
    }

    Save(ent: T): Observable<T> {

        let headers = this.getHeaders()
        return this.http.post<T>(`${this.baseUrl}/Save`, ent, { headers });
    }
    Delete(ent: T): Observable<T> {

        let headers = this.getHeaders()
        return this.http.post<T>(`${this.baseUrl}/Delete`, ent, { headers });
    }

    Combo(): Observable<T[]> {

        let headers = this.getHeaders()
        return this.http.get<T[]>(`${this.baseUrl}/Combo`, { headers });
    }

}
