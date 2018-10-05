/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { _throw } from 'rxjs/Observable/throw';


/**
 * Default error handler
 */
@Injectable()
export class ErrorHandler {
  public handleError(errorResponse: HttpErrorResponse): Observable<any> {
    return _throw(errorResponse.error.error || 'Server error');
  }
}
