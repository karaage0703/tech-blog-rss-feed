type ValidUrl = `${'http' | 'https'}://${string}.${string}`;

type FeedInfoTuple = [label: string, url: ValidUrl];

export interface FeedInfo {
  label: string;
  url: ValidUrl;
}

const createFeedInfoList = (feedInfoTuples: FeedInfoTuple[]) => {
  const feedInfoList: FeedInfo[] = [];

  for (const [label, url] of feedInfoTuples) {
    feedInfoList.push({
      label,
      url,
    });
  }

  return feedInfoList;
};

/**
 * フィード情報一覧。アルファベット順
 * ラベルが被るとバリデーションエラーになるので別のラベルを設定してください
 */
// prettier-ignore
export const FEED_INFO_LIST: FeedInfo[] = createFeedInfoList([
  // ['企業名・製品名など', 'RSS/AtomフィードのURL'],
  ['10X', 'https://product.10x.co.jp/feed'],
  ['ABEJA', 'https://tech-blog.abeja.asia/feed'],
  ['ACES', 'https://tech.acesinc.co.jp/feed'],
  ['AI Shift', 'https://www.ai-shift.co.jp/techblog/feed'],
  ['AI inside', 'https://note.com/aiinside_tech/rss'],
  ['Algomatic', 'https://tech.algomatic.jp/feed'],
  ['BrainPad', 'https://blog.brainpad.co.jp/feed'],
  ['CADDi', 'https://caddi.tech/feed'],
  ['DeNA(Zenn Publication)', 'https://zenn.dev/p/dena/feed'],
  ['Dentsu Digital', 'https://note.com/dd_techblog/rss'],
  ['ELYZA', 'https://elyza-inc.hatenablog.com/feed'],
  ['Generative Agents', 'https://blog.generative-agents.co.jp/feed'],
  ['g-gen', 'https://blog.g-gen.co.jp/feed'],
  ['Google Cloud Japan', 'https://zenn.dev/p/google_cloud_jp/feed'],
  ['Google', 'https://developers-jp.googleblog.com/atom.xml'],
  ['HEROZ', 'https://heroz-tech.hatenablog.jp/feed'],
  ['ITmedia AI＋', 'https://rss.itmedia.co.jp/rss/2.0/aiplus.xml'],
  ['OPTiM', 'https://tech-blog.optim.co.jp/feed'],
  ['Preferred Networks', 'https://tech.preferred.jp/ja/blog/llm-plamo/feed/'],
  ['TURING', 'https://zenn.dev/turing/feed'],
  ['TURING(Zenn Publication)', 'https://zenn.dev/p/turing_motors/feed'],
  ['Tier IV', 'https://medium.com/feed/tier-iv-tech-blog/tagged/tech-blog'],
  ['Ubie', 'https://zenn.dev/p/ubie_dev/feed'],
  ['Zenn（機械学習タグ）', 'https://zenn.dev/topics/機械学習/feed'],
  ['Zenn（AIタグ）', 'https://zenn.dev/topics/ai/feed'],
  ['Zenn（生成AIタグ）', 'https://zenn.dev/topics/生成ai/feed'],
  ['Zenn（DLタグ）', 'https://zenn.dev/topics/deeplearning/feed'],
  ['Zenn（LLMタグ）', 'https://zenn.dev/topics/llm/feed'],
  ['テクノエッジ', 'https://www.techno-edge.net/rss20/index.rdf'],  
  ['エクサウィザーズ', 'https://techblog.exawizards.com/feed'],
  ['エクスプラザ', 'https://tech.explaza.jp/feed'],
  ['エムスリー', 'https://www.m3tech.blog/feed'],
  ['サイバーエージェント', 'https://developers.cyberagent.co.jp/blog/feed/'],
  ['フューチャー', 'https://future-architect.github.io/atom.xml'],
  ['松尾研究所', 'https://zenn.dev/p/mkj/feed'],
]);
