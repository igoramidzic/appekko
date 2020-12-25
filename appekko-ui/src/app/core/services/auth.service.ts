import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import firebase from 'firebase/app';
import 'firebase/auth';
import { IUser } from '../models/user.model';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null;
  initialLoadCompleted: boolean;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user = null;
    this.initialLoadCompleted = false;

    this.afAuth.authState.subscribe(user => {
      this.getUserData(user);
    })
  }

  subscribeToAuthState(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afAuth.authState.pipe(
        take(1),
        tap(() => { resolve(true); console.log("Hasdf") })
      )
    })
  }

  private async getUserData(user: firebase.User | null): Promise<void> {
    if (!user) {
      this.user = null;
      this.initialLoadCompleted = true;
    }
    else
      this.afs.doc<IUser>(`users/${user.uid}`).get().subscribe((u) => {
        this.user = <IUser>(u.data());
        this.initialLoadCompleted = true;
      });
  }

  async signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    const user = <IUser>credential.user;

    if (!user) throw new Error("Something went wrong.");

    await this.updateUserData(user.uid, user.displayName, user.email, user.photoURL);
    this.getUserData(credential.user);
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async registerWithEmailAndPassword(fullName: string, email: string, password: string) {
    const credential = await this.afAuth.createUserWithEmailAndPassword(email, password);
    const user = <IUser>credential.user;

    if (!user) throw new Error("Something went wrong.");

    await this.updateUserData(user.uid, fullName, user.email, user.photoURL);
    this.getUserData(credential.user);
  }

  logout(): void {
    this.afAuth.signOut();
    location.reload();
  }

  private updateUserData(uid: string, displayName: string | undefined, email: string, photoURL: string | undefined) {
    const userRef: AngularFirestoreDocument<IUser> = this.afs.doc(`users/${uid}`);

    const data = {
      uid,
      email,
      displayName,
      photoURL,
    };

    return userRef.set(data, { merge: true });
  }
}
