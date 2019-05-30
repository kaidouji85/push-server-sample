const VAPID_KEYS = require('./vapid-keys.json');
const webpush = require('web-push');

/** Push通知先ブラウザのサブスクリプションをセットする */
const pushSubscription = {};

/**
 * ブラウザにPUSH通知をする
 *
 * @param {PushSubscription} pushSubscription 通知先ブラウザのサブスクリプション
 * @returns {Promise<void>}
 */
async function pushMessage(pushSubscription) {
  try {
    const payload = "message";
    const options = {
      vapidDetails: {
        subject: 'mailto:kaidouji85@gmail.com',
        publicKey: VAPID_KEYS.publicKey,
        privateKey: VAPID_KEYS.privateKey,
      },
      TTL: 60 * 60
    };

    const result = await webpush.sendNotification(pushSubscription, payload, options);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

pushMessage(pushSubscription);
