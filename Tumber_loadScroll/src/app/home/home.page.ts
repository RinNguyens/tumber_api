import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users : any = [];
  page = 1;
  pageMax = 2;
  constructor( private http : HttpClient) {
    this.loadUsers(event);
  }
  loadUsers(event?){
    this.http.get(`https://api.tumblr.com/v2/blog/monday1026am.tumblr.com/posts/photo?api_key=Q6vHoaVm5L1u2ZAW1fqv3Jw48gFzYVg9P0vH0VHl3GVy6quoGV&&page=${this.page}`)
    .subscribe(users => {
      console.log(users);
      this.users = this.users.concat(users['response']);

      if(event){
        event.target.complete();
      }
    })
    
  }
  loadData(event){
    console.log(event);
    this.page++;
    if(event.target.disabled = false) {
      this.loadUsers(event);
    }
    else{
      this.loadUsers(event);
    }
    if(this.page === this.pageMax) {
      event.target.disabled = true;
    }
  }
  
}
