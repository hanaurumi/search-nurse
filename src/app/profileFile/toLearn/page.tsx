"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../globals.css';

export default function ToLearn () {

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
    setSelectedDepartments(prevSelected => {
      if (prevSelected.includes(department)) {
        return prevSelected.filter(d => d !== department);
      } else if (prevSelected.length < 3) {
        return [...prevSelected, department];
      } else {
        return prevSelected;
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pastelBlue p-4 sm:p-6">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-4xl">
        <h2 className="text-4xl sm:text-4xl font-bold mb-8 text-pastelPink text-center"
        >
          パートナーに求めるスキルを以下から3つ選択してください
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {departments.map((department) => (
            <div key={department} className="flex items-center bg-gray-50 p-3 rounded-md">
              <input
                type="checkbox"
                id={department}
                name="departments"
                value={department}
                className="mr-3 h-6 w-6 text-pastelPink focus:ring-pastelPink"
                onChange={() => handleCheckboxChange(department)}
                checked={selectedDepartments.includes(department)}
              />
              <label htmlFor={department} className="text-lg sm:text-xl">{department}</label>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => router.push('/')}
            className="bg-pastelPink text-white py-3 px-6 rounded-md text-lg hover:bg-pastelPink-dark transition-colors w-full sm:w-auto"
          >
            トップ画面に戻る
          </button>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <button
              onClick={() => router.back()}
              className="bg-pastelPink text-white py-3 px-6 rounded-md text-lg hover:bg-pastelPink-dark transition-colors w-full sm:w-auto"
            >
              前のページに戻る
            </button>
            <button
              onClick={() => router.push('/profileFile')}
              className="bg-pastelPink text-white py-3 px-6 rounded-md text-lg hover:bg-pastelPink-dark transition-colors w-full sm:w-auto "
              disabled={selectedDepartments.length !== 3}
            >
              次へ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};