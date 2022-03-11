/**
 * スリープ処理
 * @param msec ミリ秒
 */
export async function sleep(msec: number) {
  await new Promise((resolve) => setTimeout(resolve, msec));
}
