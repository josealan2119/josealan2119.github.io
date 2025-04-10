import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Language } from '../../models/languages/languages.model';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  
  accesoLanguages = 'Languagues Service is Running...';

  private dbPath = '/languages';

  languageRef: AngularFirestoreCollection<Language>;

  constructor(private db:AngularFirestore) { 
    this.languageRef = db.collection(this.dbPath);
  }

  getLanguage() : AngularFirestoreCollection<Language>{
    return this.languageRef;
  }
}
