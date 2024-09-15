"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../globals.css';

export default function Skill () {

  const departments = [
    "タイムマネージメント",
    "アセスメント力",
    "PCの操作・速さ",
    "コミニュケーション力",
    "接遇",
    "脳外科看護の知識",
    "神経内科の知識",
    "看護技術",
    "臨機応変・対応力",
    "スケジュール管理",
    "説明力",
    "当該病棟以外の知識",
    "急変時の対応力",
  ];

  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const router = useRouter();

  const handleCheckboxChange = (department: string) => {
    // 既に選択されている場合は選択を解除、そうでない場合は3つまで選択可能
    setSelectedDepartments(prevSelected => {
      if (prevSelected.includes(department)) {
        return prevSelected.filter(d => d !== department);
      } else if (prevSelected.length < 3) {
        return [...prevSelected, department];
      } else {
        return prevSelected; // 3つ選択済みの場合は何もしない
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pastelBlue p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-3xl font-semibold mb-6 text-pastelPink">あなたの持っているスキルを以下から３つ選択してください</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {departments.map((department) => (
            <div key={department} className="flex items-center">
              <input
                type="checkbox"
                id={department}
                name="departments"
                value={department}
                className="mr-2 h-5 w-5 text-pastelPink focus:ring-pastelPink"
                onChange={() => handleCheckboxChange(department)}
                checked={selectedDepartments.includes(department)}
              />
              <label htmlFor={department} className="text-lg">{department}</label>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={() => router.push('/')}
            className="bg-pastelPink text-white py-2 px-6 rounded hover:bg-pastelPink-dark transition-colors"
          >
            トップ画面に戻る
          </button>
          <div className="flex space-x-4">
            <button
              onClick={() => router.back()}
              className="bg-pastelPink text-white py-2 px-6 rounded hover:bg-pastelPink-dark transition-colors"
            >
              前のページに戻る
            </button>
            <button
              onClick={() => router.push('/profileFile')}
              className="bg-pastelPink text-white py-2 px-6 rounded hover:bg-pastelPink-dark transition-colors"
              disabled={selectedDepartments.length !== 3} // 3つ選択されていないと次へ進めない
            >
              次へ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
