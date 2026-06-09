export default function generateStaticParams() {
  const nations = ["kereki", "chamalaly", "vod", "tazy", "oroki"];
  return nations.map((nationId) => ({
    nationId,
  }));
}
