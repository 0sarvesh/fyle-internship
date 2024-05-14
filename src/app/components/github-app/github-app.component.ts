import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.scss']
})
export class GithubAppComponent implements OnInit {
  public githubUserQuery: string = '';
  public githubProfile: any;
  public githubRepos: any[] = [];
  public isLoadingProfile: boolean = false;
  public isLoadingRepos: boolean = false;
  public pageSize: number = 10;
  public pageSizes: number[] = [10, 20, 30, 40, 50, 100];
  public currentPage: number = 1;
  public hasNextPage: boolean = false;

  constructor(private githubService: ApiService) { }

  ngOnInit(): void { }

  public searchUser() {
    this.isLoadingProfile = true;
    this.isLoadingRepos = true;
    this.currentPage = 1;

    this.githubService.getProfile(this.githubUserQuery).subscribe(
      (data) => {
        this.githubProfile = data;
        this.isLoadingProfile = false;
      },
      (error) => {
        console.error('Error fetching user:', error);
        this.isLoadingProfile = false;
      }
    );

    this.fetchRepos();
  }

  public fetchRepos() {
    this.githubService.getRepos(this.githubUserQuery, this.pageSize, this.currentPage).subscribe(
      (data) => {
        this.githubRepos = data;
        this.hasNextPage = data.length === this.pageSize;
        this.isLoadingRepos = false;
      },
      (error) => {
        console.error('Error fetching repos:', error);
        this.isLoadingRepos = false;
      }
    );
  }

  public nextPage() {
    if (this.hasNextPage) {
      this.currentPage++;
      this.fetchRepos();
    }
  }

  public previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchRepos();
    }
  }
}
