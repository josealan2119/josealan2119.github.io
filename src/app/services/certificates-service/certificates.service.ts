import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { certificates } from '../../models/certificates/certificate.model';
@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  
   accesoCertificate = 'Certificate Service is Running';

   private dbPath = '/Certificates';

   certificateRef : AngularFirestoreCollection<certificates>;

  constructor(private db : AngularFirestore) {
    this.certificateRef =  db.collection(this.dbPath);
   }

   getCertificate(): AngularFirestoreCollection<certificates>{
    return this.certificateRef;
   }
}
