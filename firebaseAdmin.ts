// firebaseAdmin.ts
import * as firebaseAdmin from "firebase-admin";

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    projectId: process.env.PROJECT_ID,
    credential: firebaseAdmin.credential.cert({
      privateKey: process.env.PRIVATE_KEY,
      clientEmail: process.env.CLIENT_EMAIL,
      projectId: process.env.PROJECT_ID,
    }),
    databaseURL: `https://${process.env.PROJECT_ID}.firebaseio.com`,
  });
}

export { firebaseAdmin };
