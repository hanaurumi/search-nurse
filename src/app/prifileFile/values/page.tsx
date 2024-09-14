"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../globals.css';

const ProfileFile = () => {
  const valuesOptions = [
    "経済的報酬：豊かな生活",
    "達成：仕事の成果がわかりやすい",
    "社会的評価：仕事の成果を認めてもらえる",
    "自律・自立性:1人で仕事ができる",
    "創造性：新しいものや考え方を創り出せる",
    "冒険性：新しいことに挑戦する",
    "ライフスタイル：勤務時間が安定している",
    "多様性：多様な活動ができること",
    "他愛性：人の役に立てること",
    "能力：自分の能力を発揮できること",
    "社会的交流・協力：互いに協力できる",
    
  ];

  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const router = useRouter();

  const handleCheckboxChange = (value: string) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(prevSelected => prevSelected.filter(v => v !== value));
    } else if (selectedValues.length < 3) {
      setSelectedValues(prevSelected => [...prevSelected, value]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pastelBlue p-8">
      <div className="bg-white p-16 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6 text-pastelPink">あなたが大切にしていること、価値観を以下の項目から３つ選択してください</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {valuesOptions.map((value) => (
            <div key={value} className="flex items-center">
              <input
                type="checkbox"
                id={value}
                name="values"
                value={value}
                className="mr-2 h-5 w-5 text-pastelPink focus:ring-pastelPink"
                onChange={() => handleCheckboxChange(value)}
                checked={selectedValues.includes(value)}
                disabled={!selectedValues.includes(value) && selectedValues.length >= 3}
              />
              <label htmlFor={value} className="text-lg">{value}</label>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between">
        <button
          onClick={() => router.push('/')}
          className="bg-pastelPink text-white py-2 px-6 rounded transform transition-transform duration-300 ease-out hover:scale-105 hover:bg-pastelPink-dark"
        >
              トップ画面に戻る
         </button>
        <div className="flex space-x-4">
          <button
           onClick={() => router.back()}
           className="bg-pastelPink text-white py-2 px-6 rounded transform transition-transform duration-300 ease-out hover:scale-105 hover:bg-pastelPink-dark"
         >
          前のページに戻る
         </button>
        <button
           onClick={() => router.push('/profileFile/workHistory')}
           className="bg-pastelPink text-white py-2 px-6 rounded transform transition-transform duration-300 ease-out hover:scale-105 hover:bg-pastelPink-dark"
         >
          次へ
      </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileFile;