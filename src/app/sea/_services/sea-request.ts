import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { RequestService } from 'app/_services/request/request.service';

export declare type METHOD = 'GET' | 'POST';

export class SeaRequest {

    private _account: string;
    private _webId: number;
    private _url: string;
    private _params: URLSearchParams;
    private _item: any;
    private _requestService: RequestService;
    private _method: METHOD;

    constructor(url: string) {
        this._url = url;
    }

    setAccount(account: string) {
        this._account = account;
        return this;
    }

    setWebId(webId: number) {
        this._webId = webId;
        return this;
    }

    setParams(params: URLSearchParams) {
        this._params = params;
        return this;
    }

    setItem(item: any) {
        this._item = item;
        return this;
    }

    setRequestService(requestService: RequestService) {
        this._requestService = requestService;
        return this;
    }

    setMethod(method: METHOD) {
        this._method = method;
        return this;
    }

    private getParams(): URLSearchParams {
        let params = this._params;
        if (params == undefined) {
            params = new URLSearchParams();
        }
        if (this._account != undefined) {
            params.append('account', this._account);
        }
        if (this._webId != undefined) {
            params.append('webId', this._webId.toString());
        }
        if (this._item != undefined) {
            params.append('item', JSON.stringify(this._item));
        }
        return params;
    }

    asObservable(): Observable<any> {
        return new Observable(observer => {
            let observable;
            let params = this.getParams();
            switch (this._method) {
                case "POST":
                    observable = this._requestService.post(this._url, params.toString());
                    break;
                case "GET":
                default:
                    observable = this._requestService.get(this._url, params);
                    break;
            }
            observable.subscribe(
                response => observer.next(response),
                error => observer.error(error),
                () => observer.complete());
        });
    }
}
