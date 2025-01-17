import { QuerySnapshot } from '@google-cloud/firestore';
import { firestore } from './firebaseAdmin';
import { Config } from '@core/config/config';
import { App } from '@core/entities/app';
import { Environments } from '@core/enums/environments';
import { UserWallet } from '@core/entities/userWallet';

const appsCollection =
  Config.environment === Environments.Optimism ? 'optimism-apps' :
  Config.environment === Environments.Base ? 'base-apps' :
  Config.environment === Environments.Zora ? 'zora-apps' :
  Config.environment === Environments.Mode ? 'mode-apps' : 'unknown-apps';

const userWalletsCollection =
  Config.environment === Environments.Optimism ? 'optimism-userWallets' :
  Config.environment === Environments.Base ? 'base-userWallets' :
  Config.environment === Environments.Zora ? 'zora-userWallets' :
  Config.environment === Environments.Mode ? 'mode-userWallets' : 'unknown-userWallets';


export class FirestoreDB {
  // APPS

  async addApp(app: App): Promise<void> {
    await firestore.collection(appsCollection).add(app);
  }

  async getAppsByUser(userId: string): Promise<App[]> {
    const appRef = firestore.collection(appsCollection);
    const snapshot: QuerySnapshot = await appRef
      .where('userId', '==', userId)
      .get();

    if (snapshot.empty) {
      return [];
    }

    const apps = snapshot.docs.map((doc) => doc.data() as App);
    return apps;
  }

  async getApp(appId: string): Promise<App | null> {
    const appRef = firestore.collection(appsCollection);
    const snapshot: QuerySnapshot = await appRef
      .where('appId', '==', appId)
      .get();

    if (snapshot.empty) {
      return null;
    }

    const app = snapshot.docs[0].data() as App; // Getting only the first matching document
    return app;
  }

  async updateApp(app: App): Promise<void> {
    const appId = app.appId;

    // Query the database for the document with the matching appId
    const snapshot = await firestore
      .collection(appsCollection)
      .where('appId', '==', appId)
      .get();

    if (!snapshot.empty) {
      // If a document was found, update it
      const doc = snapshot.docs[0]; // Assuming there is only one document with this appId
      await firestore
        .collection(appsCollection)
        .doc(doc.id)
        .set(app, { merge: true });
    } else {
      // Handle the case where no document was found
      console.log('No document found with the provided appId');
    }
  }

  async deleteApp(appId: string): Promise<void> {
    const appsRef = firestore.collection(appsCollection);
    const snapshot = await appsRef.where('appId', '==', appId).get();

    if (!snapshot.empty) {
      const doc = snapshot.docs[0];
      await appsRef.doc(doc.id).delete();
    } else {
      console.log(`No document found with appId: ${appId}`);
      // throw an error or handle the case where no document was found
    }
  }

  // USER WALLET

  async addUserWallet(userWallet: UserWallet): Promise<void> {
    await firestore.collection(userWalletsCollection).add(userWallet);
  }

  async getUserWallet(walletAddress: string): Promise<UserWallet | null> {
    const userRef = firestore.collection(userWalletsCollection);
    const snapshot: QuerySnapshot = await userRef
      .where('walletAddress', '==', walletAddress)
      .limit(1)
      .get();

    if (snapshot.empty) {
      return null;
    }

    const doc = snapshot.docs[0];
    const data = doc.data() as UserWallet;
    return data;
  }
}
