import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  // Fetch user profile
  public getProfile(githubUsername: string): Observable<any> {
    return this.httpClient.get<any>(`https://api.github.com/users/${githubUsername}`).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }

  // Handle errors
  private handleErrors(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `MESSAGE: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `STATUS: ${error.status} MESSAGE: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  // Fetch user repositories with pagination
  public getRepos(githubUsername: string, perPage: number, page: number): Observable<any[]> {
    const params = new HttpParams()
      .set('per_page', perPage.toString())
      .set('page', page.toString());

    return this.httpClient.get<any[]>(`https://api.github.com/users/${githubUsername}/repos`, { params }).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }
}
