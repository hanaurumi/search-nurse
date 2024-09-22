"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function DetailSelection() {
  const router = useRouter();
  const searchParams = useSearchParams(); // クエリパラメータを取得
  const category = searchParams.get('category'); // クエリパラメータ "category" を取得

  // カテゴリーに応じた選択肢を定義
  const detailOptions = {
    バリュー: ["チームワーク", "向上心", "コミュニケーション"],
    スキル: ["PCスキル", "タイムマネジメント", "リーダーシップ"],
    職歴: ["外科", "内科", "小児科"],
    学びたいこと: ["新しい技術", "マネジメントスキル", "看護技術"]
  };

  const [selectedDetails, setSelectedDetails] = useState<string[]>([]);

  useEffect(() => {
    if (!category || !(category in detailOptions)) {
      // カテゴリーが無効な場合、最初の画面に戻す
      router.push('/');
    }
  }, [category, router]);

  const handleCheckboxChange = (detail: string) => {
    setSelectedDetails((prevSelected) =>
      prevSelected.includes(detail)
        ? prevSelected.filter((item) => item !== detail)
        : [...prevSelected, detail]
    );
  };

  const handleSearch = () => {
    // 選択された詳細条件に基づいて検索画面に移動
    router.push(`/searchResults?category=${category}&details=${selectedDetails.join(',')}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">{category}の詳細を選択してください</h2>
        
        <div className="space-y-4">
          {category && detailOptions[category as keyof typeof detailOptions].map((detail) => (
            <div key={detail} className="flex items-center">
              <input
                type="checkbox"
                id={detail}
                value={detail}
                className="mr-2"
                onChange={() => handleCheckboxChange(detail)}
                checked={selectedDetails.includes(detail)}
              />
              <label htmlFor={detail} className="text-lg">{detail}</label>
            </div>
          ))}
        </div>

        <button
          onClick={handleSearch}
          disabled={selectedDetails.length === 0}
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-300"
        >
          検索
        </button>
      </div>
    </div>
  );
}

