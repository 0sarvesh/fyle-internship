import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.scss']
})
export class GithubReposComponent implements OnInit {
  @Input() githubRepos: any[] = [];
  p1: number = 1;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.githubRepos.forEach(repo => {
      this.fetchTopics(repo); // Fetch topics for each repository
    });
  }

  fetchTopics(repo: any): void {
    this.http.get<any[]>(repo.topics_url).subscribe(
      topics => {
        repo.topics = topics; // Store topics in the repository object
      },
      error => {
        console.error('Error fetching topics:', error);
      }
    );
  }
}
