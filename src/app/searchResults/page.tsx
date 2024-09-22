"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Result {
  name: string;
  value: string;
  skill: string;
  workHistory: string;
}

const mockData: Result[] = [
  { name: "山田 太郎", value: "チームワーク", skill: "PCスキル", workHistory: "外科" },
  { name: "佐藤 花子", value: "向上心", skill: "タイムマネジメント", workHistory: "内科" },
];

// 仮の検索関数（後でDB検索に置き換える）
const mockSearch = (category: string, details: string) => {
  return mockData.filter(item => {
    const detailArray = details.split(',');
    if (category === "value") {
      return detailArray.some(detail => item.value.includes(detail));
    } else if (category === "skill") {
      return detailArray.some(detail => item.skill.includes(detail));
    } else if (category === "workHistory") {
      return detailArray.some(detail => item.workHistory.includes(detail));
    }
    return false; // 無効なカテゴリの場合
  });
};

export default function SearchResults() {
  const router = useRouter();
  const { category, details } = router.query;

  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    if (category && details) {
      const matchingResults = mockSearch(category as string, details as string);
      setResults(matchingResults);
    }
  }, [category, details]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">検索結果</h2>

        {results.length > 0 ? (
          <ul className="space-y-4">
            {results.map((result, index) => (
              <li key={index} className="p-4 bg-gray-100 rounded-md shadow-sm">
                {result.name} - {result.value} - {result.skill} - {result.workHistory}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">条件に合う結果が見つかりませんでした。</p>
        )}

        <button
          onClick={() => router.push('/')}
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          トップに戻る
        </button>
      </div>
    </div>
  );
}
