import {useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/ThemeContext';

const LoadDiv = styled.div`
  height: 100%;
  padding: 36px;
  color: ${ ({ theme }) => theme.color };
  background-color: ${ ({ theme }) => theme.backgroundColor };
`
/* Higher-Order Compoent（HOC）
 * 引数でコンポーネントを受け取り、コンポーネントを返す
 * TypeScriptで受け取るコンポーネントの型定義しないとエラー（エラー解決にかなり時間かかった）
*/

// 受け取るコンポーネント・関数の型を定義
// APPファンクションコンポーネントは言語リストを受け取り表示する
/* 言語リスト取得
 * fetchData()は 非同期(Promise)で 言語リスト(string[])を返す
 * 受け取る関数 → import { getLanguages } from './const/Type';
*/
export const withLoading = (WrappedComponent: React.FC<{data: string[]}>, fetchData:()=> Promise<string[]>) => {
  return () =>{

    // 型定義しないとエラー
    const [data, setData] = useState<string[]>([]);

    const [theme] = useContext(ThemeContext);

    // 最初(Mounting)だけデータを取得する
    useEffect( () => {
      fetch();
    }
    , []);

    // 非同期でデータ取得して、セットする
    // fetchDataの返り値の型 と useStateの型を合わせないと エラー
    const fetch = async() => {
      const data = await fetchData();
      setData(data);
    }

    const Loading = (
      <LoadDiv theme={theme}>ロード中...</LoadDiv>
    )

    // dataがあるか無いか
    // 1秒間はまだ空の配列のため Loding
    // 1秒後に言語リストが返ってくる → setData → WrappedComponent(APPファンクションコンポーネント)に言語リストを渡す
    return data.length > 0 ? <WrappedComponent data={data} /> : Loading;
  }
}
