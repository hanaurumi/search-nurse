
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../globals.css';


export default function TopPage (){

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white flex items-center justify-end p-4 shadow-md">
        <nav className="flex space-x-4">
          <a href="/search" 
          className="text-xl font-medium text-pastelPink hover:text-blue-600 hover:underline transition-all duration-300 ease-in-out transform hover:scale-105"
          >検索
          </a>
          <a href="/help" 
          className="text-xl font-medium text-pastelPink hover:text-blue-600 hover:underline transition-all duration-300 ease-in-out transform hover:scale-105"
          >ヘルプ
          </a>
        </nav>
      </header>
        
      <div className="flex-grow bg-cover bg-center opacity-60" 
        style={{ 
          backgroundImage: 'url("/image/peace.jpeg")',
          height: '400px', 
          width: '100%',
        }}>
      </div>

      <div className="text-center p-6 bg-white">
        <h1 className="text-6xl font-bold text-pastelPink leading-tight">Nurse Searchへようこそ</h1>
        <p className="text-Neutral text-[1.8rem] mt-2">
          スキルを高め、相乗効果を発揮できる最適なパートナーを見つけましょう。ここから始めましょう！
        </p>
      </div>

      <div className="flex justify-center items-center flex-grow bg-sky-300">
        <div className="text-center p-6">
          <h2 className="text-3xl font-semibold mb-6 text-pastelPink">さあ始めましょう</h2>
          <div className="flex justify-center space-x-8"> {/* Space between buttons */}
            <a 
               href="/signin" 
               className="bg-pastelPink text-white px-6 py-4 rounded-lg shadow-md text-2xl inline-block transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
               登録がまだの方
            </a>
            <a 
               href="/login" 
               className="bg-pastelBlue text-white p-4 rounded-lg shadow-md text-2xl inline-block transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
               登録済みの方
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


