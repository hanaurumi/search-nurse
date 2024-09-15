"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../globals.css';


export default function workHistory () {

  const valuesOptions = [
    "循環器内科",
    "心臓血管外科",
    "外科",
    "呼吸器内科",
    "消化器内科",
    "脳神経外科",
    "脳神経内科",
    "泌尿器外科",
    "整形外科",
    "外来",
    "内視鏡",
    "手術室",
    "血液浄化室",
    "救急外来",

    
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
        <h2 className="text-3xl font-semibold mb-6 text-pastelPink">あなたがこれまでに経験した科を以下の項目から３つ選択してください</h2>
        
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
              <label htmlFor={value} className="text-lg ">{value}</label>
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
           onClick={() => router.push('/profileFile/values')}
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