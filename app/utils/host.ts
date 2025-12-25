// import { useRuntimeConfig } from "nuxt/app";

// const {
//   public: { apiDomain },
// } = useRuntimeConfig();

// export const host = (path: string) => {
//   return `${apiDomain}${path}`;
// };

// TODO: 環境変数を反映する方法が分からなかった。調べる
export const host = (path: string) => {
  return `http://localhost:6000${path}`;
};
