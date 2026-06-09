import NationPageClient from "./client";

export async function generateStaticParams() {
  const nations = ["kereki", "chamalaly", "vod", "tazy", "oroki"];
  return nations.map((nationId) => ({
    nationId,
  }));
}

export default async function NationPage() {
  return <NationPageClient />;
}
