import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class MyInterceptor implements HttpInterceptor {  

  constructor(private router: Router) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if( req.url == 'http://api-sandbox.btisinc.com/GL/v1/gateway/rate') {
      var accessReq = req.clone({
        headers: req.headers.set('x-access-token', 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiJjMWNkM2ZkMC1mZWQ1LTRiOTQtYjlkYy1mMDg2MGM5ZGJlNDMiLCJhZ2VuY3lfaWQiOjIyLCJjb250YWN0X2lkIjo5MTUsImlhdCI6MTUyNzUwNzMxMiwiZXhwIjoxNTI4MTEyMTEyfQ.Qfq1bLh5HvWfSg-brJP0rbGTyfrYMDviH46Tca_PzPbeVAmltTkkkxAmUaplFje3Q_XDOq8krSBNTmI_ygTPWOVJwMWDVAUzh57gegJVOUbQh0bvhQTA0J7Z0qLw4YruFwEon2zOlSOnnFs-oBfuB4P8OeU2Q6sb1HAs4TmK4im7VOTEGhrrb3rmB2YSSnZsM3xkWTJdVF3PPzsRBfDlvh2wc9quJQiJsnj9w69vSa0GpDpleTtFJeJfPsLw9Ue3fphUu3ujJ8JUeNMrq7ut2HY968tSh5JrCPoE757NSrJKA9mVKZAvcCU2r8tUoTBI5f6o03nb2GPe8xXfqCdVsQ').set('Access-Control-Allow-Credentials', 'true').set('Content-Type', 'application/json; charset=utf-8').set('Accept', 'application/json; charset=utf-8')
      });
    } else  {
      var accessReq = req.clone({
        headers: req.headers.set('x-access-token', 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIxYjI3M2VhOC0wNDlmLTRmNmItYWI3Ny02OTg0ZjJmMDg0NDgiLCJhZ2VuY3lfaWQiOjU0NDksImNvbnRhY3RfaWQiOjgzMzE4LCJpYXQiOjE1Mjc1MDc2NDcsImV4cCI6MTUyODExMjQ0N30.VpbKB27WYMbu77SPOtaC4_bYQbMtvge-GFKo26I9YhB6W62kdTJ8bW_s9ILrv2ihI4GZGJmPqY5xaVKTP6-ej5iNP8tnm380ymkmVXJbHkK0Dmi8Q4i1EVQWeDI2r_H5anGSEavdTKH97oWfMMyDPIOsEMRYHvJolI4zA02fBFmasXmAHf7FPlZg7aEwx5jKKBgQxNZ4Kqy1T9VYD-z5OJqDC88q1WJdaPubPGr-b38IiQ7PQ2pNL9iQrvHJqSuDmyFeFeZEL346bXe_8rHrfkDzXgi-lyogFci8coSejWtEYLX11Tw8KCuC2SoS8bCTZuM8Rma3bhxGpPVj81gIMg').set('Access-Control-Allow-Credentials', 'true').set('Content-Type', 'application/json; charset=utf-8').set('Accept', 'application/json; charset=utf-8')
      });
    }
    // this.blockUI.start("Loading..")
    
      return next.handle(accessReq);
  }

}