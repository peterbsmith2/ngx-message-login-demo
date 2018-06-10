import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  // conversation
  getOneConversation(id) {
    return this.http.get(`${this.API_URL}/conversation/${id}`);
  }

  getConversations() {
    return this.http.get(`${this.API_URL}/conversation`);
  }

  putOneConversation(data) {
    return this.http.put(`${this.API_URL}/conversation/${data.id}`, data);
  }

  postOneConversation(data) {
    return this.http.post(`${this.API_URL}/conversation`, data);
  }

  // message
  getOneMessage(id) {
    return this.http.get(`${this.API_URL}/message/${id}`);
  }

  getMessages() {
    return this.http.get(`${this.API_URL}/message`);
  }

  putOneMessage(data) {
    return this.http.put(`${this.API_URL}/message/${data.id}`, data);
  }

  postOneMessage(data) {
    return this.http.post(`${this.API_URL}/message`, data);
  }

  // tag
  getOneTag(id) {
    return this.http.get(`${this.API_URL}/tag/${id}`);
  }

  getTags() {
    return this.http.get(`${this.API_URL}/tag`);
  }

  putOneTag(data) {
    return this.http.put(`${this.API_URL}/tag/${data.id}`, data);
  }

  postOneTag(data) {
    return this.http.post(`${this.API_URL}/tag`, data);
  }
}
