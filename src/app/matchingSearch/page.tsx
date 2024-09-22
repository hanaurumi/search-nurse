"use client";

import { useState } from 'react';


export default function MatchingSearch() {
  const [values, setValues] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [workHistory, setWorkHistory] = useState<string[]>([]);
  const [toLearn, setToLearn] = useState<string[]>([]);

  // 仮データ: 後でDBを組み込む
  const allValues = ["協調性", "リーダーシップ", "柔軟性", "正確性", "創造力"];
  const allSkills = ["タイムマネージメント", "アセスメント力", "PC操作"];
  const allWorkHistory = ["救急病棟", "ICU", "一般外科"];
  const allToLearn = ["脳外科看護", "神経内科", "小児科看護"];

  const handleSelection = (setState: React.Dispatch<React.SetStateAction<string[]>>, item: string) => {
    setState(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };

  const handleSubmit = () => {
    // ユーザーが選択した条件をコンソールに表示
    console.log('選択されたバリュー:', values);
    console.log('選択されたスキル:', skills);
    console.log('選択された職歴:', workHistory);
    console.log('選択された学びたいこと:', toLearn);

    // DB組み込み後に検索ロジックを追加する
    alert('検索条件に基づいてマッチングを行います');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-pastelBlue p-6">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-4xl">
        <h2 className="text-4xl font-bold mb-6 text-pastelPink">条件を選択してください</h2>
        
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-3 text-pastelPink">価値観</h3>
          <div className="grid grid-cols-2 gap-4">
            {allValues.map((value) => (
              <label key={value} className="flex items-center">
                <input
                  type="checkbox"
                  value={value}
                  onChange={() => handleSelection(setValues, value)}
                  className="mr-2"
                />
                {value}
              </label>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-pastelPink">学びたいこと</h3>
          <div className="grid grid-cols-2 gap-4">
            {allToLearn.map((learn) => (
              <label key={learn} className="flex items-center">
                <input
                  type="checkbox"
                  value={learn}
                  onChange={() => handleSelection(setToLearn, learn)}
                  className="mr-2"
                />
                {learn}
              </label>
            ))}
          </div>
        </section>

        <button
          onClick={handleSubmit}
          className="bg-pastelPink text-white py-3 px-6 rounded hover:bg-pastelPink-dark transition-colors"
        >
          検索
        </button>
      </div>
    </div>
  );
}

