import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';

@Injectable()
export class HomeContentServices {
  constructor(@Inject('BASE_CONFIG') private config, private http: Http) {

  }
//  获取当前左侧菜单列表
  getLeftMenu(): Observable<any> {
    return this.http.post(`${this.config.url}/topic/findAllUserTopicGroup`, JSON.stringify({"userId": 0}))
      .map(value => value.json());
  }
}

