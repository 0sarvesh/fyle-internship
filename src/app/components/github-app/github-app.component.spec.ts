import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { GithubAppComponent } from './github-app.component';
import { GithubProfileComponent } from '../github-profile/github-profile.component';
import { GithubProfileCardComponent } from '../github-profile-card/github-profile-card.component';
import { GithubProfileDataComponent } from '../github-profile-data/github-profile-data.component';
import { GithubReposComponent } from '../github-repos/github-repos.component';
// Import the PaginationModule

describe('GithubAppComponent', () => {
  let component: GithubAppComponent;
  let fixture: ComponentFixture<GithubAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubAppComponent, GithubProfileComponent, GithubProfileCardComponent, GithubProfileDataComponent, GithubReposComponent],
      imports: [HttpClientTestingModule, FormsModule], // Include PaginationModule here
    });
    fixture = TestBed.createComponent(GithubAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
