import * as firebase from 'firebase/app';
import 'firebase/firestore';

export const serverTimestamp = (): firebase.default.firestore.Timestamp => {
    return firebase.default.firestore.Timestamp.now();
};